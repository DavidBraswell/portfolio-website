
import { Document, Page, pdfjs } from "react-pdf";
export const metadata = {
  title: "Resume",
  description: "Preview my resume",
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeViewer() {
  return (
    <section>
      <div>
      <iframe
        src="/DavidBraswellResume.pdf#toolbar=0&navpanes=0&scrollbar=0"
        width="100%"
        height="800px"
        style={{ border: "none" }}
        />
    </div>
    </section>
  );
}




  