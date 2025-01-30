import React from "react";
import "./style.scss";
import qol from "./rasmlar/qol.jpg";
import logo from "./rasmlar/man2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBars,
  faSun,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import ThemaContext from "../contex/ThemeContex";

export default function BoshSaxifa() {
  const { theme, toggleTheme, Exchange, change } = useContext(ThemaContext);
  return (
    <div class={`mainBox mb-5 ${theme == "dark" ? "" : "rang"}`}>
      {change == false ? (
        <div className={`themeBox`}>
          <button
            id="button"
            className={` text-${theme == "dark" ? "light" : "dark"}`}
            onClick={Exchange}
          >
            {change == true ? (
              <FontAwesomeIcon icon={faSquareXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
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
      <div className="themeBox">
        <div
          className={`mode2 ${theme == "dark" ? "" : "mode_dark2"}`}
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

      {/* theme box */}
      <div class="ImgBox mt-5">
        <img class="rasm" src={logo} alt="Iqboljon" />
        <div class="qol">
          <img class="qoll" src={qol} alt="qol" />
        </div>
      </div>
      <h1
        className={`text-${
          theme == "dark" ? "light" : "dark"
        } fw-bold text-center`}
      >
        {" "}
        Ibrokhimov Xadyatillo{" "}
      </h1>
      <p
        className={`text-${
          theme == "dark" ? "light" : "dark"
        } fs-1 text-center mb-4`}
      >
        {" "}
        Ko'cha bolasi{" "}
      </p>

      <div class="ijtimoiyTarmoqlar">
        <a class="tel" href="https://t.me/atillo0808" target="_blank">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          class="tel"
          href="#"
          // target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          class="tel"
          href="https://www.instagram.com/atillo__0808__/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a class="tel" href="tel:+998979765756">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </div>
  );
}
