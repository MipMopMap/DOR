import React, { FC } from "react";
import "./projects.css";
import { Project } from "../../components";
import werlive1 from "../../assets/werlive1.webp";
import werlive2 from "../../assets/werlive2.webp";
import werlive3 from "../../assets/werlive3.webp";
import kc1 from "../../assets/kc1.webp";
import kc2 from "../../assets/kc2.webp";
import kc3 from "../../assets/kc3.webp";
import hs1 from "../../assets/HS1.svg";
import hs2 from "../../assets/HS2.svg";
import hs3 from "../../assets/HS3.svg";
import MC1 from "../../assets/MC1.svg";
import MC2 from "../../assets/MC2.svg";
import MC3 from "../../assets/MC3.svg";

interface ProjectsInt {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const PROJECTS_DATA = [
  {
    id: "LI-2",
    title: "WeRlive",
    desc: "WeRlive provides technology-based products, services, and solutions.",
    imgs: [werlive1, werlive2, werlive3],
    link: "https://werlive.co.il/",
  },

  {
    id: "LI-3",
    title: "KCFLuidArt",
    desc: "KCFLuidArt - acrylic pouring artist and business page",
    imgs: [kc1, kc2, kc3],
    link: "https://catherineconlon.com/",
  },

  {
    id: "LI-4",
    title: "Hush",
    desc: "Up and coming app - Censored for confidentiality",
    imgs: [hs1, hs2, hs3],
  },

  {
    id: "LI-5",
    title: "Mechaamem",
    desc: "Up and coming app for when you're bored",
    imgs: [MC1, MC2, MC3],
  },
];

const Projects: FC<ProjectsInt> = ({ setLocation }) => {
  return (
    <div className="projects-wrapper">
      {PROJECTS_DATA.map((project, i) => (
        <Project project={project} key={i} setLocation={setLocation} />
      ))}
    </div>
  );
};

export default Projects;
