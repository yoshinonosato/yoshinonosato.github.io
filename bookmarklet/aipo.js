javascript: (function () {
  document
    .querySelector(
      "#dojoUnique7 > div.auiPortletHead > div > div.auiPortletTool > div.auiPortletAction > a"
    )
    .click();
  setTimeout(function () {
    var today = new Date();
    document.querySelector(
      "#tmp_map_from > option:nth-child(" +
        (
          document
            .querySelector("#tmp_map_from")
            .innerHTML.substr(
              0,
              document
                .querySelector("#tmp_map_from")
                .innerHTML.indexOf(document.querySelector("#mb_settings > span").innerHTML)
            )
            .match(/<option/g) || []
        ).length +
        ")"
    ).selected = true;
    document.querySelector("#button_map_add").click();
    document.querySelector("#report_name").value =
      "【業務報告】" +
      today.getFullYear() +
      "/" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + today.getDate()).slice(-2) +
      " "+document.querySelector("#mb_settings > span").innerHTML;
    document.querySelector(
      "#formP-17fd9a8c928-10007 > table > tbody > tr:nth-child(4) > td:nth-child(2) > textarea"
    ).value =
      "本日の作業報告書です。\r\n\r\n\r\n\r\nどうぞよろしくお願いいたします。";
  }, 1000);
})();
