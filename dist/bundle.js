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
___CSS_LOADER_EXPORT___.push([module.id, "/* Global Styles */\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: 'Raleway', sans-serif;\n  background-color: #1d1d1d;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\n\n.header {\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 5rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #000;\n  color: #919191;\n}\n\n.nav-ul {\n  display: flex;\n}\n\n.nav-ul li {\n  list-style: none;\n  margin-right: 65px;\n  padding: 1.1em 0;\n}\n\n.nav-ul li a {\n  color: #919191;\n  font-size: 1.2rem;\n  font-family: 'Poppins', sans-serif;\n}\n\n.search {\n  width: 100%;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: #6ac045;\n  font-family: inherit;\n}\n\n.search:focus {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid #6ac045;\n  color: #fff;\n}\n\n.title {\n  border: 2px solid black;\n  border-radius: 50%;\n}\n\n/* Call out styles */\n\n.callout {\n  padding-top: 1.2em;\n}\n\n.callout-content {\n  margin: 0 auto;\n  width: 55%;\n  color: #fff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 2em;\n  margin-bottom: 2em;\n}\n\n.callout-header {\n  text-align: center;\n  font-family: 'Poppins', sans-serif;\n  font-size: 2.75em;\n  font-weight: 700;\n  text-shadow: 0 2px 2px rgb(0 0 0 / 40%);\n  margin: 0.5em 0;\n}\n\n.callout-copy {\n  color: #ccc;\n  width: 65%;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.5px;\n  margin-bottom: 1.3em;\n  text-align: center;\n}\n\n.callout-info {\n  font-size: 1em;\n  font-weight: 700;\n  color: #6ac045;\n  margin: 0 auto;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n/* Movie section styles */\n\n.movie-section-title {\n  text-align: center;\n  color: #fff;\n  padding-bottom: 1.2em;\n}\n\n.movie-section-title span {\n  font-size: 1.15em;\n  font-weight: 700;\n}\n\n.fa-star {\n  color: #6ac045;\n  padding-right: 0.4em;\n}\n\n.movie-list {\n  padding: 1em 0;\n}\n\n.movie-list span {\n  color: #6ac045;\n}\n\n.movies {\n  margin: 0 auto;\n  width: 65%;\n  color: #fff;\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-gap: 20px 20px;\n  grid-auto-flow: row;\n}\n\n/* Movie Wrapper overlay styles */\n.movie-image-div {\n  position: relative;\n  border: 4px solid #fff;\n}\n\n.movie-image-div:hover {\n  border: 4px solid #6ac045;\n}\n\n.details-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.35s;\n}\n\n.details-overlay > * {\n  transform: translateY(20px);\n  transition: transform 0.35s;\n}\n\n.details-overlay:hover {\n  opacity: 1;\n}\n\n.details-overlay:hover > * {\n  transform: translateY(0);\n}\n\n.movie-image {\n  display: block;\n  width: 100%;\n}\n\n.overlay-star {\n  padding-bottom: 0.2em;\n}\n\n.movie-overlay-rating {\n  padding-bottom: 1.1em;\n  font-size: 1.7em;\n  font-weight: bold;\n}\n\n.movie-overlay-genre {\n  padding-bottom: 1.1em;\n  font-size: 2.3em;\n  font-weight: bold;\n}\n\n.ovelay-details-btn {\n  color: #fff;\n  padding: 0.5em 1.3em;\n  background: #6ac045;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n/* Movie Wrapper styles */\n.movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 0.8em;\n}\n\n.movie-title {\n  font-family: 'Raleway', sans-serif;\n  padding: 0.5em 0;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1em;\n  align-items: center;\n}\n\n.movie-likes {\n  padding-left: 0.5em;\n}\n\n.commentBtn {\n  color: #fff;\n  padding: 0.5em;\n  background: #36b37f;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  box-shadow: 0 8px 16px #36b37f3d;\n}\n\n/* Movie Modal styles */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(32, 32, 32, 0.95);\n  cursor: pointer;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.35s ease-in;\n}\n\n.modal.is-visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-dialog {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: 3rem;\n  width: 55vw;\n  height: 95%;\n  border-radius: 5px;\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\n  overflow: auto;\n  cursor: default;\n  margin: 5em;\n  padding: 3em;\n}\n\n/* PopUp styles */\n.popUp-button {\n  width: 40%;\n  margin: 1rem;\n  background-color: #6ac045;\n  border: 2px solid #4b962b;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #fff;\n  font-family: inherit;\n}\n\n.popUp-button:hover {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid #6ac045;\n  color: #fff;\n}\n\n.popUp.smovie-titleow { visibility: visible; }\n\n.movieCard {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.buttonDiv {\n  display: flex;\n  flex-direction: row;\n}\n\n.movieCard-img {\n  width: 100%;\n  border: 4px solid #fff;\n}\n\n.movieContent {\n  width: 40%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.popUp-title {\n  font-size: 3rem;\n}\n\n.popUp-Genre {\n  color: #4b962b;\n}\n\n.popUp-releaseDate {\n  font-size: 1rem;\n  color: #ffffff81;\n}\n\n.subtitle-button {\n  width: 70%;\n  margin: 1rem 0;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #fff;\n  font-family: inherit;\n}\n\n.readMoreBtn {\n  width: 40%;\n  margin: 1rem 0;\n  background-color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: #414141;\n  font-family: inherit;\n}\n\n.close-proj-modal {\n  border-radius: 50%;\n  padding: 0.5em;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #555;\n  color: #fff;\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.close-proj-modal:hover {\n  border: 2px solid #fff;\n  background-color: #414141;\n  color: #fff;\n}\n\n.close-proj-modal::before {\n  content: \" \";\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  width: 2px;\n  left: 12px;\n  top: 5px;\n  bottom: 5px;\n  transform: rotate(45deg);\n}\n\n.close-proj-modal::after {\n  content: \" \";\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  height: 2px;\n  top: 12px;\n  left: 5px;\n  right: 5px;\n  transform: rotate(45deg);\n}\n\n/* Modal comments styles */\n.comment-section {\n  display: flex;\n  flex-direction: row;\n  background-color: #1d1d1d;\n}\n\n.comments-count {\n  color: #fff;\n}\n\n.display-comments {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-container {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  background-color: #171717;\n  padding: 1em;\n}\n\n.author-thumbnail {\n  flex: none;\n  margin-right: 12px;\n}\n\n.user-name-link {\n  background-color: #00579c;\n  border-radius: 99px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.8em;\n  padding-top: 10px;\n  text-align: center;\n  text-decoration: none;\n  width: 1.6em;\n}\n\n.user-name-link span {\n  vertical-align: middle;\n}\n\n.comment-main {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n#comment-header {\n  margin-bottom: 2px;\n}\n\n#header-author {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n#author-text {\n  margin-right: 10px;\n  color: #919191;\n  margin-bottom: 2px;\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n#comment-date {\n  color: #606060;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n}\n\n#comment-text {\n  color: #fff;\n  word-wrap: break-word;\n  font-size: 14px;\n  height: 20px;\n  line-height: 1.4rem;\n  font-weight: 400;\n}\n\n/* Comment form styles */\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  background-color: #1e4f63;\n  padding: 2em;\n  border-radius: 10px;\n}\n\ninput,\ntextarea {\n  font-family: 'Poppins', sans-serif;\n  color: #000;\n  font-weight: bold;\n  padding: 0.4em;\n  margin-bottom: 1em;\n  border-radius: 8px;\n}\n\n.comment-btn {\n  color: #000;\n  align-items: center;\n  padding: 0 8px;\n  background: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 0.1rem 0.1rem black;\n  border-radius: 8px;\n}\n\n.btn-submit:active {\n  background: #52b7d4;\n  transform: translateY(2px);\n}\n\n/* Footer Styles */\nfooter {\n  margin-top: auto;\n  background: #c1c7d0b9;\n}\n\nfooter p {\n  padding: 10px;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.test {\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: 'Raleway', sans-serif;\n  background-color: #1d1d1d;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\n\n.header {\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 5rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #000;\n  color: #919191;\n}\n\n.nav-ul {\n  display: flex;\n}\n\n.nav-ul li {\n  list-style: none;\n  margin-right: 65px;\n  padding: 1.1em 0;\n}\n\n.nav-ul li a {\n  color: #919191;\n  font-size: 1.2rem;\n  font-family: 'Poppins', sans-serif;\n}\n\n.search {\n  width: 100%;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: #6ac045;\n  font-family: inherit;\n}\n\n.search:focus {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid #6ac045;\n  color: #fff;\n}\n\n.title {\n  border: 2px solid black;\n  border-radius: 50%;\n}\n\n/* Call out styles */\n\n.callout {\n  padding-top: 1.2em;\n}\n\n.callout-content {\n  margin: 0 auto;\n  width: 55%;\n  color: #fff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 2em;\n  margin-bottom: 2em;\n}\n\n.callout-header {\n  text-align: center;\n  font-family: 'Poppins', sans-serif;\n  font-size: 2.75em;\n  font-weight: 700;\n  text-shadow: 0 2px 2px rgb(0 0 0 / 40%);\n  margin: 0.5em 0;\n}\n\n.callout-copy {\n  color: #ccc;\n  width: 65%;\n  margin: 0 auto;\n  line-height: 1.4em;\n  letter-spacing: 0.5px;\n  margin-bottom: 1.3em;\n  text-align: center;\n}\n\n.callout-info {\n  font-size: 1em;\n  font-weight: 700;\n  color: #6ac045;\n  margin: 0 auto;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n/* Movie section styles */\n\n.movie-section-title {\n  text-align: center;\n  color: #fff;\n  padding-bottom: 1.2em;\n}\n\n.movie-section-title span {\n  font-size: 1.15em;\n  font-weight: 700;\n}\n\n.fa-star {\n  color: #6ac045;\n  padding-right: 0.4em;\n}\n\n.movie-list {\n  padding: 1em 0;\n}\n\n.movie-list span {\n  color: #6ac045;\n}\n\n.movies {\n  margin: 0 auto;\n  width: 65%;\n  color: #fff;\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-gap: 20px 20px;\n  grid-auto-flow: row;\n}\n\n/* Movie Wrapper overlay styles */\n.movie-image-div {\n  position: relative;\n  border: 4px solid #fff;\n}\n\n.movie-image-div:hover {\n  border: 4px solid #6ac045;\n}\n\n.details-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.35s;\n}\n\n.details-overlay > * {\n  transform: translateY(20px);\n  transition: transform 0.35s;\n}\n\n.details-overlay:hover {\n  opacity: 1;\n}\n\n.details-overlay:hover > * {\n  transform: translateY(0);\n}\n\n.movie-image {\n  display: block;\n  width: 100%;\n}\n\n.overlay-star {\n  padding-bottom: 0.2em;\n}\n\n.movie-overlay-rating {\n  padding-bottom: 1.1em;\n  font-size: 1.7em;\n  font-weight: bold;\n}\n\n.movie-overlay-genre {\n  padding-bottom: 1.1em;\n  font-size: 2.3em;\n  font-weight: bold;\n}\n\n.ovelay-details-btn {\n  color: #fff;\n  padding: 0.5em 1.3em;\n  background: #6ac045;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n/* Movie Wrapper styles */\n.movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 0.8em;\n}\n\n.movie-title {\n  font-family: 'Raleway', sans-serif;\n  padding: 0.5em 0;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1em;\n  align-items: center;\n}\n\n.movie-likes {\n  padding-left: 0.5em;\n}\n\n.commentBtn {\n  color: #fff;\n  padding: 0.5em;\n  background: #36b37f;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  box-shadow: 0 8px 16px #36b37f3d;\n}\n\n/* Movie Modal styles */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(32, 32, 32, 0.95);\n  cursor: pointer;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.35s ease-in;\n}\n\n.modal.is-visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-dialog {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: 3rem;\n  width: 55vw;\n  height: 95%;\n  border-radius: 5px;\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\n  overflow: auto;\n  cursor: default;\n  margin: 5em;\n  padding: 3em;\n}\n\n/* PopUp styles */\n.popUp-button {\n  width: 40%;\n  margin: 1rem;\n  background-color: #6ac045;\n  border: 2px solid #4b962b;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #fff;\n  font-family: inherit;\n}\n\n.popUp-button:hover {\n  outline: 0;\n  background-color: #002400;\n  border: 2px solid #6ac045;\n  color: #fff;\n}\n\n.popUp.smovie-titleow { visibility: visible; }\n\n.movieCard {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.buttonDiv {\n  display: flex;\n  flex-direction: row;\n}\n\n.movieCard-img {\n  width: 100%;\n  border: 4px solid #fff;\n}\n\n.movieContent {\n  width: 40%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.popUp-title {\n  font-size: 3rem;\n}\n\n.popUp-Genre {\n  color: #4b962b;\n}\n\n.popUp-releaseDate {\n  font-size: 1rem;\n  color: #ffffff81;\n}\n\n.subtitle-button {\n  width: 70%;\n  margin: 1rem 0;\n  background-color: #1d1d1d;\n  border: 2px solid #555;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #fff;\n  font-family: inherit;\n}\n\n.readMoreBtn {\n  width: 40%;\n  margin: 1rem 0;\n  background-color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  color: #414141;\n  font-family: inherit;\n}\n\n.close-proj-modal {\n  border-radius: 50%;\n  padding: 0.5em;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #555;\n  color: #fff;\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.close-proj-modal:hover {\n  border: 2px solid #fff;\n  background-color: #414141;\n  color: #fff;\n}\n\n.close-proj-modal::before {\n  content: \" \";\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  width: 2px;\n  left: 12px;\n  top: 5px;\n  bottom: 5px;\n  transform: rotate(45deg);\n}\n\n.close-proj-modal::after {\n  content: \" \";\n  position: absolute;\n  display: block;\n  background-color: #414141;\n  height: 2px;\n  top: 12px;\n  left: 5px;\n  right: 5px;\n  transform: rotate(45deg);\n}\n\n/* Modal comments styles */\n.comment-section {\n  display: flex;\n  flex-direction: row;\n  background-color: #1d1d1d;\n}\n\n.comments-count {\n  color: #fff;\n}\n\n.display-comments {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-container {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  background-color: #171717;\n  padding: 1em;\n}\n\n.author-thumbnail {\n  flex: none;\n  margin-right: 12px;\n}\n\n.user-name-link {\n  background-color: #00579c;\n  border-radius: 99px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.8em;\n  padding-top: 10px;\n  text-align: center;\n  text-decoration: none;\n  width: 1.6em;\n}\n\n.user-name-link span {\n  vertical-align: middle;\n}\n\n.comment-main {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n#comment-header {\n  margin-bottom: 2px;\n}\n\n#header-author {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n#author-text {\n  margin-right: 10px;\n  color: #919191;\n  margin-bottom: 2px;\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n#comment-date {\n  color: #606060;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n}\n\n#comment-text {\n  color: #fff;\n  word-wrap: break-word;\n  font-size: 14px;\n  height: 20px;\n  line-height: 1.4rem;\n  font-weight: 400;\n}\n\n/* Comment form styles */\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  background-color: #1e4f63;\n  padding: 2em;\n  border-radius: 10px;\n}\n\ninput,\ntextarea {\n  font-family: 'Poppins', sans-serif;\n  color: #000;\n  font-weight: bold;\n  padding: 0.4em;\n  margin-bottom: 1em;\n  border-radius: 8px;\n}\n\n.comment-btn {\n  color: #000;\n  align-items: center;\n  padding: 0 8px;\n  background: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 0.1rem 0.1rem black;\n  border-radius: 8px;\n}\n\n.btn-submit:active {\n  background: #52b7d4;\n  transform: translateY(2px);\n}\n\n/* Footer Styles */\nfooter {\n  margin-top: auto;\n  background: #c1c7d0b9;\n}\n\nfooter p {\n  padding: 10px;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.test {\n  color: red;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "countComments": () => (/* binding */ countComments),
/* harmony export */   "displayComments": () => (/* binding */ displayComments),
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

const getComments = async (button) => {
  const response = await fetch(`${endPoint}?item_id=${button}`);
  return response.json();
};

const displayComments = (commentsDiv, comments) => {
  if (comments.length >= 1) {
    commentsDiv.innerHTML = `<h3 class=comments-count> ${comments.length} Comments</h3>`;
    comments.forEach((comment) => {
      // Create comment container to hold thumnail div and main comment div
      const commentContainer = document.createElement('div');
      commentContainer.className = 'comment-container';
      // Create comment thumnail div
      const userThumbnail = document.createElement('div');
      userThumbnail.className = 'author-thumbnail';
      // a inside thumnail div
      const thumbnailLink = document.createElement('a');
      thumbnailLink.className = 'user-name-link';
      thumbnailLink.href = '#';
      // text inside a tag
      const thumbnailContent = document.createElement('span');
      thumbnailContent.textContent = 'U';
      // put text inside a tag
      thumbnailLink.appendChild(thumbnailContent);
      // put a tag inside thumnail div
      userThumbnail.appendChild(thumbnailLink);
      // create main comment div
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
      // append both thumnail div and main comment div inside comment container
      commentContainer.append(userThumbnail, commentMain);
      // append individual comment containers into the comments div
      commentsDiv.append(commentContainer);
    });
  }
};

const countComments = (element, comments) => {
  element.textContent = '';
  if (comments.length >= 1) {
    element.textContent = `${comments.length} Comments`;
  } else {
    element.textContent = 'O Comments';
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
/* harmony import */ var _comments_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-handler */ "./src/modules/comments-handler.js");


const isVisible = 'is-visible';

const movieModal = async (commentButtons, sampleMovies) => {
  commentButtons.forEach((button, i) => {
    button.addEventListener('click', async () => {
      // Create movie modal
      const modal = document.createElement('article');
      modal.className = 'modal';
      // Create div inside modal
      const popUpDiv = document.createElement('div');
      popUpDiv.className = 'modal-dialog';
      modal.classList.add(isVisible);
      modal.appendChild(popUpDiv);
      // Create image with buttons inside div
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

      // Create Movie Details inside div
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
      movieSummary.innerHTML = `${sampleMovies[i].summary.substring(0, 200)}`;
      movieSummary.className = 'popUp-summary';
      movieContentDiv.appendChild(movieTitle);
      movieContentDiv.appendChild(movieGenre);
      movieContentDiv.appendChild(movieReleaseDate);
      movieContentDiv.appendChild(downloadSubtitle);
      movieContentDiv.appendChild(ratingStar);
      movieContentDiv.appendChild(movieRating);
      movieContentDiv.appendChild(movieSummary);
      popUpDiv.appendChild(movieContentDiv);

      // Close button
      const closeModalBtn = document.createElement('button');
      closeModalBtn.innerHTML = '';
      closeModalBtn.className = 'close-proj-modal';
      popUpDiv.appendChild(closeModalBtn);
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('is-visible');
      });

      // Comments
      const commentSection = document.createElement('section');
      commentSection.className = 'comment-section';
      const formDiv = document.createElement('div');
      formDiv.className = 'add-comment';
      const formHeaderDiv = document.createElement('div');
      formHeaderDiv.className = 'add-comment-header';
      const formHeader = document.createElement('h2');
      formHeader.textContent = 'Add your comment';
      formHeaderDiv.appendChild(formHeader);
      // Actual form
      const commentForm = document.createElement('form');
      commentForm.className = 'add-comment-form';
      // Form elements
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

      // Display comments
      const commentsDiv = document.createElement('div');
      commentsDiv.className = 'display-comments';
      const comments = await (0,_comments_handler__WEBPACK_IMPORTED_MODULE_0__.getComments)(commentBtn.id);
      const commentsCount = document.createElement('h3');
      commentsCount.className = 'comments-count';
      commentsDiv.append(commentsCount);
      (0,_comments_handler__WEBPACK_IMPORTED_MODULE_0__.countComments)(commentsCount, comments);
      // Call display comments function
      (0,_comments_handler__WEBPACK_IMPORTED_MODULE_0__.displayComments)(commentsDiv, comments);
      // Comment button action
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
          // console.log(userName.value);
        } else {
          e.preventDefault();
          resMsg.className = 'success-msg';
          resMsg.innerText = 'Successfully added your comment';
          commentBtn.parentNode.insertBefore(resMsg, commentBtn);
          setTimeout(() => {
            commentForm.removeChild(resMsg);
          }, 2000);
          await (0,_comments_handler__WEBPACK_IMPORTED_MODULE_0__.postComment)(commentBtn.id, userName, userComment);
          const myComments = await (0,_comments_handler__WEBPACK_IMPORTED_MODULE_0__.getComments)(commentBtn.id);
          (0,_comments_handler__WEBPACK_IMPORTED_MODULE_0__.countComments)(commentsCount, myComments);
          (0,_comments_handler__WEBPACK_IMPORTED_MODULE_0__.displayComments)(commentsDiv, myComments);
          commentForm.reset();
        }
      });

      commentSection.append(formDiv, commentsDiv);
      popUpDiv.appendChild(commentSection);
      // Read more button
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
          )}`;
        }
      });
      // Add modal to body
      document.body.appendChild(modal);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieModal);


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






window.addEventListener('load', async () => {
  const movies = await (0,_modules_get_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const sampleMovies = movies.slice(0, 48);
  await (0,_modules_display_movies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sampleMovies);

  const movieList = document.querySelector('.movie-list');

  movieList.innerHTML = `We currently have <span> ${(0,_modules_movie_counter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(sampleMovies)} <span> movies`;

  const commentButtons = [...document.querySelectorAll('.commentBtn')];
  (0,_modules_movie_modal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentButtons, sampleMovies);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSx5QkFBeUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxnQkFBZ0IsOERBQVc7QUFDM0IsbUNBQW1DLDhEQUFXO0FBQzlDLFVBQVUsZ0VBQWE7QUFDdkIsVUFBVSxrRUFBZTtBQUN6QjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3QkFBd0I7QUFDOUQsVUFBVTtBQUNWO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNwTDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQzJCO0FBQ1E7QUFDTjtBQUNHOztBQUVyRDtBQUNBLHVCQUF1QixrRUFBUztBQUNoQztBQUNBLFFBQVEsc0VBQWE7O0FBRXJCOztBQUVBLG9EQUFvRCxxRUFBVyxnQkFBZ0I7O0FBRS9FO0FBQ0EsRUFBRSxtRUFBVTtBQUNaLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50cy1oYW5kbGVyLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktbW92aWVzLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2dldC1tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9tb3ZpZS1jb3VudGVyLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL21vdmllLW1vZGFsLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgU3R5bGVzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XFxufVxcblxcbmh0bWwge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDFyZW0gNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICM5MTkxOTE7XFxufVxcblxcbi5uYXYtdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdi11bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiA2NXB4O1xcbiAgcGFkZGluZzogMS4xZW0gMDtcXG59XFxuXFxuLm5hdi11bCBsaSBhIHtcXG4gIGNvbG9yOiAjOTE5MTkxO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzZhYzA0NTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uc2VhcmNoOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNDAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzZhYzA0NTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIENhbGwgb3V0IHN0eWxlcyAqL1xcblxcbi5jYWxsb3V0IHtcXG4gIHBhZGRpbmctdG9wOiAxLjJlbTtcXG59XFxuXFxuLmNhbGxvdXQtY29udGVudCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA1NSU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uY2FsbG91dC1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi43NWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiKDAgMCAwIC8gNDAlKTtcXG4gIG1hcmdpbjogMC41ZW0gMDtcXG59XFxuXFxuLmNhbGxvdXQtY29weSB7XFxuICBjb2xvcjogI2NjYztcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEuM2VtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FsbG91dC1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjNmFjMDQ1O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE1vdmllIHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLWJvdHRvbTogMS4yZW07XFxufVxcblxcbi5tb3ZpZS1zZWN0aW9uLXRpdGxlIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjE1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZmEtc3RhciB7XFxuICBjb2xvcjogIzZhYzA0NTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNGVtO1xcbn1cXG5cXG4ubW92aWUtbGlzdCB7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuXFxuLm1vdmllLWxpc3Qgc3BhbiB7XFxuICBjb2xvcjogIzZhYzA0NTtcXG59XFxuXFxuLm1vdmllcyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2NSU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzJSAyMyUgMjMlIDIzJTtcXG4gIGdyaWQtZ2FwOiAyMHB4IDIwcHg7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbn1cXG5cXG4vKiBNb3ZpZSBXcmFwcGVyIG92ZXJsYXkgc3R5bGVzICovXFxuLm1vdmllLWltYWdlLWRpdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4ubW92aWUtaW1hZ2UtZGl2OmhvdmVyIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICM2YWMwNDU7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcXG59XFxuXFxuLmRldGFpbHMtb3ZlcmxheSA+ICoge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xcbn1cXG5cXG4uZGV0YWlscy1vdmVybGF5OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXk6aG92ZXIgPiAqIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLm1vdmllLWltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5vdmVybGF5LXN0YXIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xcbn1cXG5cXG4ubW92aWUtb3ZlcmxheS1yYXRpbmcge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtO1xcbiAgZm9udC1zaXplOiAxLjdlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubW92aWUtb3ZlcmxheS1nZW5yZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW07XFxuICBmb250LXNpemU6IDIuM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vdmVsYXktZGV0YWlscy1idG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAwLjVlbSAxLjNlbTtcXG4gIGJhY2tncm91bmQ6ICM2YWMwNDU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTW92aWUgV3JhcHBlciBzdHlsZXMgKi9cXG4ubW92aWUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAuOGVtO1xcbn1cXG5cXG4ubW92aWUtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxufVxcblxcbi5saWtlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW92aWUtbGlrZXMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLmNvbW1lbnRCdG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJhY2tncm91bmQ6ICMzNmIzN2Y7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRCdG46aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAjMzZiMzdmM2Q7XFxufVxcblxcbi8qIE1vdmllIE1vZGFsIHN0eWxlcyAqL1xcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgzMiwgMzIsIDMyLCAwLjk1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbjtcXG59XFxuXFxuLm1vZGFsLmlzLXZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tb2RhbC1kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDNyZW07XFxuICB3aWR0aDogNTV2dztcXG4gIGhlaWdodDogOTUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1LjM0ZGVnLCAjMmIyYjJiIDY1JSwgIzAwMjQwMCA5NC4zNSUpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBtYXJnaW46IDVlbTtcXG4gIHBhZGRpbmc6IDNlbTtcXG59XFxuXFxuLyogUG9wVXAgc3R5bGVzICovXFxuLnBvcFVwLWJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhYzA0NTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Yjk2MmI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5wb3BVcC1idXR0b246aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNmFjMDQ1O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5wb3BVcC5zbW92aWUtdGl0bGVvdyB7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG5cXG4ubW92aWVDYXJkIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ubW92aWVDYXJkLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5tb3ZpZUNvbnRlbnQge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucG9wVXAtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ucG9wVXAtR2VucmUge1xcbiAgY29sb3I6ICM0Yjk2MmI7XFxufVxcblxcbi5wb3BVcC1yZWxlYXNlRGF0ZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogI2ZmZmZmZjgxO1xcbn1cXG5cXG4uc3VidGl0bGUtYnV0dG9uIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5yZWFkTW9yZUJ0biB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzQxNDE0MTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbCB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXG4gIHdpZHRoOiAycHg7XFxuICBsZWZ0OiAxMnB4O1xcbiAgdG9wOiA1cHg7XFxuICBib3R0b206IDVweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmNsb3NlLXByb2otbW9kYWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXG4gIGhlaWdodDogMnB4O1xcbiAgdG9wOiAxMnB4O1xcbiAgbGVmdDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLyogTW9kYWwgY29tbWVudHMgc3R5bGVzICovXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XFxufVxcblxcbi5jb21tZW50cy1jb3VudCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmRpc3BsYXktY29tbWVudHMge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29tbWVudC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmF1dGhvci10aHVtYm5haWwge1xcbiAgZmxleDogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuXFxuLnVzZXItbmFtZS1saW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU3OWM7XFxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgd2lkdGg6IDEuNmVtO1xcbn1cXG5cXG4udXNlci1uYW1lLWxpbmsgc3BhbiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uY29tbWVudC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbW1lbnQtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuI2hlYWRlci1hdXRob3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbiNhdXRob3ItdGV4dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjb2xvcjogIzkxOTE5MTtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2NvbW1lbnQtZGF0ZSB7XFxuICBjb2xvcjogIzYwNjA2MDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbiNjb21tZW50LXRleHQge1xcbiAgY29sb3I6ICNmZmY7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyogQ29tbWVudCBmb3JtIHN0eWxlcyAqL1xcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjYzO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmJ0bi1zdWJtaXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM1MmI3ZDQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxlcyAqL1xcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2MxYzdkMGI5O1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50ZXN0IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qixt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RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG59XFxuXFxuaHRtbCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMXJlbSA1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogIzkxOTE5MTtcXG59XFxuXFxuLm5hdi11bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2LXVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDY1cHg7XFxuICBwYWRkaW5nOiAxLjFlbSAwO1xcbn1cXG5cXG4ubmF2LXVsIGxpIGEge1xcbiAgY29sb3I6ICM5MTkxOTE7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjNmFjMDQ1O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5zZWFyY2g6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNmFjMDQ1O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50aXRsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogQ2FsbCBvdXQgc3R5bGVzICovXFxuXFxuLmNhbGxvdXQge1xcbiAgcGFkZGluZy10b3A6IDEuMmVtO1xcbn1cXG5cXG4uY2FsbG91dC1jb250ZW50IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDU1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5jYWxsb3V0LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjc1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCAwIDAgLyA0MCUpO1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cXG5cXG4uY2FsbG91dC1jb3B5IHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYWxsb3V0LWluZm8ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM2YWMwNDU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTW92aWUgc2VjdGlvbiBzdHlsZXMgKi9cXG5cXG4ubW92aWUtc2VjdGlvbi10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcXG59XFxuXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUgc3BhbiB7XFxuICBmb250LXNpemU6IDEuMTVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5mYS1zdGFyIHtcXG4gIGNvbG9yOiAjNmFjMDQ1O1xcbiAgcGFkZGluZy1yaWdodDogMC40ZW07XFxufVxcblxcbi5tb3ZpZS1saXN0IHtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG5cXG4ubW92aWUtbGlzdCBzcGFuIHtcXG4gIGNvbG9yOiAjNmFjMDQ1O1xcbn1cXG5cXG4ubW92aWVzIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDIzJSAyMyUgMjMlO1xcbiAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbi8qIE1vdmllIFdyYXBwZXIgb3ZlcmxheSBzdHlsZXMgKi9cXG4ubW92aWUtaW1hZ2UtZGl2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5tb3ZpZS1pbWFnZS1kaXY6aG92ZXIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzZhYzA0NTtcXG59XFxuXFxuLmRldGFpbHMtb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xcbn1cXG5cXG4uZGV0YWlscy1vdmVybGF5ID4gKiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XFxufVxcblxcbi5kZXRhaWxzLW92ZXJsYXk6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciA+ICoge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4ubW92aWUtaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm92ZXJsYXktc3RhciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XFxufVxcblxcbi5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW07XFxuICBmb250LXNpemU6IDEuN2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb3ZpZS1vdmVybGF5LWdlbnJlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXG4gIGZvbnQtc2l6ZTogMi4zZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm92ZWxheS1kZXRhaWxzLWJ0biB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuNWVtIDEuM2VtO1xcbiAgYmFja2dyb3VuZDogIzZhYzA0NTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNb3ZpZSBXcmFwcGVyIHN0eWxlcyAqL1xcbi5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC44ZW07XFxufVxcblxcbi5tb3ZpZS10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMC41ZW0gMDtcXG59XFxuXFxuLmxpa2VzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZpZS1saWtlcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4uY29tbWVudEJ0biB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYmFja2dyb3VuZDogIzM2YjM3ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudEJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4ICMzNmIzN2YzZDtcXG59XFxuXFxuLyogTW92aWUgTW9kYWwgc3R5bGVzICovXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAzMiwgMzIsIDAuOTUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluO1xcbn1cXG5cXG4ubW9kYWwuaXMtdmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogM3JlbTtcXG4gIHdpZHRoOiA1NXZ3O1xcbiAgaGVpZ2h0OiA5NSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUuMzRkZWcsICMyYjJiMmIgNjUlLCAjMDAyNDAwIDk0LjM1JSk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIG1hcmdpbjogNWVtO1xcbiAgcGFkZGluZzogM2VtO1xcbn1cXG5cXG4vKiBQb3BVcCBzdHlsZXMgKi9cXG4ucG9wVXAtYnV0dG9uIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFjMDQ1O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiOTYyYjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnBvcFVwLWJ1dHRvbjpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2YWMwNDU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBvcFVwLnNtb3ZpZS10aXRsZW93IHsgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcblxcbi5tb3ZpZUNhcmQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5idXR0b25EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb3ZpZUNhcmQtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG59XFxuXFxuLm1vdmllQ29udGVudCB7XFxuICB3aWR0aDogNDAlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wb3BVcC10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5wb3BVcC1HZW5yZSB7XFxuICBjb2xvcjogIzRiOTYyYjtcXG59XFxuXFxuLnBvcFVwLXJlbGVhc2VEYXRlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmODE7XFxufVxcblxcbi5zdWJ0aXRsZS1idXR0b24ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnJlYWRNb3JlQnRuIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjNDE0MTQxO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jbG9zZS1wcm9qLW1vZGFsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgd2lkdGg6IDJweDtcXG4gIGxlZnQ6IDEycHg7XFxuICB0b3A6IDVweDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY2xvc2UtcHJvai1tb2RhbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBNb2RhbCBjb21tZW50cyBzdHlsZXMgKi9cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG59XFxuXFxuLmNvbW1lbnRzLWNvdW50IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZGlzcGxheS1jb21tZW50cyB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uYXV0aG9yLXRodW1ibmFpbCB7XFxuICBmbGV4OiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4udXNlci1uYW1lLWxpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTc5YztcXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aWR0aDogMS42ZW07XFxufVxcblxcbi51c2VyLW5hbWUtbGluayBzcGFuIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5jb21tZW50LW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29tbWVudC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4jaGVhZGVyLWF1dGhvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuI2F1dGhvci10ZXh0IHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGNvbG9yOiAjOTE5MTkxO1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jY29tbWVudC1kYXRlIHtcXG4gIGNvbG9yOiAjNjA2MDYwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuI2NvbW1lbnQtdGV4dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiBDb21tZW50IGZvcm0gc3R5bGVzICovXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTRmNjM7XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgY29sb3I6ICMwMDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uYnRuLXN1Ym1pdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzUyYjdkNDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGVzICovXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjYzFjN2QwYjk7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRlc3Qge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBAdHMtaWdub3JlXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IGFwcElEID0gJ3o4eXNVRlpNdEx4SXY2T0J3RWw5JztcbmNvbnN0IGVuZFBvaW50ID0gYCR7VVJMfS9hcHBzLyR7YXBwSUR9L2NvbW1lbnRzL2A7XG5cbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGJ1dHRvbklkLCB1c2VyTmFtZSwgdXNlckNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBidXR0b25JZCxcbiAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IHVzZXJDb21tZW50LnZhbHVlLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXMudGV4dCgpO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoYnV0dG9uKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7ZW5kUG9pbnR9P2l0ZW1faWQ9JHtidXR0b259YCk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudHMgPSAoY29tbWVudHNEaXYsIGNvbW1lbnRzKSA9PiB7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xuICAgIGNvbW1lbnRzRGl2LmlubmVySFRNTCA9IGA8aDMgY2xhc3M9Y29tbWVudHMtY291bnQ+ICR7Y29tbWVudHMubGVuZ3RofSBDb21tZW50czwvaDM+YDtcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAvLyBDcmVhdGUgY29tbWVudCBjb250YWluZXIgdG8gaG9sZCB0aHVtbmFpbCBkaXYgYW5kIG1haW4gY29tbWVudCBkaXZcbiAgICAgIGNvbnN0IGNvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbW1lbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnQtY29udGFpbmVyJztcbiAgICAgIC8vIENyZWF0ZSBjb21tZW50IHRodW1uYWlsIGRpdlxuICAgICAgY29uc3QgdXNlclRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdXNlclRodW1ibmFpbC5jbGFzc05hbWUgPSAnYXV0aG9yLXRodW1ibmFpbCc7XG4gICAgICAvLyBhIGluc2lkZSB0aHVtbmFpbCBkaXZcbiAgICAgIGNvbnN0IHRodW1ibmFpbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB0aHVtYm5haWxMaW5rLmNsYXNzTmFtZSA9ICd1c2VyLW5hbWUtbGluayc7XG4gICAgICB0aHVtYm5haWxMaW5rLmhyZWYgPSAnIyc7XG4gICAgICAvLyB0ZXh0IGluc2lkZSBhIHRhZ1xuICAgICAgY29uc3QgdGh1bWJuYWlsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRodW1ibmFpbENvbnRlbnQudGV4dENvbnRlbnQgPSAnVSc7XG4gICAgICAvLyBwdXQgdGV4dCBpbnNpZGUgYSB0YWdcbiAgICAgIHRodW1ibmFpbExpbmsuYXBwZW5kQ2hpbGQodGh1bWJuYWlsQ29udGVudCk7XG4gICAgICAvLyBwdXQgYSB0YWcgaW5zaWRlIHRodW1uYWlsIGRpdlxuICAgICAgdXNlclRodW1ibmFpbC5hcHBlbmRDaGlsZCh0aHVtYm5haWxMaW5rKTtcbiAgICAgIC8vIGNyZWF0ZSBtYWluIGNvbW1lbnQgZGl2XG4gICAgICBjb25zdCBjb21tZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tbWVudE1haW4uY2xhc3NOYW1lID0gJ2NvbW1lbnQtbWFpbic7XG4gICAgICBjb21tZW50TWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgPGRpdiBpZD1cImNvbW1lbnQtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImhlYWRlci1hdXRob3JcIj5cbiAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImF1dGhvci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGlkPVwiY29tbWVudC1kYXRlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGlkPVwiY29tbWVudC10ZXh0XCI+XG4gICAgICAgICAgPHA+JHtjb21tZW50LmNvbW1lbnR9PC9wPlxuICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgIC8vIGFwcGVuZCBib3RoIHRodW1uYWlsIGRpdiBhbmQgbWFpbiBjb21tZW50IGRpdiBpbnNpZGUgY29tbWVudCBjb250YWluZXJcbiAgICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kKHVzZXJUaHVtYm5haWwsIGNvbW1lbnRNYWluKTtcbiAgICAgIC8vIGFwcGVuZCBpbmRpdmlkdWFsIGNvbW1lbnQgY29udGFpbmVycyBpbnRvIHRoZSBjb21tZW50cyBkaXZcbiAgICAgIGNvbW1lbnRzRGl2LmFwcGVuZChjb21tZW50Q29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgY291bnRDb21tZW50cyA9IChlbGVtZW50LCBjb21tZW50cykgPT4ge1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjb21tZW50cy5sZW5ndGh9IENvbW1lbnRzYDtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ08gQ29tbWVudHMnO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBwb3N0Q29tbWVudCwgZ2V0Q29tbWVudHMsIGRpc3BsYXlDb21tZW50cywgY291bnRDb21tZW50cyxcbn07XG4iLCJpbXBvcnQgeyBnZXRMaWtlcywgcG9zdExpa2UsIHVwZGF0ZUxpa2VzIH0gZnJvbSAnLi9saWtlcy1oYW5kbGVyLmpzJztcblxuY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVzJyk7XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSAoc2FtcGxlTW92aWVzKSA9PiB7XG4gIHNhbXBsZU1vdmllcy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIGNvbnN0IG1vdmllV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmllV3JhcHBlci5pZCA9IGBtb3ZpZV8ke21vdmllLmlkfWA7XG4gICAgbW92aWVXcmFwcGVyLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyJztcblxuICAgIGNvbnN0IG1vdmllSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92aWVJbWdEaXYuY2xhc3NOYW1lID0gJ21vdmllLWltYWdlLWRpdic7XG5cbiAgICBjb25zdCBtb3ZpZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1vdmllSW1nLnNyYyA9IG1vdmllLmltYWdlLm1lZGl1bTtcbiAgICBtb3ZpZUltZy5jbGFzc05hbWUgPSAnbW92aWUtaW1hZ2UnO1xuICAgIG1vdmllSW1nRGl2LmFwcGVuZENoaWxkKG1vdmllSW1nKTtcblxuICAgIGNvbnN0IG1vdmllSW1nT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmllSW1nT3ZlcmxheS5jbGFzc05hbWUgPSAnZGV0YWlscy1vdmVybGF5JztcbiAgICBjb25zdCByYXRpbmdTdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktc3RhcicpO1xuICAgIGNvbnN0IG1vdmllUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1vdmllUmF0aW5nLmNsYXNzTmFtZSA9ICdtb3ZpZS1vdmVybGF5LXJhdGluZyc7XG4gICAgaWYgKG1vdmllLnJhdGluZy5hdmVyYWdlKSB7XG4gICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSBgJHttb3ZpZS5yYXRpbmcuYXZlcmFnZX0gLyAxMGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9ICcwIC8gMTAnO1xuICAgIH1cbiAgICBjb25zdCBtb3ZpZUdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1vdmllR2VucmUuY2xhc3NOYW1lID0gJ21vdmllLW92ZXJsYXktZ2VucmUnO1xuICAgIG1vdmllR2VucmUuaW5uZXJIVE1MID0gYCR7bW92aWUuZ2VucmVzWzBdfWA7XG4gICAgY29uc3QgbW92aWVEZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbW92aWVEZXRhaWxzQnRuLmNsYXNzTmFtZSA9ICdvdmVsYXktZGV0YWlscy1idG4nO1xuICAgIG1vdmllRGV0YWlsc0J0bi5pbm5lckhUTUwgPSAnVmlldyBEZXRhaWxzJztcblxuICAgIG1vdmllSW1nT3ZlcmxheS5hcHBlbmQoXG4gICAgICByYXRpbmdTdGFyLFxuICAgICAgbW92aWVSYXRpbmcsXG4gICAgICBtb3ZpZUdlbnJlLFxuICAgICAgbW92aWVEZXRhaWxzQnRuLFxuICAgICk7XG4gICAgbW92aWVJbWdEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWdPdmVybGF5KTtcblxuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChtb3ZpZUltZ0Rpdik7XG5cbiAgICBjb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtb3ZpZVRpdGxlLnRleHRDb250ZW50ID0gYCR7bW92aWUubmFtZX1gO1xuICAgIG1vdmllVGl0bGUuY2xhc3NOYW1lID0gJ21vdmllLXRpdGxlJztcbiAgICBtb3ZpZVdyYXBwZXIuYXBwZW5kQ2hpbGQobW92aWVUaXRsZSk7XG5cbiAgICBjb25zdCBsaWtlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpa2VzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdsaWtlcy1jb250YWluZXInO1xuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnZmEtaGVhcnQnKTtcbiAgICBsaWtlQnRuLmlkID0gYCR7bW92aWVXcmFwcGVyLmlkfWA7XG4gICAgbGlrZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlrZUJ0bik7XG5cbiAgICBjb25zdCBtb3ZpZUxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1vdmllTGlrZXMuY2xhc3NOYW1lID0gJ21vdmllLWxpa2VzJztcbiAgICBtb3ZpZUxpa2VzLnRleHRDb250ZW50ID0gJzAgbGlrZXMnO1xuICAgIGxpa2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllTGlrZXMpO1xuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChsaWtlc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCBvbiBNb3ZpZSc7XG4gICAgY29tbWVudEJ0bi5jbGFzc05hbWUgPSAnY29tbWVudEJ0bic7XG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuXG4gICAgY29uc3QgcG9wTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gICAgICB1cGRhdGVMaWtlcyhsaWtlQnRuLCByZXNBcnJheSwgbW92aWVMaWtlcyk7XG4gICAgfTtcblxuICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllV3JhcHBlcik7XG4gICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBtb3ZpZSA9IGUudGFyZ2V0O1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYXdhaXQgcG9zdExpa2UobW92aWUuaWQpO1xuICAgICAgY29uc3QgcmVzQXJyYXkgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAgICAgdXBkYXRlTGlrZXMobW92aWUsIHJlc0FycmF5LCBtb3ZpZUxpa2VzKTtcbiAgICB9KTtcbiAgICBwb3BMaWtlcygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNb3ZpZXM7XG4iLCJjb25zdCBlbmRQb2ludCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9MSc7XG5jb25zdCBnZXRNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGVuZFBvaW50KTtcbiAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TW92aWVzOyIsImNvbnN0IFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuY29uc3QgYXBwSUQgPSAnejh5c1VGWk10THhJdjZPQndFbDknO1xuY29uc3QgZW5kUG9pbnQgPSBgJHtVUkx9L2FwcHMvJHthcHBJRH0vbGlrZXMvYDtcblxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaXRlbSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZFBvaW50LCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpdGVtIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCB1cGRhdGVMaWtlcyA9IChtb3ZpZSwgcmVzQXJyYXksIG1vdmllTGlrZXMpID0+IHtcbiAgcmVzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50Lml0ZW1faWQgPT09IG1vdmllLmlkKSB7XG4gICAgICBtb3ZpZUxpa2VzLmlubmVySFRNTCA9IGAke2VsZW1lbnQubGlrZXN9IGxpa2VzYDtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgcG9zdExpa2UsIGdldExpa2VzLCB1cGRhdGVMaWtlcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY291bnRNb3ZpZXMoc2FtcGxlTW92aWVzKSB7XG4gIHJldHVybiBzYW1wbGVNb3ZpZXMubGVuZ3RoO1xufSIsImltcG9ydCB7XG4gIHBvc3RDb21tZW50LFxuICBnZXRDb21tZW50cyxcbiAgZGlzcGxheUNvbW1lbnRzLFxuICBjb3VudENvbW1lbnRzLFxufSBmcm9tICcuL2NvbW1lbnRzLWhhbmRsZXInO1xuXG5jb25zdCBpc1Zpc2libGUgPSAnaXMtdmlzaWJsZSc7XG5cbmNvbnN0IG1vdmllTW9kYWwgPSBhc3luYyAoY29tbWVudEJ1dHRvbnMsIHNhbXBsZU1vdmllcykgPT4ge1xuICBjb21tZW50QnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGkpID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgbW92aWUgbW9kYWxcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsJztcbiAgICAgIC8vIENyZWF0ZSBkaXYgaW5zaWRlIG1vZGFsXG4gICAgICBjb25zdCBwb3BVcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcG9wVXBEaXYuY2xhc3NOYW1lID0gJ21vZGFsLWRpYWxvZyc7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKGlzVmlzaWJsZSk7XG4gICAgICBtb2RhbC5hcHBlbmRDaGlsZChwb3BVcERpdik7XG4gICAgICAvLyBDcmVhdGUgaW1hZ2Ugd2l0aCBidXR0b25zIGluc2lkZSBkaXZcbiAgICAgIGNvbnN0IG1vdmllSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBtb3ZpZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBtb3ZpZURvd25sb2FkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBtb3ZpZVdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBtb3ZpZUltZ0Rpdi5jbGFzc05hbWUgPSAnbW92aWVDYXJkJztcbiAgICAgIG1vdmllSW1nLmNsYXNzTmFtZSA9ICdtb3ZpZUNhcmQtaW1nJztcbiAgICAgIG1vdmllSW1nLnNyYyA9IGAke3NhbXBsZU1vdmllc1tpXS5pbWFnZS5vcmlnaW5hbH1gO1xuICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdidXR0b25EaXYnO1xuICAgICAgbW92aWVEb3dubG9hZEJ0bi5jbGFzc05hbWUgPSAncG9wVXAtYnV0dG9uJztcbiAgICAgIG1vdmllRG93bmxvYWRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGVzLWRvd25cIj48L2k+RG93bmxvYWQnO1xuICAgICAgbW92aWVXYXRjaEJ0bi5jbGFzc05hbWUgPSAncG9wVXAtYnV0dG9uJztcbiAgICAgIG1vdmllV2F0Y2hCdG4uaW5uZXJIVE1MID0gJ1dhdGNoIE5vdyc7XG4gICAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChtb3ZpZUltZyk7XG4gICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobW92aWVEb3dubG9hZEJ0bik7XG4gICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobW92aWVXYXRjaEJ0bik7XG4gICAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWdEaXYpO1xuXG4gICAgICAvLyBDcmVhdGUgTW92aWUgRGV0YWlscyBpbnNpZGUgZGl2XG4gICAgICBjb25zdCBtb3ZpZUNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgY29uc3QgbW92aWVHZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBjb25zdCBtb3ZpZVJlbGVhc2VEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGNvbnN0IG1vdmllTmV0d29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICBjb25zdCBkb3dubG9hZFN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgY29uc3QgcmF0aW5nU3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGNvbnN0IG1vdmllUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29uc3QgbW92aWVTdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmNsYXNzTmFtZSA9ICdtb3ZpZUNvbnRlbnQnO1xuICAgICAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9IGAke3NhbXBsZU1vdmllc1tpXS5uYW1lfWA7XG4gICAgICBtb3ZpZVRpdGxlLmNsYXNzTmFtZSA9ICdwb3BVcC10aXRsZSc7XG4gICAgICBtb3ZpZUdlbnJlLmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5nZW5yZXNbMF19YDtcbiAgICAgIG1vdmllR2VucmUuY2xhc3NOYW1lID0gJ3BvcFVwLUdlbnJlJztcbiAgICAgIG1vdmllUmVsZWFzZURhdGUuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnByZW1pZXJlZH1gO1xuICAgICAgbW92aWVSZWxlYXNlRGF0ZS5jbGFzc05hbWUgPSAncG9wVXAtcmVsZWFzZURhdGUnO1xuICAgICAgbW92aWVOZXR3b3JrLmlubmVySFRNTCA9ICcnO1xuICAgICAgbW92aWVOZXR3b3JrLmNsYXNzTmFtZSA9ICcnO1xuICAgICAgZG93bmxvYWRTdWJ0aXRsZS5ocmVmID0gJyMnO1xuICAgICAgZG93bmxvYWRTdWJ0aXRsZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtZG93blwiPjwvaT4gRG93bmxvYWQgU3VidGl0bGVzJztcbiAgICAgIGRvd25sb2FkU3VidGl0bGUuY2xhc3NOYW1lID0gJ3N1YnRpdGxlLWJ1dHRvbic7XG4gICAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcbiAgICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1zdGFyJyk7XG4gICAgICBtb3ZpZVJhdGluZy5jbGFzc05hbWUgPSAnbW92aWUtb3ZlcmxheS1yYXRpbmcnO1xuICAgICAgaWYgKHNhbXBsZU1vdmllc1tpXS5yYXRpbmcuYXZlcmFnZSkge1xuICAgICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0ucmF0aW5nLmF2ZXJhZ2V9IC8gMTBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gJzAgLyAxMCc7XG4gICAgICB9XG4gICAgICBtb3ZpZVN1bW1hcnkuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnN1bW1hcnkuc3Vic3RyaW5nKDAsIDIwMCl9YDtcbiAgICAgIG1vdmllU3VtbWFyeS5jbGFzc05hbWUgPSAncG9wVXAtc3VtbWFyeSc7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVUaXRsZSk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVHZW5yZSk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVSZWxlYXNlRGF0ZSk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZG93bmxvYWRTdWJ0aXRsZSk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmF0aW5nU3Rhcik7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVSYXRpbmcpO1xuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllU3VtbWFyeSk7XG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChtb3ZpZUNvbnRlbnREaXYpO1xuXG4gICAgICAvLyBDbG9zZSBidXR0b25cbiAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNsb3NlTW9kYWxCdG4uaW5uZXJIVE1MID0gJyc7XG4gICAgICBjbG9zZU1vZGFsQnRuLmNsYXNzTmFtZSA9ICdjbG9zZS1wcm9qLW1vZGFsJztcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKGNsb3NlTW9kYWxCdG4pO1xuICAgICAgY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENvbW1lbnRzXG4gICAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgIGNvbW1lbnRTZWN0aW9uLmNsYXNzTmFtZSA9ICdjb21tZW50LXNlY3Rpb24nO1xuICAgICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZm9ybURpdi5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQnO1xuICAgICAgY29uc3QgZm9ybUhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZm9ybUhlYWRlckRpdi5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQtaGVhZGVyJztcbiAgICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgeW91ciBjb21tZW50JztcbiAgICAgIGZvcm1IZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XG4gICAgICAvLyBBY3R1YWwgZm9ybVxuICAgICAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICBjb21tZW50Rm9ybS5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQtZm9ybSc7XG4gICAgICAvLyBGb3JtIGVsZW1lbnRzXG4gICAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICB1c2VyTmFtZS5jbGFzc05hbWUgPSAndXNlci1uYW1lJztcbiAgICAgIHVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1VzZXJuYW1lLi4uJztcbiAgICAgIGNvbnN0IHVzZXJDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHVzZXJDb21tZW50LmNsYXNzTmFtZSA9ICd1c2VyLWNvbW1lbnQnO1xuICAgICAgdXNlckNvbW1lbnQucGxhY2Vob2xkZXIgPSAnU2hhcmUgeW91ciBjb21tZW50cyAuLi4nO1xuICAgICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29tbWVudEJ0bi5jbGFzc05hbWUgPSAnY29tbWVudC1idG4nO1xuICAgICAgY29tbWVudEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQgQ29tbWVudCc7XG4gICAgICBjb21tZW50QnRuLmlkID0gYG1vdmllX2NtdF8ke3NhbXBsZU1vdmllc1tpXS5pZH1gO1xuICAgICAgY29tbWVudEZvcm0uYXBwZW5kKHVzZXJOYW1lLCB1c2VyQ29tbWVudCwgY29tbWVudEJ0bik7XG4gICAgICBmb3JtRGl2LmFwcGVuZChmb3JtSGVhZGVyRGl2LCBjb21tZW50Rm9ybSk7XG5cbiAgICAgIC8vIERpc3BsYXkgY29tbWVudHNcbiAgICAgIGNvbnN0IGNvbW1lbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb21tZW50c0Rpdi5jbGFzc05hbWUgPSAnZGlzcGxheS1jb21tZW50cyc7XG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRCdG4uaWQpO1xuICAgICAgY29uc3QgY29tbWVudHNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBjb21tZW50c0NvdW50LmNsYXNzTmFtZSA9ICdjb21tZW50cy1jb3VudCc7XG4gICAgICBjb21tZW50c0Rpdi5hcHBlbmQoY29tbWVudHNDb3VudCk7XG4gICAgICBjb3VudENvbW1lbnRzKGNvbW1lbnRzQ291bnQsIGNvbW1lbnRzKTtcbiAgICAgIC8vIENhbGwgZGlzcGxheSBjb21tZW50cyBmdW5jdGlvblxuICAgICAgZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzRGl2LCBjb21tZW50cyk7XG4gICAgICAvLyBDb21tZW50IGJ1dHRvbiBhY3Rpb25cbiAgICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBjb25zdCByZXNNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmICh1c2VyTmFtZS52YWx1ZSA9PT0gJycgfHwgdXNlckNvbW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJlc01zZy5jbGFzc05hbWUgPSAnZXJyb3ItbXNnJztcbiAgICAgICAgICByZXNNc2cuaW5uZXJUZXh0ID0gJ1BsZWFzZSBmaWxsIG91dCB5b3VyIFVzZXJuYW1lIGFuZCBhZGQgYSBjb21tZW50JztcbiAgICAgICAgICBjb21tZW50QnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc01zZywgY29tbWVudEJ0bik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb21tZW50Rm9ybS5yZW1vdmVDaGlsZChyZXNNc2cpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJOYW1lLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmVzTXNnLmNsYXNzTmFtZSA9ICdzdWNjZXNzLW1zZyc7XG4gICAgICAgICAgcmVzTXNnLmlubmVyVGV4dCA9ICdTdWNjZXNzZnVsbHkgYWRkZWQgeW91ciBjb21tZW50JztcbiAgICAgICAgICBjb21tZW50QnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc01zZywgY29tbWVudEJ0bik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb21tZW50Rm9ybS5yZW1vdmVDaGlsZChyZXNNc2cpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIGF3YWl0IHBvc3RDb21tZW50KGNvbW1lbnRCdG4uaWQsIHVzZXJOYW1lLCB1c2VyQ29tbWVudCk7XG4gICAgICAgICAgY29uc3QgbXlDb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRCdG4uaWQpO1xuICAgICAgICAgIGNvdW50Q29tbWVudHMoY29tbWVudHNDb3VudCwgbXlDb21tZW50cyk7XG4gICAgICAgICAgZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzRGl2LCBteUNvbW1lbnRzKTtcbiAgICAgICAgICBjb21tZW50Rm9ybS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kKGZvcm1EaXYsIGNvbW1lbnRzRGl2KTtcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKGNvbW1lbnRTZWN0aW9uKTtcbiAgICAgIC8vIFJlYWQgbW9yZSBidXR0b25cbiAgICAgIGNvbnN0IHJlYWRNb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByZWFkTW9yZS5pbm5lckhUTUwgPSAnUmVhZCBNb3JlJztcbiAgICAgIHJlYWRNb3JlLmNsYXNzTmFtZSA9ICdyZWFkTW9yZUJ0bic7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVhZE1vcmUpO1xuICAgICAgcmVhZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChyZWFkTW9yZS5pbm5lckhUTUwgPT09ICdSZWFkIE1vcmUnKSB7XG4gICAgICAgICAgcmVhZE1vcmUuaW5uZXJIVE1MID0gJ1JlYWQgTGVzcyc7XG4gICAgICAgICAgbW92aWVTdW1tYXJ5LmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5zdW1tYXJ5fWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVhZE1vcmUuaW5uZXJIVE1MID0gJ1JlYWQgTW9yZSc7XG4gICAgICAgICAgbW92aWVTdW1tYXJ5LmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5zdW1tYXJ5LnN1YnN0cmluZyhcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0MDAsXG4gICAgICAgICAgKX1gO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCBtb2RhbCB0byBib2R5XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbW92aWVNb2RhbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXRNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2dldC1tb3ZpZXMuanMnO1xuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXktbW92aWVzLmpzJztcbmltcG9ydCBtb3ZpZU1vZGFsIGZyb20gJy4vbW9kdWxlcy9tb3ZpZS1tb2RhbC5qcyc7XG5pbXBvcnQgY291bnRNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL21vdmllLWNvdW50ZXIuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XG4gIGNvbnN0IHNhbXBsZU1vdmllcyA9IG1vdmllcy5zbGljZSgwLCA0OCk7XG4gIGF3YWl0IGRpc3BsYXlNb3ZpZXMoc2FtcGxlTW92aWVzKTtcblxuICBjb25zdCBtb3ZpZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtbGlzdCcpO1xuXG4gIG1vdmllTGlzdC5pbm5lckhUTUwgPSBgV2UgY3VycmVudGx5IGhhdmUgPHNwYW4+ICR7Y291bnRNb3ZpZXMoc2FtcGxlTW92aWVzKX0gPHNwYW4+IG1vdmllc2A7XG5cbiAgY29uc3QgY29tbWVudEJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRCdG4nKV07XG4gIG1vdmllTW9kYWwoY29tbWVudEJ1dHRvbnMsIHNhbXBsZU1vdmllcyk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=