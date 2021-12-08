/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./inc/assets/js/src/content.js":
/*!**************************************!*\
  !*** ./inc/assets/js/src/content.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

wp.media.view.AstraSearch = __webpack_require__(/*! ./search.js */ "./inc/assets/js/src/search.js");
var AstraContent = wp.media.View.extend({
  tagName: 'div',
  className: 'ast-attachments-search-wrap',
  initialize: function initialize() {
    this.value = this.options.value;
  },
  render: function render() {
    var search = new wp.media.view.AstraSearch({
      controller: this.controller,
      model: this.model
    });
    this.views.add(search);
    return this;
  }
});
module.exports = AstraContent;

/***/ }),

/***/ "./inc/assets/js/src/frame.js":
/*!************************************!*\
  !*** ./inc/assets/js/src/frame.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Frame = wp.media.view.Frame,
    AstraAttachmentsBrowser;
wp.media.view.AstraContent = __webpack_require__(/*! ./content.js */ "./inc/assets/js/src/content.js");
AstraAttachmentsBrowser = Frame.extend({
  tagName: 'div',
  className: 'attachments-browser ast-attachments-browser',
  images: [],
  object: [],
  initialize: function initialize() {
    _.defaults(this.options, {
      filters: false,
      search: true,
      date: true,
      display: false,
      sidebar: true,
      AttachmentView: wp.media.view.Attachment.Library
    }); // Add a heading before the attachments list.


    this.createContent();
  },
  createContent: function createContent() {
    this.attachmentsHeading = new wp.media.view.Heading({
      text: astraImages.title,
      level: 'h3',
      className: 'ast-media-views-heading'
    }); // this.views.add( this.attachmentsHeading );

    this.views.add(new wp.media.view.AstraContent());
    this.$el.find('.ast-image__search').wrapAll('<div class="ast-image__search-wrap">').parent().html();
    this.$el.find('.ast-image__search-wrap').append('<span class="ast-icon-search search-icon"></span>');
  },
  photoUploadComplete: function photoUploadComplete(savedImage) {
    if (savedImage && savedImage.attachmentData) {
      this.model.frame.content.mode("browse");
      this.model.get("selection").add(savedImage.attachmentData);
      this.model.frame.trigger("library:selection:add");
      this.model.get("selection");
      jQuery(".media-frame .media-button-select").click();
    }
  }
});
module.exports = AstraAttachmentsBrowser;

/***/ }),

/***/ "./inc/assets/js/src/index.js":
/*!************************************!*\
  !*** ./inc/assets/js/src/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function ($) {
  var AstraImages = {
    init: function init() {
      if (undefined != wp && wp.media) {
        var $ = jQuery,
            oldMediaFramePost = wp.media.view.MediaFrame.Post,
            oldMediaFrameSelect = wp.media.view.MediaFrame.Select;
        wp.media.view.AstraAttachmentsBrowser = __webpack_require__(/*! ./frame.js */ "./inc/assets/js/src/frame.js");
        var pixabayFrame = {
          // Tab / Router
          browseRouter: function browseRouter(routerView) {
            oldMediaFrameSelect.prototype.browseRouter.apply(this, arguments);
            routerView.set({
              astraimages: {
                text: astraImages.title,
                priority: 70
              }
            });
          },
          // Handlers
          bindHandlers: function bindHandlers() {
            if (astraImages.is_elementor_editor) {
              oldMediaFramePost.prototype.bindHandlers.apply(this, arguments);
            } else {
              oldMediaFrameSelect.prototype.bindHandlers.apply(this, arguments);
            }

            this.on('content:create:astraimages', this.astraimages, this);
          },

          /**
           * Render callback for the content region in the `browse` mode.
           *
           * @param {wp.media.controller.Region} contentRegion
           */
          astraimages: function astraimages(contentRegion) {
            var state = this.state(); // Browse our library of attachments.

            var thisView = new wp.media.view.AstraAttachmentsBrowser({
              controller: this,
              model: state,
              AttachmentView: state.get('AttachmentView')
            });
            contentRegion.view = thisView;
            wp.media.view.AstraAttachmentsBrowser.object = thisView;
            setTimeout(function () {
              $(document).trigger('ast-image__set-scope');
            }, 100);
          }
        };

        if (astraImages.is_elementor_editor) {
          wp.media.view.MediaFrame.Post = oldMediaFramePost.extend(pixabayFrame);
        } else {
          wp.media.view.MediaFrame.Select = oldMediaFrameSelect.extend(pixabayFrame);
        }
      }
    }
  };
  /**
   * Initialize AstraImages
   */

  $(function () {
    AstraImages.init();

    if (astraImages.is_bb_active && astraImages.is_bb_editor) {
      if (undefined !== FLBuilder) {
        if (null !== FLBuilder._singlePhotoSelector) {
          FLBuilder._singlePhotoSelector.on('open', function (event) {
            AstraImages.init();
          });
        }
      }
    }
  });
})(jQuery);

/***/ }),

/***/ "./inc/assets/js/src/search.js":
/*!*************************************!*\
  !*** ./inc/assets/js/src/search.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$ = jQuery; // Search input view controller.

var AstraSearch = wp.Backbone.View.extend({
  tagName: 'input',
  className: 'ast-image__search',
  id: 'ast-image-search-input',
  searching: false,
  images: [],
  attributes: {
    placeholder: astraImages.search_placeholder,
    type: 'search',
    'aria-describedby': 'live-search-desc'
  },
  events: {
    'search': 'search',
    'keyup': 'search',
    'blur': 'pushState',
    'infinite': 'infinite'
  },
  initialize: function initialize(options) {
    this.parent = options.parent;
  },
  infinite: function infinite(event) {
    // Since doSearch is debounced, it will only run when user input comes to a rest.
    this.doSearch(event);
  },
  search: function search(event) {
    // Clear on escape.
    if (event.type === 'keyup' && event.which === 27) {
      event.target.value = '';
    }

    if ('' == event.target.value) {
      this.$el.removeClass('has-input');
    } else {
      this.$el.addClass('has-input');
    }

    $scope.find('.ast-image__skeleton').animate({
      scrollTop: 0
    }, 0);
    $('body').data('page', 1);
    AstraImageCommon.infiniteLoad = false;
    var thisObject = this;
    setTimeout(function () {
      thisObject.doSearch(event);
    }, 1500);
  },
  // Runs a search on the theme collection.
  doSearch: function doSearch(event) {
    if (this.searching) {
      return;
    }

    var thisObject = this;
    thisObject.searching = true;
    AstraImageCommon.config.q = event.target.value; // Do Image Search.

    $.ajax({
      url: astraImages.ajaxurl,
      type: 'POST',
      data: {
        'action': 'astra-sites-search-images',
        'params': AstraImageCommon.config,
        '_ajax_nonce': astraImages._ajax_nonce
      },
      beforeSend: function beforeSend() {
        console.groupCollapsed('Requesting Pixabay API');
      }
    }).fail(function (jqXHR) {
      console.log(jqXHR);
      console.groupEnd();
    }).done(function (response) {
      console.log('Response:');
      console.log(response);
      console.groupEnd();

      if (response.success) {
        thisObject.searching = false;
        this.images = response.data.hits;
        wp.media.view.AstraAttachmentsBrowser.images = this.images;
      }

      $(document).trigger('ast-image__refresh');
    });
  },
  pushState: function pushState(event) {
    $(document).trigger('ast-image__refresh');
  }
});
module.exports = AstraSearch;

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./inc/assets/js/src/ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./inc/assets/js/src/ */"./inc/assets/js/src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map