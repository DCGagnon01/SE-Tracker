document.getElementById("masterSize").style.height = screen.availHeight + "px";
document.getElementById("masterSize").style.maxWidth = screen.availWidth + "px";
document.getElementById("masterSize").style.minWidth = (screen.availWidth / 2) + "px";

document.body.style.fontFamily = "Tahoma";
document.body.style.margin = "0px 0px 0px 0px";

if ((document.documentElement.clientWidth * .17) < 180) {
    document.getElementById("afterNavBar").style.marginLeft = "180px";
}
else {
    document.getElementById("afterNavBar").style.marginLeft = "17vw";
}

window.addEventListener("resize", function (event) {
    if ((document.documentElement.clientHeight * .28) < 150) {
        document.getElementById("title").style.lineHeight = "150px";
    }
    else {
        document.getElementById("title").style.lineHeight = "28vh";
    }

    if ((document.documentElement.clientWidth * .17) < 180) {
        document.getElementById("afterNavBar").style.marginLeft = "180px";
    }
    else {
        document.getElementById("afterNavBar").style.marginLeft = "17vw";
    }
});