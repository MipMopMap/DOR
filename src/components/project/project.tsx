import React, { FC, useState, useRef, useEffect } from "react";
import "./project.css";

interface ProjectInt {
  project: {
    id: string;
    title: string;
    desc: string;
    imgs: string[];
    link?: string;
  };
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Project: FC<ProjectInt> = ({ project, setLocation }) => {
  const [openImage, setOpenImage] = useState("");
  const [animateOut, setAnimateOut] = useState(false);

  const closeModal = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setOpenImage("");
      setAnimateOut(false);
    }, 500);
  };

  const myRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [visibleElem, setVisibleElem] = useState<boolean>();

  useEffect(() => {
    const options = {
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.25,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisibleElem(entry.isIntersecting);
      if (visibleElem) {
        setLocation(project.title);
      }
    }, options);
    observer.observe(myRef.current);
  }, [visibleElem, setLocation, project.title]);

  return (
    <div className="project-wrapper" ref={myRef} id={project.id}>
      {openImage ? (
        <div
          className={`black-background opacity ${
            animateOut ? "out-opacity" : null
          }`}
          onClick={closeModal}
        >
          <img
            src={openImage}
            alt=""
            className="open-image container slide-in-top"
          />
        </div>
      ) : null}
      <div className="project-wrapper-inner container">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            <h1 data-text={project.title}>{project.title}</h1>
          </a>
        ) : (
          <h1>{project.title}</h1>
        )}

        <p>{project.desc}</p>
        <div className="project-demo">
          {project.imgs.map((img, i) => (
            <img
              src={img}
              key={i}
              alt="Demonstration"
              onClick={() => {
                setOpenImage(img);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
