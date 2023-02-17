//Hanoi
function updateTime() {
  let hanoiElement = document.querySelector("#hanoi");
  let hanoiDateElement = hanoiElement.querySelector(".date");
  let hanoiTimeElement = hanoiElement.querySelector(".time");
  let hanoiTime = moment().tz("Asia/Saigon");

  hanoiDateElement.innerHTML = hanoiTime.format("MMMM Do YYYY");
  hanoiTimeElement.innerHTML = hanoiTime.format("h:mm:ss [<small>]A[</small>]");

  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  let melbourneTime = moment().tz("Australia/Melbourne");
  melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
  melbourneTimeElement.innerHTML = melbourneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscows");
  moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
  moscowTimeElement.innerHTML = moscowTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateTime, 1000);
