import { Link, NavLink } from "react-router-dom";
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faBook,
  faBuilding,
  faContactCard,
  faHome,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import BoshSaxifa from "../boshSahifa";
import ThemaContext from "../contex/ThemeContex";
import "./style.scss";

const links = [
  {
    to: "/",
    title: "Home",
    font: faHome,
  },
  {
    to: "Education",
    title: "Education",
    font: faBook,
  },
  {
    to: "Portfolio",
    title: "Portfolio",
    font: faBuilding,
  },
  {
    to: "Contact",
    title: "Contact",
    font: faContactCard,
  },
];

export default function Sidebar() {
  const {
    theme,
    toggleTheme,
    Exchange,
    change,
    // info,
    // BoshSahifa1,
    // OzimHaqimda1,
    // Talim1,
    // Prayektlar1,
  } = useContext(ThemaContext);
  return (
    <div class={`sidebar shadow bg-${theme} ${change == true ? "" : "hide"}`}>
      <div
        class={`content shadow-lg bg-${theme} ${change == true ? "" : "hide"}`}
      >
        {change == true ? (
          <div className={`themeBox2`}>
            <button
              id="button2"
              className={`text-${theme == "dark" ? "light" : "dark"}`}
              onClick={Exchange}
            >
              {change == true ? (
                <FontAwesomeIcon
                  className="iconXmark"
                  icon={faRectangleXmark}
                />
              ) : (
                <FontAwesomeIcon className="iconXmark" icon={faBars} />
              )}
            </button>

            <div
              className={`mode ${theme == "dark" ? "" : "mode_dark"}`}
              onClick={toggleTheme}
            >
              <div className={`btn ${theme == "dark" ? "" : "dark"}`}>
                <div className={`btn_icon_container`}>
                  {theme == "dark" ? (
                    <FontAwesomeIcon className="sun" icon={faSun} />
                  ) : (
                    <FontAwesomeIcon className="moon" icon={faMoon} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* theme qismi tugadi */}
        <h1
          className={`text-${
            theme == "dark" ? "light" : "dark"
          } mt-5 ps-5 pt-5`}
        >
          Xadyatillo
        </h1>

        {/* sarlovha qismim tugadi */}

        <ul className={`text-${theme == "dark" ? "light" : "dark"} mt-5`}>
          {links.map((item) => {
            return (
              <>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <li
                    className={`text-${
                      theme == "dark" ? "light" : "dark"
                    } fs-5`}
                  >
                    <FontAwesomeIcon icon={item.font} /> {item.title}
                  </li>
                </NavLink>
                <p></p>
              </>
            );
          })}
        </ul>

        {/* barchasi tugadi */}
      </div>
    </div>
  );
}
