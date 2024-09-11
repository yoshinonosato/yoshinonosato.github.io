var ref = document.referrer;
if (ref) {
	document.getElementById("text_test").innerHTML = ref;
} else {
	document.getElementById("text_test").innerHTML = `no ref`;
}

var getUrl = new URL(location.href);

// Discordにメッセージを送信する関数
function sendMessageToDiscord(webhookUrl, message) {
	// fetch APIを使用してPOSTリクエストを送信する
	fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(message),
	})
		.then((response) => response.text())
		.then((data) => console.log(data))
		.catch((error) => {
			console.error("Error:", error);
		});
}

document.addEventListener("DOMContentLoaded", function () {
	// ボタン処理
	const myButton = document.getElementById("send");
	myButton.addEventListener("click", function () {
		// メッセージ内容を定義する
		const messageContent = {
			content: "button send test",
		};
		// メインの処理
		const discordWebhookUrl = getUrl.searchParams.get("discordWebhookUrl");
		if (discordWebhookUrl) {
			// メッセージを送信
			sendMessageToDiscord(discordWebhookUrl, messageContent);
			console.log("Discord Msg send.");
		} else {
			console.error("DISCORD_WEBHOOK_URL environment variable not set.");
		}
	});
});
