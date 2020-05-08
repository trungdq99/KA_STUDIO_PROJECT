/*  Author: Trung Shin  */

var list =
        [
            {
                id: "1",
                name: "Baby1",
                path: "image/baby1/1.jpg"
            },
            {
                id: "2",
                name: "Baby2",
                path: "image/baby2/1.jpg"
            },
            {
                id: "3",
                name: "Baby3",
                path: "image/baby3/1.jpg"
            },
            {
                id: "4",
                name: "Baby4",
                path: "image/baby4/1.jpg"
            },
            {
                id: "5",
                name: "Baby5",
                path: "image/baby5/1.jpg"
            }
        ];

function showImage()
{
    "use strict";
    var s = "";
    for (var i = 0; i < list.length; i++)
    {
        s = s + "<div class='galarry' onClick='openImage(" + i + ")'> <div class='image'> <img src='" + list[i].path + "'> </div>" + list[i].name + "</div>";
    }
    document.getElementById("body").innerHTML = s;
}

var cur = 1;
var idImg;
function openImage(id)
{
	idImg = id;
	var tmp = id + 1;
    document.getElementById("openImage").style.display = "block";
	var t = "image/baby" + tmp + "/" + cur + ".jpg";
    document.getElementById("img").src = t;
	var s = "";
	for(var i = 1; i <= 5; i++)
		{
			s = s + "<img src='image/baby" + tmp + "/" + i + ".jpg' onClick='choose(" + i + ")'";
			if(i !== cur)
				{
					s = s + " style='opacity: 0.5; cursor: pointer;'>";
				}else{
					s = s + " style='opacity: 1; cursor: pointer;'>";
				}
		}
	document.getElementById("smallImage").innerHTML = s;
}

function choose(id)
{
	cur = id;
	openImage(idImg);
}

function next()
{
	if(cur < 5)
		{
			cur++;
		}else
			{
				cur = 1;
			}
	openImage(idImg);
}

function prev()
{
	if(cur > 1)
		{
			cur--;
		}else
			{
				cur = 5;
			}
	openImage(idImg);
}

function closeImage()
{
    document.getElementById("openImage").style.display = "none";
	cur = 1;
}