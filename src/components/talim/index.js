import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemaContext from "../contex/ThemeContex";
import "./talim.scss";
import InfoImg from "../boshSahifa/rasmlar/man.jpg";

export default function Talim() {
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
          {/* <button id="buttonSun" className={` text-${theme == "dark" ? "" : "dark"}`} onClick={toggleTheme}>
            {theme == "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button> */}
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

      {/* thema tugadi */}
      <div className="sarlovha mt-5 mb-4">
        <h1
          className={`text-${theme == "dark" ? "light" : "dark"} text-center`}
        >
          Talim Olganligi
        </h1>
      </div>
      {/* sarlovha tugadi va manzil qiisim boshlandi */}
      <div className={`InfoBox bg-${theme} rounded shadow-lg p-5 mt-3`}>
        <div className="befor-box m-2 pt-2 pb-2">
          <div className="befor"></div>
          <div className="befor"></div>
          <div className="befor"></div>
        </div>
        <div className={`info1 rounded bg-${theme}`}>
          <div className="img-box p-2">
            <img
              style={{ height: "200px" }}
              className="rounded"
              src={InfoImg}
              alt="dars"
            />
          </div>
          <div className="text-box">
            <p className={`text-${theme == "dark" ? "light" : "dark"} p-3`}>
              Avvaliga yaxshi bola bolgan keyin 21-DIMIda o'qigan men bilan{" "}
              <br />
              Uyerni bitirgan aduga tushkan, adashmasam o'sha paytlar ham yaxshi
              edi <br />
              Keyin birdaniga yevropaga bordiyu aynidi. Bir qiz topib olgan{" "}
              <br />
              Aytishlaricha u qizga borini ham berishga tayyor bizni eslab
              telefon qilmasa qilmaydiki lekin anavi qizini esidan chiqarmaydi{" "}
              <br />
              Qisqa qilib aytkanda telba bir Oshiq bo'lib qolgan desa ham
              bo'ladi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
