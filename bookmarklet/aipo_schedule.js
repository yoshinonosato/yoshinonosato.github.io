// 自分のスケジュール内容を引っ張ってくるのをやりたかったけど日付が入ってなくて使えなかった　残念 RIP
var target_class_color = "";
for (el of Array.from(
    document.querySelector("#tableWrapper_P-17fd9a8c928-10009 > tbody > tr > td > div.dijit.dijitLeft.dijitInline.dijitDropDownButton > div").querySelectorAll("*")
).filter((element) => {
    console.log(element);
    return (
        element.innerHTML === document.querySelector("#mb_settings > span").innerText
    );
})) {
    target_class_color = el.className.replace('dispUser', 'scheduleDivTime');
    el.style.color = "red";
}

for (el of Array.from(
    document.querySelector("#scheduleGarage-P-17fd9a8c928-10009").querySelectorAll("*")
).filter((element) => {
    return (
        element.className === target_class_color
    );
})) {
    el.style.color = "red";
}