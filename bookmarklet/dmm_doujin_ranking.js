var circle_name = prompt("対象サークル(完全一致)");
var loopId = setInterval(function () {
	var x = document.getElementsByClassName("rank-rankListItem fn-setPurchaseChange");
	if (x.length < 100) {
		window.scrollTo(0, document.body.scrollHeight);
	} else {
		var export_text = document.querySelector("#w > div.c_hdg_withSortTitle > h1 > strong").innerText + "\n" + "対象サークル:" + circle_name +"\r";
		var export_flg = false;
		for (let index = 0; index < 100; index++) {
			var rankCircle = x[index].querySelector("p.rank-circle");
			if (rankCircle && rankCircle.querySelector("a").innerText == circle_name) {
				export_text += "[" + (index + 1) + "位]" + x[index].querySelector("b.rank-name").innerText + " |" + x[index].querySelector("p.rank-rankData").innerText + "\n";
			}
			export_flg = true;
		}
		if (export_flg) {
			var popup = document.createElement("div");
			popup.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9999;";
			var textarea = document.createElement("textarea");
			textarea.style = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 60%; font-size: 14px;";
			textarea.value = export_text;
			var closeButton = document.createElement("button");
			closeButton.style = "position: absolute; top: 5px; right: 5px; padding: 5px;";
			closeButton.innerText = "Close";
			closeButton.addEventListener("click", function () {
				document.body.removeChild(popup);
			});
			popup.appendChild(textarea);
			popup.appendChild(closeButton);
			document.body.appendChild(popup);
			clearInterval(loopId);
		}
	}
}, 500);
