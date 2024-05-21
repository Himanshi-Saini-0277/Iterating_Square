function move() {
    var redElem = document.getElementById('red');
    var pos = 0;
    var direction = 1;
    var maxPos = 300;
    var interval = 5;
    var anim = setInterval(animate, interval);

    redElem.style.top = '0px';
    redElem.style.left = '0px';

    function animate() {
        if (pos < maxPos) {
            updatePosition();
            pos++;
            if (pos % 100 === 0) {
                redElem.style.backgroundColor = getRandomColor();
            }
        } else {
            direction++;
            if (direction > 5) {
                clearInterval(anim);
                redElem.style.top = "0px";
                redElem.style.left = "0px";
                redElem.style.backgroundColor = 'red';
            } else {
                pos = 0;
            }
        }
    }

    function updatePosition() {
        switch (direction) {
            case 1:
                if (parseInt(redElem.style.left) < maxPos)
                    redElem.style.left = (parseInt(redElem.style.left) + 1) + "px";
                break;
            case 2:
                if (parseInt(redElem.style.top) < maxPos)
                    redElem.style.top = (parseInt(redElem.style.top) + 1) + "px";
                break;
            case 3:
                if (parseInt(redElem.style.left) > 0)
                    redElem.style.left = (parseInt(redElem.style.left) - 1) + "px";
                break;
            case 4:
                if (parseInt(redElem.style.top) > 0)
                    redElem.style.top = (parseInt(redElem.style.top) - 1) + "px";
                break;
            case 5:
                if (parseInt(redElem.style.left) < maxPos && parseInt(redElem.style.top) < maxPos) {
                    redElem.style.left = (parseInt(redElem.style.left) + 1) + "px";
                    redElem.style.top = (parseInt(redElem.style.top) + 1) + "px";
                }
                break;
        }
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
