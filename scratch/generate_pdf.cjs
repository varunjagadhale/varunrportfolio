const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  
  const imgPath1 = 'C:/Users/NBT/.gemini/antigravity-ide/brain/057d4b1b-5e6c-4a4e-920c-de7eaa73abbb/media__1781515798396.png';
  const imgPath2 = 'C:/Users/NBT/.gemini/antigravity-ide/brain/057d4b1b-5e6c-4a4e-920c-de7eaa73abbb/media__1781515936717.png';
  
  const imgBytes1 = fs.readFileSync(imgPath1);
  const imgBytes2 = fs.readFileSync(imgPath2);
  
  // Embed the PNG images (lossless embedding)
  const pngImage1 = await pdfDoc.embedPng(imgBytes1);
  const pngImage2 = await pdfDoc.embedPng(imgBytes2);
  
  // Standard A4 Page Dimensions in points (1/72 inch)
  const PAGE_WIDTH = 595;
  const PAGE_HEIGHT = 842;
  
  // Create first page matching A4 size
  const page1 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  page1.drawImage(pngImage1, {
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  });
  
  // Create second page matching A4 size
  const page2 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  page2.drawImage(pngImage2, {
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  });
  
  // Serialize the PDFDocument to bytes
  const pdfBytes = await pdfDoc.save();
  
  // Save the PDF into the public folder
  const outputPath = 'C:/Users/NBT/Desktop/vp/public/VarunR_2026.pdf';
  fs.writeFileSync(outputPath, pdfBytes);
  
  console.log('High-DPI A4 PDF generated successfully at:', outputPath);
}

createPdf().catch(console.error);
