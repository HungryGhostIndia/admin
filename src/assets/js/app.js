
jQuery.fn.hasDataAttr = function(a) {
    return $(this)[0].hasAttribute("data-" + a)
}, jQuery.fn.dataAttr = function(a, b) {
    return $(this)[0].getAttribute("data-" + a) || b
}, jQuery.fn.outerHTML = function() {
    var a = "";
    return this.each(function() {
        a += $(this).prop("outerHTML")
    }), a
}, jQuery.fn.fullHTML = function() {
    var a = "";
    return $(this).each(function() {
        a += $(this).outerHTML()
    }), a
}, jQuery.expr[":"].search = function(a, b, c) {
    return $(a).html().toUpperCase().indexOf(c[3].toUpperCase()) >= 0
}, jQuery.fn.scrollToEnd = function() {
    return $(this).scrollTop($(this).prop("scrollHeight")), this
},
function(a, b) {
    var c = {
        name: "TheAdmin",
        version: "1.0.3",
        corejs: a('script[src*="core.js"]').attr("src")
    };
    c.dir = {
        home: c.corejs.replace("assets/js/core.js", ""),
        assets: c.corejs.replace("js/core.js", ""),
        vendor: c.corejs.replace("js/core.js", "vendor/")
    };
    var d = a("[data-assets-url]");
    if (d.length) {
        var e = d.data("assets-url");
        "/" !== e.slice(-1) && (e += "/"), c.dir.assets = e, c.dir.vendor = e + ""
    }
    c.defaults = {
        provide: null,
        googleApiKey: null,
        googleAnalyticsKey: null,
        smoothScroll: !1,
        saveState: !1,
        toast: {
            duration: 4e3,
            actionTitle: "",
            actionUrl: "",
            actionColor: "warning"
        },
        modaler: {
            url: "",
            isModal: !1,
            html: "",
            target: "",
            type: "",
            size: "",
            title: "",
            backdrop: !0,
            headerVisible: !0,
            footerVisible: !0,
            confirmVisible: !0,
            confirmText: "Ok",
            confirmClass: "btn btn-w-sm btn-flat btn-primary",
            cancelVisible: !1,
            cancelText: "Cancel",
            cancelClass: "btn btn-w-sm btn-flat btn-secondary",
            bodyExtraClass: "",
            spinner: '<div class="h-200 center-vh"><svg class="spinner-circle-material-svg" viewBox="0 0 50 50"><circle class="circle" cx="25" cy="25" r="20"></svg></div>',
            autoDestroy: !0,
            onShow: null,
            onShown: null,
            onHide: null,
            onHidden: null,
            onConfirm: null,
            onCancel: null,
            modalId: null
        },
        googleMap: {
            lat: "",
            lng: "",
            zoom: 13,
            markerLat: "",
            markerLng: "",
            markerIcon: "",
            style: ""
        }
    }, c.breakpoint = {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200
    }, c.colors = {
        primary: "#33cabb",
        secondary: "#e4eaec",
        success: "#46be8a",
        info: "#48b0f7",
        warning: "#f2a654",
        danger: "#f96868",
        bg: "#f3f5f6",
        text: "#616a78",
        textSecondary: "#929daf"
    }, c.font = {
        body: "Roboto, sans-serif",
        title: "Roboto, sans-serif"
    };
    var f = [];
    c.getReadyCallbacksString = function() {
        return f.toString()
    }, c.ready = function(a) {
        f.push(a)
    };
    var g = 0;
    c.isReady = function() {
        2 == ++g && a(function() {
            provider.callCallbacks();
            for (var b = 0; b < f.length; b++) try {
                f[b]()
            } catch (a) {
                console.error(a)
            }
            f = [];
            var c = a(".preloader");
            if (c.length) {
                var d = c.dataAttr("hide-spped", 600);
                c.fadeOut(d)
            }
        })
    }, c.provide = function(a) {
        if (Array.isArray(a))
            for (var b = a.length, c = 0; c < b; c++) provider.inject(a[c]);
        else provider.inject(a)
    }, c.init = function() {
        provider.init(), c.initCorePlugins(), c.initThePlugins()
    }, c.call = function(a) {
        if ("" == a || "provider.undefined" == a) return void console.log("UNDEFINED FUNC");
        for (var c = Array.prototype.slice.call(arguments, 1), d = b, e = a.split("."), f = e.pop(), g = 0; g < e.length; g++) d = d[e[g]];
        try {
            return d[f].apply(d, c)
        } catch (a) {
            console.error(a)
        }
    }, c.loadScript = function(b, c) {
        a.getScript(b, c)
    }, c.loadStyle = function(b, c) {
        if ("" != b)
            if (void 0 === c && (c = ""), Array.isArray(b))
                for (var d = 0; d < b.length; d++) a("head link:first").after(a('<link href="' + c + b[d] + '" rel="stylesheet">'));
            else a("head link:first").after(a('<link href="' + c + b + '" rel="stylesheet">'))
    }, c.key = function(b, d) {
        c.unkey(b), a(document).on("keydown." + c._normalizeKey(b), null, b, d)
    }, c.unkey = function(b) {
        a(document).off("keydown." + c._normalizeKey(b))
    }, c._normalizeKey = function(a) {
        return a.replace("+", "_")
    }, c.getTarget = function(b) {
        var c;
        return c = b.hasDataAttr("target") ? b.data("target") : b.attr("href"), "next" == c ? c = a(b).next() : "prev" == c && (c = a(b).prev()), void 0 != c && c
    }, c.getURL = function(a) {
        return a.hasDataAttr("url") ? a.data("url") : a.attr("href")
    }, c.config = function(d) {
        if ("string" == typeof d) return c.defaults[d];
        if (a.extend(!0, c.defaults, d), c.defaults.provide && c.provide(c.defaults.provide), c.defaults.smoothscroll && c.provide("smoothscroll"), a('[data-provide~="map"]').length && void 0 === b["google.maps.Map"] && a.getScript("https://maps.googleapis.com/maps/api/js?key=" + c.defaults.googleApiKey + "&callback=app.map"), c.defaults.googleAnalyticsId && (! function(a, b, c, d, e, f, g) {
                a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
                    (a[e].q = a[e].q || []).push(arguments)
                }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = "https://www.google-analytics.com/analytics.js", g.parentNode.insertBefore(f, g)
            }(b, document, "script", 0, "ga"), ga("create", c.defaults.googleAnalyticsId, "auto"), ga("send", "pageview")), c.defaults.saveState) {
            var e = c.state();
            e["sidebar.folded"] && sidebar.fold(), e["topbar.fixed"] && topbar.fix()
        }
    }, c.shortcut = function(b) {
        a.each(b, function(a, b) {
            c.key(a, b)
        })
    }, c.getDataOptions = function(b, d) {
        var e = {};
        return a.each(a(b).data(), function(a, b) {
            if ("provide" != (a = c.dataToOption(a))) {
                if (void 0 != d) {
                    switch (d[a]) {
                        case "bool":
                            b = Boolean(b);
                            break;
                        case "num":
                            b = Number(b);
                            break;
                        case "array":
                            b = b.split(",")
                    }
                }
                e[a] = b
            }
        }), e
    }, c.state = function(a, b) {
        void 0 === localStorage.theadmin && (localStorage.theadmin = "{}");
        var d = JSON.parse(localStorage.theadmin);
        return 0 == arguments.length ? d : 1 == arguments.length ? d[a] : void(2 == arguments.length && c.defaults.saveState && (d[a] = b, localStorage.theadmin = JSON.stringify(d)))
    }, c.toggleState = function(a) {
        if (c.defaults.saveState) {
            var b = c.state();
            b[a] = !b[a], localStorage.theadmin = JSON.stringify(b)
        }
    }, c.state.remove = function(a) {
        localStorage.removeItem(a)
    }, c.state.clear = function() {
        localStorage.clear()
    }, c.guid = function(a) {
        return void 0 == a && (a = 5), Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, a)
    }, c.optionToData = function(a) {
        return a.replace(/([A-Z])/g, "-$1").toLowerCase()
    }, c.dataToOption = function(a) {
        return a.replace(/-([a-z])/g, function(a) {
            return a[1].toUpperCase()
        })
    }, c.htmlEscape = function(a) {
        var b = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            c = "(?:" + Object.keys(b).join("|") + ")",
            d = new RegExp(c),
            e = new RegExp(c, "g"),
            f = null == a ? "" : "" + a;
        return d.test(f) ? f.replace(e, function(a) {
            return b[a]
        }) : f
    }, b.app = c
}(jQuery, window),
function(a, b) {
    var c = {};
    c.callbacks = [];
    var d, e = [],
        f = [],
        g = !0,
        h = function(a, b) {
            this.selector = a, this.callback = b
        };
    c.init = function() {
        $LAB.setGlobalDefaults({
            BasePath: app.dir.vendor,
            AlwaysPreserveOrder: !0,
            AllowDuplicates: !1
        }), c.inject(), c.observeDOM()
    }, c.observeDOM = function() {
        app.ready(function() {
            d = new MutationObserver(function(b) {
                c.inject();
                for (var d = 0; d < e.length; d++) a(e[d].selector).each(e[d].callback)
            }), d.observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !1
            })
        })
    }, c.provide = function(b, d, f) {
        !f == !0 && (b = c.getSelector(c.list[b].selector));
        var g = [],
            i = function() {
                a(this).is("script") || 0 == a(this).data("init") || g.indexOf(this) == -1 && (g.push(this), a(this).each(d))
            };
        a(b).each(i), e.push(new h(b, i))
    }, c.inject = function(b) {
        if (void 0 !== b) {
            var d = c.list[b];
            if (void 0 === d) return;
            if (f.indexOf(b) > -1) return;
            if ("css" in d && app.loadStyle(d.css, app.dir.vendor), "js" in d) {
                var e = d.js;
                if (Array.isArray(e))
                    for (var h = 0; h < e.length; h++) $LAB.queueScript(e[h]);
                else $LAB.queueScript(e)
            }
            return "callback" in d && $LAB.queueWait(function() {
                app.call("provider." + d.callback)
            }), f.push(b), void $LAB.runQueue()
        }
        var i = [];
        a.each(c.list, function(b, d) {
            if (!(f.indexOf(b) > -1) && a(c.getSelector(d.selector)).length) {
                if ("css" in d && app.loadStyle(d.css, app.dir.vendor), "js" in d) {
                    var e = d.js;
                    if (Array.isArray(e))
                        for (var g = 0; g < e.length; g++) $LAB.queueScript(e[g]);
                    else $LAB.queueScript(e)
                }
                "callback" in d && i.push(d.callback), f.push(b)
            }
        }), g ? (c.injectExtra(), $LAB.queueWait(function() {
            c.callbacks = i, app.isReady()
        }), g = !1) : $LAB.queueWait(function() {
            for (var a = 0; a < i.length; a++) app.call("provider." + i[a])
        }), $LAB.runQueue()
    }, c.injectExtra = function() {
        a("[data-mapael-map]").each(function() {
            var b = "mapael/maps/" + a(this).data("mapael-map") + ".min.js";
            $LAB.queueScript(b)
        }), a('[data-provide="selectpicker"][data-lang]').each(function() {
            var b = "bootstrap-select/js/i18n/defaults-" + a(this).data("lang") + ".min.js";
            $LAB.queueScript(b)
        })
    }, c.injectCalledVendors = function() {
        var b = app.getReadyCallbacksString(),
            d = [],
            e = {
                typeahead: ").typeahead("
            };
        a.each(e, function(a, e) {
            if (b.indexOf(e) != -1) {
                var g = c.list[a];
                if (!(f.indexOf(a) > -1)) {
                    if ("css" in g && app.loadStyle(g.css, app.dir.vendor), "js" in g) {
                        var h = g.js;
                        if (Array.isArray(h))
                            for (var i = 0; i < h.length; i++) $LAB.queueScript(h[i]);
                        else $LAB.queueScript(h)
                    }
                    "callback" in g && d.push(g.callback), f.push(a)
                }
            }
        }), $LAB.queueWait(function() {
            for (var a = 0; a < d.length; a++) app.call("provider." + d[a])
        }), $LAB.runQueue()
    }, c.callCallbacks = function(a) {
        for (var b = 0; b < c.callbacks.length; b++) app.call("provider." + c.callbacks[b]);
        c.callbacks = []
    }, c.getSelector = function(a) {
        var b = '[data-provide~="' + a + '"]';
        return 0 == a.indexOf("$ ") && (b = a.substr(2)), b
    }, b.provider = c
}(jQuery, window),
function(a) {
    provider.list = {
        easypie: {
            selector: "easypie",
            callback: "initEasyPieChart",
            css: "",
            js: "easypiechart/jquery.easypiechart.min.js"
        },
        peity: {
            selector: "peity",
            callback: "initPeity",
            css: "",
            js: "jquery.peity/jquery.peity.min.js"
        },
        sparkline: {
            selector: "sparkline",
            callback: "initSparkline",
            css: "",
            js: "sparkline/sparkline.min.js"
        },
        chartjs: {
            selector: "chartjs",
            callback: "initChartjs",
            css: "",
            js: ["chartjs/Chart.min.js", "moment/moment.min.js"]
        },
        morris: {
            selector: "morris",
            callback: "initMorris",
            css: "morris/morris.css",
            js: ["raphael/raphael.min.js", "morris/morris.min.js"]
        },
        prism: {
            selector: '$ code[class*="language-"]',
            callback: "initPrism",
            css: "prism/prism.css",
            js: ["prism/prism.js", "clipboard/clipboard.min.js"]
        },
        clipboard: {
            selector: "$ [data-clipboard-text]",
            callback: "initClipboard",
            js: "clipboard/clipboard.min.js"
        },
        summernote: {
            selector: "summernote",
            callback: "initSummernote",
            css: "summernote/summernote.css",
            js: "summernote/summernote.min.js"
        },
        quill: {
            selector: "quill",
            callback: "initQuill",
            css: ["quill/quill.bubble.css", "quill/quill.snow.css"],
            js: ["quill/quill.min.js"]
        },
        emoji: {
            selector: "emoji",
            callback: "initEmojione",
            css: "",
            js: "emojione/emojione.min.js"
        },
        selectpicker: {
            selector: "selectpicker",
            callback: "initSelectpicker",
            css: "bootstrap-select/css/bootstrap-select.min.css",
            js: "bootstrap-select/js/bootstrap-select.min.js"
        },
        datepicker: {
            selector: "datepicker",
            callback: "initDatepicker",
            css: "bootstrap-datepicker/css/bootstrap-datepicker3.min.css",
            js: "bootstrap-datepicker/js/bootstrap-datepicker.min.js"
        },
        timepicker: {
            selector: "timepicker",
            css: "bootstrap-timepicker/bootstrap-timepicker.min.css",
            js: "bootstrap-timepicker/bootstrap-timepicker.min.js"
        },
        colorpicker: {
            selector: "colorpicker",
            callback: "initMinicolor",
            css: "jquery-minicolors/jquery.minicolors.css",
            js: "jquery-minicolors/jquery.minicolors.min.js"
        },
        clockpicker: {
            selector: "clockpicker",
            callback: "initClockpicker",
            css: "bootstrap-clockpicker/bootstrap-clockpicker.min.css",
            js: "bootstrap-clockpicker/bootstrap-clockpicker.min.js"
        },
        maxlength: {
            selector: "maxlength",
            callback: "initMaxlength",
            css: "",
            js: "bootstrap-maxlength/bootstrap-maxlength.min.js"
        },
        pwstrength: {
            selector: "pwstrength",
            callback: "initPwStrength",
            css: "",
            js: "bootstrap-pwstrength/pwstrength-bootstrap.min.js"
        },
        tagsinput: {
            selector: "tagsinput",
            callback: "initTagsinput",
            css: "bootstrap-tagsinput/bootstrap-tagsinput.css",
            js: "bootstrap-tagsinput/bootstrap-tagsinput.min.js"
        },
        knob: {
            selector: "knob",
            callback: "initKnob",
            css: "",
            js: "knob/jquery.knob.min.js"
        },
        slider: {
            selector: "slider",
            callback: "initNouislider",
            css: "nouislider/nouislider.min.css",
            js: "nouislider/nouislider.min.js"
        },
        switchery: {
            selector: "switchery",
            callback: "initSwitchery",
            css: "switchery/switchery.min.css",
            js: "switchery/switchery.min.js"
        },
        formatter: {
            selector: "$ [data-format]",
            callback: "initFormatter",
            css: "",
            js: "formatter/jquery.formatter.min.js"
        },
        validation: {
            selector: "validation",
            callback: "initValidation",
            css: "",
            js: "bootstrap-validator/validator-bs4.min.js"
        },
        wizard: {
            selector: "wizard",
            callback: "initWizard",
            css: "",
            js: "bootstrap-wizard/bootstrap-wizard.min.js"
        },
        typeahead: {
            selector: "typeahead",
            js: ["typeahead/bloodhound.min.js", "typeahead/typeahead.jquery.min.js"]
        },
        bloodhound: {
            selector: "bloodhound",
            js: "typeahead/bloodhound.min.js"
        },
        iconMaterial: {
            selector: "$ .material-icons",
            css: "material-icons/css/material-icons.css"
        },
        icon7Stroke: {
            selector: '$ [class*="pe-7s-"]',
            css: ["pe-icon-7-stroke/css/pe-icon-7-stroke.min.css", "pe-icon-7-stroke/css/helper.min.css"]
        },
        iconIon: {
            selector: '$ [class*="ion-"]',
            css: "ionicons/css/ionicons.min.css"
        },
        iconI8: {
            selector: "$ [data-i8-icon]",
            callback: "initI8icons",
            css: "",
            js: "i8-icon/jquery-i8-icon.min.js"
        },
        map: {
            selector: "map",
            callback: "initMap",
            css: "",
            js: "https://maps.googleapis.com/maps/api/js?key=" + app.defaults.googleApiKey + "&callback=app.map"
        },
        mapael: {
            selector: "mapael",
            callback: "initMapael",
            css: "",
            js: ["jquery.mousewheel/jquery.mousewheel.min.js", "raphael/raphael.min.js", "mapael/jquery.mapael.min.js"]
        },
        table: {
            selector: "table",
            callback: "initBootstrapTable",
            css: "bootstrap-table/bootstrap-table.min.css",
            js: ["bootstrap-table/bootstrap-table.min.js", "bootstrap-table/extensions/editable/bootstrap-table-editable.min.js", "bootstrap-table/extensions/export/bootstrap-table-export.min.js", "bootstrap-table/extensions/resizable/bootstrap-table-resizable.min.js", "bootstrap-table/extensions/mobile/bootstrap-table-mobile.min.js", "bootstrap-table/extensions/filter-control/bootstrap-table-filter-control.min.js", "bootstrap-table/extensions/multiple-sort/bootstrap-table-multiple-sort.min.js"]
        },
        jsgrid: {
            selector: "jsgrid",
            callback: "initJsGrid",
            css: ["jsgrid/jsgrid.min.css", "jsgrid/jsgrid-theme.min.css"],
            js: "jsgrid/jsgrid.min.js"
        },
        datatables: {
            selector: "datatables",
            callback: "initDatatables",
            css: "datatables/css/dataTables.bootstrap4.min.css",
            js: ["datatables/js/jquery.dataTables.min.js", "datatables/js/dataTables.bootstrap4.min.js"]
        },
        sweetalert: {
            selector: "sweetalert",
            callback: "initSweetalert2",
            css: "sweetalert2/sweetalert2.min.css",
            js: "sweetalert2/sweetalert2.min.js"
        },
        lity: {
            selector: "lity",
            callback: "initLity",
            css: "lity/lity.min.css",
            js: "lity/lity.min.js"
        },
        sortable: {
            selector: "sortable",
            callback: "initSortable",
            css: "",
            js: "html5sortable/html.sortable.min.js"
        },
        shepherd: {
            selector: "shepherd",
            callback: "initShepherd",
            css: "shepherd/css/shepherd-theme-arrows-plain-buttons.css",
            js: ["shepherd/js/tether.js", "shepherd/js/shepherd.min.js"]
        },
        shuffle: {
            selector: "shuffle",
            callback: "initShuffle",
            css: "",
            js: ["imagesloaded/imagesloaded.pkgd.min.js", "shuffle/shuffle.min.js"]
        },
        photoswipe: {
            selector: "photoswipe",
            callback: "initPhotoswipe",
            css: ["photoswipe/photoswipe.min.css", "photoswipe/default-skin/default-skin.min.css"],
            js: "photoswipe/jquery.photoswipe-global.js"
        },
        swiper: {
            selector: "swiper",
            callback: "initSwiper",
            css: "swiper/css/swiper.min.css",
            js: "swiper/js/swiper.min.js"
        },
        fullscreen: {
            selector: "fullscreen",
            callback: "initFullscreen",
            js: "screenfull/screenfull.min.js"
        },
        jqueryui: {
            selector: "jqueryui",
            js: "jqueryui/jquery-ui.min.js"
        },
        dropify: {
            selector: "dropify",
            callback: "initDropify",
            css: "dropify/css/dropify.min.css",
            js: "dropify/js/dropify.min.js"
        },
        dropzone: {
            selector: "dropzone",
            callback: "initDropzone",
            css: "dropzone/min/dropzone.min.css",
            js: "dropzone/min/dropzone.min.js"
        },
        fullcalendar: {
            selector: "fullcalendar",
            callback: "initFullcalendar",
            css: "fullcalendar/fullcalendar.min.css",
            js: ["moment/moment.min.js", "fullcalendar/fullcalendar.min.js"]
        },
        justified: {
            selector: "justified-gallery",
            callback: "initJustifiedGallery",
            css: "justified-gallery/css/justifiedGallery.min.css",
            js: "justified-gallery/js/jquery.justifiedGallery.min.js"
        },
        animate: {
            selector: "$ .animated",
            css: "animate/animate.min.css"
        },
        intercoolerjs: {
            selector: "$ [ic-get-from], [ic-post-to], [ic-put-to], [ic-patch-to], [ic-delete-from], [data-ic-get-from], [data-ic-post-to], [data-ic-put-to], [data-ic-patch-to], [data-ic-delete-from]",
            js: "intercoolerjs/intercooler.min.js"
        },
        smoothscroll: {
            selector: "smoothscroll",
            js: "smoothscroll/smoothscroll.min.js"
        },
        aos: {
            selector: "$ [data-aos]",
            callback: "initAos",
            css: "aos/aos.css",
            js: "aos/aos.js"
        },
        typed: {
            selector: "typing",
            callback: "initTyped",
            js: "typed.js/typed.min.js"
        },
        vuejs: {
            selector: "vuejs",
            js: "vuejs/vue.min.js"
        },
        reactjs: {
            selector: "reactjs",
            js: ["reactjs/react.min.js", "reactjs/react-dom.min.js"]
        }
    }
}(jQuery),
function(a) {
    provider.initCharts = function() {
        provider.initPeity(), provider.initSparkline(), provider.initEasyPieChart(), provider.initChartjs()
    }, provider.initPeity = function() {
        a.fn.peity && provider.provide("peity", function() {
            switch (a(this).dataAttr("type", "")) {
                case "pie":
                    var b = {
                        width: 38,
                        height: 38,
                        radius: 8,
                        fill: app.colors.primary + "," + app.colors.bg
                    };
                    b = a.extend(b, app.getDataOptions(a(this))), b.size && (b.width = b.height = b.size), b.fill = b.fill.split(","), a(this).peity("pie", b);
                    break;
                case "donut":
                    var b = {
                        width: 38,
                        height: 38,
                        radius: 8,
                        fill: app.colors.primary + "," + app.colors.bg
                    };
                    b = a.extend(b, app.getDataOptions(a(this))), b.size && (b.width = b.height = b.size), b.fill = b.fill.split(","), a(this).peity("donut", b);
                    break;
                case "line":
                    var b = {
                        height: 38,
                        width: 120,
                        delimiter: ",",
                        min: 0,
                        max: null,
                        fill: app.colors.bg,
                        stroke: app.colors.primary,
                        strokeWidth: 1
                    };
                    b = a.extend(b, app.getDataOptions(a(this))), a(this).peity("line", b);
                    break;
                case "bar":
                    var b = {
                        height: 38,
                        width: 120,
                        delimiter: ",",
                        min: 0,
                        max: null,
                        padding: .2,
                        fill: app.colors.primary
                    };
                    b = a.extend(b, app.getDataOptions(a(this))), b.fill = b.fill.split(","), a(this).peity("bar", b)
            }
        })
    }, provider.initEasyPieChart = function() {
        a.fn.easyPieChart && provider.provide("easypie", function() {
            var b = {
                barColor: app.colors.primary,
                trackColor: app.colors.bg
            };
            b = a.extend(b, app.getDataOptions(a(this))), b.color && (b.barColor = b.color, b.trackColor = app.colors.bg), a(this).easyPieChart(b)
        })
    }, provider.initSparkline = function() {
        if (a.fn.sparkline) {
            var b = "rgba(51,202,185,0.5)",
                c = app.colors.primary,
                d = app.colors.danger,
                e = app.colors.danger;
            a.extend(a.fn.sparkline.defaults.common, {
                enableTagOptions: !0,
                tagOptionsPrefix: "data-",
                tagValuesAttribute: "data-values",
                lineColor: b,
                fillColor: b
            }), a.extend(a.fn.sparkline.defaults.line, {
                spotColor: c,
                minSpotColor: c,
                maxSpotColor: c,
                highlightSpotColor: d,
                highlightLineColor: null,
                height: 38
            }), a.extend(a.fn.sparkline.defaults.bar, {
                barWidth: 7,
                barSpacing: 4,
                barColor: b,
                negBarColor: e,
                zeroColor: b,
                stackedBarColor: [b, e],
                height: 38
            }), a.extend(a.fn.sparkline.defaults.tristate, {
                barWidth: 7,
                barSpacing: 4,
                posBarColor: b,
                negBarColor: e,
                zeroBarColor: "#e3e4e5",
                height: 38
            }), a.extend(a.fn.sparkline.defaults.discrete, {
                thresholdColor: e,
                height: 38
            }), a.extend(a.fn.sparkline.defaults.pie, {
                sliceColors: [b, e],
                width: 38,
                height: 38
            }), a.extend(a.fn.sparkline.defaults.box, {
                boxLineColor: "#e3e4e5",
                boxFillColor: "#f3f5f6",
                whiskerColor: app.colors.primary,
                outlierLineColor: b,
                outlierFillColor: b,
                medianColor: e,
                targetColor: b
            }), a.extend(a.fn.sparkline.defaults.bullet, {
                targetWidth: 2,
                targetColor: e,
                performanceColor: b,
                rangeColors: ["#f3f5f6", "#ebeced", "#e3e4e5"]
            }), provider.provide("sparkline", function() {
                var b = {};
                b = a.extend(b, app.getDataOptions(a(this))), a(this).sparkline("html", b)
            })
        }
    }, provider.initChartjs = function() {
        void 0 == !window.Chart && (a.extend(Chart.defaults.global, {
            defaultFontColor: app.colors.text,
            defaultFontSize: 13,
            defaultColor: "rgba(0,0,0,0.05)"
        }), a.extend(Chart.defaults.scale.gridLines, {
            color: "rgba(0,0,0,0.05)",
            zeroLineColor: "rgba(0,0,0,0.15)"
        }), a.extend(Chart.defaults.global.legend.labels, {
            boxWidth: 24,
            padding: 16
        }), a.extend(Chart.defaults.global.tooltips, {
            backgroundColor: "rgba(0,0,0,0.7)",
            bodySpacing: 6,
            titleMarginBottom: 8,
            xPadding: 12,
            yPadding: 12,
            caretSize: 8,
            cornerRadius: 2
        }), a.extend(Chart.defaults.global.elements.arc, {
            backgroundColor: "rgba(51,202,185,0.5)"
        }), a.extend(Chart.defaults.global.elements.line, {
            backgroundColor: "rgba(51,202,185,0.5)",
            borderColor: "rgba(51,202,185,0.5)",
            borderWidth: 1
        }), a.extend(Chart.defaults.global.elements.point, {
            backgroundColor: "rgba(51,202,185,0.5)",
            borderColor: "#fff"
        }), a.extend(Chart.defaults.global.elements.rectangle, {
            backgroundColor: "rgba(51,202,185,0.5)",
            borderColor: "#fff"
        }))
    }, provider.initMorris = function() {
        window.Morris
    }
}(jQuery),
function(a) {
    provider.initCodes = function() {
        provider.initPrism(), provider.initClipboard()
    }, provider.initPrism = function() {
        if (a('pre:not(.no-copy) > code[class*="language-"]').each(function() {
                a(this).before('<button class="btn btn-sm btn-bold btn-secondary clipboard-copy">Copy</button>')
            }), a(".clipboard-copy").parent().on("scroll", function() {
                a(this).find(".clipboard-copy").css("transform", "translate(" + a(this).scrollLeft() + "px, " + a(this).scrollTop() + "px)")
            }), a(".clipboard-copy").length > 0) {
            new Clipboard(".clipboard-copy", {
                target: function(a) {
                    return a.nextElementSibling
                }
            }).on("success", function(a) {
                a.clearSelection(), app.toast("Copied.")
            })
        }
    }, provider.initClipboard = function() {
        new Clipboard("[data-clipboard-text]")
    }
}(jQuery),
function(a) {
    provider.initEditors = function() {
        provider.initSummernote()
    }, provider.initSummernote = function() {
        a.fn.summernote && (provider.provide("summernote", function() {
            var b = {
                dialogsInBody: !0,
                dialogsFade: !0
            };
            if (b = a.extend(b, app.getDataOptions(a(this))), b.toolbar) switch (b.toolbar.toLowerCase()) {
                case "slim":
                    b.toolbar = [
                        ["style", ["bold", "underline", "clear"]],
                        ["color", ["color"]],
                        ["para", ["ul", "ol"]],
                        ["insert", ["link", "picture"]]
                    ];
                    break;
                case "full":
                    b.toolbar = [
                        ["para_style", ["style"]],
                        ["style", ["bold", "italic", "underline", "clear"]],
                        ["font", ["strikethrough", "superscript", "subscript"]],
                        ["fontsize", ["fontname", "fontsize", "height"]],
                        ["color", ["color"]],
                        ["para", ["ul", "ol", "paragraph", "hr"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture", "video"]],
                        ["do", ["undo", "redo"]],
                        ["misc", ["fullscreen", "codeview", "help"]]
                    ]
            }
            a(this).summernote(b)
        }), a(document).on("click", "[data-summernote-edit]", function() {
            var b = a(this).data("summernote-edit");
            a(b).summernote({
                focus: !0
            })
        }), a(document).on("click", "[data-summernote-save]", function() {
            var b = a(this).data("summernote-save"),
                c = a(this).data("callback"),
                d = a(b).summernote("code");
            a(b).summernote("destroy"), app.call(c, d)
        }))
    }, provider.initQuill = function() {
        void 0 !== window.Quill && provider.provide("quill", function() {
            var b = {
                    theme: "snow"
                },
                c = [
                    [{
                        font: []
                    }, {
                        header: [1, 2, 3, 4, 5, 6, !1]
                    }, {
                        size: ["small", !1, "large", "huge"]
                    }],
                    ["bold", "italic", "underline", "strike"],
                    [{
                        color: []
                    }, {
                        background: []
                    }],
                    [{
                        script: "sub"
                    }, {
                        script: "super"
                    }],
                    [{
                        header: 1
                    }, {
                        header: 2
                    }, "blockquote", "code-block"],
                    [{
                        list: "ordered"
                    }, {
                        list: "bullet"
                    }, {
                        indent: "-1"
                    }, {
                        indent: "+1"
                    }],
                    [{
                        direction: "rtl"
                    }, {
                        align: []
                    }],
                    ["link", "image", "video"],
                    ["clean"]
                ];
            if (a.extend(b, app.getDataOptions(a(this))), void 0 !== b.toolbar) {
                "full" == b.toolbar.toLowerCase() && (b.modules = {
                    toolbar: c
                })
            }
            new Quill(a(this)[0], b)
        })
    }
}(jQuery),
function(a) {
    provider.initEmojies = function() {
        provider.initEmojione()
    }, provider.initEmojione = function() {
        void 0 !== window.emojione && (emojione.imageType = "svg", emojione.sprites = !0, emojione.ascii = !0, emojione.imagePathSVGSprites = app.dir.vendor + "/emojione/emojione.svg", provider.provide("emoji", function() {
            var b = a(this).html(),
                c = emojione.toImage(b);
            a(this).html(c)
        }))
    }
}(jQuery),
function(a) {
    provider.initForms = function() {
        provider.initSelectpicker(), provider.initDatepicker(), provider.initMinicolor(), provider.initClockpicker(), provider.initMaxlength(), provider.initStrength(), provider.initTagsinput(), provider.initKnob(), provider.initNouislider(), provider.initSwitchery(), provider.initFormatter(), provider.initValidation(), provider.initWizard()
    }, provider.initSelectpicker = function() {
        a.fn.selectpicker && provider.provide("selectpicker", function() {
            a(this).selectpicker({
                iconBase: "",
                tickIcon: "ti-check",
                style: "btn-light"
            })
        })
    }, provider.initDatepicker = function() {
        a.fn.datepicker && (a.fn.datepicker.defaults.multidateSeparator = ", ", provider.provide("datepicker", function() {
            "INPUT" == a(this).prop("tagName") ? a(this).datepicker() : a(this).datepicker({
                inputs: [a(this).find("input:first"), a(this).find("input:last")]
            })
        }))
    }, provider.initMinicolor = function() {
        a.fn.minicolors && provider.provide("colorpicker", function() {
            var b = {
                change: function(a, b) {
                    a && b && (a += ", " + b)
                },
                theme: "bootstrap"
            };
            b = a.extend(b, app.getDataOptions(a(this))), "rgba" === b.format && (b.format = "rgb", b.opacity = !0), a(this).attr("data-swatches") && (b.swatches = a(this).attr("data-swatches").split("|")), a(this).minicolors(b)
        })
    }, provider.initClockpicker = function() {
        a.fn.clockpicker && provider.provide("clockpicker", function() {
            a(this).clockpicker({
                donetext: "Done"
            })
        })
    }, provider.initMaxlength = function() {
        a.fn.maxlength && provider.provide("maxlength", function() {
            var b = {
                warningClass: "badge badge-warning",
                limitReachedClass: "badge badge-danger",
                placement: "bottom-right-inside"
            };
            b = a.extend(b, app.getDataOptions(a(this))), a(this).maxlength(b)
        })
    }, provider.initPwStrength = function() {
        a.fn.pwstrength && provider.provide("pwstrength", function() {
            var b = {
                ui: {
                    bootstrap4: !0,
                    progressBarEmptyPercentage: 0,
                    showVerdicts: !1
                },
                common: {
                    usernameField: a(this).dataAttr("username", "#username")
                }
            };
            if (a(this).pwstrength(b), a(this).add(a(this).next()).wrapAll('<div class="pwstrength"></div>'), a(this).is('[data-vertical="true"]')) {
                var c = a(this).outerHeight() - 10,
                    d = -c / 2 + 7,
                    e = c / 2 + 4;
                a(this).next(".progress").css({
                    width: c,
                    right: d,
                    bottom: e
                })
            }
        })
    }, provider.initTagsinput = function() {
        a.fn.tagsinput && provider.provide("tagsinput", function() {
            a(this).tagsinput()
        })
    }, provider.initKnob = function() {
        a.fn.knob && provider.provide("knob", function() {
            var b = {
                thickness: .1,
                width: 120,
                height: 120,
                fgColor: app.colors.primary,
                bgColor: app.colors.bg
            };
            b = a.extend(b, app.getDataOptions(a(this))), a(this).knob(b)
        })
    }, provider.initNouislider = function() {
        void 0 !== window.noUiSlider && provider.provide("slider", function(b, c) {
            var d = {
                range: {
                    min: Number(a(this).dataAttr("min", 0)),
                    max: Number(a(this).dataAttr("max", 100))
                },
                step: 1,
                start: a(this).dataAttr("value", 0),
                connect: "lower",
                margin: 0,
                limit: 100,
                orientation: "horizontal",
                direction: "ltr",
                tooltips: !1,
                animate: !0,
                behaviour: "tap",
                format: {
                    to: function(a) {
                        return a
                    },
                    from: function(a) {
                        return a
                    }
                }
            };
            d = a.extend(d, app.getDataOptions(a(this)));
            var e = a(this).dataAttr("target", "none");
            "string" == typeof d.start && d.start.indexOf(",") > -1 ? (d.start = d.start.split(","), a(this).hasDataAttr("connect") || (d.connect = !0), a(this).hasDataAttr("behaviour") || (d.behaviour = "tap-drag")) : delete d.limit, "vertical" == d.orientation && (a(this).hasDataAttr("direction") || (d.direction = "rtl")), "none" != e && ("next" == e ? e = a(this).next() : "prev" == e && (e = a(this).prev())), noUiSlider.create(c, d), c.noUiSlider.on("update", function(b, d) {
                var f = b.toString();
                a(e).text(f).val(f), a(c).hasDataAttr("on-update") && app.call(a(c).data("on-update"), b)
            }), c.noUiSlider.on("change", function(b, d) {
                a(c).hasDataAttr("on-change") && app.call(a(c).data("on-change"), b)
            })
        })
    }, provider.initSwitchery = function() {
        void 0 !== window.Switchery && provider.provide("switchery", function() {
            var b = {
                color: app.colors.primary,
                speed: "0.5s"
            };
            b = a.extend(b, app.getDataOptions(a(this))), new Switchery(this, b)
        })
    }, provider.initFormatter = function() {
        a.fn.formatter && provider.provide("formatter", function() {
            var b = {
                pattern: a(this).data("format"),
                persistent: a(this).dataAttr("persistent", !0)
            };
            a(this).formatter(b)
        })
    }, provider.initValidation = function() {
        a.fn.validator && (a.fn.validator.Constructor.FOCUS_OFFSET = 100, provider.provide("validation", function() {
            a(this).validator()
        }), a(document).on("click", '[data-perform="validation"]', function() {
            var b = app.getTarget(a(this));
            void 0 == b ? a(this).parents('[data-provide="validation"]').validator("validate") : a(b).parents('[data-provide="validation"]').validator("validate")
        }))
    }, provider.initWizard = function() {
        a.fn.bootstrapWizard && provider.provide("wizard", function() {
            var b = a(this),
                c = a(this).find(".nav-item"),
                d = a(this).find(".tab-pane");
            b.bootstrapWizard({
                tabClass: "nav-process",
                nextSelector: '[data-wizard="next"]',
                previousSelector: '[data-wizard="prev"]',
                firstSelector: '[data-wizard="first"]',
                lastSelector: '[data-wizard="last"]',
                finishSelector: '[data-wizard="finish"]',
                backSelector: '[data-wizard="back"]',
                onTabClick: function(a, c, d) {
                    if (!b.is('[data-navigateable="true"]')) return !1
                },
                onNext: function(a, c, e) {
                    var f = b.bootstrapWizard("currentIndex"),
                        g = d.eq(f),
                        a = d.eq(e),
                        h = g.find('[data-provide="validation"]').addBack('[data-provide="validation"]');
                    if (h.length && (h.validator("validate"), h.find(".has-error").length)) return !1;
                    b.hasDataAttr("on-next") && app.call(b.data("on-next"), a, c, e)
                },
                onBack: function(a, c, d) {
                    b.hasDataAttr("on-back") && app.call(b.data("on-back"), a, c, d)
                },
                onPrevious: function(a, c, d) {
                    b.hasDataAttr("on-previous") && app.call(b.data("on-previous"), a, c, d)
                },
                onTabShow: function(a, e, f) {
                    var a = d.eq(f),
                        g = c.eq(f);
                    f == b.bootstrapWizard("navigationLength") ? (b.find('[data-wizard="next"]').addClass("d-none"), b.find('[data-wizard="finish"]').removeClass("d-none")) : (b.find('[data-wizard="next"]').removeClass("d-none"), b.find('[data-wizard="finish"]').addClass("d-none")), e.children().removeClass("processing"), e.children(":lt(" + f + "):not(.complete)").addClass("complete"), g.addClass("processing"), b.is('[data-stay-complete="true"]') || e.children(":gt(" + f + ").complete").removeClass("complete"), a.hasDataAttr("url") && a.load(a.data("url")), a.hasDataAttr("callback") && app.call(a.data("callback"), a), b.hasDataAttr("on-tab-show") && app.call(b.data("on-tab-show"), a, e, f)
                },
                onFinish: function(a, e, f) {
                    var g = d.eq(f),
                        h = g.find('[data-provide="validation"]').addBack('[data-provide="validation"]');
                    if (h.length && (h.validator("validate"), h.find(".has-error").length)) return h.closest("form").one("submit", function(a) {
                        a.preventDefault()
                    }), !1;
                    c.eq(f).addClass("complete").removeClass("processing"), b.hasDataAttr("on-finish") && app.call(b.data("on-finish"), a, e, f)
                }
            })
        })
    }, provider.initTypeahead = function() {}
}(jQuery),
function(a) {
    provider.initIcons = function() {
        provider.initI8icons()
    }, provider.initI8icons = function() {
        provider.provide("iconI8", function() {
            a(document).i8icons(function(a) {
                a.defaultIconSetUrl(app.dir.vendor + "i8-icon/i8-color-icons.svg")
            })
        })
    }
}(jQuery),
function(a) {
    provider.initMaps = function() {}, provider.initMap = function() {}, provider.initMapael = function() {}
}(jQuery),
function(a) {
    provider.initTables = function() {
        provider.initBootstrapTable()
    }, provider.initBootstrapTable = function() {
        a.fn.bootstrapTable && (jQuery.fn.bootstrapTable.defaults.classes = "table", provider.provide("table", function() {
            a(this).bootstrapTable()
        }), a(".fixed-table-body").perfectScrollbar())
    }, provider.initJsGrid = function() {
        a.fn.jsGrid
    }, provider.initDatatables = function() {
        a.fn.DataTable && provider.provide("datatables", function() {
            a(this).DataTable()
        })
    }
}(jQuery),
function(a) {
    provider.initUIs = function() {
        provider.initSweetalert2(), provider.initAnimsition(), provider.initLity(), provider.initSortable(), provider.initShepherd(), provider.initFilterizr()
    }, provider.initSweetalert2 = function() {
        void 0 !== window.swal && sweetAlert.setDefaults({
            confirmButtonClass: "btn btn-bold btn-primary",
            cancelButtonClass: "btn btn-bold btn-secondary",
            buttonsStyling: !1
        })
    }, provider.initAnimsition = function() {
        a.fn.animsition && provider.provide(".animsition", function() {
            a(this).animsition({
                linkElement: '[data-provide~="animsition"], .animsition-link',
                loadingInner: ""
            })
        }, !0)
    }, provider.initLity = function() {
        void 0 !== window.lity && a(document).on("click", '[data-provide~="lity"]', lity)
    }, provider.initSortable = function() {
        void 0 !== window.sortable && provider.provide("sortable", function(b, c) {
            sortable(c, {
                dragImage: null,
                forcePlaceholderSize: !0,
                items: a(this).dataAttr("items", null),
                handle: a(this).dataAttr("sortable-handle", null)
            }), sortable(a(this))[0].addEventListener("sortupdate", function(b) {
                if (a(this).hasDataAttr("on-change")) {
                    var c = a(this).data("on-change");
                    app.call(c, b.detail)
                }
            })
        })
    }, provider.initShepherd = function() {
        void 0 !== window.Shepherd && (Shepherd.on("start", function() {
            a("body").prepend('<div class="app-backdrop backdrop-tour"></div>')
        }), Shepherd.on("inactive", function() {
            a(".app-backdrop.backdrop-tour").remove()
        }))
    }, provider.initShuffle = function() {
        if (void 0 !== window.Shuffle) {
            var b = window.Shuffle;
            b.options.itemSelector = '[data-shuffle="item"]', b.options.sizer = '[data-shuffle="sizer"]', b.options.delimeter = ",", b.options.speed = 500, provider.provide("shuffle", function() {
                var c = a(this).find('[data-shuffle="list"]'),
                    d = a(this).find('[data-shuffle="filter"]'),
                    e = new b(c);
                d.length && a(d).find('[data-shuffle="button"]').each(function() {
                    a(this).on("click", function() {
                        var c = a(this),
                            d = c.hasClass("active"),
                            f = c.data("group");
                        a(this).closest('[data-shuffle="filter"]').find('[data-shuffle="button"].active').removeClass("active");
                        var g;
                        d ? (c.removeClass("active"), g = b.ALL_ITEMS) : (c.addClass("active"), g = f), e.filter(g)
                    })
                }), a(this).imagesLoaded(function() {
                    e.layout()
                })
            })
        }
    }, provider.initPhotoswipe = function() {
        a.fn.photoSwipe && provider.provide("photoswipe", function() {
            var b = a(this),
                c = a(this).dataAttr("slide-selector", "img"),
                d = {},
                e = {
                    escKey: "bool",
                    loop: "bool",
                    pinchToClose: "bool",
                    arrowKeys: "bool",
                    history: "bool",
                    modal: "bool",
                    index: "num",
                    bgOpacity: "num",
                    timeToIdle: "num",
                    spacing: "num"
                };
            d = a.extend(d, app.getDataOptions(a(this), e));
            var f = {
                close: function() {
                    b.hasDataAttr("on-close") && app.call(b.data("on-close"))
                }
            };
            a(this).photoSwipe(c, d, f)
        })
    }, provider.initFullscreen = function() {
        if (void 0 !== window.screenfull && screenfull.enabled) {
            var b = '[data-provide~="fullscreen"]';
            a(b).each(function() {
                a(this).data("fullscreen-default-html", a(this).html())
            }), document.addEventListener(screenfull.raw.fullscreenchange, function() {
                screenfull.isFullscreen ? a(b).each(function() {
                    a(this).addClass("is-fullscreen")
                }) : a(b).each(function() {
                    a(this).removeClass("is-fullscreen")
                })
            }), a(document).on("click", b, function() {
                screenfull.toggle()
            })
        }
    }, provider.initSwiper = function() {
        void 0 !== window.Swiper && provider.provide("swiper", function() {
            var b = {
                    autoplay: 0,
                    speed: 1e3,
                    loop: !0,
                    breakpoints: {
                        480: {
                            slidesPerView: 1
                        }
                    }
                },
                c = a(this);
            c.find(".swiper-button-next").length && (b.nextButton = ".swiper-button-next"), c.find(".swiper-button-prev").length && (b.prevButton = ".swiper-button-prev"), c.find(".swiper-pagination").length && (b.pagination = ".swiper-pagination", b.paginationClickable = !0, c.addClass("swiper-pagination-outside")), b = a.extend(b, app.getDataOptions(a(this))), new Swiper(c, b)
        })
    }
}(jQuery),
function(a) {
    provider.initUploads = function() {
        provider.initDropify(), provider.initDropzone()
    }, provider.initDropify = function() {
        a.fn.dropify && provider.provide("dropify", function() {
            a(this).dropify()
        })
    }, provider.initDropzone = function() {
        a.fn.dropzone && (Dropzone.autoDiscover = !1, provider.provide("dropzone", function() {
            var b = {};
            b = a.extend(b, app.getDataOptions(a(this))), a(this).addClass("dropzone"), a(this).dropzone(b)
        }))
    }
}(jQuery),
function(a) {
    provider.initMiscs = function() {
        provider.initJustifiedGallery()
    }, provider.initFullcalendar = function() {
        a.fn.fullCalendar
    }, provider.initJustifiedGallery = function() {
        a.fn.justifiedGallery && provider.provide("justified", function() {
            var b = {
                captions: !1,
                cssAnimation: !0,
                imagesAnimationDuration: 500
            };
            a.extend(b, app.getDataOptions(a(this))), a(this).justifiedGallery(b)
        })
    }, provider.initAos = function() {
        void 0 !== window.AOS && provider.provide("aos", function() {
            AOS.init({
                duration: 800
            })
        })
    }, provider.initTyped = function() {
        void 0 !== window.Typed && provider.provide("typed", function() {
            var b = a(this).data("type").split("|"),
                c = {
                    strings: b,
                    typeSpeed: 50,
                    backSpeed: 30,
                    loop: !0
                };
            a.extend(c, app.getDataOptions(a(this)));
            new Typed(a(this)[0], c)
        })
    }
}(jQuery),
function(a) {
    app.map = function() {
        a('[data-provide~="map"]').each(function() {
            var b = a.extend({}, app.defaults.googleMap, app.getDataOptions(a(this))),
                c = new google.maps.Map(a(this)[0], {
                    center: {
                        lat: Number(b.lat),
                        lng: Number(b.lng)
                    },
                    zoom: Number(b.zoom)
                }),
                d = new google.maps.Marker({
                    position: {
                        lat: Number(b.markerLat),
                        lng: Number(b.markerLng)
                    },
                    map: c,
                    animation: google.maps.Animation.DROP,
                    icon: b.markerIcon
                }),
                e = new google.maps.InfoWindow({
                    content: a(this).dataAttr("info", "")
                });
            switch (d.addListener("click", function() {
                e.open(c, d)
            }), b.style) {
                case "light":
                    c.set("styles", [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#e9e9e9"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            color: "#dedede"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#333333"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f2f2f2"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }]);
                    break;
                case "dark":
                    c.set("styles", [{
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }]);
                    break;
                default:
                    Array.isArray(b.style) && c.set("styles", b.style)
            }
        })
    }
}(jQuery),
function(a) {
    app.modaler = function(b) {
        var c = a.extend({}, app.defaults.modaler, b),
            d = function() {
                c.onShow && a("#" + e).on("show.bs.modal", function(a) {
                    app.call(c.onShow, a)
                }), c.onShown && a("#" + e).on("shown.bs.modal", function(a) {
                    app.call(c.onShown, a)
                }), c.onHide && a("#" + e).on("hide.bs.modal", function(a) {
                    app.call(c.onHide, a)
                }), c.onHidden && a("#" + e).on("hidden.bs.modal", function(a) {
                    app.call(c.onHidden, a)
                }), a("#" + e).find('[data-perform="confirm"]').on("click", function() {
                    if (null != c.onConfirm) return a.isFunction(c.onConfirm) ? void c.onConfirm(a("#" + e)) : void(c.onConfirm.substring && app.call(c.onConfirm, a("#" + e)))
                }), a("#" + e).find('[data-perform="cancel"]').on("click", function() {
                    if (null != c.onCancel) return a.isFunction(c.onCancel) ? void c.onCancel(a("#" + e)) : void(c.onCancel.substring && app.call(c.onCancel, a("#" + e)))
                })
            };
        if (c.modalId) return void a("#" + c.modalId).modal("show");
        var e = "modal-" + app.guid();
        if (c.isModal) a("<div>").load(c.url, function() {
            a("body").append(a(this).find(".modal").attr("id", e).outerHTML()), a("#" + e).modal("show"), c.autoDestroy ? a("#" + e).on("hidden.bs.modal", function() {
                a("#" + e).remove()
            }) : a(c.this).attr("data-modal-id", e), d()
        });
        else {
            switch (c.size) {
                case "sm":
                    c.size = "modal-sm";
                    break;
                case "lg":
                    c.size = "modal-lg"
            }
            c.type && (c.type = "modal-" + c.type);
            var f = "";
            c.headerVisible && (f += '<div class="modal-header">             <h5 class="modal-title">' + c.title + '</h5>             <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>           </div>');
            var g = "";
            c.footerVisible && (g += '<div class="modal-footer">', c.cancelVisible && (g += '<button class="' + c.cancelClass + '" data-dismiss="modal" data-perform="cancel">' + c.cancelText + "</button>"), c.confirmVisible && (g += '<button class="' + c.confirmClass + '" data-dismiss="modal" data-perform="confirm">' + c.confirmText + "</button>"), g += "</div>");
            var h = '<div class="modal fade ' + c.type + '" id="' + e + '" tabindex="-1"' + (c.backdrop ? "" : ' data-backdrop="false"') + '>             <div class="modal-dialog ' + c.size + '">               <div class="modal-content">                 ' + f + '                 <div class="modal-body ' + c.bodyExtraClass + '">                   ' + c.spinner + "                 </div>                 " + g + "               </div>             </div>           </div>";
            a("body").append(h), a("#" + e).modal("show"), c.autoDestroy ? a("#" + e).on("hidden.bs.modal", function() {
                a("#" + e).remove()
            }) : a(c.this).attr("data-modal-id", e), c.url ? a("#" + e).find(".modal-body").load(c.url, function() {
                d()
            }) : c.html ? (a("#" + e).find(".modal-body").html(c.html), d()) : c.target && (a("#" + e).find(".modal-body").html(a(c.target).html()), d())
        }
    }, a(document).on("click", '[data-provide~="modaler"]', function() {
        app.modaler(app.getDataOptions(a(this)))
    })
}(jQuery),
function(a) {
    app.toast = function(b, c) {
        var d = a.extend({}, app.defaults.toast, c);
        a(".toast").length < 1 && a('<div class="toast"><div class="text"></div><div class="action"></div></div>').appendTo("body");
        var e = a(".toast"),
            f = "";
        "" != d.actionTitle && (f = '<a class="text-' + d.actionColor + '" href="' + d.actionUrl + '">' + d.actionTitle + "</a>"), e.hasClass("reveal") && e.finish().queue(function(b) {
            a(this).removeClass("reveal"), b()
        }).delay(300), e.delay(1).queue(function(c) {
            a(this).find(".text").text(b).next(".action").html(f), a(this).addClass("reveal"), c()
        }).delay(d.duration).queue(function(b) {
            a(this).removeClass("reveal"), b()
        })
    }, a(document).on("click", '[data-provide~="toast"]', function() {
        var b = a(this).data("text");
        app.toast(b, app.getDataOptions(a(this)))
    })
}(jQuery),
function(a, b) {
    var c = {};
    c.init = function() {
        a(".aside-body").perfectScrollbar(), a(document).on("click", ".aside-toggler", function() {
            c.toggle()
        })
    }, c.toggle = function() {
        a("body").toggleClass("aside-open")
    }, c.open = function() {
        a("body").addClass("aside-open")
    }, c.close = function() {
        a("body").removeClass("side-open")
    }, b.aside = c
}(jQuery, window),
function(a, b) {
    var c = {};
    c.init = function() {
        a(".topbar .list-group").each(function() {
            a(this).height() > 265 && a(this).perfectScrollbar()
        }), a(document).on("focus", ".topbar-search input", function() {
            a(this).closest(".topbar-search").find(".lookup-placeholder span").css("opacity", "0")
        }), a(document).on("blur", ".topbar-search input", function() {
            a(this).closest(".topbar-search").find(".lookup-placeholder span").css("opacity", "1")
        })
    }, c.toggleFix = function() {
        a(".topbar").toggleClass("topbar-unfix"), app.toggleState("topbar.fixed")
    }, c.fix = function() {
        a(".topbar").removeClass("topbar-unfix"), app.state("topbar.fixed", !0)
    }, c.unfix = function() {
        a(".topbar").addClass("topbar-unfix"), app.state("topbar.fixed", !1)
    }, c.isFixed = function() {
        return !a(".topbar.topbar-unfix").length
    }, b.topbar = c
}(jQuery, window),
function(a, b) {
    var c = {};
    c.init = function() {
        a(".sidebar-navigation").perfectScrollbar(), a(document).on("click", ".sidebar-toggler", function() {
            c.open()
        }), a(document).on("click", ".backdrop-sidebar", function() {
            c.close()
        }), a(document).on("click", ".sidebar .menu-link", function() {
            var b = a(this).next(".menu-submenu");
            if (!(b.length < 1)) {
                if (b.is(":visible")) return b.slideUp(function() {
                    a(".sidebar .menu-item.open").removeClass("open")
                }), void a(this).removeClass("open");
                a(".sidebar .menu-submenu:visible").slideUp(), a(".sidebar .menu-link").removeClass("open"), b.slideToggle(function() {
                    a(".sidebar .menu-item.open").removeClass("open")
                }), a(this).addClass("open")
            }
        }), a(document).on("click", ".sidebar-toggle-fold", function() {
            c.toggleFold()
        })
    }, c.toggleFold = function() {
        a("body").toggleClass("sidebar-folded"), app.toggleState("sidebar.folded")
    }, c.fold = function() {
        a("body").addClass("sidebar-folded"), app.state("sidebar.folded", !0)
    }, c.unfold = function() {
        a("body").removeClass("sidebar-folded"), app.state("sidebar.folded", !1)
    }, c.open = function() {
        a("body").addClass("sidebar-open").prepend('<div class="app-backdrop backdrop-sidebar"></div>')
    }, c.close = function() {
        a("body").removeClass("sidebar-open"), a(".backdrop-sidebar").remove()
    }, b.sidebar = c
}(jQuery, window),
function(a, b) {
    var c = {};
    c.init = function() {
        a(".quickview-body").perfectScrollbar(), a(document).on("shown.bs.tab", '.quickview-header a[data-toggle="tab"]', function(b) {
            a(this).closest(".quickview").find(".quickview-body").perfectScrollbar("update")
        }), a(document).on("click", '[data-dismiss="quickview"]', function() {
            c.close(a(this).closest(".quickview"))
        }), a(document).on("click", '[data-toggle="quickview"]', function(b) {
            b.preventDefault();
            var d = app.getTarget(a(this));
            if (0 == d) c.close(a(this).closest(".quickview"));
            else {
                var e = "";
                a(this).hasDataAttr("url") && (e = a(this).data("url")), c.toggle(d, e)
            }
        }), a(document).on("click", ".backdrop-quickview", function() {
            var b = a(this).attr("data-target");
            c.close(b)
        }), a(document).on("click", '.quickview .close, [data-dismiss="quickview"]', function() {
            var b = a(this).closest(".quickview");
            c.close(b)
        })
    }, c.toggle = function(b, d) {
        a(b).hasClass("reveal") ? c.close(b) : ("" !== d && (a(b).html('<div class="spinner-linear"><div class="line"></div></div>'), a(b).load(d, function() {
            a(".quickview-body").perfectScrollbar()
        })), c.open(b))
    }, c.open = function(b) {
        var c = a(b);
        c.hasDataAttr("url") && "true" !== c.data("url-has-loaded") && c.load(c.data("url"), function() {
            a(".quickview-body").perfectScrollbar(), c.hasDataAttr("always-reload") && "true" === c.data("always-reload") || c.data("url-has-loaded", "true")
        }), c.addClass("reveal").not(".backdrop-remove").after('<div class="app-backdrop backdrop-quickview" data-target="' + b + '"></div>')
    }, c.close = function(b) {
        a(b).removeClass("reveal"), a(".backdrop-quickview").remove()
    }, b.quickview = c
}(jQuery, window),
function(a, b) {
    var c = {},
        d = [],
        e = [];
    c.init = function() {
        a(".dock-body").perfectScrollbar({
            wheelPropagation: !1
        }), a(document).on("click", '[data-toggle="dock"]', function(b) {
            b.preventDefault();
            var d = app.getTarget(a(this));
            c.toggle(d, a(this))
        }), a(document).on("click", '[data-dock="close"], [data-dismiss="dock"]', function() {
            c.close(a(this).closest(".dock"))
        }), a(document).on("click", '[data-dock="minimize"], .dock.minimize .dock-header', function() {
            c.toggleMinimize(a(this).closest(".dock"))
        }), a(document).on("click", '[data-dock="maximize"]', function() {
            c.toggleMaximize(a(this).closest(".dock"))
        }), a(document).on("click", ".dock", function() {}), a(document).on("click", ".dock .close", function() {
            var b = a(this).closest(".dock");
            b.close(b)
        })
    }, c.toggle = function(b, d) {
        a(b).hasClass("reveal") ? c.close(b) : c.open(b, d)
    }, c.open = function(b, d) {
        var e = a(b),
            f = e.find(".dock-body");
        e.prependTo(e.closest(".dock-list")).addClass("reveal"), e.hasDataAttr("url") && "true" !== e.data("url-has-loaded") ? c._loader(e) : f.hasDataAttr("url") && "true" !== f.data("url-has-loaded") && c._loader(f)
    }, c.close = function(b) {
        c.unMaximize(b), a(b).removeClass("reveal minimize")
    }, c.toggleMinimize = function(b) {
        a(b).hasClass("minimize") ? a(b).removeClass("minimize") : (c.unMaximize(b), a(b).addClass("minimize"))
    }, c.toggleMaximize = function(b) {
        a(b).hasClass("maximize") ? c.unMaximize(b) : c.maximize(b)
    }, c.maximize = function(b) {
        a(b).removeClass("minimize").addClass("maximize").closest(".dock-list").addClass("maximize")
    }, c.unMaximize = function(b) {
        a(b).removeClass("maximize").closest(".dock-list").removeClass("maximize")
    }, c.blink = function(b) {
        clearInterval(d[b]), a(b).toggleClass("blink"), d[b] = setInterval(function() {
            a(b).toggleClass("blink")
        }, 1e3)
    }, c.stopBlink = function(b) {
        clearInterval(d[b]), a(b).removeClass("blink")
    }, c.shake = function(b) {
        clearInterval(e[b]), a(b).toggleClass("shake"), e[b] = setInterval(function() {
            a(b).toggleClass("shake")
        }, 1500)
    }, c.stopShake = function(b) {
        clearInterval(e[b]), a(b).removeClass("shake")
    }, c._loader = function(a) {
        a.load(a.data("url"), function() {
            a.find(".dock-body").perfectScrollbar({
                wheelPropagation: !1
            }), a.hasDataAttr("on-load") && b[a.data("on-load")].call(), a.hasDataAttr("always-reload") && "true" === a.data("always-reload") || a.data("url-has-loaded", "true")
        })
    }, b.dock = c
}(jQuery, window),
function(a, b) {
    var c = {};
    c.init = function() {
        a(document).on("click", ".topbar-menu-toggler", function() {
            c.open()
        }), a(document).on("click", ".backdrop-topbar-menu", function() {
            c.close()
        });
        var b = app.breakpoint.lg;
        a("body").hasClass("topbar-toggleable-xs") ? b = app.breakpoint.xs : a("body").hasClass("topbar-toggleable-sm") ? b = app.breakpoint.sm : a("body").hasClass("topbar-toggleable-md") && (b = app.breakpoint.md), a(document).width() > b || a(document).on("click", ".topbar .menu-link", function() {
            var b = a(this).next(".menu-submenu");
            if (!(b.length < 1)) {
                if (b.is(":visible")) return b.slideUp(function() {
                    a(".topbar .menu-item.open").removeClass("open")
                }), void a(this).removeClass("open");
                a(".topbar .menu-submenu:visible").slideUp(), a(".topbar .menu-link").removeClass("open"), b.slideDown(function() {
                    a(".topbar .menu-item.open").removeClass("open")
                }), a(this).addClass("open")
            }
        })
    }, c.open = function() {
        a("body").addClass("topbar-menu-open").find(".topbar").prepend('<div class="app-backdrop backdrop-topbar-menu"></div>')
    }, c.close = function() {
        a("body").removeClass("topbar-menu-open"), a(".backdrop-topbar-menu").remove()
    }, b.topbar_menu = c
}(jQuery, window),
function(a, b) {
    var c = {};
    c.init = function() {
        a(document).on("click", '[data-toggle="lookup"]', function(b) {
            b.preventDefault();
            var d = app.getTarget(a(this));
            0 == d ? c.close(a(this).closest(".lookup-fullscreen")) : c.toggle(d)
        })
    }, c.toggle = function(b) {
        a(b).hasClass("reveal") ? c.close(b) : c.open(b)
    }, c.close = function(b) {
        a(b).removeClass("reveal"), a("body").removeClass("no-scroll")
    }, c.open = function(b) {
        a(b).addClass("reveal"), a(b).find(".lookup-form input").focus(), a("body").addClass("no-scroll")
    }, b.lookup = c
}(jQuery, window),
function(a, b) {
    var c = {};
    c.init = function() {
        a(document).on("click", ".card-btn-close", function() {
            a(this).closest(".card").fadeOut(600, function() {
                1 == a(this).parent().children().length ? a(this).parent().remove() : a(this).remove()
            })
        }), a(document).on("click", ".card-btn-slide", function() {
            a(this).toggleClass("rotate-180").closest(".card").find(".card-content").slideToggle()
        }), a(document).on("click", ".card-btn-maximize", function() {
            a(this).closest(".card").toggleClass("card-maximize").removeClass("card-fullscreen")
        }), a(document).on("click", ".card-btn-fullscreen", function() {
            a(this).closest(".card").toggleClass("card-fullscreen").removeClass("card-maximize")
        }), a(document).on("click", ".card-btn-reload", function(b) {
            b.preventDefault();
            var c = a(this).attr("href"),
                d = a(this).closest(".card");
            "#" != c && (d.find(".card-loading").addClass("reveal"), d.find(".card-content").load(c, function() {
                d.find(".card-loading").removeClass("reveal")
            }))
        }), a(".card-carousel").each(function() {
            var b = !1;
            a(this).hasDataAttr("ride") && (b = 5e3), a(this).carousel({
                interval: b
            })
        }), a(document).on("click", ".card-btn-next", function() {
            a(this).parents(".card-carousel").carousel("next")
        }), a(document).on("click", ".card-btn-prev", function() {
            a(this).parents(".card-carousel").carousel("prev")
        }), a(document).on("click", ".card-carousel .carousel-indicators li", function() {
            a(this).parents(".card-carousel").carousel(a(this).data("slide-to")), a(this).parent().find(".active").removeClass("active"), a(this).addClass("active")
        })
    }, c.fix = function() {}, b.cards = c
}(jQuery, window),
function(a) {
    app.initCorePlugins = function() {
        provider.initAnimsition(), Popper.Defaults.modifiers.computeStyle.gpuAcceleration = !1, a('[data-provide~="tooltip"]').each(function() {
            var b = "";
            a(this).hasDataAttr("tooltip-color") && (b = " tooltip-" + a(this).data("tooltip-color")), a(this).tooltip({
                container: "body",
                trigger: "hover",
                template: '<div class="tooltip' + b + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
            })
        }), a('[data-provide~="popover"]').popover({
            container: "body"
        }), a(".modal-right .modal-body, .modal-left .modal-body").perfectScrollbar(), a(".scrollable").perfectScrollbar({
            wheelPropagation: !1,
            wheelSpeed: .5
        }), a(document).on("click", ".no-collapsing", function(a) {
            a.stopPropagation()
        })
    }, app.initThePlugins = function() {
        function b(a) {
            a.parent(".input-group-input").length ? a.parent(".input-group-input").addClass("do-float") : a.closest(".form-group").addClass("do-float")
        }

        function c(a) {
            a.parent(".input-group-input").length ? a.parent(".input-group-input").removeClass("do-float") : a.closest(".form-group").removeClass("do-float")
        }
        a(document).on("click", 'a[href="#"]', function(a) {
            a.preventDefault()
        }), a(document).on("click", '[data-provide~="scrollup"]', function() {
            return a("html, body").animate({
                scrollTop: 0
            }, 600), !1
        }), a(document).on("click", ".nav-tabs .dropdown-item", function() {
            a(this).siblings(".dropdown-item.active").removeClass("active")
        }), a(document).on("click", ".file-browser", function() {
            var b = a(this);
            if (b.hasClass("form-control")) setTimeout(function() {
                b.closest(".file-group").find('[type="file"]').trigger("click")
            }, 300);
            else {
                var c = b.closest(".file-group").find('[type="file"]');
                c.on("click", function(a) {
                    a.stopPropagation()
                }), c.trigger("click")
            }
        }), a(document).on("change", '.file-group [type="file"]', function() {
            for (var b = a(this)[0], c = b.files.length, d = "", e = 0; e < c; ++e) d += b.files.item(e).name + ", ";
            d = d.substr(0, d.length - 2), a(this).closest(".file-group").find(".file-value").val(d).text(d).focus()
        }), a(document).on("change", ".custom-file-input", function() {
            var b = a(this).val().split("\\").pop();
            a(this).next(".custom-file-control").attr("data-input-value", b)
        }), a(".custom-file-control:not([data-input-value])").attr("data-input-value", "Choose file...");
        var d = ".form-type-combine .form-group, .form-type-combine.form-group, .form-type-combine .input-group-input";
        a(document).on("click", d, function() {
            a(this).find(".form-control").focus()
        }), a(document).on("focusin", d, function() {
            a(this).addClass("focused")
        }), a(document).on("focusout", d, function() {
            a(this).removeClass("focused")
        }), a(document).on("focus", ".form-type-material .form-control:not(.bootstrap-select)", function() {
            b(a(this))
        }), a(document).on("focusout", ".form-type-material .form-control:not(.bootstrap-select)", function() {
            "" === a(this).val() && c(a(this))
        }), a(".form-type-material .form-control").each(function() {
            if (a(this).val().length > 0) {
                if (a(this).is('[data-provide~="selectpicker"]')) return;
                b(a(this))
            }
        }), a(document).on("show.bs.select", '.form-type-material [data-provide~="selectpicker"]', function() {
            b(a(this))
        }), a(document).on("hidden.bs.select", '.form-type-material [data-provide~="selectpicker"]', function() {
            0 == a(this).selectpicker("val").length && c(a(this))
        }), a(document).on("loaded.bs.select", '.form-type-material [data-provide~="selectpicker"]', function() {
            a(this).selectpicker("val").length > 0 && b(a(this))
        }), a(window).on("scroll", function() {
            var b = a(window).scrollTop();
            a('[data-provide~="sticker"]').each(function() {
                a(this).hasDataAttr("original-top") || a(this).attr("data-original-top", a(this).offset().top);
                var c = app.getTarget(a(this)),
                    d = a(this).dataAttr("original-top"),
                    e = a(c).offset().top + a(c).height(),
                    f = a(this).width(),
                    g = 0;
                topbar.isFixed() && (g = a(".topbar").height());
                var h = {
                    left: a(this).offset().left,
                    width: f,
                    top: g
                };
                b > d && b <= e ? a(this).hasClass("sticker-stick") || (a(this).addClass("sticker-stick").css(h), a(c).css("margin-top", a(this).height())) : (a(this).removeClass("sticker-stick"), a(c).css("margin-top", 0))
            })
        }), a(document).on("change", '[data-provide~="selectall"] thead .custom-checkbox :checkbox', function() {
            var b = a(this).closest("th"),
                c = b.closest("tr").children().index(b),
                d = a(this).prop("checked");
            a(this).closest("table").find("tr td:nth-child(" + (c + 1) + ") :checkbox").each(function() {
                a(this).prop("checked", d), d ? a(this).closest("tr").addClass("active") : a(this).closest("tr").removeClass("active")
            })
        }), a(document).on("change", '[data-provide~="selectall"] tbody .custom-checkbox :checkbox', function() {
            a(this).prop("checked") ? a(this).closest("tr").addClass("active") : a(this).closest("tr").removeClass("active")
        }), a(document).on("click", '.table[data-provide~="selectable"] tbody tr', function() {
            var b = a(this).children("td:nth-child(1)").find("input");
            b.prop("checked", !b.prop("checked")), b.prop("checked") ? a(this).addClass("active") : a(this).removeClass("active")
        }), a(document).on("change", '.media-list[data-provide~="selectall"] .media-list-header :checkbox, .media-list[data-provide~="selectall"] .media-list-footer :checkbox', function() {
            var b = a(this).closest(".media-list"),
                c = a(this).prop("checked");
            a(b).find('.media-list-body .custom-checkbox [type="checkbox"]').each(function() {
                a(this).prop("checked", c), c ? a(this).closest(".media").addClass("active") : a(this).closest(".media").removeClass("active")
            })
        }), a(document).on("change", '[data-provide~="selectall"] .media .custom-checkbox input', function() {
            a(this).prop("checked") ? a(this).closest(".media").addClass("active") : a(this).closest(".media").removeClass("active")
        }), a(document).on("click", '.media[data-provide~="selectable"], .media-list[data-provide~="selectable"] .media:not(.media-list-header):not(.media-list-footer)', function() {
            var b = a(this).find("input");
            b.prop("checked", !b.prop("checked")), b.prop("checked") ? a(this).addClass("active") : a(this).removeClass("active")
        }), a('[data-provide~="media-search"]').on("keyup", function(b) {
            var c = a(this).val().trim(),
                d = a(this).closest(".media-list").find(".media:not(.media-list-header):not(.media-list-footer)");
            "" === c ? d.show() : (d.not(":search(" + c + ")").hide(), d.filter(":search(" + c + ")").show())
        }), a(document).on("keydown", ".auto-expand", function() {
            var b = a(this);
            setTimeout(function() {
                b.scrollTop(0).css("height", b.prop("scrollHeight") + "px")
            }, 0)
        }), a(document).on("click", ".code-toggler .btn", function() {
            a(this).closest(".code").find("pre").slideToggle()
        }), a(document).on("change mousemove", ".input-range input", function() {
            a(this).closest(".input-range").find(".value").text(a(this).val())
        }), a(document).on("click", ".avatar-pill .close", function() {
            a(this).closest(".avatar").fadeOut(function() {
                a(this).remove()
            })
        }), a(document).on("click", '[data-provide~="more-avatar"]', function() {
            var b = a(this).closest(".avatar-list");
            a(this).fadeOut(function() {
                a(this).remove(), a(this).hasDataAttr("url") && a("<div>").load(a(this).data("url"), function() {
                    var c = a(this).html();
                    b.append(c)
                })
            })
        }), a(document).on("click", ".btn-flat:not(.no-wave)", function(b) {
            var c = b.pageX,
                d = b.pageY,
                e = d - a(this).offset().top,
                f = c - a(this).offset().left,
                g = this,
                h = parseInt(f),
                i = parseInt(e);
            a(this).find("svg").remove(), a(this).append('<svg><circle cx="' + h + '" cy="' + i + '" r="0"></circle></svg>');
            var j = a(g).find("circle");
            j.animate({
                r: a(g).outerWidth()
            }, {
                duration: 400,
                step: function(a) {
                    j.attr("r", a)
                },
                complete: function() {
                    j.fadeOut("fast")
                }
            })
        }), a(document).on("click", '[data-dismiss="callout"]', function() {
            a(this).closest(".callout").fadeOut(function() {
                a(this).remove()
            })
        }), a(document).on("click", '[data-dismiss="tab"]', function() {
            a(this).closest(".nav-item").fadeOut(function() {
                a(this).remove()
            })
        });
        var e = function(a) {
            a.find("input:checked").length ? a.attr("data-has-rate", "true") : a.attr("data-has-rate", "false")
        };
        a(document).on("click", ".rating-remove", function() {
            a(this).closest(".rating").find("input").prop("checked", !1), e(a(this).closest(".rating"))
        }), a(".rating").each(function() {
            e(a(this))
        }), a(document).on("change", ".rating input", function() {
            e(a(this).closest(".rating"))
        }), a(document).on("click", '[data-provide~="loader"]', function(b) {
            b.preventDefault();
            var c = app.getTarget(a(this)),
                d = app.getURL(a(this));
            if (a(this).hasDataAttr("spinner")) {
                var e = a(this).data("spinner");
                a(c).html(e)
            }
            a(c).load(d)
        }), a(document).on("click", ".lookup-textual .lookup-placeholder", function() {
            a(this).closest(".lookup").find("input").focus()
        }), a(document).on("focus blur keyup", ".lookup-textual input", function() {
            var b = a(this).closest(".lookup").find(".lookup-placeholder");
            "" == a(this).val() ? b.css("display", "inline-block") : b.css("display", "none")
        }), a(document).on("keyup", ".lookup-fullscreen[data-url] .lookup-form input", function() {
            var b = a(this).val(),
                c = a(this).closest(".lookup-fullscreen"),
                d = c.data("url");
            c.find(".lookup-results").load(d, {
                s: b
            })
        })
    }
}(jQuery),
function(a) {
    app.init(), topbar.init(), sidebar.init(), topbar_menu.init(), quickview.init(), dock.init(), aside.init(), lookup.init(), cards.init(), app.isReady()
}(jQuery);