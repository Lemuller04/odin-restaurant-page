import Footer from "./footer.js";

const Home = (() => {
  const content = document.querySelector("#content");

  function load() {
    const container = document.createElement("main");
    container.classList.add("home");

    addBanner(container);

    content.appendChild(container);
  }

  function addBanner(element) {
    const div = document.createElement("div");
    div.classList.add("banner");

    const p = document.createElement("p");
    const as = createBannerLinks();
    p.textContent = "Photo from x on x";
    div.appendChild(p);

    element.appendChild(div);
  }

  function createBannerLinks() {
    const aElements = [];

    const links = [
      {
        href: "https://www.pexels.com/@valeriya/",
        value: "Valeria Boltneva",
      },
      {
        href: "https://www.pexels.com",
        value: "Pexels",
      },
    ];

    for (let link of links) {
      const a = document.createElement("a");
      a.setAttribute("href", link.href);
      a.setAttribute("rel", "noopener noreferrer");
      a.textContent = link.value;
      aElements.push(a);
    }

    return aElements;
  }

  document.body.appendChild(Footer.footer);

  return {
    load,
  };
})();

export default Home;
