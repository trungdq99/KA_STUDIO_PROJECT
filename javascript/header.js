/* Author: Trung Shin */

var prevScrollpos = window.pageYOffset;
window.onscroll = function ()
{
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos)
    {
        document.getElementById("header").style.top = "0";
    } else
    {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    closeBtn();
	closeButton3Info();
}

function showBtn()
{
    if (window.innerWidth <= 869)
    {
        document.getElementById("header").style.height = "208px";
        document.getElementById("showBtn").style.display = "none";
        document.getElementById("closeBtn").style.display = "block";
		document.getElementById("header").style.opacity = "1";
    } else
    {
        document.getElementById("header").style.height = "100px";
        document.getElementById("showBtn").style.display = "none";
        document.getElementById("closeBtn").style.display = "none";
		document.getElementById("header").style.opacity = "1";
    }

}

function closeBtn()
{
    if (window.innerWidth <= 869)
    {
        document.getElementById("header").style.height = "70px";
        document.getElementById("showBtn").style.display = "block";
        document.getElementById("closeBtn").style.display = "none";
		document.getElementById("header").style.opacity = "0.8";
    } else
    {
        document.getElementById("header").style.height = "100px";
        document.getElementById("showBtn").style.display = "none";
        document.getElementById("closeBtn").style.display = "none";
		document.getElementById("header").style.opacity = "1";
    }
}