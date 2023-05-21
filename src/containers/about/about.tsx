import React, { FC, useRef, useState, useEffect } from "react";
import "./about.css";
import CV from "../../assets/Dor_Tagger_CV.pdf";
import dor from "../../assets/dor.webp";

interface AboutInt {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const About: FC<AboutInt> = ({ setLocation }) => {
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
        setLocation("About");
      }
    }, options);
    observer.observe(myRef.current);
  }, [visibleElem, setLocation]);

  return (
    <div className="about-wrapper" ref={myRef} id="LI-6">
      <div className="about-inner-wrapper container">
        <div className="about-side">
          <h1>Hey 👋</h1>
          <p>
            I'm a frontend engineer, I'm passionate about designing and
            developing web and mobile applications that deliver seamless user
            experiences.
          </p>
          <p>
            I leverage my skills in JavaScript and React to create dynamic and
            interactive interfaces that enable users to interact with the
            application effortlessly.
          </p>

          <p>
            My favorite project that I have done/am working on is Mechaamem its
            a new way of meeting new people and hanging out together I can't
            show or say much about it ;) and my other favorite project is{" "}
            <a href="https://werlive.co.il" target="_blank" rel="noreferrer">
              WeRlive
            </a>{" "}
            and the part I like the most is the ventures cards showcase I think
            it really captures the attention of the user :)
          </p>
          <p>
            I'm always learning and keeping up-to-date with the latest trends
            and technologies in the frontend development field, in addition, I'm
            an excellentv self-learner. I constantly seek out opportunities to
            expand my knowledge and skills in frontend development.
          </p>
        </div>
        <div className="contact-side">
          <h1>Contact</h1>
          <p>
            We can talk on{" "}
            <a
              href="https://www.facebook.com/dor.tagger.1"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            .
            <br />
            Check me out on{" "}
            <a
              href="https://www.linkedin.com/in/dor-tagger-25855a19b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="https://github.com/MipMopMap"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            , {""}
            or get my{" "}
            <a href={CV} download>
              CV
            </a>
            .
          </p>
          <div className="contact-img">
            <img src={dor} alt="" />
          </div>
          <p>If you like my work or you'd just like to talk more...</p>
          <a
            href="mailto:taggerdo@gmail.com"
            className="email-button"
            target="_blank"
            rel="noreferrer"
          >
            Send me an email! :)
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
