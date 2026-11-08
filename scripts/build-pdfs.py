"""Maqueta los expedientes en memoria. Lo invoca build-pdfs.mjs para guardar los archivos."""
import base64
import io
import json
import re
import sys
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, Image
from PIL import Image as PILImage

ROOT = Path(__file__).resolve().parents[1]
RED = colors.HexColor('#aa2434')
INK = colors.HexColor('#202026')
MUTED = colors.HexColor('#55555f')
PAGE_W, PAGE_H = A4
WIDTH = PAGE_W - 104
clean = lambda text: str(text)
FONT = 'Helvetica'
BOLD = 'Helvetica-Bold'
font_dir = Path('C:/Windows/Fonts')
if (font_dir / 'arial.ttf').exists():
 pdfmetrics.registerFont(TTFont('Archivo', str(font_dir / 'arial.ttf')))
 pdfmetrics.registerFont(TTFont('ArchivoBold', str(font_dir / 'arialbd.ttf')))
 FONT, BOLD = 'Archivo', 'ArchivoBold'

styles = {
 'title': ParagraphStyle('title',fontName='Helvetica-Bold',fontSize=25,leading=29,textColor=INK,spaceAfter=9),
 'alias': ParagraphStyle('alias',fontName='Helvetica-Bold',fontSize=12,leading=17,textColor=RED,spaceAfter=9),
 'meta': ParagraphStyle('meta',fontName='Helvetica',fontSize=9,leading=14,textColor=MUTED,spaceAfter=6),
 'summary': ParagraphStyle('summary',fontName='Helvetica',fontSize=11,leading=16,textColor=INK,spaceAfter=14),
 'section': ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=12,leading=16,textColor=RED,spaceBefore=12,spaceAfter=7),
 'body': ParagraphStyle('body',fontName='Helvetica',fontSize=10,leading=14.3,textColor=INK,spaceAfter=7),
 'small': ParagraphStyle('small',fontName='Helvetica',fontSize=8.5,leading=13,textColor=MUTED,spaceAfter=8),
 'date': ParagraphStyle('date',fontName='Helvetica-Bold',fontSize=9,leading=14,textColor=RED),
}
for style in styles.values():
 style.fontName = BOLD if 'Bold' in style.fontName else FONT

def p(text, style='body'):
 return Paragraph(escape(clean(text)), styles[style])

def page(canvas, doc):
 canvas.saveState()
 canvas.setStrokeColor(RED)
 canvas.setLineWidth(1.2)
 canvas.line(52, PAGE_H-36, PAGE_W-52, PAGE_H-36)
 canvas.setFont('Helvetica-Bold',8)
 canvas.setFillColor(MUTED)
 canvas.drawString(52,PAGE_H-28,'AC / ARCHIVO CRIMINOLÓGICO')
 canvas.setFont('Helvetica',7.5)
 canvas.drawRightString(PAGE_W-52,PAGE_H-28,'EXPEDIENTE DE ESTUDIO')
 canvas.setStrokeColor(colors.HexColor('#d5d5db'))
 canvas.setLineWidth(.5)
 canvas.line(52,43,PAGE_W-52,43)
 canvas.setFont('Helvetica',7)
 canvas.drawString(52,30,'Martí Gadea y Sergio Pastor · Perfil e Informe Criminológico')
 canvas.drawRightString(PAGE_W-52,30,str(doc.page))
 canvas.restoreState()

def build(case, detail, sections):
 buffer=io.BytesIO()
 doc=SimpleDocTemplate(buffer,pagesize=A4,rightMargin=52,leftMargin=52,topMargin=54,bottomMargin=54,title=case['name']+' — Archivo Criminológico',author='Martí Gadea y Sergio Pastor',pageCompression=1)
 left=[p(case['name'],'title')]
 if case['alias']:
  left.append(p(case['alias'],'alias'))
 for fact in case['facts']:
  left.append(p(fact['label']+': '+fact['value'].replace('–','-'),'meta'))
 photo_path=ROOT / case['image']
 picture=PILImage.open(photo_path).convert('RGBA')
 picture.thumbnail((264,366),PILImage.Resampling.LANCZOS)
 white=PILImage.new('RGB',picture.size,'white')
 white.paste(picture,mask=picture.getchannel('A'))
 photo_bytes=io.BytesIO()
 white.save(photo_bytes,format='JPEG',quality=90,optimize=True)
 photo_bytes.seek(0)
 iw,ih=picture.size
 scale=min(88/iw,122/ih)
 photo=Image(photo_bytes,width=iw*scale,height=ih*scale)
 header=Table([[left,photo]],colWidths=[WIDTH-105,105],hAlign='LEFT')
 header.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),8),('ALIGN',(1,0),(1,0),'RIGHT')]))
 story=[header,Spacer(1,9)]
 for index,(key,label,*_) in enumerate(sections,1):
  heading=p(f'{index:02d} / {label}','section')
  paragraphs=[p(text) for text in detail[key]]
  story.append(KeepTogether([heading,paragraphs[0]]))
  story.extend(KeepTogether([paragraph]) for paragraph in paragraphs[1:])
 doc.build(story,onFirstPage=page,onLaterPages=page)
 payload=buffer.getvalue()
 return {'case':case['id'],'file':'expediente-'+case['id']+'.pdf','bytes':len(payload),'base64':base64.b64encode(payload).decode('ascii')}

if __name__ == '__main__':
 sys.stdin.reconfigure(encoding='utf-8-sig')
 sys.stdout.reconfigure(encoding='utf-8')
 data=json.load(sys.stdin)
 result=[build(c,data['details'][c['id']],data['sections']) for c in data['cases']]
 print(json.dumps(result,ensure_ascii=False))
