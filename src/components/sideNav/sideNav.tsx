import React, { FC } from "react";
import "./sideNav.css";

interface SideNavInt {
  location: string;
}

const SideNav: FC<SideNavInt> = ({ location }) => {
  const values = [
    { name: "Hero", link: "#LI-1" },
    { name: "WeRlive", link: "#LI-2" },
    { name: "KCFLuidArt", link: "#LI-3" },
    { name: "Hush", link: "#LI-4" },
    { name: "Mechaamem", link: "#LI-5" },
    { name: "About", link: "#LI-6" },
  ];

  return (
    <div className="sideNav-wrapper">
      <ul>
        {values.map((value, index) => (
          <li
            className={`${location === value.name ? "active-jump" : null}`}
            key={index}
          >
            {" "}
            <a href={value.link} aria-label="Side-Nav">
              {" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
