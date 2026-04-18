"use client";
import { Document, Page, pdfjs } from "react-pdf";
export const metadata = {
  title: "Resume",
  description: "Preview my resume",
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeViewer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Document file="/DavidBraswellResume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}




  