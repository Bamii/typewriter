(function($) {

    $.fn.greenify = function( options ) {

        

        var config = $.extend({
            /* Default config */
            node: "typewriter",
        }, options );

        const array = [1,2,3,4,5,6,7];

        const insertionPoint = document.getElementById(config.node);
        const words = insertionPoint.innerHTML;
        insertionPoint.innerHTML = "";
    
        const arr = words.split("");
 
        //insert(array);

        return arr.forEach(function(item) {
            setTimeout(function() {
                child.textContent += item;  
            }, time);
            time += 110;
        });
    }

    function insert(arrays) {
        var time = 0;
        const child = document.createElement('div');
        child.textContent = "";
        insertionPoint.appendChild(child);

        arrays.forEach(function(item) {
            setTimeout(function() {
                child.textContent += item;  
            }, time);
            time += 110;
        });
    }

})( jquery );
