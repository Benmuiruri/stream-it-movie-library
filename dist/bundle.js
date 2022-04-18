/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Global Styles */\n:root {\n  --primary-green: #6ac045;\n  --background-grey: #1d1d1d;\n  --text-grey: #919191;\n  --header-font: 'Poppins', sans-serif;\n  --body-font: 'Raleway', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: var(--body-font);\n  background-color: #1d1d1d;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n}\n\n/* Header Styles */\n\n.header {\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 5rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #000;\n  color: #919191;\n}\n\n.logo-img {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n}\n\n.nav-ul {\n  display: flex;\n}\n\n.nav-ul li {\n  list-style: none;\n  margin-right: 65px;\n  padding: 1.1em 0;\n}\n\n.nav-ul li a {\n  color: #919191;\n  font-size: 1.2rem;\n  font-family: var(--header-font);\n}\n\n.header-link {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  font-family: var(--header-font);\n  font-size: 2.5em;\n  font-weight: bold;\n}\n\n.header-link span {\n  color: var(--primary-green);\n  font-size: 1em;\n}\n\n.search {\n  width: 100%;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: var(--primary-green);\n}\n\n.search:focus {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid var(--primary-green);\n  color: #fff;\n}\n\n.title {\n  border: 2px solid black;\n  border-radius: 50%;\n}\n\n/* Call out styles */\n\n.callout {\n  padding-top: 1.2em;\n}\n\n.callout-content {\n  margin: 0 auto;\n  width: 55%;\n  color: #fff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 2em;\n  margin-bottom: 2em;\n}\n\n.callout-header {\n  text-align: center;\n  font-family: var(--header-font);\n  font-size: 2.75em;\n  font-weight: 700;\n  text-shadow: 0 2px 2px rgb(0 0 0 / 40%);\n  margin: 0.5em 0;\n}\n\n.callout-copy {\n  color: #ccc;\n  width: 65%;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.5px;\n  margin-bottom: 1.3em;\n  text-align: center;\n}\n\n.callout-info {\n  font-size: 1em;\n  font-weight: 700;\n  color: var(--primary-green);\n  margin: 0 auto;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n/* Movie section styles */\n\n.movie-section-title {\n  text-align: center;\n  color: #fff;\n  padding-bottom: 1.2em;\n}\n\n.movie-section-title span {\n  font-size: 1.15em;\n  font-weight: 700;\n}\n\n.fa-star {\n  color: var(--primary-green);\n  padding-right: 0.4em;\n}\n\n.movie-list {\n  padding: 1em 0;\n}\n\n.movie-list span {\n  color: var(--primary-green);\n}\n\n.movies {\n  margin: 0 auto;\n  width: 65%;\n  color: #fff;\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-gap: 20px 20px;\n  grid-auto-flow: row;\n}\n\n/* Movie Wrapper overlay styles */\n.movie-image-div {\n  position: relative;\n  border: 4px solid #fff;\n}\n\n.movie-image-div:hover {\n  border: 4px solid var(--primary-green);\n}\n\n.details-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-family: var(--body-font);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.35s;\n}\n\n.details-overlay > * {\n  transform: translateY(20px);\n  transition: transform 0.35s;\n}\n\n.details-overlay:hover {\n  opacity: 1;\n}\n\n.details-overlay:hover > * {\n  transform: translateY(0);\n}\n\n.movie-image {\n  display: block;\n  width: 100%;\n}\n\n.overlay-star {\n  padding-bottom: 0.2em;\n}\n\n.movie-overlay-rating {\n  padding-bottom: 1.1em;\n  font-size: 1.7em;\n  font-weight: bold;\n}\n\n.movie-overlay-genre {\n  padding-bottom: 1.1em;\n  font-size: 2.3em;\n  font-weight: bold;\n}\n\n.ovelay-details-btn {\n  color: #fff;\n  padding: 0.5em 1.3em;\n  background: var(--primary-green);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n/* Movie Wrapper styles */\n.movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 0.8em;\n}\n\n.movie-title {\n  padding: 0.5em 0;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1em;\n  align-items: center;\n}\n\n.fa-heart:hover {\n  color: var(--primary-green);\n}\n\n.movie-likes {\n  padding-left: 0.5em;\n}\n\n.commentBtn {\n  color: #fff;\n  padding: 0.5em;\n  background: #36b37f;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  box-shadow: 0 8px 16px #36b37f3d;\n}\n\n.commentBtn:active {\n  background: #2f470a;\n  transform: translateY(2px);\n}\n\n/* Movie Modal styles */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(32, 32, 32, 0.95);\n  cursor: pointer;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.35s ease-in;\n}\n\n.modal.is-visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-dialog {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  flex-basis: 60%;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: 3rem;\n  width: 55vw;\n  height: 95%;\n  border-radius: 5px;\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\n  overflow: auto;\n  cursor: default;\n  margin: 5em;\n  padding: 3em;\n}\n\n/* PopUp styles */\n.popUp-button {\n  width: 40%;\n  margin: 1rem;\n  background-color: var(--primary-green);\n  border: 2px solid #4b962b;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #fff;\n  font-family: inherit;\n}\n\n.popUp-button:hover {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid var(--primary-green);\n  color: #fff;\n}\n\n.movieCard {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.buttonDiv {\n  display: flex;\n  flex-direction: row;\n}\n\n.movieCard-img {\n  width: 100%;\n  border: 4px solid #fff;\n}\n\n.movieContent {\n  width: 40%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.popUp-title {\n  font-size: 3em;\n  padding-bottom: 0.5em;\n}\n\n.popUp-Genre {\n  color: #4b962b;\n  padding-bottom: 0.5em;\n}\n\n.popUp-releaseDate {\n  font-size: 1rem;\n  color: #ffffff81;\n  padding-bottom: 2em;\n}\n\n.popUp-summary {\n  color: #ccc;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.8px;\n  margin-bottom: 1.3em;\n}\n\n.subtitle-button {\n  width: 70%;\n  margin: 1rem 0;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #fff;\n  margin-bottom: 4em;\n}\n\n.readMoreBtn {\n  width: 40%;\n  margin: 1rem 0;\n  background-color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: #414141;\n}\n\n.close-proj-modal {\n  border-radius: 50%;\n  padding: 0.5em;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #555;\n  color: #fff;\n  position: absolute;\n  top: 20px;\n  right: 30px;\n}\n\n.close-proj-modal:hover {\n  border: 2px solid #fff;\n  background-color: #414141;\n  color: #fff;\n}\n\n.close-proj-modal::before {\n  content: ' ';\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  width: 2px;\n  left: 12px;\n  top: 5px;\n  bottom: 5px;\n  transform: rotate(45deg);\n}\n\n.close-proj-modal::after {\n  content: ' ';\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  height: 2px;\n  top: 12px;\n  left: 5px;\n  right: 5px;\n  transform: rotate(45deg);\n}\n\n/* Modal comments styles */\n.comment-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 3rem;\n  flex-basis: 100%;\n  gap: 2rem;\n  background-color: #1d1d1d;\n}\n\n.comments-count {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: var(--header-font);\n}\n\n.display-comments {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-container {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  background-color: #171717;\n  padding: 1em;\n}\n\n.author-thumbnail {\n  flex: none;\n  margin-right: 12px;\n}\n\n.user-name-link {\n  background-color: #00579c;\n  border-radius: 99px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.8em;\n  padding-top: 10px;\n  text-align: center;\n  text-decoration: none;\n  width: 1.6em;\n}\n\n.user-name-link span {\n  vertical-align: middle;\n}\n\n.user-name {\n  background-color: #2b2b2b;\n}\n\n.comment-main {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n#comment-header {\n  margin-bottom: 2px;\n}\n\n#header-author {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n#author-text {\n  margin-right: 10px;\n  color: #919191;\n  margin-bottom: 2px;\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n#comment-date {\n  color: #606060;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n}\n\n#comment-text {\n  color: #fff;\n  word-wrap: break-word;\n  font-size: 14px;\n  height: 20px;\n  line-height: 1.4rem;\n  font-weight: 400;\n}\n\n.add-comment {\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 300px;\n  width: 100%;\n}\n\n.add-comment h2 {\n  display: block;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.add-comment-header {\n  display: flex;\n  align-items: center;\n}\n\n.fa-message {\n  padding-right: 1em;\n  color: var(--primary-green);\n}\n\n/* Comment form styles */\n.add-comment-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: hidden;\n  background-color: #171717;\n  padding: 2em;\n  border-radius: 10px;\n}\n\ninput,\ntextarea {\n  font-family: var(--header-font);\n  width: 100%;\n  color: #fff;\n  border: 1px solid #1d1d1d;\n  background: #2b2b2b;\n  margin: 0 0 5px;\n  padding: 10px;\n}\n\ntextarea {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n\ninput,\ntextarea:hover {\n  -webkit-transition: border-color 0.3s ease-in-out;\n  -moz-transition: border-color 0.3s ease-in-out;\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid var(--primary-green);\n}\n\n.comment-btn {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: var(--primary-green);\n  color: #fff;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.comment-btn:active {\n  background: #2f470a;\n  transform: translateY(2px);\n}\n\n.comment-btn:hover {\n  background: #43a047;\n  -webkit-transition: background 0.3s ease-in-out;\n  -moz-transition: background 0.3s ease-in-out;\n  transition: background-color 0.3s ease-in-out;\n}\n\n/* Footer Styles */\nfooter {\n  margin-top: auto;\n  background: #000;\n}\n\nfooter p {\n  padding: 2em;\n  text-align: center;\n  font-size: 1.3em;\n  color: #fff;\n}\n\n.footer-link {\n  color: var(--primary-green);\n  font-size: 1.1em;\n}\n\n/* Mobile Styles */\n@media screen and (max-width: 800px) {\n  .movies {\n    display: grid;\n    grid-gap: 20px 20px;\n    grid-template-columns: 100%;\n  }\n\n  #idform {\n    display: none;\n  }\n\n  .buttonDiv {\n    flex-direction: column;\n  }\n\n  .popUp-button {\n    width: auto;\n    font-size: 0.8em;\n  }\n\n  .popUp-title {\n    font-size: 2em;\n  }\n\n  .subtitle-button {\n    width: auto;\n  }\n\n  .movie-overlay-rating {\n    font-size: 1.4em;\n  }\n\n  .popUp-summary {\n    width: auto;\n  }\n\n  .modal-dialog {\n    width: 85vw;\n  }\n\n  .comment-section {\n    flex-direction: column;\n    padding: 0;\n  }\n\n  .readMoreBtn {\n    width: auto;\n  }\n\n  .movieContent {\n    width: auto;\n  }\n\n  .comment-container {\n    flex-direction: column;\n  }\n\n  .display-comments {\n    width: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\n:root {\n  --primary-green: #6ac045;\n  --background-grey: #1d1d1d;\n  --text-grey: #919191;\n  --header-font: 'Poppins', sans-serif;\n  --body-font: 'Raleway', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: var(--body-font);\n  background-color: #1d1d1d;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n}\n\n/* Header Styles */\n\n.header {\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 5rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #000;\n  color: #919191;\n}\n\n.logo-img {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n}\n\n.nav-ul {\n  display: flex;\n}\n\n.nav-ul li {\n  list-style: none;\n  margin-right: 65px;\n  padding: 1.1em 0;\n}\n\n.nav-ul li a {\n  color: #919191;\n  font-size: 1.2rem;\n  font-family: var(--header-font);\n}\n\n.header-link {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  font-family: var(--header-font);\n  font-size: 2.5em;\n  font-weight: bold;\n}\n\n.header-link span {\n  color: var(--primary-green);\n  font-size: 1em;\n}\n\n.search {\n  width: 100%;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: var(--primary-green);\n}\n\n.search:focus {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid var(--primary-green);\n  color: #fff;\n}\n\n.title {\n  border: 2px solid black;\n  border-radius: 50%;\n}\n\n/* Call out styles */\n\n.callout {\n  padding-top: 1.2em;\n}\n\n.callout-content {\n  margin: 0 auto;\n  width: 55%;\n  color: #fff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 2em;\n  margin-bottom: 2em;\n}\n\n.callout-header {\n  text-align: center;\n  font-family: var(--header-font);\n  font-size: 2.75em;\n  font-weight: 700;\n  text-shadow: 0 2px 2px rgb(0 0 0 / 40%);\n  margin: 0.5em 0;\n}\n\n.callout-copy {\n  color: #ccc;\n  width: 65%;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.5px;\n  margin-bottom: 1.3em;\n  text-align: center;\n}\n\n.callout-info {\n  font-size: 1em;\n  font-weight: 700;\n  color: var(--primary-green);\n  margin: 0 auto;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n/* Movie section styles */\n\n.movie-section-title {\n  text-align: center;\n  color: #fff;\n  padding-bottom: 1.2em;\n}\n\n.movie-section-title span {\n  font-size: 1.15em;\n  font-weight: 700;\n}\n\n.fa-star {\n  color: var(--primary-green);\n  padding-right: 0.4em;\n}\n\n.movie-list {\n  padding: 1em 0;\n}\n\n.movie-list span {\n  color: var(--primary-green);\n}\n\n.movies {\n  margin: 0 auto;\n  width: 65%;\n  color: #fff;\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-gap: 20px 20px;\n  grid-auto-flow: row;\n}\n\n/* Movie Wrapper overlay styles */\n.movie-image-div {\n  position: relative;\n  border: 4px solid #fff;\n}\n\n.movie-image-div:hover {\n  border: 4px solid var(--primary-green);\n}\n\n.details-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-family: var(--body-font);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.35s;\n}\n\n.details-overlay > * {\n  transform: translateY(20px);\n  transition: transform 0.35s;\n}\n\n.details-overlay:hover {\n  opacity: 1;\n}\n\n.details-overlay:hover > * {\n  transform: translateY(0);\n}\n\n.movie-image {\n  display: block;\n  width: 100%;\n}\n\n.overlay-star {\n  padding-bottom: 0.2em;\n}\n\n.movie-overlay-rating {\n  padding-bottom: 1.1em;\n  font-size: 1.7em;\n  font-weight: bold;\n}\n\n.movie-overlay-genre {\n  padding-bottom: 1.1em;\n  font-size: 2.3em;\n  font-weight: bold;\n}\n\n.ovelay-details-btn {\n  color: #fff;\n  padding: 0.5em 1.3em;\n  background: var(--primary-green);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n/* Movie Wrapper styles */\n.movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 0.8em;\n}\n\n.movie-title {\n  padding: 0.5em 0;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1em;\n  align-items: center;\n}\n\n.fa-heart:hover {\n  color: var(--primary-green);\n}\n\n.movie-likes {\n  padding-left: 0.5em;\n}\n\n.commentBtn {\n  color: #fff;\n  padding: 0.5em;\n  background: #36b37f;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  box-shadow: 0 8px 16px #36b37f3d;\n}\n\n.commentBtn:active {\n  background: #2f470a;\n  transform: translateY(2px);\n}\n\n/* Movie Modal styles */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(32, 32, 32, 0.95);\n  cursor: pointer;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.35s ease-in;\n}\n\n.modal.is-visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-dialog {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  flex-basis: 60%;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: 3rem;\n  width: 55vw;\n  height: 95%;\n  border-radius: 5px;\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\n  overflow: auto;\n  cursor: default;\n  margin: 5em;\n  padding: 3em;\n}\n\n/* PopUp styles */\n.popUp-button {\n  width: 40%;\n  margin: 1rem;\n  background-color: var(--primary-green);\n  border: 2px solid #4b962b;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #fff;\n  font-family: inherit;\n}\n\n.popUp-button:hover {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid var(--primary-green);\n  color: #fff;\n}\n\n.movieCard {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.buttonDiv {\n  display: flex;\n  flex-direction: row;\n}\n\n.movieCard-img {\n  width: 100%;\n  border: 4px solid #fff;\n}\n\n.movieContent {\n  width: 40%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.popUp-title {\n  font-size: 3em;\n  padding-bottom: 0.5em;\n}\n\n.popUp-Genre {\n  color: #4b962b;\n  padding-bottom: 0.5em;\n}\n\n.popUp-releaseDate {\n  font-size: 1rem;\n  color: #ffffff81;\n  padding-bottom: 2em;\n}\n\n.popUp-summary {\n  color: #ccc;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.8px;\n  margin-bottom: 1.3em;\n}\n\n.subtitle-button {\n  width: 70%;\n  margin: 1rem 0;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #fff;\n  margin-bottom: 4em;\n}\n\n.readMoreBtn {\n  width: 40%;\n  margin: 1rem 0;\n  background-color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: #414141;\n}\n\n.close-proj-modal {\n  border-radius: 50%;\n  padding: 0.5em;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #555;\n  color: #fff;\n  position: absolute;\n  top: 20px;\n  right: 30px;\n}\n\n.close-proj-modal:hover {\n  border: 2px solid #fff;\n  background-color: #414141;\n  color: #fff;\n}\n\n.close-proj-modal::before {\n  content: ' ';\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  width: 2px;\n  left: 12px;\n  top: 5px;\n  bottom: 5px;\n  transform: rotate(45deg);\n}\n\n.close-proj-modal::after {\n  content: ' ';\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  height: 2px;\n  top: 12px;\n  left: 5px;\n  right: 5px;\n  transform: rotate(45deg);\n}\n\n/* Modal comments styles */\n.comment-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 3rem;\n  flex-basis: 100%;\n  gap: 2rem;\n  background-color: #1d1d1d;\n}\n\n.comments-count {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: var(--header-font);\n}\n\n.display-comments {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-container {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  background-color: #171717;\n  padding: 1em;\n}\n\n.author-thumbnail {\n  flex: none;\n  margin-right: 12px;\n}\n\n.user-name-link {\n  background-color: #00579c;\n  border-radius: 99px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.8em;\n  padding-top: 10px;\n  text-align: center;\n  text-decoration: none;\n  width: 1.6em;\n}\n\n.user-name-link span {\n  vertical-align: middle;\n}\n\n.user-name {\n  background-color: #2b2b2b;\n}\n\n.comment-main {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n#comment-header {\n  margin-bottom: 2px;\n}\n\n#header-author {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n#author-text {\n  margin-right: 10px;\n  color: #919191;\n  margin-bottom: 2px;\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n#comment-date {\n  color: #606060;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n}\n\n#comment-text {\n  color: #fff;\n  word-wrap: break-word;\n  font-size: 14px;\n  height: 20px;\n  line-height: 1.4rem;\n  font-weight: 400;\n}\n\n.add-comment {\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 300px;\n  width: 100%;\n}\n\n.add-comment h2 {\n  display: block;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.add-comment-header {\n  display: flex;\n  align-items: center;\n}\n\n.fa-message {\n  padding-right: 1em;\n  color: var(--primary-green);\n}\n\n/* Comment form styles */\n.add-comment-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: hidden;\n  background-color: #171717;\n  padding: 2em;\n  border-radius: 10px;\n}\n\ninput,\ntextarea {\n  font-family: var(--header-font);\n  width: 100%;\n  color: #fff;\n  border: 1px solid #1d1d1d;\n  background: #2b2b2b;\n  margin: 0 0 5px;\n  padding: 10px;\n}\n\ntextarea {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n\ninput,\ntextarea:hover {\n  -webkit-transition: border-color 0.3s ease-in-out;\n  -moz-transition: border-color 0.3s ease-in-out;\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid var(--primary-green);\n}\n\n.comment-btn {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: var(--primary-green);\n  color: #fff;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.comment-btn:active {\n  background: #2f470a;\n  transform: translateY(2px);\n}\n\n.comment-btn:hover {\n  background: #43a047;\n  -webkit-transition: background 0.3s ease-in-out;\n  -moz-transition: background 0.3s ease-in-out;\n  transition: background-color 0.3s ease-in-out;\n}\n\n/* Footer Styles */\nfooter {\n  margin-top: auto;\n  background: #000;\n}\n\nfooter p {\n  padding: 2em;\n  text-align: center;\n  font-size: 1.3em;\n  color: #fff;\n}\n\n.footer-link {\n  color: var(--primary-green);\n  font-size: 1.1em;\n}\n\n/* Mobile Styles */\n@media screen and (max-width: 800px) {\n  .movies {\n    display: grid;\n    grid-gap: 20px 20px;\n    grid-template-columns: 100%;\n  }\n\n  #idform {\n    display: none;\n  }\n\n  .buttonDiv {\n    flex-direction: column;\n  }\n\n  .popUp-button {\n    width: auto;\n    font-size: 0.8em;\n  }\n\n  .popUp-title {\n    font-size: 2em;\n  }\n\n  .subtitle-button {\n    width: auto;\n  }\n\n  .movie-overlay-rating {\n    font-size: 1.4em;\n  }\n\n  .popUp-summary {\n    width: auto;\n  }\n\n  .modal-dialog {\n    width: 85vw;\n  }\n\n  .comment-section {\n    flex-direction: column;\n    padding: 0;\n  }\n\n  .readMoreBtn {\n    width: auto;\n  }\n\n  .movieContent {\n    width: auto;\n  }\n\n  .comment-container {\n    flex-direction: column;\n  }\n\n  .display-comments {\n    width: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/comments-handler.js":
/*!*****************************************!*\
  !*** ./src/modules/comments-handler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
// @ts-ignore
const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'z8ysUFZMtLxIv6OBwEl9';
const endPoint = `${URL}/apps/${appID}/comments/`;

const postComment = async (buttonId, userName, userComment) => {
  const res = await fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({
      item_id: buttonId,
      username: userName.value,
      comment: userComment.value,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return res.text();
};

const getComments = async (id) => {
  const response = await fetch(`${endPoint}?item_id=${id}`);
  return response.json();
};




/***/ }),

