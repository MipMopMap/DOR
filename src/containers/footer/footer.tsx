import React, { FC } from "react";
import "./footer.css";
import dor from "../../assets/dor.webp";
import CV from "../../assets/Dor_Tagger_CV.pdf";

interface FooterInt {}

const Footer: FC<FooterInt> = () => {
  const logo = "<D/>";

  return (
    <div className="footer-wrapper container">
      <div className="line" />
      <div className="footer-inner">
        <div className="footer-left">
          <div className="logo-wrapper">
            <p className="logo">{logo}</p>
            <p className="nav-text">Get in touch</p>
          </div>
          <div className="footer-paragraph">
            <p>If you like my work or you'd just like to talk more...</p>
            <div className="footer-img-frame">
              <img src={dor} alt="" />
            </div>
          </div>
          <a
            href="mailto:taggerdo@gmail.com"
            className="email-button"
            target="_blank"
            rel="noreferrer"
          >
            Send me an email! :)
          </a>
        </div>
        <div className="footer-right">
          <div className="footer-nav">
            <a href="#LI-2">Projects</a>
            <a href="#LI-6">About/Contact</a>
            <a href={CV} download>
              CV
            </a>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/dor.tagger.1"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dor-tagger-25855a19b/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:taggerdo@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="29px"
                height="29px"
              >
                <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
