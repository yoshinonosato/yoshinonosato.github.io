javascript: (function () {
	var export_text = document.getElementsByClassName("base_title clearfix")[0].querySelector("h1").innerText + "\n";
	var x = document.querySelector("#ranking_table").querySelectorAll("tr");
	for (let index = 0; index < x.length; index++) {
		export_text += "[" + (index + 1) + "位]" + "\t" + document.querySelector("#ranking_table").querySelectorAll("tr")[index].querySelector("dd.maker_name").innerText.split("/ ")[1] + "\t" + document.querySelector("#ranking_table").querySelectorAll("tr")[index].querySelector("dt.work_name").querySelector("a").innerText + "\n";
	}
	popup_window(export_text);
	function popup_window(export_text) {
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
	}
})();
