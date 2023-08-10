document.addEventListener("DOMContentLoaded", () => {
  const pizzas = [
    {
      id: 1,
      nombre: "Pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "./img/muzzarella.png",
    },
    {
      id: 2,
      nombre: "Pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "./img/cebolla.png",
    },
    {
      id: 3,
      nombre: "Pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
      imagen: "./img/4quesos.png",
    },
    {
      id: 4,
      nombre: "Pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "./img/especial.png",
    },
    {
      id: 5,
      nombre: "Pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      imagen: "./img/anana.png",
    },
  ];

  const pizzaIdInput = document.getElementById("pizzaIdInput");
  const searchButton = document.getElementById("searchButton");
  const resultContainer = document.getElementById("resultContainer");

  searchButton.addEventListener("click", () => {
    const inputValue = parseInt(pizzaIdInput.value);
    resultContainer.innerHTML = "";

    if (isNaN(inputValue)) {
      renderError("Por favor, ingresa un número válido.");
    } else {
      const foundPizza = pizzas.find((pizza) => pizza.id === inputValue);

      if (foundPizza) {
        renderPizzaCard(foundPizza);
        localStorage.setItem("lastPizza", JSON.stringify(foundPizza));
      } else {
        renderError("Pizza no encontrada.");
      }
    }
  });

  const renderPizzaCard = (pizza) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = pizza.imagen;
    image.alt = pizza.nombre;
    image.classList.add("pizza-image");

    const name = document.createElement("h2");
    name.textContent = pizza.nombre;

    const price = document.createElement("p");
    price.textContent = `Precio: $${pizza.precio}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);

    resultContainer.appendChild(card);
  };

  const renderError = (message) => {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = message;

    resultContainer.appendChild(errorDiv);
  };

  const lastPizza = JSON.parse(localStorage.getItem("lastPizza"));

  if (lastPizza) {
    renderPizzaCard(lastPizza);
  }
});

