window.onload = function () {

    var timerIn = null;
    var timerOut = null;
    var imageList = document.getElementsByTagName("img");
    var featured = document.getElementById("featured");

    for (var i = 0; i < imageList.length; i++) {
        imageList[i].index = i;
        imageList[i].onclick = function () {
            document.getElementById("featured").innerHTML = "<img src=\"" + this.src.replace("small", "medium") + "\" title=\"" + 
            this.title + "\"/>" + "<figcaption>" + this.title + "</figcaption>";
        }
    }

    featured.onmouseleave = function () {
        var figcaption = document.getElementsByTagName("figcaption")[0];
        clearInterval(timerIn)
        var opacity = figcaption.style.opacity;
        timerOut = setInterval(function () {
            var doubleOp = figcaption.style.opacity;
            doubleOp -= 0.02;
            figcaption.style.opacity = String(doubleOp);
            if (doubleOp === 0) {
                clearInterval(timerOut);
            }
        }, 1000 / (opacity / 0.02));
    }

    featured.onmouseenter = function () {
        var figcaption = document.getElementsByTagName("figcaption")[0];
        clearInterval(timerOut)
        timerIn = setInterval(function () {
            var doubleOp = figcaption.style.opacity * 100; 
            doubleOp += 2;
            figcaption.style.opacity = String(doubleOp / 100);
            if (doubleOp >= 80) {
                clearInterval(timerIn);
            }
        }, 1000 / (0.8 / 0.02));
    }

}