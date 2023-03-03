var images = document.querySelectorAll("img");
var uniqueImages = [];
for (var i = 0; i < images.length; i++) {
	// if (images[i].src.indexOf(".svg")===-1) {
	if (!uniqueImages.includes(images[i].src)) {
		uniqueImages.push(images[i].src);
	}
	// }
}
document.body.innerHTML = "";
var table = document.createElement("table");
var row = document.createElement("tr");
for (var i = 0; i < uniqueImages.length; i++) {
	console.log(uniqueImages[i]);

	var imgCell = document.createElement("td");
	imgCell.style.border = "1px solid";
	imgCell.style.width = "100px";
	imgCell.style.height = "100px";

	var img = document.createElement("img");
	img.src = uniqueImages[i];
	img.style.width = "100%";

	var link = document.createElement("a");
	link.appendChild(img);
	link.href = uniqueImages[i];
	link.target = "_blank";

	imgCell.appendChild(link);
	row.appendChild(imgCell);

	if (i % 20 === 19) {
		table.appendChild(row);
		row = document.createElement("tr");
	}
}
if (row.children.length > 0) {
	table.appendChild(row);
}
document.body.appendChild(table);
