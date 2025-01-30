import React from "react";
import "./prayekt.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemaContext from "../contex/ThemeContex";
// import styledImg from "./reactImg/styledComponenta.jpg";
// import ThemaContextimg from "./reactImg/Themecontex.jpg";
// import whatsapp from "./reactImg/whatsApp.jpg";
// import olcha from "./reactImg/olcha.jpg";
// import korinish from "./reactImg/korinish.jpg";
// import portfolio from "./reactImg/portfolio.jpg";
// import krasofka from "./reactImg/qrasofka.jpg";
// import express24 from "./reactImg/express24.jpg";
// import backend from "./reactImg/backend.jpg";
// import maktab from "./reactImg/maktab.jpg";
// import video from "./reactImg/video.jpg";
// import kalkulyator from "./reactImg/kalkulyator.jpg";
// import pomodoro from "./reactImg/pomodoro.jpg";

import ish from "../boshSahifa/rasmlar/ish1.jpg";
import ish2 from "../boshSahifa/rasmlar/ish2.jpg";
import ish3 from "../boshSahifa/rasmlar/ish3.jpg";

export default function Prayektlar() {
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

  const cards = [
    {
      imgLink: ish2,
      title: "O'zbekistondan ko'ra chetka muhabbati kuchliroq",
      link: "https://portfolio-iqboljon.netlify.app/",
    },
    {
      imgLink: ish,
      title:
        "qiladigon ishi odatda sayohat kabi O'zbekistonda qolishni hohlamaydigon yagona mavjudot",
      link: "https://shop001.netlify.app/",
    },
    {
      imgLink: ish3,
      title: "davlat amaldorlari chiqargan qonundan noligani noligan",
      link: "https://express24-iqboljon.netlify.app/",
    },
    // {
    //   imgLink: backend,
    //   title:
    //     "Libraries used in the project: JavaScript, Sass, Bootstrap, Font Awesome, REST API Methods: GET, POST, PUT, DELETE",
    //   link: "https://js-loyha-5.netlify.app/",
    // },
    // {
    //   imgLink: olcha,
    //   title:
    //     "Libraries used in the project: React, CSS, Bootstrap, ThemaContext, UseState",
    //   link: "https://olchaloyha.netlify.app/",
    // },
    // {
    //   imgLink: maktab,
    //   title: "Libraries used in the project: JavaScript, Sass, Bootstrap",
    //   link: "https://js-loyha1.netlify.app/",
    // },
    // {
    //   imgLink: video,
    //   title: "Libraries used in the project: JavaScript, Sass",
    //   link: "https://js-loyha2.netlify.app/",
    // },
    // {
    //   imgLink: ThemaContextimg,
    //   title:
    //     "Libraries used in the project: React, Sass, Bootstrap, React Bootstrap, Font Awesome, ThemaContext, useState",
    //   link: "https://reactbootstraployha.netlify.app/#memes",
    // },
    // {
    //   imgLink: kalkulyator,
    //   title: "Libraries used in the project: JavaScript, Sass",
    //   link: "https://js-loyha3.netlify.app/",
    // },
    // {
    //   imgLink: styledImg,
    //   title:
    //     "Libraries used in the project: React, Bootstrap, React Bootstrap, Font Awesome, Styled-Components",
    //   link: "https://styledcomponentsloyha.netlify.app/",
    // },
    // {
    //   imgLink: pomodoro,
    //   title:
    //     "Libraries used in the project: HTML, Sass, JavaScript, setInterval, LocalStorage",
    //   link: "https://pomodoro-loyha.netlify.app/",
    // },
    // {
    //   imgLink: whatsapp,
    //   title:
    //     "Libraries used in the project: React, Sass, Bootstrap, Font Awesome, ThemaContext, useState",
    //   link: "https://whatsapployha.netlify.app/",
    // },
    // {
    //   imgLink: korinish,
    //   title: "Libraries used in the project: React, css",
    //   link: "https://reactkorinish.netlify.app/",
    // },
  ];

  return (
    <div class={`prayektBox ${theme == "dark" ? "" : "rang"}`}>
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

      {/* theme qism tugadi */}

      <div className="loyhaMainBox mt-5">
        <h1
          className={`text-center text-${theme == "dark" ? "light" : "dark"}`}
        >
          Portfolio
        </h1>
        <div className="loyha-box">
          <div className="row">
            {cards.map((v) => (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 p-3">
                <div className={`portfolioBox shadow rounded p-3 bg-${theme}`}>
                  <img src={`${v.imgLink}`} alt="" />
                  <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
                    {v.title}
                  </p>

                  <a href={`${v.link}`} target="_blank">
                    <button className={`p-1 rounded loyhalink`}>
                      Portfolio link
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
