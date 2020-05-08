/*  Author: Trung Shin  */

var list = 
	[
		{
			title: "NEWBORN",
			des: "Dành cho bé sơ sinh từ 1-4 tuần tuổi",
			info: "Gói chụp bao gồm:<br>- Hỗ trợ đồ và phụ kiện (nếu cần)<br>- Tặng 10 ảnh 15x20 chất ảnh tốt ép lụa<br>- Không giới hạn hình trong quá trình chụp<br>",
			price: 490,
			path: "image/price/newborn.jpg"
		},
		{
			title: "BABY",
			des: "Dành cho bé từ 4 tuần tuổi",
			info: "Gói chụp bao gồm:<br>- Hỗ trợ đồ và phụ kiện (nếu cần)<br>- Tặng 10 ảnh 15x20 chất ảnh tốt ép lụa<br>- Không giới hạn hình trong quá trình chụp<br>",
			price: 500,
			path: "image/price/baby.jpg"
		}
	];

function displayList()
{
	var s = "";
	for(var i = 0; i < list.length; i++)
		{
			s = s + "<div class='d'> <div class='d1'><img src='" + list[i].path + "'></div><div class='d2'><span class='title'>" + list[i].title + "</span><br><span class='des'>" + list[i].des + "</span><br><span class='info'>" + list[i].info + "</span><br><span class='price'>" + list[i].price + ".000vnd</span><a href='https://www.facebook.com/kababystudio/'  target='_blank' class='book'>Liên hệ đặt lịch</a></div></div>";
		}
	document.getElementById("body").innerHTML = s;
}