let body =
  document.queryselector("body");
let isToggled = false;

body.onclick = () => {
  isToggled = !isToggled;
  body.style.setProperty("--value",isToggled ? "black" : "aquamarine");
}
