window.addEventListener("resize", changeSize);

function changeSize() {
    if ((window.innerHeight * .28) < 150) {
        document.getElementById("title").style.height = "150px";
        document.getElementById("title").style.lineHeight = "150px";
    }
    else {
        document.getElementById("title").style.height = "28vh";
        document.getElementById("title").style.lineHeight = "28vh";
    }

    if ((window.innerWidth * .17) < 180) {
        document.getElementById("afterNavBar").style.marginLeft = "180px";
    }
    else if (((window.innerWidth * .14) + 30) < 330) {
        document.getElementById("afterNavBar").style.marginLeft = (window.innerWidth * .14) + 30 + "px";
    }
    else {
        document.getElementById("afterNavBar").style.marginLeft = "330px";
    }
};