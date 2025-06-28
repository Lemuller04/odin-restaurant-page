import "./styles.css";
import Home from "./home-page.js";
import Menu from "./menu-page.js";
import Contact from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
  (function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        clearPage();

        switch (button.value) {
          case "home":
            setActivePage(button);
            Home.load();
            break;
          case "menu":
            setActivePage(button);
            Menu.load();
            break;
          case "contact":
            setActivePage(button);
            Contact.load();
            break;
          default:
            console.warn(`Unknown ${button} pressed`);
            setActivePage(button);
            Home.load();
        }
      });
    });

    function setActivePage(button) {
      for (let b of buttons) {
        b.classList.remove("active");
      }

      button.classList.add("active");
    }

    function clearPage() {
      const content = document.querySelector("#content");

      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
    }
  })();
});
Home.load();