/***/ "./src/modules/display-comments.js":
/*!*****************************************!*\
  !*** ./src/modules/display-comments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countComments": () => (/* binding */ countComments),
/* harmony export */   "displayComments": () => (/* binding */ displayComments)
/* harmony export */ });
const displayComments = (commentsDiv, comments) => {
  if (comments.length >= 1) {
    commentsDiv.innerHTML = `<h3 class=comments-count> ${comments.length} Comments</h3>`;
    comments.forEach((comment) => {
      const commentContainer = document.createElement('div');
      commentContainer.className = 'comment-container';
      const userThumbnail = document.createElement('div');
      userThumbnail.className = 'author-thumbnail';
      const thumbnailLink = document.createElement('a');
      thumbnailLink.className = 'user-name-link';
      thumbnailLink.href = '#';
      const thumbnailContent = document.createElement('span');
      thumbnailContent.textContent = 'U';
      thumbnailLink.appendChild(thumbnailContent);
      userThumbnail.appendChild(thumbnailLink);

      const commentMain = document.createElement('div');
      commentMain.className = 'comment-main';
      commentMain.innerHTML = `
       <div id="comment-header">
          <div id="header-author">
             <h3>
              <a href="" id="author-text">
                <span>${comment.username}</span>
              </a>
             </h3>
             <a href="" id="comment-date">
                <span>${comment.creation_date}</span>
             </a>
          </div>
       </div>
       <div id="comment-text">
          <p>${comment.comment}</p>
       </div>
      `;
      commentContainer.append(userThumbnail, commentMain);
      commentsDiv.append(commentContainer);
    });
  }
};

