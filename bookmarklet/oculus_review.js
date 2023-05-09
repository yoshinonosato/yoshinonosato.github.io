var reviewStar = [0, 0, 0, 0, 0];
var reviewText = [[], [], [], [], []];
var gotUser = [];

var loopId = setInterval(() => {
	if (document.getElementsByClassName("app-review-pager__button")[1].className.indexOf("button--disabled") < 0) {
		Array.from(document.getElementsByClassName("app-review")).forEach((element) => {
			if (gotUser.indexOf(element.getElementsByClassName("bxHeading bxHeading--level-5 app-review__author")[0].innerText) < 0) {
				reviewStar[element.getElementsByClassName("bxStars bxStars--white").length - 1]++;
				reviewText[element.getElementsByClassName("bxStars bxStars--white").length - 1].push([element.getElementsByClassName("button__content")[0].innerText.slice(element.getElementsByClassName("button__content")[0].innerText.indexOf("|") + 2), element.getElementsByClassName("clamped-description__content")[0].innerHTML]);
				gotUser.push(element.getElementsByClassName("bxHeading bxHeading--level-5 app-review__author")[0].innerText);
			}
		});
		document.getElementsByClassName("app-review-pager__button-icon")[1].click();
	} else {
		Array.from(document.getElementsByClassName("app-review")).forEach((element) => {
			reviewStar[element.getElementsByClassName("bxStars bxStars--white").length - 1]++;
			reviewText[element.getElementsByClassName("bxStars bxStars--white").length - 1].push([element.getElementsByClassName("button__content")[0].innerText.slice(element.getElementsByClassName("button__content")[0].innerText.indexOf("|") + 2), element.getElementsByClassName("clamped-description__content")[0].innerHTML]);
		});
		clearInterval(loopId);
		console.log(reviewStar);
		console.log(reviewText);
		popupWindow(reviewStar, reviewText);
	}
}, 500);

function popupWindow(reviewStar, reviewText) {
	const divPopup = document.createElement("div");
	divPopup.style = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; width: 75%; height: 75%; background-color: #eee; z-index: 1; border: 2px solid #000; overflow: auto;";
	divPopup.innerHTML = `${document.getElementsByClassName("app-description__title")[0].innerText}<br>`;
	divPopup.innerHTML += `${document.getElementsByClassName("app-description__review-count")[0].innerHTML}　平均評価${document.getElementsByClassName("app-description__stars bxStars--spacing-0")[0].getElementsByClassName("bxStars bxStars--white").length - 1 + document.getElementsByClassName("app-description__stars bxStars--spacing-0")[0].getElementsByClassName("bxStars bxStars--white bxStars--overlay")[0].clientWidth / 24}<br>`;
	divPopup.innerHTML += `★1:${document.getElementsByClassName("app-ratings-histogram")[0].querySelectorAll("span")[9].innerText}　`;
	divPopup.innerHTML += `★2:${document.getElementsByClassName("app-ratings-histogram")[0].querySelectorAll("span")[7].innerText}　`;
	divPopup.innerHTML += `★3:${document.getElementsByClassName("app-ratings-histogram")[0].querySelectorAll("span")[5].innerText}　`;
	divPopup.innerHTML += `★4:${document.getElementsByClassName("app-ratings-histogram")[0].querySelectorAll("span")[3].innerText}　`;
	divPopup.innerHTML += `★5:${document.getElementsByClassName("app-ratings-histogram")[0].querySelectorAll("span")[1].innerText}<hr>`;

	divPopup.innerHTML += `レビュー数[${reviewStar[0] + reviewStar[1] + reviewStar[2] + reviewStar[3] + reviewStar[4]}]件<br>★1:${reviewStar[0]}　★2:${reviewStar[1]}　★3:${reviewStar[2]}　★4:${reviewStar[3]}　★5:${reviewStar[4]}<br>`;
	var starCount = 1;
	reviewText.forEach((element) => {
		divPopup.innerHTML += `<hr>★${starCount}<br>`;

		element.sort(function (a, b) {
			return b[0] - a[0];
		});
		element.forEach((innerElement) => {
			divPopup.innerHTML += `${innerElement[0]}|${innerElement[1]}<br>`;
		});
		starCount++;
	});

	var closeButton = document.createElement("button");
	closeButton.style = "position: absolute; top: 5px; right: 5px; padding: 5px;";
	closeButton.innerHTML = "Close";
	closeButton.addEventListener("click", function () {
		document.body.removeChild(divPopup);
	});
	divPopup.appendChild(closeButton);
	document.body.appendChild(divPopup);
}
