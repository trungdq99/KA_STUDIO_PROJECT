/*  Author: Trung Shin  */

function killCopy(e)
{
    return false;
}

function reEnable()
{
    return true;
}

document.onselectstart = new Function("return false")
if (window.sidebar)
{
    document.onmousedown = killCopy();
    document.onclick = reEnable();
}

var message = "NoRightClicking";
function defeatIE()
{
    if (document.all)
    {
        (message);
        return false;
    }
}
function defeatNS(e)
{
    if (document.layers || (document.getElementById && !document.all))
    {
        if (e.which == 2 || e.which == 3)
        {
            (message);
            return false;
        }
    }
}
if (document.layers)
{
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = defeatNS;
} else
{
    document.onmouseup = defeatNS;
    document.oncontextmenu = defeatIE;
}
document.oncontextmenu = new Function("return false");