const countComments = (element, comments) => {
  element.textContent = '';
  if (comments.length >= 1) {
    element.textContent = `${comments.length} Comments`;
  } else {
    element.textContent = '0 Comments';
  }
};



/***/ }),

/***/ "./src/modules/display-movies.js":
/*!***************************************!*\
  !*** ./src/modules/display-movies.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likes_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes-handler.js */ "./src/modules/likes-handler.js");


const movieContainer = document.querySelector('.movies');

const displayMovies = (sampleMovies) => {
  sampleMovies.forEach((movie) => {
    const movieWrapper = document.createElement('div');
    movieWrapper.id = `movie_${movie.id}`;
    movieWrapper.className = 'movie-wrapper';

    const movieImgDiv = document.createElement('div');
    movieImgDiv.className = 'movie-image-div';

    const movieImg = document.createElement('img');
    movieImg.src = movie.image.medium;
    movieImg.className = 'movie-image';
    movieImgDiv.appendChild(movieImg);

    const movieImgOverlay = document.createElement('div');
    movieImgOverlay.className = 'details-overlay';
    const ratingStar = document.createElement('i');
    ratingStar.classList.add('fa-solid');
    ratingStar.classList.add('fa-star');
    ratingStar.classList.add('overlay-star');
    const movieRating = document.createElement('span');
    movieRating.className = 'movie-overlay-rating';
    if (movie.rating.average) {
      movieRating.innerHTML = `${movie.rating.average} / 10`;
    } else {
      movieRating.innerHTML = '0 / 10';
    }
    const movieGenre = document.createElement('span');
    movieGenre.className = 'movie-overlay-genre';
    movieGenre.innerHTML = `${movie.genres[0]}`;
    const movieDetailsBtn = document.createElement('button');
    movieDetailsBtn.className = 'ovelay-details-btn';
    movieDetailsBtn.innerHTML = 'View Details';

    movieImgOverlay.append(
      ratingStar,
      movieRating,
      movieGenre,
      movieDetailsBtn,
    );
    movieImgDiv.appendChild(movieImgOverlay);

    movieWrapper.appendChild(movieImgDiv);

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = `${movie.name}`;
    movieTitle.className = 'movie-title';
    movieWrapper.appendChild(movieTitle);

    const likesContainer = document.createElement('div');
    likesContainer.className = 'likes-container';
    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fa-solid');
    likeBtn.classList.add('fa-heart');
    likeBtn.id = `${movieWrapper.id}`;
    likesContainer.appendChild(likeBtn);

    const movieLikes = document.createElement('span');
    movieLikes.className = 'movie-likes';
    movieLikes.textContent = '0 likes';
    likesContainer.appendChild(movieLikes);
    movieWrapper.appendChild(likesContainer);

    const commentBtn = document.createElement('button');
    commentBtn.innerHTML = 'Comment on Movie';
    commentBtn.className = 'commentBtn';
    movieWrapper.appendChild(commentBtn);

    const popLikes = async () => {
      const resArray = await (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
      (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(likeBtn, resArray, movieLikes);
    };

    movieContainer.appendChild(movieWrapper);
    likeBtn.addEventListener('click', async (e) => {
      const movie = e.target;
      // @ts-ignore
      await (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(movie.id);
      const resArray = await (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
      (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(movie, resArray, movieLikes);
    });
    popLikes();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);


/***/ }),

/***/ "./src/modules/get-movies.js":
/*!***********************************!*\
  !*** ./src/modules/get-movies.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const endPoint = 'https://api.tvmaze.com/shows?page=1';
const getMovies = async () => {
  const res = await fetch(endPoint);
  const data = res.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);

/***/ }),

/***/ "./src/modules/likes-handler.js":
/*!**************************************!*\
  !*** ./src/modules/likes-handler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postLike": () => (/* binding */ postLike),
/* harmony export */   "updateLikes": () => (/* binding */ updateLikes)
/* harmony export */ });
const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'z8ysUFZMtLxIv6OBwEl9';
const endPoint = `${URL}/apps/${appID}/likes/`;

const postLike = async (item) => {
  const response = await fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response.text();
};

const getLikes = async () => {
  const response = await fetch(endPoint);
  return response.json();
};

const updateLikes = (movie, resArray, movieLikes) => {
  resArray.forEach((element) => {
    if (element.item_id === movie.id) {
      movieLikes.innerHTML = `${element.likes} likes`;
    }
  });
};




/***/ }),

/***/ "./src/modules/movie-counter.js":
/*!**************************************!*\
  !*** ./src/modules/movie-counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ countMovies)
/* harmony export */ });
function countMovies(sampleMovies) {
  return sampleMovies.length;
}

/***/ }),

/***/ "./src/modules/movie-modal.js":
/*!************************************!*\
  !*** ./src/modules/movie-modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comments_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-handler.js */ "./src/modules/comments-handler.js");
/* harmony import */ var _display_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-comments.js */ "./src/modules/display-comments.js");



const isVisible = 'is-visible';

