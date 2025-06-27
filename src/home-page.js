import Footer from "./footer.js";

const Home = (() => {
  const content = document.querySelector("#content");

  function load() {
    const container = document.createElement("main");
    container.classList.add("home");

    addPhoto(container);
    addBanner(container);
    addInfo(container);
    addCuriosities(container);

    content.appendChild(container);
  }

  function addInfo(element) {
    const div = document.createElement("div");
    div.classList.add("info");

    const p1 = document.createElement("p");
    p1.innerHTML = "&#128338; Open: 24/7";
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = "&#127757; Location: yes";
    div.appendChild(p2);

    element.appendChild(div);
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

    p.innerHTML = "Photo by";
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

  function addCuriosities(element) {
    const div = document.createElement("div");
    const curiosityTexts = createCuriosities();
    const curiosityTextContainer = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = "Did You Know?";

    div.appendChild(h2);

    curiosityTextContainer.appendChild(
      curiosityTexts[Math.floor(Math.random() * curiosityTexts.length)],
    );
    div.classList.add("curiosity");

    div.appendChild(curiosityTextContainer);

    element.appendChild(div);
  }

  function createCuriosities() {
    const curiositiesDivs = [];
    const curiosities = [
      {
        title: "Plants Made the First Chefs",
        content:
          "Before humans ever cooked a meal, plants were already seasoning themselves. Herbs, spices, even bitter compounds—these evolved to attract or deter animals!",
      },
      {
        title: "Mushrooms Are Closer to Animals than Plants",
        content:
          "Fungi breathe oxygen and digest food the way animals do. Some even glow in the dark—spooky and delicious?",
      },
      {
        title: "Wheat Was Domesticated Over 10,000 Years Ago",
        content:
          "It’s one of the first plants humans ever farmed. Every slice of bread is a bite of human history.",
      },
      {
        title: "Trees Communicate Underground",
        content:
          "With the help of fungi, trees can send nutrients to one another through underground networks—like a forest-wide internet. Some scientists call it the “Wood Wide Web.”",
      },
      {
        title: "Every Fruit You Eat Is a Sweet Deal from Nature",
        content:
          "Fruits are plants’ bribes to animals: eat this juicy treat, and help spread my seeds. We’ve been nature’s seed couriers for millions of years.",
      },
    ];

    for (let curiosity of curiosities) {
      const div = document.createElement("div");

      const h3 = document.createElement("h3");
      h3.textContent = curiosity.title;

      const p = document.createElement("p");
      p.textContent = curiosity.content;

      div.appendChild(h3);
      div.appendChild(p);

      curiositiesDivs.push(div);
    }

    return curiositiesDivs;
  }

  document.body.appendChild(Footer.footer);

  return {
    load,
  };
})();

export default Home;
