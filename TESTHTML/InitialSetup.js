document.getElementById("masterSize").style.height = screen.availHeight + "px";
document.getElementById("masterSize").style.maxWidth = screen.availWidth + "px";
document.getElementById("masterSize").style.minWidth = (screen.availWidth / 2) + "px";

document.body.style.fontFamily = "Tw Cen MT";
document.body.style.margin = "0px 0px 0px 0px";

if ((document.documentElement.clientWidth * .17) < 180)
{
    document.getElementById("afterNavBar").style.marginLeft = "180px";
}
else
{
    document.getElementById("afterNavBar").style.marginLeft = "17vw";
}

if ((window.innerWidth * .17) < 180)
{
    document.getElementById("afterNavBar").style.marginLeft = "180px";
}
else if (((window.innerWidth * .14) + 30) < 330)
{
    document.getElementById("afterNavBar").style.marginLeft = (window.innerWidth * .14) + 30 + "px";
}
else
{
    document.getElementById("afterNavBar").style.marginLeft = "330px";
}
