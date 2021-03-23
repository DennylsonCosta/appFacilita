(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Three.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Three.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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
  name: 'vwThree',
  data: function data() {
    return {
      min: 0,
      max: 999,
      show: false,
      matriz: [],
      matrizPar: [],
      matrizImpar: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.show = true;
      fetch('/api/problem/three/' + this.min + '/' + this.max, {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (resJSON) {
        _this.matriz = resJSON[0];
        _this.matrizPar = resJSON[1];
        _this.matrizImpar = resJSON[2];
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Three.vue?vue&type=template&id=1c82cd0f&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Three.vue?vue&type=template&id=1c82cd0f& ***!
  \***************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("h4", [_vm._v("Problema 3 - Matrizes Multidimensionais")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n        Defina o valor minimo e valor máximo para pode gerar uma matriz 5x5\n        com valores randomicos. Logo após receba a matriz gerada, uma matriz \n        com os números pares e uma com números impares.\n    "
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v("\n        Clique no botão abaixo para gerar as matrizes.\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "" } }, [
            _vm._v("\n                    Valor Mínimo\n                ")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.min,
                expression: "min"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              "aria-describedby": "helpId",
              placeholder: ""
            },
            domProps: { value: _vm.min },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.min = $event.target.value
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "" } }, [
            _vm._v("\n                    Valor Máximo\n                ")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.max,
                expression: "max"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              "aria-describedby": "helpId",
              placeholder: ""
            },
            domProps: { value: _vm.max },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.max = $event.target.value
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block",
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
              ? [
                  _vm._v(
                    "\n                    Buscar Resultado\n                "
                  )
                ]
              : [
                  _c("span", {
                    staticClass: "spinner-grow spinner-grow-sm",
                    attrs: { role: "status", "aria-hidden": "true" }
                  }),
                  _vm._v("\n                    Loading...\n                ")
                ]
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "dl",
          [
            _c("dt", [_vm._v("Matriz inicial gerada pelo php")]),
            _vm._v(" "),
            _vm._l(_vm.matriz, function(item, id) {
              return _c("dd", { key: id }, [_vm._v(_vm._s(item))])
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "dl",
          [
            _c("dt", [_vm._v("Matriz de números Pares")]),
            _vm._v(" "),
            _vm._l(_vm.matrizPar, function(item, id) {
              return _c("dd", { key: id }, [_vm._v(_vm._s(item))])
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "dl",
          [
            _c("dt", [_vm._v("Matriz de números Impares")]),
            _vm._v(" "),
            _vm._l(_vm.matrizImpar, function(item, id) {
              return _c("dd", { key: id }, [_vm._v(_vm._s(item))])
            })
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Three.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Three.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Three_vue_vue_type_template_id_1c82cd0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Three.vue?vue&type=template&id=1c82cd0f& */ "./resources/js/views/Three.vue?vue&type=template&id=1c82cd0f&");
/* harmony import */ var _Three_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Three.vue?vue&type=script&lang=js& */ "./resources/js/views/Three.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Three_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Three_vue_vue_type_template_id_1c82cd0f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Three_vue_vue_type_template_id_1c82cd0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Three.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Three.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Three.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Three.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Three.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Three.vue?vue&type=template&id=1c82cd0f&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Three.vue?vue&type=template&id=1c82cd0f& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_template_id_1c82cd0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Three.vue?vue&type=template&id=1c82cd0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Three.vue?vue&type=template&id=1c82cd0f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_template_id_1c82cd0f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_template_id_1c82cd0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);