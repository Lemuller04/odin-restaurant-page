const Menu = (() => {
  function load() {
    const content = document.querySelector("#content");

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

        const span = document.createElement("span");
        span.textContent = "#";

        const p = document.createElement("p");
        p.textContent = item.description;

        h3.appendChild(span);
        div.appendChild(h3);
        div.appendChild(p);

        categoryContainer.appendChild(div);
      }

      element.appendChild(categoryContainer);
    }
  }

  function menuItems(type) {
    const items = [
      // FROM THE GARDEN
      {
        name: "Golden Beet Carpaccio",
        description:
          "Thin-sliced roasted beets drizzled with citrus vinaigrette and microgreens.",
        category: "From the Garden",
      },
      {
        name: "Herbed Zucchini Fritters",
        description:
          "Crispy zucchini cakes with dill yogurt dip—light, bright, and addictively savory.",
        category: "From the Garden",
      },
      {
        name: "Fire-Roasted Pepper Salad",
        description:
          "A warm mix of sweet peppers, red onion, and balsamic glaze over arugula.",
        category: "From the Garden",
      },
      {
        name: "Garden Gazpacho",
        description:
          "Chilled tomato-cucumber soup with a hint of basil oil and toasted pepitas.",
        category: "From the Garden",
      },
      {
        name: "Charred Broccolini Bruschetta",
        description:
          "Smoky broccolini over rustic bread with lemon tahini spread.",
        category: "From the Garden",
      },
      {
        name: "Heirloom Tomato Mosaic",
        description:
          "A colorful patchwork of seasonal tomatoes with sea salt and fresh herbs.",
        category: "From the Garden",
      },

      // FROM THE EARTH
      {
        name: "Wild Mushroom Ragout",
        description:
          "A medley of cremini, shiitake, and oyster mushrooms simmered in garlic thyme butter. Served warm over toasted sourdough.",
        category: "From the Earth",
      },
      {
        name: "Truffle Potato Terrine",
        description:
          "Layered Yukon Gold potatoes baked with a hint of nutmeg and truffle oil. Crisp on the edges, soft in the center.",
        category: "From the Earth",
      },
      {
        name: "Smoked Root Vegetable Hash",
        description:
          "Carrot, parsnip, and sweet potato sautéed with rosemary and shallots, topped with a soft-poached egg.",
        category: "From the Earth",
      },
      {
        name: "Charred Cabbage Wedges",
        description:
          "Grilled cabbage with lemon-chili glaze, sunflower seeds, and creamy white bean purée.",
        category: "From the Earth",
      },
      {
        name: "Roasted Cauliflower Steak",
        description:
          "Thick-cut cauliflower steak, crusted with za’atar and served with pomegranate molasses drizzle.",
        category: "From the Earth",
      },
      {
        name: "Stuffed Portobello Caps",
        description:
          "Filled with herbed quinoa, sun-dried tomato, and pine nuts over a swirl of basil pesto.",
        category: "From the Earth",
      },

      // FROM THE ORCHARD
      {
        name: "Pear & Gorgonzola Tartlets",
        description:
          "Flaky pastry filled with roasted pear, crumbled gorgonzola, and honey drizzle. A balance of savory and sweet.",
        category: "From the Orchard",
      },
      {
        name: "Stone Fruit Caprese",
        description:
          "Juicy peaches, heirloom tomatoes, and buffalo mozzarella layered with fresh basil and balsamic glaze.",
        category: "From the Orchard",
      },
      {
        name: "Apple & Fennel Slaw",
        description:
          "Crisp Granny Smith apples and shaved fennel tossed in lemon-dijon dressing with toasted walnuts.",
        category: "From the Orchard",
      },
      {
        name: "Chilled Plum Soup",
        description:
          "A tangy-sweet purée of plums with ginger and yogurt, served refreshingly cold.",
        category: "From the Orchard",
      },
      {
        name: "Citrus & Beet Salad",
        description:
          "Ruby grapefruit, blood orange, and roasted beets on greens with pistachio dust and citrus vinaigrette.",
        category: "From the Orchard",
      },
      {
        name: "Apricot Glazed Carrots",
        description:
          "Roasted baby carrots brushed with apricot-thyme glaze and finished with sesame seeds.",
        category: "From the Orchard",
      },

      // FROM THE WILD
      {
        name: "Forager’s Forest Bowl",
        description:
          "A vibrant mix of wild greens, fiddlehead ferns, sorrel, and toasted seeds with a spruce tip vinaigrette.",
        category: "From the Wild",
      },
      {
        name: "Juniper-Smoked Eggplant	",
        description:
          "Fire-roasted eggplant marinated in juniper oil and thyme, served over wild rice. Smoky, herbal, and bold.",
        category: "From the Wild",
      },
      {
        name: "Stinging Nettle Gnocchi",
        description:
          "Hand-rolled gnocchi blended with nettle purée, sautéed in brown butter and sage. A rustic delicacy.",
        category: "From the Wild",
      },
      {
        name: "Black Garlic & Berry Glaze Skewers",
        description:
          "Grilled seasonal vegetables glazed with fermented garlic and wild berry reduction.",
        category: "From the Wild",
      },
      {
        name: "Acorn Squash & Maple Soup",
        description:
          "Creamy purée of roasted acorn squash, finished with maple, cayenne, and toasted pecans.",
        category: "From the Wild",
      },
      {
        name: "Wild Blueberry Polenta Cakes",
        description:
          "Crispy-edged polenta rounds topped with blueberry compote and rosemary glaze. Earthy and sweet.",
        category: "From the Wild",
      },
    ];

    const itemsToReturn = [];
    for (let item of items) {
      if (item.category === type) {
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
