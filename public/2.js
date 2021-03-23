(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Two.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Two.vue?vue&type=script&lang=js& ***!
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
  name: 'vwTwo',
  data: function data() {
    return {
      show: false,
      books: [],
      users: [],
      selected: {
        book: {},
        user: {}
      }
    };
  },
  methods: {
    getBooks: function getBooks() {
      var _this = this;

      this.show = true;
      fetch('/api/problem/two/books', {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (resJSON) {
        _this.books = resJSON;
      })["catch"](function (error) {
        console.error('Error', '=>', error);
      })["finally"](function () {
        _this.show = false;
      });
    },
    getUsers: function getUsers() {
      var _this2 = this;

      this.show = true;
      fetch('/api/problem/two/users', {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (resJSON) {
        _this2.users = resJSON;
      })["catch"](function (error) {
        console.error('Error', '=>', error);
      })["finally"](function () {
        _this2.show = false;
      });
    }
  },
  mounted: function mounted() {
    this.getBooks();
    this.getUsers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Two.vue?vue&type=template&id=9fb7f606&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Two.vue?vue&type=template&id=9fb7f606& ***!
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("h4", [_vm._v("Problema 2 - Biblioteca")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n        Selecione a pessoa e o livro que irá ser retirado e obtenha o comprovante\n        com informações relacionadas as datas de devolução do livro retirado.\n    "
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("h3", [_vm._v("Pessoas")]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("table", { staticClass: "table" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.users, function(user) {
              return _c("tr", { key: user.id }, [
                _c("td", [_vm._v(_vm._s(user.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(user.name))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(user.type == "P" ? "Professor" : "Aluno"))
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.selected.user = user
                        }
                      }
                    },
                    [_vm._v("Selecionar")]
                  )
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("h3", [_vm._v("Livros")]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("table", { staticClass: "table" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.books, function(book) {
              return _c("tr", { key: book.id }, [
                _c("td", [_vm._v(_vm._s(book.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(book.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(book.bar_code))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.selected.book = book
                        }
                      }
                    },
                    [_vm._v("Selecionar")]
                  )
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "container pt-4 pb-2 px-2 border" }, [
          _c("h4", [_vm._v("Comprovante de retirada do livro")]),
          _vm._v(" "),
          _c("p", [
            _c("small", [_vm._v("Pessoa: ")]),
            _vm._v(" "),
            _c("strong", [_vm._v(_vm._s(_vm.selected.user.name))])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("small", [_vm._v("Livro: ")]),
            _vm._v(" "),
            _c("strong", [_vm._v(_vm._s(_vm.selected.book.name))])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("small", [_vm._v("Tempo para entrega: ")]),
            _vm._v(" "),
            _c("strong", [
              _vm._v(_vm._s(_vm.selected.user.time_to_return) + " dias")
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("small", [_vm._v("Dia da retirada: ")]),
            _vm._v(" "),
            _c("strong", [_vm._v(_vm._s(_vm.$moment().format("DD/MM/YYYY")))])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("small", [_vm._v("Dia máximo para entrega: ")]),
            _vm._v(" "),
            _c("strong", [
              _vm._v(
                _vm._s(
                  _vm
                    .$moment(
                      _vm.$moment().add(_vm.selected.user.time_to_return, "d")
                    )
                    .format("DD/MM/YYYY")
                )
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(2)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nome")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Opções")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nome")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Opções")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mt-2" }, [
      _c("hr", { staticClass: "mb-0 mt-4" }),
      _vm._v(" "),
      _c("small", [_vm._v("Assinatura")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Two.vue":
/*!************************************!*\
  !*** ./resources/js/views/Two.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Two_vue_vue_type_template_id_9fb7f606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Two.vue?vue&type=template&id=9fb7f606& */ "./resources/js/views/Two.vue?vue&type=template&id=9fb7f606&");
/* harmony import */ var _Two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Two.vue?vue&type=script&lang=js& */ "./resources/js/views/Two.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Two_vue_vue_type_template_id_9fb7f606___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Two_vue_vue_type_template_id_9fb7f606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Two.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Two.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/views/Two.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Two.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Two.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Two.vue?vue&type=template&id=9fb7f606&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Two.vue?vue&type=template&id=9fb7f606& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_vue_vue_type_template_id_9fb7f606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Two.vue?vue&type=template&id=9fb7f606& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Two.vue?vue&type=template&id=9fb7f606&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_vue_vue_type_template_id_9fb7f606___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_vue_vue_type_template_id_9fb7f606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);