define(['jquery', 'ui'], function($, ui) {
    var BubbleShoot = window.BubbleShoot || {}
    BubbleShoot.Game = (function($) {
        var Game = function() {
            this.init = function() {
                $(".but_start_game").bind("click", startGame);
            };
            var startGame = function() {
                $(".but_start_game").unbind("click");
                ui.hideDialog();	
            };
        };
        return Game;
    })(jQuery)


    $().ready(function() {
        var game = new BubbleShoot.Game();
        game.init();
    });

});