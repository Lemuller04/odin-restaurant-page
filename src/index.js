import "./styles.css";
import Home from "./home-page.js";

(function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button);
    });
  });
})();

Home.load();
