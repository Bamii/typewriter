(function() {
    const insertionPoint = document.getElementById("typewriter");

    const words = insertionPoint.innerHTML;
    insertionPoint.innerHTML = "";

    const arr = words.split("");

    function insert(a) {
        var time = 0;
        const child = document.createElement('div');
        child.textContent = "";
        insertionPoint.appendChild(child);

        a.forEach(function(item) {
            setTimeout(function() {
                child.textContent += item;  
            }, time);
            time += 110;
        });
    }

    insert(arr);
})();
