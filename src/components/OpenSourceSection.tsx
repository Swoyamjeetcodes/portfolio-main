import { Showcase } from "gh-showcase";
import "gh-showcase/style.css";

const OpenSourceSection = () => {
  return (
    <section id="open-source" className="py-11 px-6">
      <div className="max-w-[38rem] mx-auto open-source-wrap">
        <Showcase username="Swoyamjeetcodes" />
      </div>
    </section>
  );
};

export default OpenSourceSection;
