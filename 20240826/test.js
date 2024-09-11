var ref = document.referrer;
if (ref) {
	document.getElementById("text_test").innerHTML = ref;
} else {
	document.getElementById("text_test").innerHTML = `no ref`;
}

document.getElementById("text_url").innerHTML = location.search;
