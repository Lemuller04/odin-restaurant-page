import "./styles.css";
import Home from "./home-page.js";
import Menu from "./menu-page.js";

(function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      clearPage();

      switch (button.value) {
        case "home":
          Home.load();
          break;
        case "menu":
          Menu.load();
          break;
        case "contact":
          console.log("contact");
          break;
        default:
          Home.load();
      }
    });
  });

  function clearPage() {
    const content = document.querySelector("#content");

    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }
})();

Home.load();
