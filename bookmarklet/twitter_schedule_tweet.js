var input_date = new Date(prompt("日時入力 ※yyyy/mm/dd hh:ii:ss"));
document
  .querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-kemksi.r-184en5c > div > div.css-1dbjc4n.r-kemksi.r-oyd9sg > div:nth-child(1) > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(3) > div > div > div:nth-child(1) > div:nth-child(6) > div"
  )
  .click();
setTimeout(function () {
  var string = document
    .querySelector(
      "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div.css-1dbjc4n.r-ymttw5.r-1f1sjgu"
    )
    .innerHTML.substr(
      document
        .querySelector(
          "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div.css-1dbjc4n.r-ymttw5.r-1f1sjgu"
        )
        .innerHTML.indexOf("SELECTOR_") + 9,
      10
    );
  var target_selector = string.substr(0, string.indexOf("_"));
  document.querySelector("#SELECTOR_" + Number(target_selector)).dispatchEvent(
    new Event("input", {
      bubbles: true,
    })
  );
  document.querySelector("#SELECTOR_" + Number(target_selector)).value =
    input_date.getMonth();
  document.querySelector("#SELECTOR_" + Number(target_selector)).dispatchEvent(
    new Event("change", {
      bubbles: true,
    })
  );
  document
    .querySelector("#SELECTOR_" + (Number(target_selector) + 1))
    .dispatchEvent(
      new Event("input", {
        bubbles: true,
      })
    );
  document.querySelector("#SELECTOR_" + (Number(target_selector) + 1)).value =
    input_date.getDay();
  document
    .querySelector("#SELECTOR_" + (Number(target_selector) + 1))
    .dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );
  document
    .querySelector("#SELECTOR_" + (Number(target_selector) + 2))
    .dispatchEvent(
      new Event("input", {
        bubbles: true,
      })
    );
  document.querySelector("#SELECTOR_" + (Number(target_selector) + 2)).value =
    input_date.getFullYear();
  document
    .querySelector("#SELECTOR_" + (Number(target_selector) + 2))
    .dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );
  document
    .querySelector("#SELECTOR_" + (Number(target_selector) + 3))
    .dispatchEvent(
      new Event("input", {
        bubbles: true,
      })
    );
  document.querySelector("#SELECTOR_" + (Number(target_selector) + 3)).value =
    input_date.getHours();
  document
    .querySelector("#SELECTOR_" + (Number(target_selector) + 3))
    .dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );
  document
    .querySelector("#SELECTOR_" + (Number(target_selector) + 4))
    .dispatchEvent(
      new Event("input", {
        bubbles: true,
      })
    );
  document.querySelector("#SELECTOR_" + (Number(target_selector) + 4)).value =
    input_date.getMinutes();
  document
    .querySelector("#SELECTOR_" + (Number(target_selector) + 4))
    .dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );
  document
    .querySelector(
      "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div.css-1dbjc4n.r-gtdqiz.r-ipm5af.r-136ojw6 > div > div > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1777fci.r-15ysp7h.r-s8bhmr > div > div"
    )
    .click();
}, 1000);
