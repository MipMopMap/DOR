import React, { FC, useState, useEffect, useRef } from "react";
import "./hero.css";
import dor from "../../assets/dor.webp";

interface HeroInt {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Hero: FC<HeroInt> = ({ setLocation }) => {
  const [offsetY, setOffsetY] = useState<number>(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const myRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [visibleElem, setVisibleElem] = useState<boolean>();

  useEffect(() => {
    const options = {
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.4,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisibleElem(entry.isIntersecting);
      if (visibleElem) {
        setLocation("Hero");
      }
    }, options);
    observer.observe(myRef.current);
  }, [visibleElem, setLocation]);

  return (
    <div
      className="hero-wrapper-outer"
      style={
        {
          "--paralax-transform": `translateY(${offsetY * 0.1}px)`,
        } as React.CSSProperties
      }
      ref={myRef}
    >
      <div className="hero-wrapper container">
        <div
          className="hero-text-wrapper"
          style={
            {
              "--paralaxtransform": `translateY(${offsetY * 0.2}px)`,
            } as React.CSSProperties
          }
        >
          <h1 className="main-title">Hi, I'm Dor</h1>
          <p className="main-subtitle">
            I create dynamic and intuitive digital experiences for web users.
          </p>
        </div>
        <div className="hero-img">
          <img src={dor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
