;(function(){
    "use strict";

    function showRandom() {
        let min = Number(prompt("Введите минимальное число", ""));
        let max = Number(prompt("Введите максимальное число", ""));
        let result  = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result);
    }
    showRandom();

})();