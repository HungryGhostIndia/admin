
"use strict";
app.config({
    provide: ["typeahead"],
    googleApiKey: "AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto",
    googleAnalyticsId: "",
    smoothScroll: !1,
    saveState: !1
}), app.ready(function() {
    if (window.Bloodhound) {
        var a = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace("tokens"),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: {
                url: app.dir.assets + "data/json/files.json",
                cache: !1
            }
        });
        $("#theadmin-search input").typeahead(null, {
            name: "theadmin-components",
            display: "title",
            source: a,
            templates: {
                suggestion: function(a) {
                    return '<a href="' + location.origin + "/theadmin/none/" + a.url + '"><h6 class="mb-1">' + a.title + "</h6><small>" + a.description + "</small></a>"
                }
            }
        }), $("#theadmin-search input").bind("typeahead:select", function(a, b) {
            window.location.href = location.origin + "/theadmin/none/" + b.url
        }), $("#theadmin-search input").bind("typeahead:open", function(a, b) {
            $(this).closest("#theadmin-search").find(".lookup-placeholder span").css("opacity", "0")
        }), $("#theadmin-search input").bind("typeahead:close", function(a, b) {
            "" == $(this).val() && $(this).closest("#theadmin-search").find(".lookup-placeholder span").css("opacity", "1")
        })
    }
    "file:" == location.protocol && app.toast('Please open the page using "http" protocol for full functionality.', {
        duration: 15e3,
        actionTitle: "Read more",
        actionUrl: ""
    });
    var b = ["primary", "secondary", "success", "info", "warning", "danger", "purple", "pink", "cyan", "yellow", "brown", "dark"];
    $('[data-provide~="demo-color-changer"]').each(function() {
        var a = $(this).data("target"),
            c = $(this).data("base-class"),
            d = "",
            e = $(this).dataAttr("name", ""),
            f = $(this).dataAttr("checked", ""),
            g = $(this).dataAttr("exclude", ""),
            h = "";
        $(this).hasDataAttr("pale") && (h = "pale-"), "" == e && (e = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5)), d = '<div class="color-selector color-selector-sm">', $.each(b, function(a, b) {
            if (!(g.indexOf(b) > -1)) {
                var c = h + b;
                d += "<label" + ("pale-" === h ? ' class="inverse"' : "") + '><input type="radio" value="' + c + '" name="' + e + '"' + (f === b ? " checked" : "") + '><span class="bg-' + c + '"></span></label>'
            }
        }), d += "</div>", $(this).replaceWith(d), $(document).on("change", 'input[name="' + e + '"]', function() {
            var b = $('input[name="' + e + '"]:checked').val();
            $(a).attr("class", c + b)
        })
    }), $(document).on("change", "#icon-font-changer", function() {
        var a = $(this).find("option:selected").text();
        $(".demo-icons-list").attr("class", "demo-icons-list icons-size-" + a)
    }), $(document).on("mouseenter", ".demo-icons-list li", function() {
        var a = $(this).dataAttr("clipboard-text");
        $("#icon-selected").removeClass("text-secondary text-danger").addClass("text-info").text(a)
    }), $(document).on("click", ".demo-icons-list li", function() {
        var a = $(this).dataAttr("clipboard-text");
        a += '<small class="sidetitle">COPIED</small>', $("#icon-selected").removeClass("text-secondary text-info").addClass("text-danger").html(a)
    }), $(document).on("mouseleave", ".demo-icons-list", function() {
        $("#icon-selected").removeClass("text-info text-danger").addClass("text-secondary").text("Click an icon to copy the class name")
    }), $.expr.pseudos.iconsSearch = function(a, b, c) {
        return $(a).dataAttr("clipboard-text").toUpperCase().indexOf(c[3].toUpperCase()) >= 0
    }, $("#icons-search-input").on("keyup", function(a) {
        var b = $(this).val().trim(),
            c = $(".tab-pane:not(#tab-search-result) .demo-icons-list li"),
            d = $("#icon-tabs").length;
        d || (c = $(".demo-icons-list li")), "" === b ? (c.show(), $("#icon-tabs li:eq(1) a").tab("show")) : (c.not(":iconsSearch(" + b + ")").hide(), c.filter(":iconsSearch(" + b + ")").show(), d && ($("#tab-search-result ul").html(c.filter(":iconsSearch(" + b + ")").outerHTML()), $("#icon-tabs li:first a").tab("show")))
    }), $("#icon-tabs li:first a").on("hide.bs.tab", function() {
        $("#icons-search-input").val(""), $(".demo-icons-list li").show()
    }), $(document).on("change", 'input[name="global-topbar-color"]', function() {
        var a = $('input[name="global-topbar-color"]:checked').val();
        "default" == a ? $("body > .topbar").removeClass("topbar-inverse").css("background-color", "#fff") : $("body > .topbar").addClass("topbar-inverse").css("background-color", "#" + a)
    }), $(document).on("change", 'input[name="global-sidebar-color"]', function() {
        var a = $('input[name="global-sidebar-color"]:checked').val();
        $(".sidebar").removeClass("sidebar-light sidebar-dark sidebar-default"), $(".sidebar").addClass("sidebar-" + a)
    }), $(document).on("change", 'input[name="global-sidebar-menu-color"]', function() {
        var a = $('input[name="global-sidebar-menu-color"]:checked').val();
        $(".sidebar").removeClass(function(a, b) {
            return (b.match(/(^|\s)sidebar-color-\S+/g) || []).join(" ")
        }).addClass("sidebar-color-" + a)
    }), $(document).on("click", "#sidebar-reset-btn", function() {
        $(".sidebar").attr("class", "sidebar"), $(".sidebar-header").removeClass("sidebar-header-inverse"), $(".sidebar .menu").attr("class", "menu"), $("body").removeClass("sidebar-folded")
    }), $(document).on("change", 'input[name="sidebar-header-bg-color"]', function() {
        var a = $('input[name="sidebar-header-bg-color"]:checked').val();
        $(".sidebar-header").css("background-color", a)
    }), $(document).on("click", "#timeline-alignment-selector .btn", function() {
        var a = $(this).children("input").val();
        $("#demo-timeline-alignment").attr("class", "timeline timeline-content-" + a)
    }), $(document).on("click", "#timeline-size-selector .btn", function() {
        var a = $(this).children("input").val();
        $("#demo-timeline-size").attr("class", "timeline timeline-content-right timeline-point-" + a)
    })
});