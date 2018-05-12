var JqueryComponentJS = (function () {
    return {
        initSlider: function (controlId, initialValue, changeCallback) {
            $("#" + controlId).slider({
                tooltip: 'always',
                value: initialValue
            }).on("slideStop", function (slideEvt) {
                changeCallback(slideEvt.value);
            });
        },
        initDateTimePicker: function (controlId, initialDate, changeCallback) {
            $("#" + controlId).datepicker({autoclose:true}).on('changeDate', function (e) {
                changeCallback($("#" + controlId).datepicker('getFormattedDate'));
            });
        }
    }
})(JqueryComponentJS || {});