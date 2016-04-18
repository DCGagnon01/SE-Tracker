document.getElementById("masterSize").style.height = screen.availHeight + "px";
document.getElementById("masterSize").style.maxWidth = screen.availWidth + "px";
document.getElementById("masterSize").style.minWidth = (screen.availWidth / 2) + "px";

document.body.style.fontFamily = "Tw Cen MT";
document.body.style.margin = "0px 0px 0px 0px";

if (location.pathname.split("/").slice(-1) != "ProfilePage.html") {
    if ((window.innerWidth * .17) < 180) {
        document.getElementById("afterNavBar").style.marginLeft = "180px";
    }
    else if (((window.innerWidth * .14) + 30) < 330) {
        document.getElementById("afterNavBar").style.marginLeft = (window.innerWidth * .14) + 30 + "px";
    }
    else {
        document.getElementById("afterNavBar").style.marginLeft = "330px";
    }
}
else {
    if ((window.innerWidth * .15) < 165) {
        document.getElementById("afterNavBar").style.marginLeft = "165px";
    }
    else if (((window.innerWidth * .14) + 15) < 315) {
        document.getElementById("afterNavBar").style.marginLeft = (window.innerWidth * .14) + 15 + "px";
    }
    else {
        document.getElementById("afterNavBar").style.marginLeft = "315px";
    }
}