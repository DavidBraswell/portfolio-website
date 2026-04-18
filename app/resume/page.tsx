import { EXPERIENCE } from "app/assets/experience";
import { PROJECTS } from "app/assets/projects";
import WorkItem from "app/components/work-item";

export const metadata = {
  title: "Resume",
  description: "Preview my resume",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Resume
      </h1>
      <iframe src="../public/DavidBraswellResume.pdf">
      </iframe>
    </section>
  );
}




  