define(['jquery'], function($) {
    var ui = {
        init: function() {
            console.log("UI Init");
        },
        hideDialog: function() {
            console.log("hideDialog called");
            $(".dialog").fadeOut(300);
        }
    };
    return ui;
});
