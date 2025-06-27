const Menu = (() => {
  const content = document.querySelector("#content");

  function load() {
    const container = document.createElement("main");
    container.classList.add("menu-main");

    createMenu(container);

    content.appendChild(container);
  }

  function createMenu(element) {
    const categories = ["Fruit", "Vegetable", "c3", "mais um"];

    for (let type of categories) {
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category");

      const h2 = document.createElement("h2");
      h2.textContent = `${type}s`;
      categoryContainer.appendChild(h2);

      const items = menuItems(type.toLowerCase());

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
        categorie: "fruit",
      },
      {
        name: "Strawberry",
        description: "Moramngo",
        categorie: "fruit",
      },
      {
        name: "Strawberry",
        description: "Moramngo",
        categorie: "fruit",
      },
      {
        name: "vergetable eu acho",
        description: "comam bem",
        categorie: "vegetable",
      },
      {
        name: "vergetable eu acho",
        description: "comam bem",
        categorie: "vegetable",
      },
      {
        name: "vergetable eu acho",
        description: "comam bem",
        categorie: "vegetable",
      },
      {
        name: "nsei",
        description: "sabo nada",
        categorie: "c3",
      },
      {
        name: "nsei",
        description: "sabo nada",
        categorie: "c3",
      },
      {
        name: "nsei",
        description: "sabo nada",
        categorie: "c3",
      },
      {
        name: "é é é é é é é",
        description: "ih é mermo",
        categorie: "mais um",
      },
      {
        name: "é é é é é é é",
        description: "ih é mermo",
        categorie: "mais um",
      },
      {
        name: "é é é é é é é",
        description: "ih é mermo",
        categorie: "mais um",
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
