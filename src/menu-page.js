const Menu = (() => {
  const content = document.querySelector("#content");

  function load() {
    const container = document.createElement("main");
    container.classList.add("menu-main");

    createMenu(container);

    content.appendChild(container);
  }

  function createMenu(element) {
    const categories = [
      "From the Garden",
      "From the Earth",
      "From the Orchard",
      "From the Wild",
    ];

    for (let type of categories) {
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category");

      const h2 = document.createElement("h2");
      h2.textContent = `${type}`;
      categoryContainer.appendChild(h2);

      const items = menuItems(type);

      for (let item of items) {
        const div = document.createElement("div");
        div.classList.add("menu-item");

        const h3 = document.createElement("h3");
        h3.textContent = item.name;

        const p = document.createElement("p");
        p.textContent = item.description;

        div.appendChild(h3);
        div.appendChild(p);

        categoryContainer.appendChild(div);
      }

      element.appendChild(categoryContainer);
    }
  }

  function menuItems(type) {
    const items = [
      {
        name: "Strawberry",
        description: "Moramngo",
        categorie: "From the Garden",
      },
      {
        name: "Strawberry",
        description: "Moramngo",
        categorie: "From the Garden",
      },
      {
        name: "Strawberry",
        description: "Moramngo",
        categorie: "From the Garden",
      },
      {
        name: "vergetable eu acho",
        description: "comam bem",
        categorie: "From the Earth",
      },
      {
        name: "vergetable eu acho",
        description: "comam bem",
        categorie: "From the Earth",
      },
      {
        name: "vergetable eu acho",
        description: "comam bem",
        categorie: "From the Earth",
      },
      {
        name: "nsei",
        description: "sabo nada",
        categorie: "From the Orchard",
      },
      {
        name: "nsei",
        description: "sabo nada",
        categorie: "From the Orchard",
      },
      {
        name: "nsei",
        description: "sabo nada",
        categorie: "From the Orchard",
      },
      {
        name: "é é é é é é é",
        description: "ih é mermo",
        categorie: "From the Wild",
      },
      {
        name: "é é é é é é é",
        description: "ih é mermo",
        categorie: "From the Wild",
      },
      {
        name: "é é é é é é é",
        description: "ih é mermo",
        categorie: "From the Wild",
      },
    ];

    const itemsToReturn = [];
    for (let item of items) {
      if (item.categorie === type) {
        itemsToReturn.push(item);
      }
    }

    return itemsToReturn;
  }

  return {
    load,
  };
})();

export default Menu;