const movieModal = async (commentButtons, sampleMovies) => {
  commentButtons.forEach((button, i) => {
    button.addEventListener('click', async () => {
      const modal = document.createElement('article');
      modal.className = 'modal';

      const popUpDiv = document.createElement('div');
      popUpDiv.className = 'modal-dialog';
      modal.classList.add(isVisible);
      modal.appendChild(popUpDiv);

      const movieImgDiv = document.createElement('div');
      const movieImg = document.createElement('img');
      const buttonDiv = document.createElement('div');
      const movieDownloadBtn = document.createElement('button');
      const movieWatchBtn = document.createElement('button');
      movieImgDiv.className = 'movieCard';
      movieImg.className = 'movieCard-img';
      movieImg.src = `${sampleMovies[i].image.original}`;
      buttonDiv.className = 'buttonDiv';
      movieDownloadBtn.className = 'popUp-button';
      movieDownloadBtn.innerHTML = '<i class="fa-solid fa-angles-down"></i>Download';
      movieWatchBtn.className = 'popUp-button';
      movieWatchBtn.innerHTML = 'Watch Now';
      movieImgDiv.appendChild(movieImg);
      buttonDiv.appendChild(movieDownloadBtn);
      buttonDiv.appendChild(movieWatchBtn);
      movieImgDiv.appendChild(buttonDiv);
      popUpDiv.appendChild(movieImgDiv);

      const movieContentDiv = document.createElement('div');
      const movieTitle = document.createElement('h1');
      const movieGenre = document.createElement('h2');
      const movieReleaseDate = document.createElement('h2');
      const movieNetwork = document.createElement('h1');
      const downloadSubtitle = document.createElement('a');
      const ratingStar = document.createElement('i');
      const movieRating = document.createElement('span');
      const movieSummary = document.createElement('p');
      movieContentDiv.className = 'movieContent';
      movieTitle.textContent = `${sampleMovies[i].name}`;
      movieTitle.className = 'popUp-title';
      movieGenre.innerHTML = `${sampleMovies[i].genres[0]}`;
      movieGenre.className = 'popUp-Genre';
      movieReleaseDate.innerHTML = `${sampleMovies[i].premiered}`;
      movieReleaseDate.className = 'popUp-releaseDate';
      movieNetwork.innerHTML = '';
      movieNetwork.className = '';
      downloadSubtitle.href = '#';
      downloadSubtitle.innerHTML = '<i class="fa-solid fa-angles-down"></i> Download Subtitles';
      downloadSubtitle.className = 'subtitle-button';
      ratingStar.classList.add('fa-solid');
      ratingStar.classList.add('fa-star');
      ratingStar.classList.add('overlay-star');
      movieRating.className = 'movie-overlay-rating';
      if (sampleMovies[i].rating.average) {
        movieRating.innerHTML = `${sampleMovies[i].rating.average} / 10`;
      } else {
        movieRating.innerHTML = '0 / 10';
      }
      movieSummary.innerHTML = `${sampleMovies[i].summary.substring(
        0,
        200,
      )}......`;
      movieSummary.className = 'popUp-summary';
      movieContentDiv.appendChild(movieTitle);
      movieContentDiv.appendChild(movieGenre);
      movieContentDiv.appendChild(movieReleaseDate);
      movieContentDiv.appendChild(downloadSubtitle);
      movieContentDiv.appendChild(ratingStar);
      movieContentDiv.appendChild(movieRating);
      movieContentDiv.appendChild(movieSummary);
      popUpDiv.appendChild(movieContentDiv);

      const closeModalBtn = document.createElement('button');
      closeModalBtn.innerHTML = '';
      closeModalBtn.className = 'close-proj-modal';
      popUpDiv.appendChild(closeModalBtn);
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('is-visible');
        document.body.style.overflow = 'auto';
      });

      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
          modal.classList.remove('is-visible');
          document.body.style.overflow = 'auto';
        }
      });

      document.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal.is-visible')) {
          modal.classList.remove('is-visible');
          document.body.style.overflow = 'auto';
        }
      });

      // Comments
      const commentSection = document.createElement('section');
      commentSection.className = 'comment-section';
      const formDiv = document.createElement('div');
      formDiv.className = 'add-comment';
      const formHeaderDiv = document.createElement('div');
      formHeaderDiv.className = 'add-comment-header';
      const formHeader = document.createElement('h2');
      const formIcon = document.createElement('i');
      formIcon.classList.add('fa-solid');
      formIcon.classList.add('fa-message');
      formHeader.innerHTML = 'Add your comment';
      formHeaderDiv.append(formIcon, formHeader);
      const commentForm = document.createElement('form');
      commentForm.className = 'add-comment-form';

      const userName = document.createElement('input');
      userName.className = 'user-name';
      userName.placeholder = 'Username...';
      const userComment = document.createElement('textarea');
      userComment.className = 'user-comment';
      userComment.placeholder = 'Share your comments ...';
      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.textContent = 'Submit Comment';
      commentBtn.id = `movie_cmt_${sampleMovies[i].id}`;
      commentForm.append(userName, userComment, commentBtn);
      formDiv.append(formHeaderDiv, commentForm);

      const commentsDiv = document.createElement('div');
      commentsDiv.className = 'display-comments';
      const comments = await (0,_comments_handler_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(commentBtn.id);
      const commentsCount = document.createElement('h3');
      commentsCount.className = 'comments-count';
      commentsDiv.append(commentsCount);
      (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__.countComments)(commentsCount, comments);
      (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(commentsDiv, comments);

      commentBtn.addEventListener('click', async (e) => {
        const resMsg = document.createElement('span');
        if (userName.value === '' || userComment.value === '') {
          e.preventDefault();
          resMsg.className = 'error-msg';
          resMsg.innerText = 'Please fill out your Username and add a comment';
          commentBtn.parentNode.insertBefore(resMsg, commentBtn);
          setTimeout(() => {
            commentForm.removeChild(resMsg);
          }, 2000);
        } else {
          e.preventDefault();
          resMsg.className = 'success-msg';
          resMsg.innerText = 'Successfully added your comment';
          commentBtn.parentNode.insertBefore(resMsg, commentBtn);
          setTimeout(() => {
            commentForm.removeChild(resMsg);
          }, 2000);
          await (0,_comments_handler_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(commentBtn.id, userName, userComment);
          const myComments = await (0,_comments_handler_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(commentBtn.id);
          (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__.countComments)(commentsCount, myComments);
          (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(commentsDiv, myComments);
          commentForm.reset();
        }
      });

      commentSection.append(formDiv, commentsDiv);
      popUpDiv.appendChild(commentSection);
      const readMore = document.createElement('button');
      readMore.innerHTML = 'Read More';
      readMore.className = 'readMoreBtn';
      movieContentDiv.appendChild(readMore);
      readMore.addEventListener('click', () => {
        if (readMore.innerHTML === 'Read More') {
          readMore.innerHTML = 'Read Less';
          movieSummary.innerHTML = `${sampleMovies[i].summary}`;
        } else {
          readMore.innerHTML = 'Read More';
          movieSummary.innerHTML = `${sampleMovies[i].summary.substring(
            0,
            400,
          )}......`;
        }
      });
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieModal);


/***/ }),

/***/ "./src/assets/movie-icon.png":
/*!***********************************!*\
  !*** ./src/assets/movie-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6f3363203c31d9d151b6.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/stream-it-capstone/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_get_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get-movies.js */ "./src/modules/get-movies.js");
/* harmony import */ var _modules_display_movies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display-movies.js */ "./src/modules/display-movies.js");
/* harmony import */ var _modules_movie_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/movie-modal.js */ "./src/modules/movie-modal.js");
/* harmony import */ var _modules_movie_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/movie-counter.js */ "./src/modules/movie-counter.js");
/* harmony import */ var _assets_movie_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/movie-icon.png */ "./src/assets/movie-icon.png");





// @ts-ignore


