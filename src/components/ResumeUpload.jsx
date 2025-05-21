/*import React from 'react';

function ResumeUpload({ onUpload }) {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = async () => {
        const pdfText = await extractTextFromPDF(reader.result);
        onUpload(pdfText);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const extractTextFromPDF = async (pdfData) => {
    const pdfjsLib = await import('pdfjs-dist');
    const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    const pdf = await loadingTask.promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(item => item.str).join(' ') + '\n';
    }
    return text;
  };

  return (
    <div>
      <label>Upload Resume (PDF): </label>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
}

export default ResumeUpload; */
import React from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

// SET the workerSrc globally
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ResumeUpload({ onUpload }) {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = async () => {
        const pdfText = await extractTextFromPDF(reader.result);
        onUpload(pdfText);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const extractTextFromPDF = async (pdfData) => {
    const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    const pdf = await loadingTask.promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(item => item.str).join(' ') + '\\n';
    }
    return text;
  };

  return (
    <div>
      <label>Upload Resume (PDF): </label>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
}

export default ResumeUpload;

