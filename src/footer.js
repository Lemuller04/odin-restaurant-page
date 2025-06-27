const Footer = (() => {
  const footer = document.createElement("footer");
  const links = generateLinks();

  function generateLinks() {
    const aElements = [];

    const links = [
      {
        href: "https://www.github.com/lemuller04",
        value: "Lemuller04",
      },
      {
        href: "https://www.theodinproject.com",
        value: "The Odin Project",
      },
      {
        href: "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page",
        value: "Restaurant Page",
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

  (function formatFooter() {
    footer.innerHTML = "&copy; ";
    footer.appendChild(links[0]);
    footer.innerHTML += " for ";
    footer.appendChild(links[1]);
    footer.innerHTML += "'s ";
    footer.appendChild(links[2]);
    footer.innerHTML += " project.";
  })();

  return {
    footer,
  };
})();

export default Footer;
