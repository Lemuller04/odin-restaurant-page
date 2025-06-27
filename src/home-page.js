import Footer from "./footer.js";

const Home = (() => {
  const content = document.querySelector("#content");

  function load() {
    const container = document.createElement("main");
    container.classList.add("home");

    addPhoto(container);
    addBanner(container);

    content.appendChild(container);
  }

  function addBanner(element) {
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Mother Nature";

    const p = document.createElement("p");
    p.textContent =
      "Providing you every single thing you've ever eaten since the beginnig of time";

    div.classList.add("banner");
    div.appendChild(h1);
    div.appendChild(p);

    element.appendChild(div);
  }

  function addPhoto(element) {
    const div = document.createElement("div");
    div.classList.add("photo");

    const p = document.createElement("p");
    const as = createPhotoLinks();

    p.innerHTML = "Photo from ";
    p.appendChild(as[0]);
    p.innerHTML += " on ";
    p.appendChild(as[1]);

    div.appendChild(p);

    element.appendChild(div);
  }

  function createPhotoLinks() {
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
