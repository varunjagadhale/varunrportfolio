const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  
  const imgPath1 = 'C:/Users/NBT/.gemini/antigravity-ide/brain/057d4b1b-5e6c-4a4e-920c-de7eaa73abbb/media__1781515798396.png';
  const imgPath2 = 'C:/Users/NBT/.gemini/antigravity-ide/brain/057d4b1b-5e6c-4a4e-920c-de7eaa73abbb/media__1781515936717.png';
  
  const imgBytes1 = fs.readFileSync(imgPath1);
  const imgBytes2 = fs.readFileSync(imgPath2);
  
  // Embed the PNG images
  const pngImage1 = await pdfDoc.embedPng(imgBytes1);
  const pngImage2 = await pdfDoc.embedPng(imgBytes2);
  
  // Scale factor (1 to keep full original quality)
  const dims1 = pngImage1.scale(1);
  const dims2 = pngImage2.scale(1);
  
  // Create first page matching image dimensions
  const page1 = pdfDoc.addPage([dims1.width, dims1.height]);
  page1.drawImage(pngImage1, {
    x: 0,
    y: 0,
    width: dims1.width,
    height: dims1.height,
  });
  
  // Create second page matching image dimensions
  const page2 = pdfDoc.addPage([dims2.width, dims2.height]);
  page2.drawImage(pngImage2, {
    x: 0,
    y: 0,
    width: dims2.width,
    height: dims2.height,
  });
  
  // Serialize the PDFDocument to bytes
  const pdfBytes = await pdfDoc.save();
  
  // Save the PDF into the public folder
  const outputPath = 'C:/Users/NBT/Desktop/vp/public/Varun_R_Resume.pdf';
  fs.writeFileSync(outputPath, pdfBytes);
  
  console.log('PDF generated successfully at:', outputPath);
}

createPdf().catch(console.error);
