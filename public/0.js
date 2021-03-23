(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/One.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/One.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vwOne',
  data: function data() {
    return {
      years: 0,
      show: false
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.show = true;
      fetch('/api/problem/one', {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (resJSON) {
        if (resJSON.data) {
          _this.years = resJSON.time;
        }
      })["catch"](function (error) {
        console.error('Error', '=>', error);
      })["finally"](function () {
        _this.show = false;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/One.vue?vue&type=template&id=d08757d2&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/One.vue?vue&type=template&id=d08757d2& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h4", [_vm._v("Problema 1 - Cálculo de altura")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n        Chico tem 1,50m e cresce 2 centímetros por ano, enquanto Juca\n        tem 1,10m e cresce 3 centímetros por ano.\n    "
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n        Clique no botão abaixo e saiba quantos anos Juca irá demorar\n        para ficar maior que Chico.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-primary",
        attrs: { type: "button" },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.getData()
          }
        }
      },
      [
        !_vm.show
          ? [_vm._v("\n            Buscar Resultado\n        ")]
          : [
              _c("span", {
                staticClass: "spinner-grow spinner-grow-sm",
                attrs: { role: "status", "aria-hidden": "true" }
              }),
              _vm._v("\n            Loading...\n        ")
            ]
      ],
      2
    ),
    _vm._v(" "),
    _vm.years > 0
      ? _c("span", { staticClass: "ml-2" }, [
          _vm._v("\n        Demoraria "),
          _c("strong", [_vm._v(_vm._s(_vm.years))]),
          _vm._v(" anos para ficar maior\n    ")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/One.vue":
/*!************************************!*\
  !*** ./resources/js/views/One.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _One_vue_vue_type_template_id_d08757d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./One.vue?vue&type=template&id=d08757d2& */ "./resources/js/views/One.vue?vue&type=template&id=d08757d2&");
/* harmony import */ var _One_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./One.vue?vue&type=script&lang=js& */ "./resources/js/views/One.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _One_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _One_vue_vue_type_template_id_d08757d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _One_vue_vue_type_template_id_d08757d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/One.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/One.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/views/One.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_One_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./One.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/One.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_One_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/One.vue?vue&type=template&id=d08757d2&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/One.vue?vue&type=template&id=d08757d2& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_One_vue_vue_type_template_id_d08757d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./One.vue?vue&type=template&id=d08757d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/One.vue?vue&type=template&id=d08757d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_One_vue_vue_type_template_id_d08757d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_One_vue_vue_type_template_id_d08757d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);