window.addEventListener('load', async () => {
  const logoImgDiv = document.querySelector('.logo-img');
  const logoIcon = new Image();
  logoIcon.src = _assets_movie_icon_png__WEBPACK_IMPORTED_MODULE_5__;
  logoImgDiv.appendChild(logoIcon);

  const movies = await (0,_modules_get_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const sampleMovies = movies.slice(12, 60);
  await (0,_modules_display_movies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sampleMovies);

  const movieList = document.querySelector('.movie-list');

  movieList.innerHTML = `We currently have <span> ${(0,_modules_movie_counter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(sampleMovies)} <span> movies`;

  const commentButtons = [...document.querySelectorAll('.commentBtn')];
  const viewDetailsButtons = [...document.querySelectorAll('.ovelay-details-btn')];
  (0,_modules_movie_modal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentButtons, sampleMovies);
  (0,_modules_movie_modal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(viewDetailsButtons, sampleMovies);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFB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O0FBQ3pCO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3QkFBd0I7QUFDOUQsVUFBVTtBQUNWO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0wxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkI7QUFDUTtBQUNOO0FBQ0c7QUFDckQ7QUFDMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtREFBSTtBQUNyQjs7QUFFQSx1QkFBdUIsa0VBQVM7QUFDaEM7QUFDQSxRQUFRLHNFQUFhOztBQUVyQjs7QUFFQSxvREFBb0QscUVBQVcsZ0JBQWdCOztBQUUvRTtBQUNBO0FBQ0EsRUFBRSxtRUFBVTtBQUNaLEVBQUUsbUVBQVU7QUFDWixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudHMtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LWNvbW1lbnRzLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktbW92aWVzLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2dldC1tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9tb3ZpZS1jb3VudGVyLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL21vdmllLW1vZGFsLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2xvYmFsIFN0eWxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1ncmVlbjogIzZhYzA0NTtcXG4gIC0tYmFja2dyb3VuZC1ncmV5OiAjMWQxZDFkO1xcbiAgLS10ZXh0LWdyZXk6ICM5MTkxOTE7XFxuICAtLWhlYWRlci1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAtLWJvZHktZm9udDogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XFxufVxcblxcbmh0bWwge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMXJlbSA1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogIzkxOTE5MTtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5uYXYtdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdi11bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiA2NXB4O1xcbiAgcGFkZGluZzogMS4xZW0gMDtcXG59XFxuXFxuLm5hdi11bCBsaSBhIHtcXG4gIGNvbG9yOiAjOTE5MTkxO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbn1cXG5cXG4uaGVhZGVyLWxpbmsge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkZXItZm9udCk7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5oZWFkZXItbGluayBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcblxcbi5zZWFyY2g6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIENhbGwgb3V0IHN0eWxlcyAqL1xcblxcbi5jYWxsb3V0IHtcXG4gIHBhZGRpbmctdG9wOiAxLjJlbTtcXG59XFxuXFxuLmNhbGxvdXQtY29udGVudCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA1NSU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uY2FsbG91dC1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXG4gIGZvbnQtc2l6ZTogMi43NWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiKDAgMCAwIC8gNDAlKTtcXG4gIG1hcmdpbjogMC41ZW0gMDtcXG59XFxuXFxuLmNhbGxvdXQtY29weSB7XFxuICBjb2xvcjogI2NjYztcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEuM2VtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FsbG91dC1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBNb3ZpZSBzZWN0aW9uIHN0eWxlcyAqL1xcblxcbi5tb3ZpZS1zZWN0aW9uLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZy1ib3R0b206IDEuMmVtO1xcbn1cXG5cXG4ubW92aWUtc2VjdGlvbi10aXRsZSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZhLXN0YXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgcGFkZGluZy1yaWdodDogMC40ZW07XFxufVxcblxcbi5tb3ZpZS1saXN0IHtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG5cXG4ubW92aWUtbGlzdCBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuXFxuLm1vdmllcyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2NSU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzJSAyMyUgMjMlIDIzJTtcXG4gIGdyaWQtZ2FwOiAyMHB4IDIwcHg7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbn1cXG5cXG4vKiBNb3ZpZSBXcmFwcGVyIG92ZXJsYXkgc3R5bGVzICovXFxuLm1vdmllLWltYWdlLWRpdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4ubW92aWUtaW1hZ2UtZGl2OmhvdmVyIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5cXG4uZGV0YWlscy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xcbn1cXG5cXG4uZGV0YWlscy1vdmVybGF5ID4gKiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXk6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciA+ICoge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4ubW92aWUtaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm92ZXJsYXktc3RhciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XFxufVxcblxcbi5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW07XFxuICBmb250LXNpemU6IDEuN2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb3ZpZS1vdmVybGF5LWdlbnJlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXG4gIGZvbnQtc2l6ZTogMi4zZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm92ZWxheS1kZXRhaWxzLWJ0biB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuNWVtIDEuM2VtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTW92aWUgV3JhcHBlciBzdHlsZXMgKi9cXG4ubW92aWUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAuOGVtO1xcbn1cXG5cXG4ubW92aWUtdGl0bGUge1xcbiAgcGFkZGluZzogMC41ZW0gMDtcXG59XFxuXFxuLmxpa2VzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYS1oZWFydDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcblxcbi5tb3ZpZS1saWtlcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4uY29tbWVudEJ0biB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYmFja2dyb3VuZDogIzM2YjM3ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudEJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4ICMzNmIzN2YzZDtcXG59XFxuXFxuLmNvbW1lbnRCdG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICMyZjQ3MGE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXFxuLyogTW92aWUgTW9kYWwgc3R5bGVzICovXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAzMiwgMzIsIDAuOTUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluO1xcbn1cXG5cXG4ubW9kYWwuaXMtdmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1iYXNpczogNjAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogM3JlbTtcXG4gIHdpZHRoOiA1NXZ3O1xcbiAgaGVpZ2h0OiA5NSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUuMzRkZWcsICMyYjJiMmIgNjUlLCAjMDAyNDAwIDk0LjM1JSk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIG1hcmdpbjogNWVtO1xcbiAgcGFkZGluZzogM2VtO1xcbn1cXG5cXG4vKiBQb3BVcCBzdHlsZXMgKi9cXG4ucG9wVXAtYnV0dG9uIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Yjk2MmI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5wb3BVcC1idXR0b246aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW92aWVDYXJkIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ubW92aWVDYXJkLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5tb3ZpZUNvbnRlbnQge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucG9wVXAtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5wb3BVcC1HZW5yZSB7XFxuICBjb2xvcjogIzRiOTYyYjtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnBvcFVwLXJlbGVhc2VEYXRlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmODE7XFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4ucG9wVXAtc3VtbWFyeSB7XFxuICBjb2xvcjogI2NjYztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxufVxcblxcbi5zdWJ0aXRsZS1idXR0b24ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tYm90dG9tOiA0ZW07XFxufVxcblxcbi5yZWFkTW9yZUJ0biB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzQxNDE0MTtcXG59XFxuXFxuLmNsb3NlLXByb2otbW9kYWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXG4gIHdpZHRoOiAycHg7XFxuICBsZWZ0OiAxMnB4O1xcbiAgdG9wOiA1cHg7XFxuICBib3R0b206IDVweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmNsb3NlLXByb2otbW9kYWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXG4gIGhlaWdodDogMnB4O1xcbiAgdG9wOiAxMnB4O1xcbiAgbGVmdDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLyogTW9kYWwgY29tbWVudHMgc3R5bGVzICovXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgZ2FwOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG59XFxuXFxuLmNvbW1lbnRzLWNvdW50IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXG59XFxuXFxuLmRpc3BsYXktY29tbWVudHMge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29tbWVudC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmF1dGhvci10aHVtYm5haWwge1xcbiAgZmxleDogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuXFxuLnVzZXItbmFtZS1saW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU3OWM7XFxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgd2lkdGg6IDEuNmVtO1xcbn1cXG5cXG4udXNlci1uYW1lLWxpbmsgc3BhbiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4udXNlci1uYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XFxufVxcblxcbi5jb21tZW50LW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29tbWVudC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4jaGVhZGVyLWF1dGhvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuI2F1dGhvci10ZXh0IHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGNvbG9yOiAjOTE5MTkxO1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jY29tbWVudC1kYXRlIHtcXG4gIGNvbG9yOiAjNjA2MDYwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuI2NvbW1lbnQtdGV4dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1jb21tZW50IGgyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmFkZC1jb21tZW50LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZhLW1lc3NhZ2Uge1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5cXG4vKiBDb21tZW50IGZvcm0gc3R5bGVzICovXFxuLmFkZC1jb21tZW50LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMWQxZDFkO1xcbiAgYmFja2dyb3VuZDogIzJiMmIyYjtcXG4gIG1hcmdpbjogMCAwIDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMCAwIDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jb21tZW50LWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzQzYTA0NztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsZXMgKi9cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci1saW5rIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbi8qIE1vYmlsZSBTdHlsZXMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLm1vdmllcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAyMHB4IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gIH1cXG5cXG4gICNpZGZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmJ1dHRvbkRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucG9wVXAtYnV0dG9uIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICB9XFxuXFxuICAucG9wVXAtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gIH1cXG5cXG4gIC5zdWJ0aXRsZS1idXR0b24ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICB9XFxuXFxuICAucG9wVXAtc3VtbWFyeSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLm1vZGFsLWRpYWxvZyB7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAucmVhZE1vcmVCdG4ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5tb3ZpZUNvbnRlbnQge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5jb21tZW50LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZGlzcGxheS1jb21tZW50cyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsY0FBYztFQUNkLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0VBQXdFO0VBQ3hFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNDQUFzQztFQUN0Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsaURBQWlEO0VBQ2pELDhDQUE4QztFQUM5Qyx5Q0FBeUM7RUFDekMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyw0Q0FBNEM7RUFDNUMsNkNBQTZDO0FBQy9DOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHbG9iYWwgU3R5bGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWdyZWVuOiAjNmFjMDQ1O1xcbiAgLS1iYWNrZ3JvdW5kLWdyZXk6ICMxZDFkMWQ7XFxuICAtLXRleHQtZ3JleTogIzkxOTE5MTtcXG4gIC0taGVhZGVyLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tYm9keS1mb250OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG59XFxuXFxuaHRtbCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiAxcmVtIDVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjOTE5MTkxO1xcbn1cXG5cXG4ubG9nby1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLm5hdi11bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2LXVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDY1cHg7XFxuICBwYWRkaW5nOiAxLjFlbSAwO1xcbn1cXG5cXG4ubmF2LXVsIGxpIGEge1xcbiAgY29sb3I6ICM5MTkxOTE7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkZXItZm9udCk7XFxufVxcblxcbi5oZWFkZXItbGluayB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRlci1saW5rIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5zZWFyY2gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuXFxuLnNlYXJjaDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50aXRsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogQ2FsbCBvdXQgc3R5bGVzICovXFxuXFxuLmNhbGxvdXQge1xcbiAgcGFkZGluZy10b3A6IDEuMmVtO1xcbn1cXG5cXG4uY2FsbG91dC1jb250ZW50IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDU1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5jYWxsb3V0LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbiAgZm9udC1zaXplOiAyLjc1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCAwIDAgLyA0MCUpO1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cXG5cXG4uY2FsbG91dC1jb3B5IHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYWxsb3V0LWluZm8ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE1vdmllIHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLWJvdHRvbTogMS4yZW07XFxufVxcblxcbi5tb3ZpZS1zZWN0aW9uLXRpdGxlIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjE1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZmEtc3RhciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjRlbTtcXG59XFxuXFxuLm1vdmllLWxpc3Qge1xcbiAgcGFkZGluZzogMWVtIDA7XFxufVxcblxcbi5tb3ZpZS1saXN0IHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5cXG4ubW92aWVzIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDIzJSAyMyUgMjMlO1xcbiAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbi8qIE1vdmllIFdyYXBwZXIgb3ZlcmxheSBzdHlsZXMgKi9cXG4ubW92aWUtaW1hZ2UtZGl2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5tb3ZpZS1pbWFnZS1kaXY6aG92ZXIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXkgPiAqIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcXG59XFxuXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZGV0YWlscy1vdmVybGF5OmhvdmVyID4gKiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5tb3ZpZS1pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcmxheS1zdGFyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcXG59XFxuXFxuLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vdmllLW92ZXJsYXktZ2VucmUge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtO1xcbiAgZm9udC1zaXplOiAyLjNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ub3ZlbGF5LWRldGFpbHMtYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41ZW0gMS4zZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNb3ZpZSBXcmFwcGVyIHN0eWxlcyAqL1xcbi5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC44ZW07XFxufVxcblxcbi5tb3ZpZS10aXRsZSB7XFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuXFxuLm1vdmllLWxpa2VzIHtcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbi5jb21tZW50QnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBiYWNrZ3JvdW5kOiAjMzZiMzdmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50QnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggIzM2YjM3ZjNkO1xcbn1cXG5cXG4uY29tbWVudEJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG4vKiBNb3ZpZSBNb2RhbCBzdHlsZXMgKi9cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDMyLCAzMiwgMC45NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW47XFxufVxcblxcbi5tb2RhbC5pcy12aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWJhc2lzOiA2MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAzcmVtO1xcbiAgd2lkdGg6IDU1dnc7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NS4zNGRlZywgIzJiMmIyYiA2NSUsICMwMDI0MDAgOTQuMzUlKTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgbWFyZ2luOiA1ZW07XFxuICBwYWRkaW5nOiAzZW07XFxufVxcblxcbi8qIFBvcFVwIHN0eWxlcyAqL1xcbi5wb3BVcC1idXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiOTYyYjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnBvcFVwLWJ1dHRvbjpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb3ZpZUNhcmQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5idXR0b25EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb3ZpZUNhcmQtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG59XFxuXFxuLm1vdmllQ29udGVudCB7XFxuICB3aWR0aDogNDAlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wb3BVcC10aXRsZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnBvcFVwLUdlbnJlIHtcXG4gIGNvbG9yOiAjNGI5NjJiO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4ucG9wVXAtcmVsZWFzZURhdGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICNmZmZmZmY4MTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxufVxcblxcbi5wb3BVcC1zdW1tYXJ5IHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsaW5lLWhlaWdodDogMS40ZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxLjNlbTtcXG59XFxuXFxuLnN1YnRpdGxlLWJ1dHRvbiB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1ib3R0b206IDRlbTtcXG59XFxuXFxuLnJlYWRNb3JlQnRuIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjNDE0MTQxO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbCB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsOjpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgd2lkdGg6IDJweDtcXG4gIGxlZnQ6IDEycHg7XFxuICB0b3A6IDVweDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBNb2RhbCBjb21tZW50cyBzdHlsZXMgKi9cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBnYXA6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbn1cXG5cXG4uY29tbWVudHMtY291bnQge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbn1cXG5cXG4uZGlzcGxheS1jb21tZW50cyB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uYXV0aG9yLXRodW1ibmFpbCB7XFxuICBmbGV4OiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4udXNlci1uYW1lLWxpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTc5YztcXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aWR0aDogMS42ZW07XFxufVxcblxcbi51c2VyLW5hbWUtbGluayBzcGFuIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi51c2VyLW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcXG59XFxuXFxuLmNvbW1lbnQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb21tZW50LWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbiNoZWFkZXItYXV0aG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4jYXV0aG9yLXRleHQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY29sb3I6ICM5MTkxOTE7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNjb21tZW50LWRhdGUge1xcbiAgY29sb3I6ICM2MDYwNjA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4jY29tbWVudC10ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5hZGQtY29tbWVudCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQgaDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmEtbWVzc2FnZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcblxcbi8qIENvbW1lbnQgZm9ybSBzdHlsZXMgKi9cXG4uYWRkLWNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZDFkMWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcbiAgbWFyZ2luOiAwIDAgNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWE6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwIDAgNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMmY0NzBhO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxlcyAqL1xcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLyogTW9iaWxlIFN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubW92aWVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgfVxcblxcbiAgI2lkZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYnV0dG9uRGl2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wb3BVcC1idXR0b24ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgfVxcblxcbiAgLnN1YnRpdGxlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcC1zdW1tYXJ5IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAubW9kYWwtZGlhbG9nIHtcXG4gICAgd2lkdGg6IDg1dnc7XFxuICB9XFxuXFxuICAuY29tbWVudC1zZWN0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5yZWFkTW9yZUJ0biB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLm1vdmllQ29udGVudCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5kaXNwbGF5LWNvbW1lbnRzIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gQHRzLWlnbm9yZVxuY29uc3QgVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XG5jb25zdCBhcHBJRCA9ICd6OHlzVUZaTXRMeEl2Nk9Cd0VsOSc7XG5jb25zdCBlbmRQb2ludCA9IGAke1VSTH0vYXBwcy8ke2FwcElEfS9jb21tZW50cy9gO1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChidXR0b25JZCwgdXNlck5hbWUsIHVzZXJDb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGVuZFBvaW50LCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYnV0dG9uSWQsXG4gICAgICB1c2VybmFtZTogdXNlck5hbWUudmFsdWUsXG4gICAgICBjb21tZW50OiB1c2VyQ29tbWVudC52YWx1ZSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IENoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzLnRleHQoKTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7ZW5kUG9pbnR9P2l0ZW1faWQ9JHtpZH1gKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCB7IHBvc3RDb21tZW50LCBnZXRDb21tZW50cyB9O1xuIiwiY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKGNvbW1lbnRzRGl2LCBjb21tZW50cykgPT4ge1xuICBpZiAoY29tbWVudHMubGVuZ3RoID49IDEpIHtcbiAgICBjb21tZW50c0Rpdi5pbm5lckhUTUwgPSBgPGgzIGNsYXNzPWNvbW1lbnRzLWNvdW50PiAke2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHM8L2gzPmA7XG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnY29tbWVudC1jb250YWluZXInO1xuICAgICAgY29uc3QgdXNlclRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdXNlclRodW1ibmFpbC5jbGFzc05hbWUgPSAnYXV0aG9yLXRodW1ibmFpbCc7XG4gICAgICBjb25zdCB0aHVtYm5haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdGh1bWJuYWlsTGluay5jbGFzc05hbWUgPSAndXNlci1uYW1lLWxpbmsnO1xuICAgICAgdGh1bWJuYWlsTGluay5ocmVmID0gJyMnO1xuICAgICAgY29uc3QgdGh1bWJuYWlsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRodW1ibmFpbENvbnRlbnQudGV4dENvbnRlbnQgPSAnVSc7XG4gICAgICB0aHVtYm5haWxMaW5rLmFwcGVuZENoaWxkKHRodW1ibmFpbENvbnRlbnQpO1xuICAgICAgdXNlclRodW1ibmFpbC5hcHBlbmRDaGlsZCh0aHVtYm5haWxMaW5rKTtcblxuICAgICAgY29uc3QgY29tbWVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbW1lbnRNYWluLmNsYXNzTmFtZSA9ICdjb21tZW50LW1haW4nO1xuICAgICAgY29tbWVudE1haW4uaW5uZXJIVE1MID0gYFxuICAgICAgIDxkaXYgaWQ9XCJjb21tZW50LWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItYXV0aG9yXCI+XG4gICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgaWQ9XCJhdXRob3ItdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29tbWVudC51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImNvbW1lbnQtZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBpZD1cImNvbW1lbnQtdGV4dFwiPlxuICAgICAgICAgIDxwPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZCh1c2VyVGh1bWJuYWlsLCBjb21tZW50TWFpbik7XG4gICAgICBjb21tZW50c0Rpdi5hcHBlbmQoY29tbWVudENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGNvdW50Q29tbWVudHMgPSAoZWxlbWVudCwgY29tbWVudHMpID0+IHtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoY29tbWVudHMubGVuZ3RoID49IDEpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y29tbWVudHMubGVuZ3RofSBDb21tZW50c2A7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcwIENvbW1lbnRzJztcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheUNvbW1lbnRzLCBjb3VudENvbW1lbnRzIH07IiwiaW1wb3J0IHsgZ2V0TGlrZXMsIHBvc3RMaWtlLCB1cGRhdGVMaWtlcyB9IGZyb20gJy4vbGlrZXMtaGFuZGxlci5qcyc7XG5cbmNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcycpO1xuXG5jb25zdCBkaXNwbGF5TW92aWVzID0gKHNhbXBsZU1vdmllcykgPT4ge1xuICBzYW1wbGVNb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICBjb25zdCBtb3ZpZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZVdyYXBwZXIuaWQgPSBgbW92aWVfJHttb3ZpZS5pZH1gO1xuICAgIG1vdmllV3JhcHBlci5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcic7XG5cbiAgICBjb25zdCBtb3ZpZUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmllSW1nRGl2LmNsYXNzTmFtZSA9ICdtb3ZpZS1pbWFnZS1kaXYnO1xuXG4gICAgY29uc3QgbW92aWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtb3ZpZUltZy5zcmMgPSBtb3ZpZS5pbWFnZS5tZWRpdW07XG4gICAgbW92aWVJbWcuY2xhc3NOYW1lID0gJ21vdmllLWltYWdlJztcbiAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChtb3ZpZUltZyk7XG5cbiAgICBjb25zdCBtb3ZpZUltZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZUltZ092ZXJsYXkuY2xhc3NOYW1lID0gJ2RldGFpbHMtb3ZlcmxheSc7XG4gICAgY29uc3QgcmF0aW5nU3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zdGFyJyk7XG4gICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LXN0YXInKTtcbiAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtb3ZpZVJhdGluZy5jbGFzc05hbWUgPSAnbW92aWUtb3ZlcmxheS1yYXRpbmcnO1xuICAgIGlmIChtb3ZpZS5yYXRpbmcuYXZlcmFnZSkge1xuICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYCR7bW92aWUucmF0aW5nLmF2ZXJhZ2V9IC8gMTBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSAnMCAvIDEwJztcbiAgICB9XG4gICAgY29uc3QgbW92aWVHZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtb3ZpZUdlbnJlLmNsYXNzTmFtZSA9ICdtb3ZpZS1vdmVybGF5LWdlbnJlJztcbiAgICBtb3ZpZUdlbnJlLmlubmVySFRNTCA9IGAke21vdmllLmdlbnJlc1swXX1gO1xuICAgIGNvbnN0IG1vdmllRGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vdmllRGV0YWlsc0J0bi5jbGFzc05hbWUgPSAnb3ZlbGF5LWRldGFpbHMtYnRuJztcbiAgICBtb3ZpZURldGFpbHNCdG4uaW5uZXJIVE1MID0gJ1ZpZXcgRGV0YWlscyc7XG5cbiAgICBtb3ZpZUltZ092ZXJsYXkuYXBwZW5kKFxuICAgICAgcmF0aW5nU3RhcixcbiAgICAgIG1vdmllUmF0aW5nLFxuICAgICAgbW92aWVHZW5yZSxcbiAgICAgIG1vdmllRGV0YWlsc0J0bixcbiAgICApO1xuICAgIG1vdmllSW1nRGl2LmFwcGVuZENoaWxkKG1vdmllSW1nT3ZlcmxheSk7XG5cbiAgICBtb3ZpZVdyYXBwZXIuYXBwZW5kQ2hpbGQobW92aWVJbWdEaXYpO1xuXG4gICAgY29uc3QgbW92aWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9IGAke21vdmllLm5hbWV9YDtcbiAgICBtb3ZpZVRpdGxlLmNsYXNzTmFtZSA9ICdtb3ZpZS10aXRsZSc7XG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKG1vdmllVGl0bGUpO1xuXG4gICAgY29uc3QgbGlrZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaWtlc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbGlrZXMtY29udGFpbmVyJztcbiAgICBjb25zdCBsaWtlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLWhlYXJ0Jyk7XG4gICAgbGlrZUJ0bi5pZCA9IGAke21vdmllV3JhcHBlci5pZH1gO1xuICAgIGxpa2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpa2VCdG4pO1xuXG4gICAgY29uc3QgbW92aWVMaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtb3ZpZUxpa2VzLmNsYXNzTmFtZSA9ICdtb3ZpZS1saWtlcyc7XG4gICAgbW92aWVMaWtlcy50ZXh0Q29udGVudCA9ICcwIGxpa2VzJztcbiAgICBsaWtlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZUxpa2VzKTtcbiAgICBtb3ZpZVdyYXBwZXIuYXBwZW5kQ2hpbGQobGlrZXNDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbW1lbnRCdG4uaW5uZXJIVE1MID0gJ0NvbW1lbnQgb24gTW92aWUnO1xuICAgIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ2NvbW1lbnRCdG4nO1xuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcblxuICAgIGNvbnN0IHBvcExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzQXJyYXkgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAgICAgdXBkYXRlTGlrZXMobGlrZUJ0biwgcmVzQXJyYXksIG1vdmllTGlrZXMpO1xuICAgIH07XG5cbiAgICBtb3ZpZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZVdyYXBwZXIpO1xuICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgbW92aWUgPSBlLnRhcmdldDtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGF3YWl0IHBvc3RMaWtlKG1vdmllLmlkKTtcbiAgICAgIGNvbnN0IHJlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgICAgIHVwZGF0ZUxpa2VzKG1vdmllLCByZXNBcnJheSwgbW92aWVMaWtlcyk7XG4gICAgfSk7XG4gICAgcG9wTGlrZXMoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW92aWVzO1xuIiwiY29uc3QgZW5kUG9pbnQgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPTEnO1xuY29uc3QgZ2V0TW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XG4gIGNvbnN0IGRhdGEgPSByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1vdmllczsiLCJjb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IGFwcElEID0gJ3o4eXNVRlpNdEx4SXY2T0J3RWw5JztcbmNvbnN0IGVuZFBvaW50ID0gYCR7VVJMfS9hcHBzLyR7YXBwSUR9L2xpa2VzL2A7XG5cbmNvbnN0IHBvc3RMaWtlID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRQb2ludCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaXRlbSB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IENoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgdXBkYXRlTGlrZXMgPSAobW92aWUsIHJlc0FycmF5LCBtb3ZpZUxpa2VzKSA9PiB7XG4gIHJlc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5pdGVtX2lkID09PSBtb3ZpZS5pZCkge1xuICAgICAgbW92aWVMaWtlcy5pbm5lckhUTUwgPSBgJHtlbGVtZW50Lmxpa2VzfSBsaWtlc2A7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IHBvc3RMaWtlLCBnZXRMaWtlcywgdXBkYXRlTGlrZXMgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdW50TW92aWVzKHNhbXBsZU1vdmllcykge1xuICByZXR1cm4gc2FtcGxlTW92aWVzLmxlbmd0aDtcbn0iLCJpbXBvcnQgeyBwb3N0Q29tbWVudCwgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRzLWhhbmRsZXIuanMnO1xuaW1wb3J0IHsgZGlzcGxheUNvbW1lbnRzLCBjb3VudENvbW1lbnRzIH0gZnJvbSAnLi9kaXNwbGF5LWNvbW1lbnRzLmpzJztcblxuY29uc3QgaXNWaXNpYmxlID0gJ2lzLXZpc2libGUnO1xuXG5jb25zdCBtb3ZpZU1vZGFsID0gYXN5bmMgKGNvbW1lbnRCdXR0b25zLCBzYW1wbGVNb3ZpZXMpID0+IHtcbiAgY29tbWVudEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwnO1xuXG4gICAgICBjb25zdCBwb3BVcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcG9wVXBEaXYuY2xhc3NOYW1lID0gJ21vZGFsLWRpYWxvZyc7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKGlzVmlzaWJsZSk7XG4gICAgICBtb2RhbC5hcHBlbmRDaGlsZChwb3BVcERpdik7XG5cbiAgICAgIGNvbnN0IG1vdmllSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBtb3ZpZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBtb3ZpZURvd25sb2FkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBtb3ZpZVdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBtb3ZpZUltZ0Rpdi5jbGFzc05hbWUgPSAnbW92aWVDYXJkJztcbiAgICAgIG1vdmllSW1nLmNsYXNzTmFtZSA9ICdtb3ZpZUNhcmQtaW1nJztcbiAgICAgIG1vdmllSW1nLnNyYyA9IGAke3NhbXBsZU1vdmllc1tpXS5pbWFnZS5vcmlnaW5hbH1gO1xuICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdidXR0b25EaXYnO1xuICAgICAgbW92aWVEb3dubG9hZEJ0bi5jbGFzc05hbWUgPSAncG9wVXAtYnV0dG9uJztcbiAgICAgIG1vdmllRG93bmxvYWRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGVzLWRvd25cIj48L2k+RG93bmxvYWQnO1xuICAgICAgbW92aWVXYXRjaEJ0bi5jbGFzc05hbWUgPSAncG9wVXAtYnV0dG9uJztcbiAgICAgIG1vdmllV2F0Y2hCdG4uaW5uZXJIVE1MID0gJ1dhdGNoIE5vdyc7XG4gICAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChtb3ZpZUltZyk7XG4gICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobW92aWVEb3dubG9hZEJ0bik7XG4gICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobW92aWVXYXRjaEJ0bik7XG4gICAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWdEaXYpO1xuXG4gICAgICBjb25zdCBtb3ZpZUNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgY29uc3QgbW92aWVHZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBjb25zdCBtb3ZpZVJlbGVhc2VEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGNvbnN0IG1vdmllTmV0d29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICBjb25zdCBkb3dubG9hZFN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgY29uc3QgcmF0aW5nU3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGNvbnN0IG1vdmllUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29uc3QgbW92aWVTdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmNsYXNzTmFtZSA9ICdtb3ZpZUNvbnRlbnQnO1xuICAgICAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9IGAke3NhbXBsZU1vdmllc1tpXS5uYW1lfWA7XG4gICAgICBtb3ZpZVRpdGxlLmNsYXNzTmFtZSA9ICdwb3BVcC10aXRsZSc7XG4gICAgICBtb3ZpZUdlbnJlLmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5nZW5yZXNbMF19YDtcbiAgICAgIG1vdmllR2VucmUuY2xhc3NOYW1lID0gJ3BvcFVwLUdlbnJlJztcbiAgICAgIG1vdmllUmVsZWFzZURhdGUuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnByZW1pZXJlZH1gO1xuICAgICAgbW92aWVSZWxlYXNlRGF0ZS5jbGFzc05hbWUgPSAncG9wVXAtcmVsZWFzZURhdGUnO1xuICAgICAgbW92aWVOZXR3b3JrLmlubmVySFRNTCA9ICcnO1xuICAgICAgbW92aWVOZXR3b3JrLmNsYXNzTmFtZSA9ICcnO1xuICAgICAgZG93bmxvYWRTdWJ0aXRsZS5ocmVmID0gJyMnO1xuICAgICAgZG93bmxvYWRTdWJ0aXRsZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtZG93blwiPjwvaT4gRG93bmxvYWQgU3VidGl0bGVzJztcbiAgICAgIGRvd25sb2FkU3VidGl0bGUuY2xhc3NOYW1lID0gJ3N1YnRpdGxlLWJ1dHRvbic7XG4gICAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcbiAgICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1zdGFyJyk7XG4gICAgICBtb3ZpZVJhdGluZy5jbGFzc05hbWUgPSAnbW92aWUtb3ZlcmxheS1yYXRpbmcnO1xuICAgICAgaWYgKHNhbXBsZU1vdmllc1tpXS5yYXRpbmcuYXZlcmFnZSkge1xuICAgICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0ucmF0aW5nLmF2ZXJhZ2V9IC8gMTBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gJzAgLyAxMCc7XG4gICAgICB9XG4gICAgICBtb3ZpZVN1bW1hcnkuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnN1bW1hcnkuc3Vic3RyaW5nKFxuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICApfS4uLi4uLmA7XG4gICAgICBtb3ZpZVN1bW1hcnkuY2xhc3NOYW1lID0gJ3BvcFVwLXN1bW1hcnknO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllVGl0bGUpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllR2VucmUpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllUmVsZWFzZURhdGUpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKGRvd25sb2FkU3VidGl0bGUpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKHJhdGluZ1N0YXIpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllUmF0aW5nKTtcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChtb3ZpZVN1bW1hcnkpO1xuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQobW92aWVDb250ZW50RGl2KTtcblxuICAgICAgY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2xvc2VNb2RhbEJ0bi5pbm5lckhUTUwgPSAnJztcbiAgICAgIGNsb3NlTW9kYWxCdG4uY2xhc3NOYW1lID0gJ2Nsb3NlLXByb2otbW9kYWwnO1xuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQoY2xvc2VNb2RhbEJ0bik7XG4gICAgICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5pcy12aXNpYmxlJykpIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuaXMtdmlzaWJsZScpKSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb21tZW50c1xuICAgICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBjb21tZW50U2VjdGlvbi5jbGFzc05hbWUgPSAnY29tbWVudC1zZWN0aW9uJztcbiAgICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvcm1EaXYuY2xhc3NOYW1lID0gJ2FkZC1jb21tZW50JztcbiAgICAgIGNvbnN0IGZvcm1IZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvcm1IZWFkZXJEaXYuY2xhc3NOYW1lID0gJ2FkZC1jb21tZW50LWhlYWRlcic7XG4gICAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGNvbnN0IGZvcm1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgZm9ybUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgIGZvcm1JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLW1lc3NhZ2UnKTtcbiAgICAgIGZvcm1IZWFkZXIuaW5uZXJIVE1MID0gJ0FkZCB5b3VyIGNvbW1lbnQnO1xuICAgICAgZm9ybUhlYWRlckRpdi5hcHBlbmQoZm9ybUljb24sIGZvcm1IZWFkZXIpO1xuICAgICAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICBjb21tZW50Rm9ybS5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQtZm9ybSc7XG5cbiAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHVzZXJOYW1lLmNsYXNzTmFtZSA9ICd1c2VyLW5hbWUnO1xuICAgICAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnVXNlcm5hbWUuLi4nO1xuICAgICAgY29uc3QgdXNlckNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgdXNlckNvbW1lbnQuY2xhc3NOYW1lID0gJ3VzZXItY29tbWVudCc7XG4gICAgICB1c2VyQ29tbWVudC5wbGFjZWhvbGRlciA9ICdTaGFyZSB5b3VyIGNvbW1lbnRzIC4uLic7XG4gICAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb21tZW50QnRuLmNsYXNzTmFtZSA9ICdjb21tZW50LWJ0bic7XG4gICAgICBjb21tZW50QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCBDb21tZW50JztcbiAgICAgIGNvbW1lbnRCdG4uaWQgPSBgbW92aWVfY210XyR7c2FtcGxlTW92aWVzW2ldLmlkfWA7XG4gICAgICBjb21tZW50Rm9ybS5hcHBlbmQodXNlck5hbWUsIHVzZXJDb21tZW50LCBjb21tZW50QnRuKTtcbiAgICAgIGZvcm1EaXYuYXBwZW5kKGZvcm1IZWFkZXJEaXYsIGNvbW1lbnRGb3JtKTtcblxuICAgICAgY29uc3QgY29tbWVudHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbW1lbnRzRGl2LmNsYXNzTmFtZSA9ICdkaXNwbGF5LWNvbW1lbnRzJztcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMoY29tbWVudEJ0bi5pZCk7XG4gICAgICBjb25zdCBjb21tZW50c0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGNvbW1lbnRzQ291bnQuY2xhc3NOYW1lID0gJ2NvbW1lbnRzLWNvdW50JztcbiAgICAgIGNvbW1lbnRzRGl2LmFwcGVuZChjb21tZW50c0NvdW50KTtcbiAgICAgIGNvdW50Q29tbWVudHMoY29tbWVudHNDb3VudCwgY29tbWVudHMpO1xuICAgICAgZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzRGl2LCBjb21tZW50cyk7XG5cbiAgICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBjb25zdCByZXNNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmICh1c2VyTmFtZS52YWx1ZSA9PT0gJycgfHwgdXNlckNvbW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJlc01zZy5jbGFzc05hbWUgPSAnZXJyb3ItbXNnJztcbiAgICAgICAgICByZXNNc2cuaW5uZXJUZXh0ID0gJ1BsZWFzZSBmaWxsIG91dCB5b3VyIFVzZXJuYW1lIGFuZCBhZGQgYSBjb21tZW50JztcbiAgICAgICAgICBjb21tZW50QnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc01zZywgY29tbWVudEJ0bik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb21tZW50Rm9ybS5yZW1vdmVDaGlsZChyZXNNc2cpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXNNc2cuY2xhc3NOYW1lID0gJ3N1Y2Nlc3MtbXNnJztcbiAgICAgICAgICByZXNNc2cuaW5uZXJUZXh0ID0gJ1N1Y2Nlc3NmdWxseSBhZGRlZCB5b3VyIGNvbW1lbnQnO1xuICAgICAgICAgIGNvbW1lbnRCdG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVzTXNnLCBjb21tZW50QnRuKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbW1lbnRGb3JtLnJlbW92ZUNoaWxkKHJlc01zZyk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgYXdhaXQgcG9zdENvbW1lbnQoY29tbWVudEJ0bi5pZCwgdXNlck5hbWUsIHVzZXJDb21tZW50KTtcbiAgICAgICAgICBjb25zdCBteUNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMoY29tbWVudEJ0bi5pZCk7XG4gICAgICAgICAgY291bnRDb21tZW50cyhjb21tZW50c0NvdW50LCBteUNvbW1lbnRzKTtcbiAgICAgICAgICBkaXNwbGF5Q29tbWVudHMoY29tbWVudHNEaXYsIG15Q29tbWVudHMpO1xuICAgICAgICAgIGNvbW1lbnRGb3JtLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb21tZW50U2VjdGlvbi5hcHBlbmQoZm9ybURpdiwgY29tbWVudHNEaXYpO1xuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQoY29tbWVudFNlY3Rpb24pO1xuICAgICAgY29uc3QgcmVhZE1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHJlYWRNb3JlLmlubmVySFRNTCA9ICdSZWFkIE1vcmUnO1xuICAgICAgcmVhZE1vcmUuY2xhc3NOYW1lID0gJ3JlYWRNb3JlQnRuJztcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChyZWFkTW9yZSk7XG4gICAgICByZWFkTW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHJlYWRNb3JlLmlubmVySFRNTCA9PT0gJ1JlYWQgTW9yZScpIHtcbiAgICAgICAgICByZWFkTW9yZS5pbm5lckhUTUwgPSAnUmVhZCBMZXNzJztcbiAgICAgICAgICBtb3ZpZVN1bW1hcnkuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnN1bW1hcnl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWFkTW9yZS5pbm5lckhUTUwgPSAnUmVhZCBNb3JlJztcbiAgICAgICAgICBtb3ZpZVN1bW1hcnkuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnN1bW1hcnkuc3Vic3RyaW5nKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDQwMCxcbiAgICAgICAgICApfS4uLi4uLmA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfSk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1vdmllTW9kYWw7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvc3RyZWFtLWl0LWNhcHN0b25lL1wiOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldE1vdmllcyBmcm9tICcuL21vZHVsZXMvZ2V0LW1vdmllcy5qcyc7XG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tICcuL21vZHVsZXMvZGlzcGxheS1tb3ZpZXMuanMnO1xuaW1wb3J0IG1vdmllTW9kYWwgZnJvbSAnLi9tb2R1bGVzL21vdmllLW1vZGFsLmpzJztcbmltcG9ydCBjb3VudE1vdmllcyBmcm9tICcuL21vZHVsZXMvbW92aWUtY291bnRlci5qcyc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9tb3ZpZS1pY29uLnBuZyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsb2dvSW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28taW1nJyk7XG4gIGNvbnN0IGxvZ29JY29uID0gbmV3IEltYWdlKCk7XG4gIGxvZ29JY29uLnNyYyA9IExvZ287XG4gIGxvZ29JbWdEaXYuYXBwZW5kQ2hpbGQobG9nb0ljb24pO1xuXG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IGdldE1vdmllcygpO1xuICBjb25zdCBzYW1wbGVNb3ZpZXMgPSBtb3ZpZXMuc2xpY2UoMTIsIDYwKTtcbiAgYXdhaXQgZGlzcGxheU1vdmllcyhzYW1wbGVNb3ZpZXMpO1xuXG4gIGNvbnN0IG1vdmllTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1saXN0Jyk7XG5cbiAgbW92aWVMaXN0LmlubmVySFRNTCA9IGBXZSBjdXJyZW50bHkgaGF2ZSA8c3Bhbj4gJHtjb3VudE1vdmllcyhzYW1wbGVNb3ZpZXMpfSA8c3Bhbj4gbW92aWVzYDtcblxuICBjb25zdCBjb21tZW50QnV0dG9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudEJ0bicpXTtcbiAgY29uc3Qgdmlld0RldGFpbHNCdXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vdmVsYXktZGV0YWlscy1idG4nKV07XG4gIG1vdmllTW9kYWwoY29tbWVudEJ1dHRvbnMsIHNhbXBsZU1vdmllcyk7XG4gIG1vdmllTW9kYWwodmlld0RldGFpbHNCdXR0b25zLCBzYW1wbGVNb3ZpZXMpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9