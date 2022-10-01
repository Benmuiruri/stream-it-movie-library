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
___CSS_LOADER_EXPORT___.push([module.id, "/* Global Styles */\n:root {\n  --primary-green: #6ac045;\n  --background-grey: #1d1d1d;\n  --text-grey: #919191;\n  --header-font: 'Poppins', sans-serif;\n  --body-font: 'Raleway', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: var(--body-font);\n  background-color: #1d1d1d;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n}\n\n/* Header Styles */\n\n.header {\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 5rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #000;\n  color: #919191;\n}\n\n.logo-img {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n}\n\n.nav-ul {\n  display: flex;\n}\n\n.nav-ul li {\n  list-style: none;\n  margin-right: 65px;\n  padding: 1.1em 0;\n}\n\n.nav-ul li a {\n  color: #919191;\n  font-size: 1.2rem;\n  font-family: var(--header-font);\n}\n\n.header-link {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  font-family: var(--header-font);\n  font-size: 2.5em;\n  font-weight: bold;\n}\n\n.header-link span {\n  color: var(--primary-green);\n  font-size: 1em;\n}\n\n.search {\n  width: 100%;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: var(--primary-green);\n}\n\n.search:focus {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid var(--primary-green);\n  color: #fff;\n}\n\n.title {\n  border: 2px solid black;\n  border-radius: 50%;\n}\n\n/* Call out styles */\n\n.callout {\n  padding-top: 1.2em;\n}\n\n.callout-content {\n  margin: 0 auto;\n  width: 55%;\n  color: #fff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 2em;\n  margin-bottom: 2em;\n}\n\n.callout-header {\n  text-align: center;\n  font-family: var(--header-font);\n  font-size: 2.75em;\n  font-weight: 700;\n  text-shadow: 0 2px 2px rgb(0 0 0 / 40%);\n  margin: 0.5em 0;\n}\n\n.callout-copy {\n  color: #ccc;\n  width: 65%;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.5px;\n  margin-bottom: 1.3em;\n  text-align: center;\n}\n\n.callout-info {\n  font-size: 1em;\n  font-weight: 700;\n  color: var(--primary-green);\n  margin: 0 auto;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n/* Movie section styles */\n\n.movie-section-title {\n  text-align: center;\n  color: #fff;\n  padding-bottom: 1.2em;\n}\n\n.movie-section-title span {\n  font-size: 1.15em;\n  font-weight: 700;\n}\n\n.fa-star {\n  color: var(--primary-green);\n  padding-right: 0.4em;\n}\n\n.movie-list {\n  padding: 1em 0;\n}\n\n.movie-list span {\n  color: var(--primary-green);\n}\n\n.movies {\n  margin: 0 auto;\n  width: 65%;\n  color: #fff;\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-gap: 20px 20px;\n  grid-auto-flow: row;\n}\n\n/* Movie Wrapper overlay styles */\n.movie-image-div {\n  position: relative;\n  border: 4px solid #fff;\n}\n\n.movie-image-div:hover {\n  border: 4px solid var(--primary-green);\n}\n\n.details-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-family: var(--body-font);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.35s;\n}\n\n.details-overlay > * {\n  transform: translateY(20px);\n  transition: transform 0.35s;\n}\n\n.details-overlay:hover {\n  opacity: 1;\n}\n\n.details-overlay:hover > * {\n  transform: translateY(0);\n}\n\n.movie-image {\n  display: block;\n  width: 100%;\n}\n\n.overlay-star {\n  padding-bottom: 0.2em;\n}\n\n.movie-overlay-rating {\n  padding-bottom: 1.1em;\n  font-size: 1.7em;\n  font-weight: bold;\n}\n\n.movie-overlay-genre {\n  padding-bottom: 1.1em;\n  font-size: 2.3em;\n  font-weight: bold;\n}\n\n.ovelay-details-btn {\n  color: #fff;\n  padding: 0.5em 1.3em;\n  background: var(--primary-green);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n/* Movie Wrapper styles */\n.movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 0.8em;\n}\n\n.movie-title {\n  padding: 0.5em 0;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1em;\n  align-items: center;\n}\n\n.fa-heart:hover {\n  color: var(--primary-green);\n}\n\n.movie-likes {\n  padding-left: 0.5em;\n}\n\n.commentBtn {\n  color: #fff;\n  padding: 0.5em;\n  background: #36b37f;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  box-shadow: 0 8px 16px #36b37f3d;\n}\n\n.commentBtn:active {\n  background: #2f470a;\n  transform: translateY(2px);\n}\n\n/* Movie Modal styles */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(32, 32, 32, 0.95);\n  cursor: pointer;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.35s ease-in;\n}\n\n.modal.is-visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-dialog {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  flex-basis: 60%;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: 3rem;\n  width: 55vw;\n  height: 95%;\n  border-radius: 5px;\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\n  overflow: auto;\n  cursor: default;\n  margin: 5em;\n  padding: 3em;\n}\n\n/* PopUp styles */\n.popUp-button {\n  width: 40%;\n  margin: 1rem;\n  background-color: var(--primary-green);\n  border: 2px solid #4b962b;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #fff;\n  font-family: inherit;\n}\n\n.popUp-button:hover {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid var(--primary-green);\n  color: #fff;\n}\n\n.movieCard {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.buttonDiv {\n  display: flex;\n  flex-direction: row;\n}\n\n.movieCard-img {\n  width: 100%;\n  border: 4px solid #fff;\n}\n\n.movieContent {\n  width: 40%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.popUp-title {\n  font-size: 3em;\n  padding-bottom: 0.5em;\n}\n\n.popUp-Genre {\n  color: #4b962b;\n  padding-bottom: 0.5em;\n}\n\n.popUp-releaseDate {\n  font-size: 1rem;\n  color: #ffffff81;\n  padding-bottom: 2em;\n}\n\n.popUp-summary {\n  color: #ccc;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.8px;\n  margin-bottom: 1.3em;\n}\n\n.subtitle-button {\n  width: 70%;\n  margin: 1rem 0;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #fff;\n  margin-bottom: 4em;\n}\n\n.readMoreBtn {\n  width: 40%;\n  margin: 1rem 0;\n  background-color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: #414141;\n}\n\n.close-proj-modal {\n  border-radius: 50%;\n  padding: 0.5em;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #555;\n  color: #fff;\n  position: absolute;\n  top: 20px;\n  right: 30px;\n}\n\n.close-proj-modal:hover {\n  border: 2px solid #fff;\n  background-color: #414141;\n  color: #fff;\n}\n\n.close-proj-modal::before {\n  content: ' ';\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  width: 2px;\n  left: 12px;\n  top: 5px;\n  bottom: 5px;\n  transform: rotate(45deg);\n}\n\n.close-proj-modal::after {\n  content: ' ';\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  height: 2px;\n  top: 12px;\n  left: 5px;\n  right: 5px;\n  transform: rotate(45deg);\n}\n\n/* Modal comments styles */\n.comment-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 3rem;\n  flex-basis: 100%;\n  gap: 2rem;\n  background-color: #1d1d1d;\n}\n\n.comments-count {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: var(--header-font);\n}\n\n.display-comments {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-container {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  background-color: #171717;\n  padding: 1em;\n}\n\n.author-thumbnail {\n  flex: none;\n  margin-right: 12px;\n}\n\n.user-name-link {\n  background-color: #00579c;\n  border-radius: 99px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.8em;\n  padding-top: 10px;\n  text-align: center;\n  text-decoration: none;\n  width: 1.6em;\n}\n\n.user-name-link span {\n  vertical-align: middle;\n}\n\n.user-name {\n  background-color: #2b2b2b;\n}\n\n.comment-main {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n#comment-header {\n  margin-bottom: 2px;\n}\n\n#header-author {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n#author-text {\n  margin-right: 10px;\n  color: #919191;\n  margin-bottom: 2px;\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n#comment-date {\n  color: #606060;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n}\n\n#comment-text {\n  color: #fff;\n  word-wrap: break-word;\n  font-size: 14px;\n  height: 20px;\n  line-height: 1.4rem;\n  font-weight: 400;\n}\n\n.add-comment {\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 300px;\n  width: 100%;\n}\n\n.add-comment h2 {\n  display: block;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.add-comment-header {\n  display: flex;\n  align-items: center;\n}\n\n.fa-message {\n  padding-right: 1em;\n  color: var(--primary-green);\n}\n\n/* Comment form styles */\n.add-comment-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: hidden;\n  background-color: #171717;\n  padding: 2em;\n  border-radius: 10px;\n}\n\ninput,\ntextarea {\n  font-family: var(--header-font);\n  width: 100%;\n  color: #fff;\n  border: 1px solid #1d1d1d;\n  background: #2b2b2b;\n  margin: 0 0 5px;\n  padding: 10px;\n}\n\ntextarea {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n\ninput,\ntextarea:hover {\n  -webkit-transition: border-color 0.3s ease-in-out;\n  -moz-transition: border-color 0.3s ease-in-out;\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid var(--primary-green);\n}\n\n.comment-btn {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: var(--primary-green);\n  color: #fff;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.comment-btn:active {\n  background: #2f470a;\n  transform: translateY(2px);\n}\n\n.comment-btn:hover {\n  background: #43a047;\n  -webkit-transition: background 0.3s ease-in-out;\n  -moz-transition: background 0.3s ease-in-out;\n  transition: background-color 0.3s ease-in-out;\n}\n\n/* Footer Styles */\nfooter {\n  margin-top: auto;\n  background: #000;\n}\n\nfooter p {\n  padding: 2em;\n  text-align: center;\n  font-size: 1.3em;\n  color: #fff;\n}\n\n.footer-link {\n  color: var(--primary-green);\n  font-size: 1.1em;\n}\n\n/* Mobile Styles */\n@media screen and (max-width: 800px) {\n  .movies {\n    display: grid;\n    grid-gap: 20px 20px;\n    grid-template-columns: 100%;\n  }\n\n  #idform {\n    display: none;\n  }\n\n  .buttonDiv {\n    flex-direction: column;\n  }\n\n  .popUp-button {\n    width: auto;\n    font-size: 0.8em;\n  }\n\n  .popUp-title {\n    font-size: 2em;\n  }\n\n  .subtitle-button {\n    width: auto;\n  }\n\n  .movie-overlay-rating {\n    font-size: 1.4em;\n  }\n\n  .popUp-summary {\n    width: auto;\n  }\n\n  .modal-dialog {\n    width: 85vw;\n    padding: 1em;\n    margin: 0.5em;\n    gap: 1em;\n    flex-basis: 90%;\n  }\n\n  .comment-section {\n    flex-direction: column;\n    padding: 0;\n  }\n\n  .readMoreBtn {\n    width: auto;\n  }\n\n  .movieContent {\n    width: auto;\n  }\n\n  .comment-container {\n    flex-direction: column;\n  }\n\n  .display-comments {\n    width: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\n:root {\n  --primary-green: #6ac045;\n  --background-grey: #1d1d1d;\n  --text-grey: #919191;\n  --header-font: 'Poppins', sans-serif;\n  --body-font: 'Raleway', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: var(--body-font);\n  background-color: #1d1d1d;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n}\n\n/* Header Styles */\n\n.header {\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 5rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #000;\n  color: #919191;\n}\n\n.logo-img {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n}\n\n.nav-ul {\n  display: flex;\n}\n\n.nav-ul li {\n  list-style: none;\n  margin-right: 65px;\n  padding: 1.1em 0;\n}\n\n.nav-ul li a {\n  color: #919191;\n  font-size: 1.2rem;\n  font-family: var(--header-font);\n}\n\n.header-link {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  font-family: var(--header-font);\n  font-size: 2.5em;\n  font-weight: bold;\n}\n\n.header-link span {\n  color: var(--primary-green);\n  font-size: 1em;\n}\n\n.search {\n  width: 100%;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: var(--primary-green);\n}\n\n.search:focus {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid var(--primary-green);\n  color: #fff;\n}\n\n.title {\n  border: 2px solid black;\n  border-radius: 50%;\n}\n\n/* Call out styles */\n\n.callout {\n  padding-top: 1.2em;\n}\n\n.callout-content {\n  margin: 0 auto;\n  width: 55%;\n  color: #fff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 2em;\n  margin-bottom: 2em;\n}\n\n.callout-header {\n  text-align: center;\n  font-family: var(--header-font);\n  font-size: 2.75em;\n  font-weight: 700;\n  text-shadow: 0 2px 2px rgb(0 0 0 / 40%);\n  margin: 0.5em 0;\n}\n\n.callout-copy {\n  color: #ccc;\n  width: 65%;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.5px;\n  margin-bottom: 1.3em;\n  text-align: center;\n}\n\n.callout-info {\n  font-size: 1em;\n  font-weight: 700;\n  color: var(--primary-green);\n  margin: 0 auto;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n/* Movie section styles */\n\n.movie-section-title {\n  text-align: center;\n  color: #fff;\n  padding-bottom: 1.2em;\n}\n\n.movie-section-title span {\n  font-size: 1.15em;\n  font-weight: 700;\n}\n\n.fa-star {\n  color: var(--primary-green);\n  padding-right: 0.4em;\n}\n\n.movie-list {\n  padding: 1em 0;\n}\n\n.movie-list span {\n  color: var(--primary-green);\n}\n\n.movies {\n  margin: 0 auto;\n  width: 65%;\n  color: #fff;\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-gap: 20px 20px;\n  grid-auto-flow: row;\n}\n\n/* Movie Wrapper overlay styles */\n.movie-image-div {\n  position: relative;\n  border: 4px solid #fff;\n}\n\n.movie-image-div:hover {\n  border: 4px solid var(--primary-green);\n}\n\n.details-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-family: var(--body-font);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.35s;\n}\n\n.details-overlay > * {\n  transform: translateY(20px);\n  transition: transform 0.35s;\n}\n\n.details-overlay:hover {\n  opacity: 1;\n}\n\n.details-overlay:hover > * {\n  transform: translateY(0);\n}\n\n.movie-image {\n  display: block;\n  width: 100%;\n}\n\n.overlay-star {\n  padding-bottom: 0.2em;\n}\n\n.movie-overlay-rating {\n  padding-bottom: 1.1em;\n  font-size: 1.7em;\n  font-weight: bold;\n}\n\n.movie-overlay-genre {\n  padding-bottom: 1.1em;\n  font-size: 2.3em;\n  font-weight: bold;\n}\n\n.ovelay-details-btn {\n  color: #fff;\n  padding: 0.5em 1.3em;\n  background: var(--primary-green);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n/* Movie Wrapper styles */\n.movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 0.8em;\n}\n\n.movie-title {\n  padding: 0.5em 0;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1em;\n  align-items: center;\n}\n\n.fa-heart:hover {\n  color: var(--primary-green);\n}\n\n.movie-likes {\n  padding-left: 0.5em;\n}\n\n.commentBtn {\n  color: #fff;\n  padding: 0.5em;\n  background: #36b37f;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  box-shadow: 0 8px 16px #36b37f3d;\n}\n\n.commentBtn:active {\n  background: #2f470a;\n  transform: translateY(2px);\n}\n\n/* Movie Modal styles */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(32, 32, 32, 0.95);\n  cursor: pointer;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.35s ease-in;\n}\n\n.modal.is-visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-dialog {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  flex-basis: 60%;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: 3rem;\n  width: 55vw;\n  height: 95%;\n  border-radius: 5px;\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\n  overflow: auto;\n  cursor: default;\n  margin: 5em;\n  padding: 3em;\n}\n\n/* PopUp styles */\n.popUp-button {\n  width: 40%;\n  margin: 1rem;\n  background-color: var(--primary-green);\n  border: 2px solid #4b962b;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #fff;\n  font-family: inherit;\n}\n\n.popUp-button:hover {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid var(--primary-green);\n  color: #fff;\n}\n\n.movieCard {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.buttonDiv {\n  display: flex;\n  flex-direction: row;\n}\n\n.movieCard-img {\n  width: 100%;\n  border: 4px solid #fff;\n}\n\n.movieContent {\n  width: 40%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.popUp-title {\n  font-size: 3em;\n  padding-bottom: 0.5em;\n}\n\n.popUp-Genre {\n  color: #4b962b;\n  padding-bottom: 0.5em;\n}\n\n.popUp-releaseDate {\n  font-size: 1rem;\n  color: #ffffff81;\n  padding-bottom: 2em;\n}\n\n.popUp-summary {\n  color: #ccc;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.8px;\n  margin-bottom: 1.3em;\n}\n\n.subtitle-button {\n  width: 70%;\n  margin: 1rem 0;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #fff;\n  margin-bottom: 4em;\n}\n\n.readMoreBtn {\n  width: 40%;\n  margin: 1rem 0;\n  background-color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: #414141;\n}\n\n.close-proj-modal {\n  border-radius: 50%;\n  padding: 0.5em;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #555;\n  color: #fff;\n  position: absolute;\n  top: 20px;\n  right: 30px;\n}\n\n.close-proj-modal:hover {\n  border: 2px solid #fff;\n  background-color: #414141;\n  color: #fff;\n}\n\n.close-proj-modal::before {\n  content: ' ';\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  width: 2px;\n  left: 12px;\n  top: 5px;\n  bottom: 5px;\n  transform: rotate(45deg);\n}\n\n.close-proj-modal::after {\n  content: ' ';\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  height: 2px;\n  top: 12px;\n  left: 5px;\n  right: 5px;\n  transform: rotate(45deg);\n}\n\n/* Modal comments styles */\n.comment-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 3rem;\n  flex-basis: 100%;\n  gap: 2rem;\n  background-color: #1d1d1d;\n}\n\n.comments-count {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: var(--header-font);\n}\n\n.display-comments {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-container {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  background-color: #171717;\n  padding: 1em;\n}\n\n.author-thumbnail {\n  flex: none;\n  margin-right: 12px;\n}\n\n.user-name-link {\n  background-color: #00579c;\n  border-radius: 99px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.8em;\n  padding-top: 10px;\n  text-align: center;\n  text-decoration: none;\n  width: 1.6em;\n}\n\n.user-name-link span {\n  vertical-align: middle;\n}\n\n.user-name {\n  background-color: #2b2b2b;\n}\n\n.comment-main {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n#comment-header {\n  margin-bottom: 2px;\n}\n\n#header-author {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n#author-text {\n  margin-right: 10px;\n  color: #919191;\n  margin-bottom: 2px;\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n#comment-date {\n  color: #606060;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n}\n\n#comment-text {\n  color: #fff;\n  word-wrap: break-word;\n  font-size: 14px;\n  height: 20px;\n  line-height: 1.4rem;\n  font-weight: 400;\n}\n\n.add-comment {\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 300px;\n  width: 100%;\n}\n\n.add-comment h2 {\n  display: block;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.add-comment-header {\n  display: flex;\n  align-items: center;\n}\n\n.fa-message {\n  padding-right: 1em;\n  color: var(--primary-green);\n}\n\n/* Comment form styles */\n.add-comment-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: hidden;\n  background-color: #171717;\n  padding: 2em;\n  border-radius: 10px;\n}\n\ninput,\ntextarea {\n  font-family: var(--header-font);\n  width: 100%;\n  color: #fff;\n  border: 1px solid #1d1d1d;\n  background: #2b2b2b;\n  margin: 0 0 5px;\n  padding: 10px;\n}\n\ntextarea {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n\ninput,\ntextarea:hover {\n  -webkit-transition: border-color 0.3s ease-in-out;\n  -moz-transition: border-color 0.3s ease-in-out;\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid var(--primary-green);\n}\n\n.comment-btn {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: var(--primary-green);\n  color: #fff;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.comment-btn:active {\n  background: #2f470a;\n  transform: translateY(2px);\n}\n\n.comment-btn:hover {\n  background: #43a047;\n  -webkit-transition: background 0.3s ease-in-out;\n  -moz-transition: background 0.3s ease-in-out;\n  transition: background-color 0.3s ease-in-out;\n}\n\n/* Footer Styles */\nfooter {\n  margin-top: auto;\n  background: #000;\n}\n\nfooter p {\n  padding: 2em;\n  text-align: center;\n  font-size: 1.3em;\n  color: #fff;\n}\n\n.footer-link {\n  color: var(--primary-green);\n  font-size: 1.1em;\n}\n\n/* Mobile Styles */\n@media screen and (max-width: 800px) {\n  .movies {\n    display: grid;\n    grid-gap: 20px 20px;\n    grid-template-columns: 100%;\n  }\n\n  #idform {\n    display: none;\n  }\n\n  .buttonDiv {\n    flex-direction: column;\n  }\n\n  .popUp-button {\n    width: auto;\n    font-size: 0.8em;\n  }\n\n  .popUp-title {\n    font-size: 2em;\n  }\n\n  .subtitle-button {\n    width: auto;\n  }\n\n  .movie-overlay-rating {\n    font-size: 1.4em;\n  }\n\n  .popUp-summary {\n    width: auto;\n  }\n\n  .modal-dialog {\n    width: 85vw;\n    padding: 1em;\n    margin: 0.5em;\n    gap: 1em;\n    flex-basis: 90%;\n  }\n\n  .comment-section {\n    flex-direction: column;\n    padding: 0;\n  }\n\n  .readMoreBtn {\n    width: auto;\n  }\n\n  .movieContent {\n    width: auto;\n  }\n\n  .comment-container {\n    flex-direction: column;\n  }\n\n  .display-comments {\n    width: auto;\n  }\n}\n"],"sourceRoot":""}]);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtB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OztBQUUvRTtBQUNBO0FBQ0EsRUFBRSxtRUFBVTtBQUNaLEVBQUUsbUVBQVU7QUFDWixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJlYW0taXQtbW92aWUtbGlicmFyeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1tb3ZpZS1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1tb3ZpZS1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1tb3ZpZS1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1tb3ZpZS1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtbW92aWUtbGlicmFyeS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LWNvbW1lbnRzLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1tb3ZpZS1saWJyYXJ5Ly4vc3JjL21vZHVsZXMvZGlzcGxheS1tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9zcmMvbW9kdWxlcy9nZXQtbW92aWVzLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1tb3ZpZS1saWJyYXJ5Ly4vc3JjL21vZHVsZXMvbGlrZXMtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtbW92aWUtbGlicmFyeS8uL3NyYy9tb2R1bGVzL21vdmllLWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9zcmMvbW9kdWxlcy9tb3ZpZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtbW92aWUtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtbW92aWUtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtbW92aWUtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtbW92aWUtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0cmVhbS1pdC1tb3ZpZS1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LW1vdmllLWxpYnJhcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgU3R5bGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWdyZWVuOiAjNmFjMDQ1O1xcbiAgLS1iYWNrZ3JvdW5kLWdyZXk6ICMxZDFkMWQ7XFxuICAtLXRleHQtZ3JleTogIzkxOTE5MTtcXG4gIC0taGVhZGVyLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tYm9keS1mb250OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG59XFxuXFxuaHRtbCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiAxcmVtIDVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjOTE5MTkxO1xcbn1cXG5cXG4ubG9nby1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLm5hdi11bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2LXVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDY1cHg7XFxuICBwYWRkaW5nOiAxLjFlbSAwO1xcbn1cXG5cXG4ubmF2LXVsIGxpIGEge1xcbiAgY29sb3I6ICM5MTkxOTE7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkZXItZm9udCk7XFxufVxcblxcbi5oZWFkZXItbGluayB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRlci1saW5rIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5zZWFyY2gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuXFxuLnNlYXJjaDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50aXRsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogQ2FsbCBvdXQgc3R5bGVzICovXFxuXFxuLmNhbGxvdXQge1xcbiAgcGFkZGluZy10b3A6IDEuMmVtO1xcbn1cXG5cXG4uY2FsbG91dC1jb250ZW50IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDU1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5jYWxsb3V0LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbiAgZm9udC1zaXplOiAyLjc1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCAwIDAgLyA0MCUpO1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cXG5cXG4uY2FsbG91dC1jb3B5IHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYWxsb3V0LWluZm8ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE1vdmllIHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLWJvdHRvbTogMS4yZW07XFxufVxcblxcbi5tb3ZpZS1zZWN0aW9uLXRpdGxlIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjE1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZmEtc3RhciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjRlbTtcXG59XFxuXFxuLm1vdmllLWxpc3Qge1xcbiAgcGFkZGluZzogMWVtIDA7XFxufVxcblxcbi5tb3ZpZS1saXN0IHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5cXG4ubW92aWVzIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDIzJSAyMyUgMjMlO1xcbiAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbi8qIE1vdmllIFdyYXBwZXIgb3ZlcmxheSBzdHlsZXMgKi9cXG4ubW92aWUtaW1hZ2UtZGl2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5tb3ZpZS1pbWFnZS1kaXY6aG92ZXIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXkgPiAqIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcXG59XFxuXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZGV0YWlscy1vdmVybGF5OmhvdmVyID4gKiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5tb3ZpZS1pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcmxheS1zdGFyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcXG59XFxuXFxuLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vdmllLW92ZXJsYXktZ2VucmUge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtO1xcbiAgZm9udC1zaXplOiAyLjNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ub3ZlbGF5LWRldGFpbHMtYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41ZW0gMS4zZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNb3ZpZSBXcmFwcGVyIHN0eWxlcyAqL1xcbi5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC44ZW07XFxufVxcblxcbi5tb3ZpZS10aXRsZSB7XFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuXFxuLm1vdmllLWxpa2VzIHtcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbi5jb21tZW50QnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBiYWNrZ3JvdW5kOiAjMzZiMzdmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50QnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggIzM2YjM3ZjNkO1xcbn1cXG5cXG4uY29tbWVudEJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG4vKiBNb3ZpZSBNb2RhbCBzdHlsZXMgKi9cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDMyLCAzMiwgMC45NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW47XFxufVxcblxcbi5tb2RhbC5pcy12aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWJhc2lzOiA2MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAzcmVtO1xcbiAgd2lkdGg6IDU1dnc7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NS4zNGRlZywgIzJiMmIyYiA2NSUsICMwMDI0MDAgOTQuMzUlKTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgbWFyZ2luOiA1ZW07XFxuICBwYWRkaW5nOiAzZW07XFxufVxcblxcbi8qIFBvcFVwIHN0eWxlcyAqL1xcbi5wb3BVcC1idXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiOTYyYjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnBvcFVwLWJ1dHRvbjpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb3ZpZUNhcmQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5idXR0b25EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb3ZpZUNhcmQtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG59XFxuXFxuLm1vdmllQ29udGVudCB7XFxuICB3aWR0aDogNDAlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wb3BVcC10aXRsZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnBvcFVwLUdlbnJlIHtcXG4gIGNvbG9yOiAjNGI5NjJiO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4ucG9wVXAtcmVsZWFzZURhdGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICNmZmZmZmY4MTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxufVxcblxcbi5wb3BVcC1zdW1tYXJ5IHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsaW5lLWhlaWdodDogMS40ZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxLjNlbTtcXG59XFxuXFxuLnN1YnRpdGxlLWJ1dHRvbiB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1ib3R0b206IDRlbTtcXG59XFxuXFxuLnJlYWRNb3JlQnRuIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjNDE0MTQxO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbCB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsOjpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgd2lkdGg6IDJweDtcXG4gIGxlZnQ6IDEycHg7XFxuICB0b3A6IDVweDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBNb2RhbCBjb21tZW50cyBzdHlsZXMgKi9cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBnYXA6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbn1cXG5cXG4uY29tbWVudHMtY291bnQge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbn1cXG5cXG4uZGlzcGxheS1jb21tZW50cyB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uYXV0aG9yLXRodW1ibmFpbCB7XFxuICBmbGV4OiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4udXNlci1uYW1lLWxpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTc5YztcXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aWR0aDogMS42ZW07XFxufVxcblxcbi51c2VyLW5hbWUtbGluayBzcGFuIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi51c2VyLW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcXG59XFxuXFxuLmNvbW1lbnQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb21tZW50LWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbiNoZWFkZXItYXV0aG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4jYXV0aG9yLXRleHQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY29sb3I6ICM5MTkxOTE7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNjb21tZW50LWRhdGUge1xcbiAgY29sb3I6ICM2MDYwNjA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4jY29tbWVudC10ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5hZGQtY29tbWVudCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQgaDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmEtbWVzc2FnZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcblxcbi8qIENvbW1lbnQgZm9ybSBzdHlsZXMgKi9cXG4uYWRkLWNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZDFkMWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcbiAgbWFyZ2luOiAwIDAgNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWE6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwIDAgNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMmY0NzBhO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxlcyAqL1xcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLyogTW9iaWxlIFN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubW92aWVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgfVxcblxcbiAgI2lkZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYnV0dG9uRGl2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wb3BVcC1idXR0b24ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgfVxcblxcbiAgLnN1YnRpdGxlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcC1zdW1tYXJ5IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAubW9kYWwtZGlhbG9nIHtcXG4gICAgd2lkdGg6IDg1dnc7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luOiAwLjVlbTtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGZsZXgtYmFzaXM6IDkwJTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LXNlY3Rpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnJlYWRNb3JlQnRuIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAubW92aWVDb250ZW50IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAuY29tbWVudC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmRpc3BsYXktY29tbWVudHMge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FB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Q2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHbG9iYWwgU3R5bGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWdyZWVuOiAjNmFjMDQ1O1xcbiAgLS1iYWNrZ3JvdW5kLWdyZXk6ICMxZDFkMWQ7XFxuICAtLXRleHQtZ3JleTogIzkxOTE5MTtcXG4gIC0taGVhZGVyLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tYm9keS1mb250OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG59XFxuXFxuaHRtbCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiAxcmVtIDVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjOTE5MTkxO1xcbn1cXG5cXG4ubG9nby1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLm5hdi11bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2LXVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDY1cHg7XFxuICBwYWRkaW5nOiAxLjFlbSAwO1xcbn1cXG5cXG4ubmF2LXVsIGxpIGEge1xcbiAgY29sb3I6ICM5MTkxOTE7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkZXItZm9udCk7XFxufVxcblxcbi5oZWFkZXItbGluayB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRlci1saW5rIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5zZWFyY2gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuXFxuLnNlYXJjaDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50aXRsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogQ2FsbCBvdXQgc3R5bGVzICovXFxuXFxuLmNhbGxvdXQge1xcbiAgcGFkZGluZy10b3A6IDEuMmVtO1xcbn1cXG5cXG4uY2FsbG91dC1jb250ZW50IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDU1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5jYWxsb3V0LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbiAgZm9udC1zaXplOiAyLjc1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCAwIDAgLyA0MCUpO1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cXG5cXG4uY2FsbG91dC1jb3B5IHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYWxsb3V0LWluZm8ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE1vdmllIHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLWJvdHRvbTogMS4yZW07XFxufVxcblxcbi5tb3ZpZS1zZWN0aW9uLXRpdGxlIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjE1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZmEtc3RhciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjRlbTtcXG59XFxuXFxuLm1vdmllLWxpc3Qge1xcbiAgcGFkZGluZzogMWVtIDA7XFxufVxcblxcbi5tb3ZpZS1saXN0IHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5cXG4ubW92aWVzIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDIzJSAyMyUgMjMlO1xcbiAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbi8qIE1vdmllIFdyYXBwZXIgb3ZlcmxheSBzdHlsZXMgKi9cXG4ubW92aWUtaW1hZ2UtZGl2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5tb3ZpZS1pbWFnZS1kaXY6aG92ZXIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXkgPiAqIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcXG59XFxuXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZGV0YWlscy1vdmVybGF5OmhvdmVyID4gKiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5tb3ZpZS1pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcmxheS1zdGFyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcXG59XFxuXFxuLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vdmllLW92ZXJsYXktZ2VucmUge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtO1xcbiAgZm9udC1zaXplOiAyLjNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ub3ZlbGF5LWRldGFpbHMtYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41ZW0gMS4zZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNb3ZpZSBXcmFwcGVyIHN0eWxlcyAqL1xcbi5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC44ZW07XFxufVxcblxcbi5tb3ZpZS10aXRsZSB7XFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuXFxuLm1vdmllLWxpa2VzIHtcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbi5jb21tZW50QnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBiYWNrZ3JvdW5kOiAjMzZiMzdmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50QnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggIzM2YjM3ZjNkO1xcbn1cXG5cXG4uY29tbWVudEJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG4vKiBNb3ZpZSBNb2RhbCBzdHlsZXMgKi9cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDMyLCAzMiwgMC45NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW47XFxufVxcblxcbi5tb2RhbC5pcy12aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWJhc2lzOiA2MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAzcmVtO1xcbiAgd2lkdGg6IDU1dnc7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NS4zNGRlZywgIzJiMmIyYiA2NSUsICMwMDI0MDAgOTQuMzUlKTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgbWFyZ2luOiA1ZW07XFxuICBwYWRkaW5nOiAzZW07XFxufVxcblxcbi8qIFBvcFVwIHN0eWxlcyAqL1xcbi5wb3BVcC1idXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiOTYyYjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnBvcFVwLWJ1dHRvbjpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb3ZpZUNhcmQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5idXR0b25EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb3ZpZUNhcmQtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG59XFxuXFxuLm1vdmllQ29udGVudCB7XFxuICB3aWR0aDogNDAlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wb3BVcC10aXRsZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnBvcFVwLUdlbnJlIHtcXG4gIGNvbG9yOiAjNGI5NjJiO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4ucG9wVXAtcmVsZWFzZURhdGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICNmZmZmZmY4MTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxufVxcblxcbi5wb3BVcC1zdW1tYXJ5IHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsaW5lLWhlaWdodDogMS40ZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxLjNlbTtcXG59XFxuXFxuLnN1YnRpdGxlLWJ1dHRvbiB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1ib3R0b206IDRlbTtcXG59XFxuXFxuLnJlYWRNb3JlQnRuIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjNDE0MTQxO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbCB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsOjpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgd2lkdGg6IDJweDtcXG4gIGxlZnQ6IDEycHg7XFxuICB0b3A6IDVweDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBNb2RhbCBjb21tZW50cyBzdHlsZXMgKi9cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBnYXA6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbn1cXG5cXG4uY29tbWVudHMtY291bnQge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbn1cXG5cXG4uZGlzcGxheS1jb21tZW50cyB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uYXV0aG9yLXRodW1ibmFpbCB7XFxuICBmbGV4OiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4udXNlci1uYW1lLWxpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTc5YztcXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aWR0aDogMS42ZW07XFxufVxcblxcbi51c2VyLW5hbWUtbGluayBzcGFuIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi51c2VyLW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcXG59XFxuXFxuLmNvbW1lbnQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb21tZW50LWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbiNoZWFkZXItYXV0aG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4jYXV0aG9yLXRleHQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY29sb3I6ICM5MTkxOTE7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNjb21tZW50LWRhdGUge1xcbiAgY29sb3I6ICM2MDYwNjA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4jY29tbWVudC10ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5hZGQtY29tbWVudCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQgaDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmEtbWVzc2FnZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcblxcbi8qIENvbW1lbnQgZm9ybSBzdHlsZXMgKi9cXG4uYWRkLWNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZDFkMWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcbiAgbWFyZ2luOiAwIDAgNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWE6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwIDAgNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMmY0NzBhO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxlcyAqL1xcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLyogTW9iaWxlIFN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubW92aWVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgfVxcblxcbiAgI2lkZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYnV0dG9uRGl2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wb3BVcC1idXR0b24ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgfVxcblxcbiAgLnN1YnRpdGxlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcC1zdW1tYXJ5IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAubW9kYWwtZGlhbG9nIHtcXG4gICAgd2lkdGg6IDg1dnc7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luOiAwLjVlbTtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGZsZXgtYmFzaXM6IDkwJTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LXNlY3Rpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnJlYWRNb3JlQnRuIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAubW92aWVDb250ZW50IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAuY29tbWVudC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmRpc3BsYXktY29tbWVudHMge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBAdHMtaWdub3JlXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IGFwcElEID0gJ3o4eXNVRlpNdEx4SXY2T0J3RWw5JztcbmNvbnN0IGVuZFBvaW50ID0gYCR7VVJMfS9hcHBzLyR7YXBwSUR9L2NvbW1lbnRzL2A7XG5cbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGJ1dHRvbklkLCB1c2VyTmFtZSwgdXNlckNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBidXR0b25JZCxcbiAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IHVzZXJDb21tZW50LnZhbHVlLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXMudGV4dCgpO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtlbmRQb2ludH0/aXRlbV9pZD0ke2lkfWApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IHsgcG9zdENvbW1lbnQsIGdldENvbW1lbnRzIH07XG4iLCJjb25zdCBkaXNwbGF5Q29tbWVudHMgPSAoY29tbWVudHNEaXYsIGNvbW1lbnRzKSA9PiB7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xuICAgIGNvbW1lbnRzRGl2LmlubmVySFRNTCA9IGA8aDMgY2xhc3M9Y29tbWVudHMtY291bnQ+ICR7Y29tbWVudHMubGVuZ3RofSBDb21tZW50czwvaDM+YDtcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb21tZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb21tZW50LWNvbnRhaW5lcic7XG4gICAgICBjb25zdCB1c2VyVGh1bWJuYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB1c2VyVGh1bWJuYWlsLmNsYXNzTmFtZSA9ICdhdXRob3ItdGh1bWJuYWlsJztcbiAgICAgIGNvbnN0IHRodW1ibmFpbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB0aHVtYm5haWxMaW5rLmNsYXNzTmFtZSA9ICd1c2VyLW5hbWUtbGluayc7XG4gICAgICB0aHVtYm5haWxMaW5rLmhyZWYgPSAnIyc7XG4gICAgICBjb25zdCB0aHVtYm5haWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGh1bWJuYWlsQ29udGVudC50ZXh0Q29udGVudCA9ICdVJztcbiAgICAgIHRodW1ibmFpbExpbmsuYXBwZW5kQ2hpbGQodGh1bWJuYWlsQ29udGVudCk7XG4gICAgICB1c2VyVGh1bWJuYWlsLmFwcGVuZENoaWxkKHRodW1ibmFpbExpbmspO1xuXG4gICAgICBjb25zdCBjb21tZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tbWVudE1haW4uY2xhc3NOYW1lID0gJ2NvbW1lbnQtbWFpbic7XG4gICAgICBjb21tZW50TWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgPGRpdiBpZD1cImNvbW1lbnQtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImhlYWRlci1hdXRob3JcIj5cbiAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImF1dGhvci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGlkPVwiY29tbWVudC1kYXRlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGlkPVwiY29tbWVudC10ZXh0XCI+XG4gICAgICAgICAgPHA+JHtjb21tZW50LmNvbW1lbnR9PC9wPlxuICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kKHVzZXJUaHVtYm5haWwsIGNvbW1lbnRNYWluKTtcbiAgICAgIGNvbW1lbnRzRGl2LmFwcGVuZChjb21tZW50Q29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgY291bnRDb21tZW50cyA9IChlbGVtZW50LCBjb21tZW50cykgPT4ge1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjb21tZW50cy5sZW5ndGh9IENvbW1lbnRzYDtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJzAgQ29tbWVudHMnO1xuICB9XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5Q29tbWVudHMsIGNvdW50Q29tbWVudHMgfTsiLCJpbXBvcnQgeyBnZXRMaWtlcywgcG9zdExpa2UsIHVwZGF0ZUxpa2VzIH0gZnJvbSAnLi9saWtlcy1oYW5kbGVyLmpzJztcblxuY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVzJyk7XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSAoc2FtcGxlTW92aWVzKSA9PiB7XG4gIHNhbXBsZU1vdmllcy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIGNvbnN0IG1vdmllV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmllV3JhcHBlci5pZCA9IGBtb3ZpZV8ke21vdmllLmlkfWA7XG4gICAgbW92aWVXcmFwcGVyLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyJztcblxuICAgIGNvbnN0IG1vdmllSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92aWVJbWdEaXYuY2xhc3NOYW1lID0gJ21vdmllLWltYWdlLWRpdic7XG5cbiAgICBjb25zdCBtb3ZpZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1vdmllSW1nLnNyYyA9IG1vdmllLmltYWdlLm1lZGl1bTtcbiAgICBtb3ZpZUltZy5jbGFzc05hbWUgPSAnbW92aWUtaW1hZ2UnO1xuICAgIG1vdmllSW1nRGl2LmFwcGVuZENoaWxkKG1vdmllSW1nKTtcblxuICAgIGNvbnN0IG1vdmllSW1nT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmllSW1nT3ZlcmxheS5jbGFzc05hbWUgPSAnZGV0YWlscy1vdmVybGF5JztcbiAgICBjb25zdCByYXRpbmdTdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktc3RhcicpO1xuICAgIGNvbnN0IG1vdmllUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1vdmllUmF0aW5nLmNsYXNzTmFtZSA9ICdtb3ZpZS1vdmVybGF5LXJhdGluZyc7XG4gICAgaWYgKG1vdmllLnJhdGluZy5hdmVyYWdlKSB7XG4gICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSBgJHttb3ZpZS5yYXRpbmcuYXZlcmFnZX0gLyAxMGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9ICcwIC8gMTAnO1xuICAgIH1cbiAgICBjb25zdCBtb3ZpZUdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1vdmllR2VucmUuY2xhc3NOYW1lID0gJ21vdmllLW92ZXJsYXktZ2VucmUnO1xuICAgIG1vdmllR2VucmUuaW5uZXJIVE1MID0gYCR7bW92aWUuZ2VucmVzWzBdfWA7XG4gICAgY29uc3QgbW92aWVEZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbW92aWVEZXRhaWxzQnRuLmNsYXNzTmFtZSA9ICdvdmVsYXktZGV0YWlscy1idG4nO1xuICAgIG1vdmllRGV0YWlsc0J0bi5pbm5lckhUTUwgPSAnVmlldyBEZXRhaWxzJztcblxuICAgIG1vdmllSW1nT3ZlcmxheS5hcHBlbmQoXG4gICAgICByYXRpbmdTdGFyLFxuICAgICAgbW92aWVSYXRpbmcsXG4gICAgICBtb3ZpZUdlbnJlLFxuICAgICAgbW92aWVEZXRhaWxzQnRuLFxuICAgICk7XG4gICAgbW92aWVJbWdEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWdPdmVybGF5KTtcblxuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChtb3ZpZUltZ0Rpdik7XG5cbiAgICBjb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtb3ZpZVRpdGxlLnRleHRDb250ZW50ID0gYCR7bW92aWUubmFtZX1gO1xuICAgIG1vdmllVGl0bGUuY2xhc3NOYW1lID0gJ21vdmllLXRpdGxlJztcbiAgICBtb3ZpZVdyYXBwZXIuYXBwZW5kQ2hpbGQobW92aWVUaXRsZSk7XG5cbiAgICBjb25zdCBsaWtlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpa2VzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdsaWtlcy1jb250YWluZXInO1xuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnZmEtaGVhcnQnKTtcbiAgICBsaWtlQnRuLmlkID0gYCR7bW92aWVXcmFwcGVyLmlkfWA7XG4gICAgbGlrZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlrZUJ0bik7XG5cbiAgICBjb25zdCBtb3ZpZUxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1vdmllTGlrZXMuY2xhc3NOYW1lID0gJ21vdmllLWxpa2VzJztcbiAgICBtb3ZpZUxpa2VzLnRleHRDb250ZW50ID0gJzAgbGlrZXMnO1xuICAgIGxpa2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllTGlrZXMpO1xuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChsaWtlc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCBvbiBNb3ZpZSc7XG4gICAgY29tbWVudEJ0bi5jbGFzc05hbWUgPSAnY29tbWVudEJ0bic7XG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuXG4gICAgY29uc3QgcG9wTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gICAgICB1cGRhdGVMaWtlcyhsaWtlQnRuLCByZXNBcnJheSwgbW92aWVMaWtlcyk7XG4gICAgfTtcblxuICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllV3JhcHBlcik7XG4gICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBtb3ZpZSA9IGUudGFyZ2V0O1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYXdhaXQgcG9zdExpa2UobW92aWUuaWQpO1xuICAgICAgY29uc3QgcmVzQXJyYXkgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAgICAgdXBkYXRlTGlrZXMobW92aWUsIHJlc0FycmF5LCBtb3ZpZUxpa2VzKTtcbiAgICB9KTtcbiAgICBwb3BMaWtlcygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNb3ZpZXM7XG4iLCJjb25zdCBlbmRQb2ludCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9MSc7XG5jb25zdCBnZXRNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGVuZFBvaW50KTtcbiAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TW92aWVzOyIsImNvbnN0IFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuY29uc3QgYXBwSUQgPSAnejh5c1VGWk10THhJdjZPQndFbDknO1xuY29uc3QgZW5kUG9pbnQgPSBgJHtVUkx9L2FwcHMvJHthcHBJRH0vbGlrZXMvYDtcblxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaXRlbSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZFBvaW50LCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpdGVtIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCB1cGRhdGVMaWtlcyA9IChtb3ZpZSwgcmVzQXJyYXksIG1vdmllTGlrZXMpID0+IHtcbiAgcmVzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50Lml0ZW1faWQgPT09IG1vdmllLmlkKSB7XG4gICAgICBtb3ZpZUxpa2VzLmlubmVySFRNTCA9IGAke2VsZW1lbnQubGlrZXN9IGxpa2VzYDtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgcG9zdExpa2UsIGdldExpa2VzLCB1cGRhdGVMaWtlcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY291bnRNb3ZpZXMoc2FtcGxlTW92aWVzKSB7XG4gIHJldHVybiBzYW1wbGVNb3ZpZXMubGVuZ3RoO1xufSIsImltcG9ydCB7IHBvc3RDb21tZW50LCBnZXRDb21tZW50cyB9IGZyb20gJy4vY29tbWVudHMtaGFuZGxlci5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5Q29tbWVudHMsIGNvdW50Q29tbWVudHMgfSBmcm9tICcuL2Rpc3BsYXktY29tbWVudHMuanMnO1xuXG5jb25zdCBpc1Zpc2libGUgPSAnaXMtdmlzaWJsZSc7XG5cbmNvbnN0IG1vdmllTW9kYWwgPSBhc3luYyAoY29tbWVudEJ1dHRvbnMsIHNhbXBsZU1vdmllcykgPT4ge1xuICBjb21tZW50QnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGkpID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbCc7XG5cbiAgICAgIGNvbnN0IHBvcFVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwb3BVcERpdi5jbGFzc05hbWUgPSAnbW9kYWwtZGlhbG9nJztcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoaXNWaXNpYmxlKTtcbiAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHBvcFVwRGl2KTtcblxuICAgICAgY29uc3QgbW92aWVJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IG1vdmllSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IG1vdmllRG93bmxvYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IG1vdmllV2F0Y2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIG1vdmllSW1nRGl2LmNsYXNzTmFtZSA9ICdtb3ZpZUNhcmQnO1xuICAgICAgbW92aWVJbWcuY2xhc3NOYW1lID0gJ21vdmllQ2FyZC1pbWcnO1xuICAgICAgbW92aWVJbWcuc3JjID0gYCR7c2FtcGxlTW92aWVzW2ldLmltYWdlLm9yaWdpbmFsfWA7XG4gICAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdic7XG4gICAgICBtb3ZpZURvd25sb2FkQnRuLmNsYXNzTmFtZSA9ICdwb3BVcC1idXR0b24nO1xuICAgICAgbW92aWVEb3dubG9hZEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtZG93blwiPjwvaT5Eb3dubG9hZCc7XG4gICAgICBtb3ZpZVdhdGNoQnRuLmNsYXNzTmFtZSA9ICdwb3BVcC1idXR0b24nO1xuICAgICAgbW92aWVXYXRjaEJ0bi5pbm5lckhUTUwgPSAnV2F0Y2ggTm93JztcbiAgICAgIG1vdmllSW1nRGl2LmFwcGVuZENoaWxkKG1vdmllSW1nKTtcbiAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChtb3ZpZURvd25sb2FkQnRuKTtcbiAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChtb3ZpZVdhdGNoQnRuKTtcbiAgICAgIG1vdmllSW1nRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChtb3ZpZUltZ0Rpdik7XG5cbiAgICAgIGNvbnN0IG1vdmllQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgbW92aWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICBjb25zdCBtb3ZpZUdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGNvbnN0IG1vdmllUmVsZWFzZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgY29uc3QgbW92aWVOZXR3b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgIGNvbnN0IGRvd25sb2FkU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBjb25zdCByYXRpbmdTdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgY29uc3QgbW92aWVSYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjb25zdCBtb3ZpZVN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ21vdmllQ29udGVudCc7XG4gICAgICBtb3ZpZVRpdGxlLnRleHRDb250ZW50ID0gYCR7c2FtcGxlTW92aWVzW2ldLm5hbWV9YDtcbiAgICAgIG1vdmllVGl0bGUuY2xhc3NOYW1lID0gJ3BvcFVwLXRpdGxlJztcbiAgICAgIG1vdmllR2VucmUuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLmdlbnJlc1swXX1gO1xuICAgICAgbW92aWVHZW5yZS5jbGFzc05hbWUgPSAncG9wVXAtR2VucmUnO1xuICAgICAgbW92aWVSZWxlYXNlRGF0ZS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0ucHJlbWllcmVkfWA7XG4gICAgICBtb3ZpZVJlbGVhc2VEYXRlLmNsYXNzTmFtZSA9ICdwb3BVcC1yZWxlYXNlRGF0ZSc7XG4gICAgICBtb3ZpZU5ldHdvcmsuaW5uZXJIVE1MID0gJyc7XG4gICAgICBtb3ZpZU5ldHdvcmsuY2xhc3NOYW1lID0gJyc7XG4gICAgICBkb3dubG9hZFN1YnRpdGxlLmhyZWYgPSAnIyc7XG4gICAgICBkb3dubG9hZFN1YnRpdGxlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlcy1kb3duXCI+PC9pPiBEb3dubG9hZCBTdWJ0aXRsZXMnO1xuICAgICAgZG93bmxvYWRTdWJ0aXRsZS5jbGFzc05hbWUgPSAnc3VidGl0bGUtYnV0dG9uJztcbiAgICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc3RhcicpO1xuICAgICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LXN0YXInKTtcbiAgICAgIG1vdmllUmF0aW5nLmNsYXNzTmFtZSA9ICdtb3ZpZS1vdmVybGF5LXJhdGluZyc7XG4gICAgICBpZiAoc2FtcGxlTW92aWVzW2ldLnJhdGluZy5hdmVyYWdlKSB7XG4gICAgICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5yYXRpbmcuYXZlcmFnZX0gLyAxMGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSAnMCAvIDEwJztcbiAgICAgIH1cbiAgICAgIG1vdmllU3VtbWFyeS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uc3VtbWFyeS5zdWJzdHJpbmcoXG4gICAgICAgIDAsXG4gICAgICAgIDIwMCxcbiAgICAgICl9Li4uLi4uYDtcbiAgICAgIG1vdmllU3VtbWFyeS5jbGFzc05hbWUgPSAncG9wVXAtc3VtbWFyeSc7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVUaXRsZSk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVHZW5yZSk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVSZWxlYXNlRGF0ZSk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZG93bmxvYWRTdWJ0aXRsZSk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmF0aW5nU3Rhcik7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVSYXRpbmcpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllU3VtbWFyeSk7XG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChtb3ZpZUNvbnRlbnREaXYpO1xuXG4gICAgICBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjbG9zZU1vZGFsQnRuLmlubmVySFRNTCA9ICcnO1xuICAgICAgY2xvc2VNb2RhbEJ0bi5jbGFzc05hbWUgPSAnY2xvc2UtcHJvai1tb2RhbCc7XG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChjbG9zZU1vZGFsQnRuKTtcbiAgICAgIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLmlzLXZpc2libGUnKSkge1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5pcy12aXNpYmxlJykpIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENvbW1lbnRzXG4gICAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgIGNvbW1lbnRTZWN0aW9uLmNsYXNzTmFtZSA9ICdjb21tZW50LXNlY3Rpb24nO1xuICAgICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZm9ybURpdi5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQnO1xuICAgICAgY29uc3QgZm9ybUhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZm9ybUhlYWRlckRpdi5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQtaGVhZGVyJztcbiAgICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgY29uc3QgZm9ybUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICBmb3JtSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgZm9ybUljb24uY2xhc3NMaXN0LmFkZCgnZmEtbWVzc2FnZScpO1xuICAgICAgZm9ybUhlYWRlci5pbm5lckhUTUwgPSAnQWRkIHlvdXIgY29tbWVudCc7XG4gICAgICBmb3JtSGVhZGVyRGl2LmFwcGVuZChmb3JtSWNvbiwgZm9ybUhlYWRlcik7XG4gICAgICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIGNvbW1lbnRGb3JtLmNsYXNzTmFtZSA9ICdhZGQtY29tbWVudC1mb3JtJztcblxuICAgICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgdXNlck5hbWUuY2xhc3NOYW1lID0gJ3VzZXItbmFtZSc7XG4gICAgICB1c2VyTmFtZS5wbGFjZWhvbGRlciA9ICdVc2VybmFtZS4uLic7XG4gICAgICBjb25zdCB1c2VyQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICB1c2VyQ29tbWVudC5jbGFzc05hbWUgPSAndXNlci1jb21tZW50JztcbiAgICAgIHVzZXJDb21tZW50LnBsYWNlaG9sZGVyID0gJ1NoYXJlIHlvdXIgY29tbWVudHMgLi4uJztcbiAgICAgIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ2NvbW1lbnQtYnRuJztcbiAgICAgIGNvbW1lbnRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0IENvbW1lbnQnO1xuICAgICAgY29tbWVudEJ0bi5pZCA9IGBtb3ZpZV9jbXRfJHtzYW1wbGVNb3ZpZXNbaV0uaWR9YDtcbiAgICAgIGNvbW1lbnRGb3JtLmFwcGVuZCh1c2VyTmFtZSwgdXNlckNvbW1lbnQsIGNvbW1lbnRCdG4pO1xuICAgICAgZm9ybURpdi5hcHBlbmQoZm9ybUhlYWRlckRpdiwgY29tbWVudEZvcm0pO1xuXG4gICAgICBjb25zdCBjb21tZW50c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tbWVudHNEaXYuY2xhc3NOYW1lID0gJ2Rpc3BsYXktY29tbWVudHMnO1xuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhjb21tZW50QnRuLmlkKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgY29tbWVudHNDb3VudC5jbGFzc05hbWUgPSAnY29tbWVudHMtY291bnQnO1xuICAgICAgY29tbWVudHNEaXYuYXBwZW5kKGNvbW1lbnRzQ291bnQpO1xuICAgICAgY291bnRDb21tZW50cyhjb21tZW50c0NvdW50LCBjb21tZW50cyk7XG4gICAgICBkaXNwbGF5Q29tbWVudHMoY29tbWVudHNEaXYsIGNvbW1lbnRzKTtcblxuICAgICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc01zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKHVzZXJOYW1lLnZhbHVlID09PSAnJyB8fCB1c2VyQ29tbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmVzTXNnLmNsYXNzTmFtZSA9ICdlcnJvci1tc2cnO1xuICAgICAgICAgIHJlc01zZy5pbm5lclRleHQgPSAnUGxlYXNlIGZpbGwgb3V0IHlvdXIgVXNlcm5hbWUgYW5kIGFkZCBhIGNvbW1lbnQnO1xuICAgICAgICAgIGNvbW1lbnRCdG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVzTXNnLCBjb21tZW50QnRuKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbW1lbnRGb3JtLnJlbW92ZUNoaWxkKHJlc01zZyk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJlc01zZy5jbGFzc05hbWUgPSAnc3VjY2Vzcy1tc2cnO1xuICAgICAgICAgIHJlc01zZy5pbm5lclRleHQgPSAnU3VjY2Vzc2Z1bGx5IGFkZGVkIHlvdXIgY29tbWVudCc7XG4gICAgICAgICAgY29tbWVudEJ0bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXNNc2csIGNvbW1lbnRCdG4pO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29tbWVudEZvcm0ucmVtb3ZlQ2hpbGQocmVzTXNnKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICBhd2FpdCBwb3N0Q29tbWVudChjb21tZW50QnRuLmlkLCB1c2VyTmFtZSwgdXNlckNvbW1lbnQpO1xuICAgICAgICAgIGNvbnN0IG15Q29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhjb21tZW50QnRuLmlkKTtcbiAgICAgICAgICBjb3VudENvbW1lbnRzKGNvbW1lbnRzQ291bnQsIG15Q29tbWVudHMpO1xuICAgICAgICAgIGRpc3BsYXlDb21tZW50cyhjb21tZW50c0RpdiwgbXlDb21tZW50cyk7XG4gICAgICAgICAgY29tbWVudEZvcm0ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZChmb3JtRGl2LCBjb21tZW50c0Rpdik7XG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChjb21tZW50U2VjdGlvbik7XG4gICAgICBjb25zdCByZWFkTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcmVhZE1vcmUuaW5uZXJIVE1MID0gJ1JlYWQgTW9yZSc7XG4gICAgICByZWFkTW9yZS5jbGFzc05hbWUgPSAncmVhZE1vcmVCdG4nO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKHJlYWRNb3JlKTtcbiAgICAgIHJlYWRNb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAocmVhZE1vcmUuaW5uZXJIVE1MID09PSAnUmVhZCBNb3JlJykge1xuICAgICAgICAgIHJlYWRNb3JlLmlubmVySFRNTCA9ICdSZWFkIExlc3MnO1xuICAgICAgICAgIG1vdmllU3VtbWFyeS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uc3VtbWFyeX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlYWRNb3JlLmlubmVySFRNTCA9ICdSZWFkIE1vcmUnO1xuICAgICAgICAgIG1vdmllU3VtbWFyeS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uc3VtbWFyeS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNDAwLFxuICAgICAgICAgICl9Li4uLi4uYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbW92aWVNb2RhbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2V0TW92aWVzIGZyb20gJy4vbW9kdWxlcy9nZXQtbW92aWVzLmpzJztcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5LW1vdmllcy5qcyc7XG5pbXBvcnQgbW92aWVNb2RhbCBmcm9tICcuL21vZHVsZXMvbW92aWUtbW9kYWwuanMnO1xuaW1wb3J0IGNvdW50TW92aWVzIGZyb20gJy4vbW9kdWxlcy9tb3ZpZS1jb3VudGVyLmpzJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBMb2dvIGZyb20gJy4vYXNzZXRzL21vdmllLWljb24ucG5nJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvZ29JbWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1pbWcnKTtcbiAgY29uc3QgbG9nb0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0ljb24uc3JjID0gTG9nbztcbiAgbG9nb0ltZ0Rpdi5hcHBlbmRDaGlsZChsb2dvSWNvbik7XG5cbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XG4gIGNvbnN0IHNhbXBsZU1vdmllcyA9IG1vdmllcy5zbGljZSgxMiwgNjApO1xuICBhd2FpdCBkaXNwbGF5TW92aWVzKHNhbXBsZU1vdmllcyk7XG5cbiAgY29uc3QgbW92aWVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLWxpc3QnKTtcblxuICBtb3ZpZUxpc3QuaW5uZXJIVE1MID0gYFdlIGN1cnJlbnRseSBoYXZlIDxzcGFuPiAke2NvdW50TW92aWVzKHNhbXBsZU1vdmllcyl9IDxzcGFuPiBtb3ZpZXNgO1xuXG4gIGNvbnN0IGNvbW1lbnRCdXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50QnRuJyldO1xuICBjb25zdCB2aWV3RGV0YWlsc0J1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm92ZWxheS1kZXRhaWxzLWJ0bicpXTtcbiAgbW92aWVNb2RhbChjb21tZW50QnV0dG9ucywgc2FtcGxlTW92aWVzKTtcbiAgbW92aWVNb2RhbCh2aWV3RGV0YWlsc0J1dHRvbnMsIHNhbXBsZU1vdmllcyk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=