const Contact = (() => {
  const content = document.querySelector("#content");

  function load() {
    const container = document.createElement("main");
    container.classList.add("contact-main");

    const h2 = document.createElement("h2");
    h2.textContent = "You can find us at";
    container.appendChild(h2);

    listContactInfo(container);
    addAppInfo(container);
    addForm(container);

    content.appendChild(container);
  }

  function addForm(element) {
    const form = document.createElement("form");
    const caption = document.createElement("caption");
    const pName = document.createElement("p");
    const pEmail = document.createElement("p");
    const pReview = document.createElement("p");
    const inputName = document.createElement("input");
    const inputEmail = document.createElement("input");
    const inputReview = document.createElement("textarea");
    const labelName = document.createElement("label");
    const labelEmail = document.createElement("label");
    const labelReview = document.createElement("label");
    const button = document.createElement("button");

    caption.textContent = "Leave us a review:";
    form.appendChild(caption);

    labelName.textContent = "Your name:";
    labelName.setAttribute("for", "name");
    labelEmail.textContent = "Your email:";
    labelEmail.setAttribute("for", "email");
    labelReview.textContent = "Your review:";
    labelReview.setAttribute("for", "review");

    inputName.setAttribute("type", "text");
    inputName.id = "name";
    inputEmail.setAttribute("type", "email");
    inputEmail.id = "email";
    inputReview.id = "review";

    button.textContent = "Send";

    pName.appendChild(labelName);
    pName.appendChild(inputName);
    form.appendChild(pName);
    pEmail.appendChild(labelEmail);
    pEmail.appendChild(inputEmail);
    form.appendChild(pEmail);
    pReview.appendChild(labelReview);
    pReview.appendChild(inputReview);
    form.appendChild(pReview);
    form.appendChild(button);
    element.appendChild(form);
  }

  function addAppInfo(element) {
    const h3 = document.createElement("h3");
    h3.textContent = "Download our app: ";
    const ul = document.createElement("ul");
    ul.classList.add("app-links");
    ul.appendChild(h3);

    const links = appDownloadLinks();

    for (let link of links) {
      const li = document.createElement("li");
      li.appendChild(link);
      ul.appendChild(li);
    }

    element.appendChild(ul);
  }

  function appDownloadLinks() {
    const as = [];
    const links = [
      {
        href: "#",
        value: "Apple Store",
        icon: "#",
      },
      {
        href: "#",
        value: "Google Play Store",
        icon: "#",
      },
    ];

    for (let link of links) {
      const a = document.createElement("a");
      a.setAttribute("href", link.href);
      a.textContent = `${link.value} ${link.icon}`;
      a.setAttribute("rel", "noopener noreferrer");
      as.push(a);
    }

    return as;
  }

  function listContactInfo(element) {
    const ul = document.createElement("ul");
    const links = createContactLinks();
    ul.classList.add("socials");

    for (let link of links) {
      const li = document.createElement("li");
      li.appendChild(link);
      ul.appendChild(li);
    }

    element.appendChild(ul);
  }

  function createContactLinks() {
    const as = [];
    const links = [
      {
        href: "#",
        value: "Instagram @example",
        icon: "#",
      },
      {
        href: "#",
        value: "Whatsapp +00 00 00000-0000",
        icon: "#",
      },
      {
        href: "#",
        value: "Email email@real.com",
        icon: "#",
      },
    ];

    for (let link of links) {
      const a = document.createElement("a");
      a.setAttribute("href", link.href);
      a.textContent = `${link.value} ${link.icon}`;
      a.setAttribute("rel", "noopener noreferrer");
      as.push(a);
    }

    return as;
  }

  return {
    load,
  };
})();

export default Contact;
