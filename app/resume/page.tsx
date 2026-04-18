
export const metadata = {
  title: "Resume",
  description: "Preview my resume",
};



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




  