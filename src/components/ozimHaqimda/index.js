import React from "react";
import "./ozim.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemaContext from "../contex/ThemeContex";
// import qol from "./rasmlar/qol.jpg";

export default function OzimHaqimda() {
  const { theme, toggleTheme, Exchange, change } = useContext(ThemaContext);

  return (
    <div class={`ozimHaqimdaBox mb-5 p-2 ${theme == "dark" ? "" : "rang"}`}>
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

      {/* theme box yani tun kun rejimi tugadi */}
      <div className="sarlovha mb-4 mt-5">
        <h1
          className={`tex-sarlovha text-${
            theme == "dark" ? "light" : "dark"
          } text-center`}
        >
          Men bilan bog'lanish
        </h1>
      </div>
      {/* sarlovha tugadi va manzil qiisim boshlandi */}

      <div className="contact-box d-flex justify-content-between">
        <div className="contactInfo">
          <h4 className={`text-${theme == "dark" ? "light" : "dark"} mb-1`}>
            Aloqa qiling
          </h4>
          <p className={`text-${theme == "dark" ? "light" : "dark"} mb-3 pe-5`}>
            Bu erda siz aloqa ma'lumotlarini topishingiz mumkin, agar meni
            kompaniyangizga mos deb bilsangiz, men bilan bog'laning va menga
            qo'limdan kelganini qilishga ruxsat bering!
          </p>
          <span
            className={`text-${theme == "dark" ? "light" : "dark"} fw-bold`}
          >
            Name
          </span>
          <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
            Ibrohimov Xadyatillo
          </p>
          <br />
          <span
            className={`text-${theme == "dark" ? "light" : "dark"} fw-bold`}
          >
            Address
          </span>
          <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
            Andijon, Uzbekistan
          </p>
          <br />
          <span
            className={`text-${theme == "dark" ? "light" : "dark"} fw-bold`}
          >
            Email
          </span>
          <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
            <a href="#">xadyatilloibrohimov0808@gmail.com</a>
          </p>
          <br />
          <span
            className={`text-${theme == "dark" ? "light" : "dark"} fw-bold`}
          >
            Instagram
          </span>
          <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
            <a href="https://www.instagram.com/atillo__0808__/" target="_blank">
              Instagram
            </a>
          </p>
        </div>
        <div className="input-box">
          <h3
            className={`text-${
              theme == "dark" ? "light" : "dark"
            } fw-bold mb-3`}
          >
            Message me
          </h3>
          <div className="fullname-box mb-3">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone" />
          </div>
          <textarea
            name="text"
            id=""
            placeholder="Message"
            className="malumotInput rounded mb-5"
          ></textarea>
          <button className="rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}
