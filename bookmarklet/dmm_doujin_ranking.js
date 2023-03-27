if (document.getElementsByClassName("rank-rankListItem fn-setPurchaseChange").length < 100) {
	var loopId = setInterval(function () {
		var x = document.getElementsByClassName("rank-rankListItem fn-setPurchaseChange");
		if (x.length < 100) {
			window.scrollTo(0, document.body.scrollHeight);
		} else {
			clearInterval(loopId);
			popup_window();
		}
	}, 100);
} else {
	popup_window();
}

function popup_window() {
	var x = document.getElementsByClassName("rank-rankListItem fn-setPurchaseChange");
	var circle_list = [];

	for (let index = 0; index < 100; index++) {
		var rankCircle = x[index].querySelector("p.rank-circle").querySelector("a").innerText;
		circle_list.push(rankCircle);
	}

	var popup = document.createElement("div");
	popup.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9999;";
	var htmlContent = document.createElement("div");
	htmlContent.style = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 60%; font-size: 14px; background-color: rgb(255,255,255) ";
	var checkbox_list = document.createElement("div");
	checkbox_list.id = "circle_name_list";

	Array.from(new Set(circle_list)).forEach((element) => {
		var checkbox_input = document.createElement("input");
		var checkbox_label = document.createElement("label");

		checkbox_input.type = "checkbox";
		checkbox_input.id = element;
		checkbox_input.name = element;
		checkbox_input.value = element + "|";
		checkbox_label.htmlFor = element;
		checkbox_label.textContent = element + "|";
		checkbox_list.appendChild(checkbox_input);
		checkbox_list.appendChild(checkbox_label);
	});

	htmlContent.appendChild(checkbox_list);

	var div_Ranking = document.createElement("div");
	div_Ranking.id = "div_ranking_list";
	htmlContent.appendChild(div_Ranking);

	popup.innerHTML = htmlContent.outerHTML;
	document.body.appendChild(popup);

	var closeButton = document.createElement("button");
	closeButton.style = "position: absolute; top: 5px; right: 5px; padding: 5px;";
	closeButton.innerText = "Close";
	closeButton.addEventListener("click", function () {
		document.body.removeChild(popup);
	});
	popup.appendChild(closeButton);
	document.body.appendChild(popup);
	refresh_ranking();

	document.getElementById("circle_name_list").onchange = function () {
		refresh_ranking();
	};
}

function refresh_ranking() {
	var export_text = "";
	var checked_list = [];
	var list_input_list = document.getElementById("circle_name_list").querySelectorAll("input");
	list_input_list.forEach((element) => {
		if (element.checked == true) {
			checked_list.push(element.name);
		}
	});

	var x = document.getElementsByClassName("rank-rankListItem fn-setPurchaseChange");
	export_text = "<hr>" + document.querySelector("#w > div.c_hdg_withSortTitle > h1 > strong").innerText + "\n" + "対象サークル:" + checked_list.join(" / ") + "<br>";
	for (let index = 0; index < 100; index++) {
		var rankCircle = x[index].querySelector("p.rank-circle").querySelector("a").innerText;
		if (rankCircle && checked_list.indexOf(rankCircle) >= 0) {
			export_text += "[" + (index + 1) + "位]" + "\r" + rankCircle + "\r" + x[index].querySelector("b.rank-name").innerText + " |" + x[index].querySelector("p.rank-rankData").innerText + "<br>";
		}
	}
	document.getElementById("div_ranking_list").innerHTML = export_text;
}
