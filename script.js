
 // ==========================================
 // DESU BURGUER — SCRIPT OTIMIZADO
 // ==========================================

const WHATSAPP_NUMBER = "5589981501360";

const photos = {
  piscininha: "piscininha-desu.jpg",
  "combo-simples": "combo-simples.jpg",
  "combo-duplo": "combo-duplo.jpg",
  "combo-desu": "combo-desu-1.jpg",
  "burguer-kids": "burguer-kids.jpg",
  "file-frango": "file-frango.jpg",
  "frango-duplo": "frango-duplo.jpg",
  simples: "simples.jpg",
  duplo: "duplo.jpg",
  giga: "giga.jpg",
  "x-desu": "x-desu.jpg",
  "x-desu-duplo": "x-desu-duplo.jpg",
  tropical: "tropical.jpg",
  "tropical-duplo": "tropical-duplo.jpg",
  "tropical-picante": "tropical-picante.jpg",
  coxinha: "coxinha.jpg",
  "batata-simples": "batata-simples.jpg",
  "batata-completa-300": "batata-completa-300.jpg",
  "batata-completa-400": "batata-completa-400.jpg",
  agua: "agua.jpg",
  "agua-gas": "agua-gas.jpg",
  ks: "ks.jpg",
  "skol-lata": "skol-lata.jpg",
  "skol-600": "skol-600.jpg",
  "brahma-600": "brahma-600.jpg",
  original: "original.jpg",
  heineken: "heineken.jpg",
  "suco-simples": "suco-simples.jpg",
  "suco-cremoso": "suco-cremoso.jpg"
};

const products = [
  {
    id: "piscininha",
    name: "Piscininha Desu",
    cat: "combos",
    price: 32,
    desc: "Piscina de cheddar com bacon e simples.",
    image: photos["piscininha"]
  },
  {
    id: "combo-simples",
    name: "Combo Simples",
    cat: "combos",
    price: 34,
    desc: "1 Simples, 1 batata 200g e refrigerante lata.",
    image: photos["combo-simples"]
  },
  {
    id: "combo-duplo",
    name: "Combo Duplo",
    cat: "combos",
    price: 80,
    desc: "2 hambúrgueres, cada um com 2 carnes, cheddar e bacon.",
    image: photos["combo-duplo"]
  },
  {
    id: "combo-desu",
    name: "Combo Desu",
    cat: "combos",
    price: 100,
    desc: "3 X Desu, cada um com 1 carne, alface e tomate. Acompanha 2 batatas 200g e refrigerante de 1 litro.",
    image: photos["combo-desu"]
  },
  {
    id: "burguer-kids",
    name: "Burguer Kids",
    cat: "hamburgueres",
    price: 18,
    desc: "Pão brioche, carne 140g, mussarela e molho da casa.",
    image: photos["burguer-kids"]
  },
  {
    id: "file-frango",
    name: "Filé de Frango",
    cat: "hamburgueres",
    price: 21,
    desc: "Pão brioche, filé de frango 120g, mussarela, bacon, cebola e molho da casa.",
    image: photos["file-frango"]
  },
  {
    id: "frango-duplo",
    name: "Frango Duplo",
    cat: "hamburgueres",
    price: 28,
    desc: "Pão brioche,2 filés de frango 120g, mussarela, 2 bacon, cebola e molho da casa.",
    image: photos["frango-duplo"]
  },
  {
    id: "simples",
    name: "Simples",
    cat: "hamburgueres",
    price: 23,
    desc: "Pão brioche, carne 140g, cheddar, bacon, cebola caramelizada e molho da casa.",
    image: photos["simples"]
  },
  {
    id: "duplo",
    name: "Duplo",
    cat: "hamburgueres",
    price: 34,
    desc: "Pão brioche, 2 carnes 140g, cheddar, 2 bacon, cebola caramelizada e molho da casa.",
    image: photos["duplo"]
  },
  {
    id: "giga",
    name: "Giga",
    cat: "hamburgueres",
    price: 46,
    desc: "Pão brioche, 3 carnes 140g, 3 cheddar, 3 bacon, cebola caramelizada, picles e molho da casa.",
    image: photos["giga"]
  },
  {
    id: "x-desu",
    name: "X Desu",
    cat: "hamburgueres",
    price: 26,
    desc: "Pão brioche, carne 140g, mussarela, bacon, alface, tomate e molho da casa.",
    image: photos["x-desu"]
  },
  {
    id: "x-desu-duplo",
    name: "X Desu Duplo",
    cat: "hamburgueres",
    price: 36,
    desc: "Pão brioche, 2 carnes 140g, mussarela, 2 bacon, alface, tomate, cebola e molho da casa.",
    image: photos["x-desu-duplo"]
  },
  {
    id: "tropical",
    name: "Tropical",
    cat: "hamburgueres",
    price: 25,
    desc: "Pão brioche, carne 140g, cheddar, bacon, abacaxi caramelizado e molho da casa.",
    image: photos["tropical"]
  },
  {
    id: "tropical-duplo",
    name: "Tropical Duplo",
    cat: "hamburgueres",
    price: 35,
    desc: "Pão brioche, 2 carnes 140g, cheddar, bacon, abacaxi caramelizado e molho da casa.",
    image: photos["tropical-duplo"]
  },
  {
    id: "tropical-picante",
    name: "Tropical Picante",
    cat: "hamburgueres",
    price: 26,
    desc: "Pão brioche, carne 140g, cheddar, 2 bacon, geleia de abacaxi picante e molho da casa.",
    image: photos["tropical-picante"]
  },
  {
    id: "coxinha",
    name: "Coxinha 150g",
    cat: "porcoes",
    price: 10,
    desc: "Coxinha de frango com Catupiry.",
    image: photos["coxinha"]
  },
  {
    id: "batata-simples",
    name: "Batata Simples 300g",
    cat: "porcoes",
    price: 18,
    desc: "Batata frita tradicional e crocante.",
    image: photos["batata-simples"]
  },
  {
    id: "batata-completa-300",
    name: "Batata Completa 300g",
    cat: "porcoes",
    price: 22,
    desc: "Batata com cheddar e bacon especial.",
    image: photos["batata-completa-300"]
  },
  {
    id: "batata-completa-400",
    name: "Batata Completa 400g",
    cat: "porcoes",
    price: 25,
    desc: "Porção maior com cheddar e bacon.",
    image: photos["batata-completa-400"]
  },
  {
    id: "agua",
    name: "Água",
    cat: "bebidas",
    price: 5,
    desc: "Água mineral 500ml.",
    image: photos["agua"]
  },
  {
    id: "agua-gas",
    name: "Água com gás",
    cat: "bebidas",
    price: 5,
    desc: "Água com gás 500ml.",
    image: photos["agua-gas"]
  },
  {
    id: "ks",
    name: "KS",
    cat: "bebidas",
    price: 4,
    desc: "Refrigerante KS.",
    image: photos["ks"]
  },
  {
    id: "skol-lata",
    name: "Skol Lata",
    cat: "bebidas",
    price: 4,
    desc: "Lata de cerveja.",
    image: photos["skol-lata"]
  },
  {
    id: "skol-600",
    name: "Skol 600",
    cat: "bebidas",
    price: 10,
    desc: "Cerveja 600ml.",
    image: photos["skol-600"]
  },
  {
    id: "brahma-600",
    name: "Brahma 600",
    cat: "bebidas",
    price: 10,
    desc: "Cerveja 600ml.",
    image: photos["brahma-600"]
  },
  {
    id: "original",
    name: "Original",
    cat: "bebidas",
    price: 12,
    desc: "Cerveja 600ml.",
    image: photos["original"]
  },
  {
    id: "heineken",
    name: "Heineken",
    cat: "bebidas",
    price: 15,
    desc: "Long neck.",
    image: photos["heineken"]
  },
  {
    id: "suco-simples",
    name: "Suco Simples",
    cat: "bebidas",
    price: 8,
    desc: "Suco de fruta.",
    image: photos["suco-simples"]
  },
  {
    id: "suco-cremoso",
    name: "Suco Cremoso",
    cat: "bebidas",
    price: 10,
    desc: "Suco cremoso da casa.",
    image: photos["suco-cremoso"]
  }
];

let cart = [];
let orderType = "entrega";
let paymentMethod = "Pix";
let activeCategory = "todos";
let currentStep = 1;

// Pedidos podem ser montados em qualquer horário.

function money(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

// ==========================================
// RENDERIZAÇÃO DOS PRODUTOS
// ==========================================

function renderProducts(category = activeCategory) {
  const container = document.getElementById("products");

  if (!container) return;

  const filtered = category === "todos"
    ? products
    : products.filter(p => p.cat === category);

  const names = {
    combos: "COMBOS",
    hamburgueres: "HAMBÚRGUERES",
    porcoes: "PORÇÕES",
    bebidas: "BEBIDAS & SUCOS"
  };

  container.innerHTML = filtered.map(product => `
    <article class="product-card">
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        decoding="async"
        onerror="this.onerror=null;this.src='piscininha-desu.jpg'"
      >

      <div class="product-info">
        <div>
          <span class="product-category">${names[product.cat]}</span>
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
        </div>

        <div class="product-bottom">
          <strong class="product-price">${money(product.price)}</strong>

          <button
            class="add-button"
            type="button"
            onclick="addToCart('${product.id}')"
            aria-label="Adicionar ${product.name} pelo preço normal"
          >＋</button>
        </div>

        ${
          product.cat === "hamburgueres" ? `
            <button
              class="mais-combo-button"
              type="button"
              onclick="addMaisCombo('${product.id}')"
            >Mais Combo — R$ 13,00</button>
          ` : ""
        }
      </div>
    </article>
  `).join("");
}

function setCategory(category, button) {
  activeCategory = category;

  document.querySelectorAll(".category").forEach(item => {
    item.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  renderProducts(category);
}

// ==========================================
// CARRINHO
// ==========================================

function addToCart(productId) {
  const product = products.find(item => item.id === productId);

  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCart();
}

// ==========================================
// MAIS COMBO
// ==========================================

function addMaisCombo(productId) {
  const comboBurgers = {
    "combo-simples": {
      burgerId: "simples",
      displayName: "Hambúrguer do Combo Simples"
    },
    "combo-duplo": {
      burgerId: "duplo",
      displayName: "Hambúrguer do Combo Duplo"
    },
    "combo-desu": {
      burgerId: "x-desu",
      displayName: "Hambúrguer do Combo Desu"
    }
  };

  const comboChoice = comboBurgers[productId];
  const burgerId = comboChoice ? comboChoice.burgerId : productId;

  const burger = products.find(
    item => item.id === burgerId && item.cat === "hamburgueres"
  );

  if (!burger) return;

  // Mantém separadas as opções vindas dos combos e os hambúrgueres individuais.
  const displayName = comboChoice ? comboChoice.displayName : burger.name;
  const comboId = `mais-combo-${productId}`;
  const existing = cart.find(item => item.id === comboId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: comboId,
      name: `Mais Combo — ${displayName}`,
      price: 13,
      quantity: 1,
      desc: `${displayName} + batata frita 200g + refrigerante em lata`,
      isMaisCombo: true,
      burgerName: displayName
    });
  }

  updateCart();
}

function changeQuantity(productId, amount) {
  const item = cart.find(product => product.id === productId);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== productId);
  }

  updateCart();
}

function cartTotal() {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function updateCart() {
  const countElement = document.getElementById("count");
  const totalElement = document.getElementById("total");

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (countElement) {
    countElement.textContent = count;
  }

  if (totalElement) {
    totalElement.textContent = money(cartTotal());
  }

  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById("cartItems");
  const empty = document.getElementById("empty");
  const checkoutTotal = document.getElementById("checkoutTotal");

  if (!container) return;

  if (empty) {
    empty.classList.toggle("hidden", cart.length > 0);
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <strong>${item.name}</strong>

        <small>
          ${money(item.price)} cada —
          Subtotal: ${money(item.price * item.quantity)}
          ${item.isMaisCombo ? "<br>Inclui refrigerante em lata e batata frita de 200g." : ""}
        </small>
      </div>

      <div class="quantity-controls">
        <button
          type="button"
          onclick="changeQuantity('${item.id}', -1)"
        >−</button>

        <strong>${item.quantity}</strong>

        <button
          type="button"
          onclick="changeQuantity('${item.id}', 1)"
        >＋</button>
      </div>
    </div>
  `).join("");

  if (checkoutTotal) {
    checkoutTotal.textContent = money(cartTotal());
  }
}

// ==========================================
// ETAPAS DO PEDIDO
// ==========================================

function goToStep(step) {
  if (step === 2 && cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  if (step === 3) {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !phone) {
      alert("Por favor, preencha seu nome e telefone.");
      return;
    }

    if (orderType === "entrega" && !address) {
      alert("Por favor, informe o endereço de entrega ou use a localização.");
      return;
    }
  }

  currentStep = step;

  document.getElementById("stepCart").classList.add("hidden");
  document.getElementById("stepData").classList.add("hidden");
  document.getElementById("stepPay").classList.add("hidden");

  const modalTitle = document.getElementById("modalTitle");

  if (step === 1) {
    document.getElementById("stepCart").classList.remove("hidden");
    modalTitle.textContent = "1. Seu Carrinho";
  } else if (step === 2) {
    document.getElementById("stepData").classList.remove("hidden");
    modalTitle.textContent = "2. Dados e Entrega";
  } else if (step === 3) {
    document.getElementById("stepPay").classList.remove("hidden");
    modalTitle.textContent = "3. Pagamento";
  }
}

// ==========================================
// LOCALIZAÇÃO
// ==========================================

function getLocation() {
  if (!navigator.geolocation) {
    alert("Seu navegador não suporta geolocalização.");
    return;
  }

  const addressInput = document.getElementById("address");

  addressInput.value = "Obtendo localização GPS...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      addressInput.value =
        `Localização GPS: https://maps.google.com/?q=${lat},${lon}`;
    },
    () => {
      alert("Não foi possível obter sua localização. Verifique as permissões do GPS.");
      addressInput.value = "";
    }
  );
}

// ==========================================
// ABRIR E FECHAR CARRINHO
// ==========================================

function openCheckout() {
  const checkout = document.getElementById("checkout");

  if (!checkout) return;

  checkout.classList.remove("hidden");

  document.body.style.overflow = "hidden";

  goToStep(1);

  updateCart();
}

function closeCheckout() {
  const checkout = document.getElementById("checkout");

  if (!checkout) return;

  checkout.classList.add("hidden");

  document.body.style.overflow = "";
}

// ==========================================
// ENTREGA OU RETIRADA
// ==========================================

function setType(type) {
  orderType = type;

  document.getElementById("delivery")
    ?.classList.toggle("selected", type === "entrega");

  document.getElementById("pickup")
    ?.classList.toggle("selected", type === "retirada");

  document.getElementById("addressWrap")
    ?.classList.toggle("hidden", type !== "entrega");
}

// ==========================================
// PAGAMENTO
// ==========================================

function setPay(method, button) {
  paymentMethod = method;

  document.querySelectorAll(".pay").forEach(item => {
    item.classList.remove("selected");
  });

  if (button) {
    button.classList.add("selected");
  }

  const payInfo = document.getElementById("payInfo");
  const changeWrap = document.getElementById("changeWrap");

  const messages = {
    Pix: "Os dados do Pix serão enviados pela loja no WhatsApp.",
    Cartão: "Pagamento com cartão na entrega ou retirada.",
    Dinheiro: "Pagamento em dinheiro. Informe se precisa de troco."
  };

  if (payInfo) {
    payInfo.textContent = messages[method] || "";
  }

  if (changeWrap) {
    changeWrap.classList.toggle("hidden", method !== "Dinheiro");
  }
}

// ==========================================
// FINALIZAR PEDIDO NO WHATSAPP
// ==========================================

function finishOrder() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const change = document.getElementById("change").value.trim();

  const observations = document
    .getElementById("orderObservations")
    .value.trim();

  let message = "🍔 *PEDIDO — DESU BURGUER*\n\n";

  message += `*Nome:* ${name}\n`;
  message += `*Telefone:* ${phone}\n`;

  message += `*Tipo:* ${
    orderType === "entrega" ? "Entrega" : "Retirada"
  }\n`;

  if (orderType === "entrega") {
    message += `*Endereço:* ${address}\n`;
  }

  message += `*Pagamento:* ${paymentMethod}\n`;

  if (paymentMethod === "Dinheiro" && change) {
    message += `*Troco para:* ${change}\n`;
  }

  message += "\n*ITENS DO PEDIDO*\n";

  cart.forEach(item => {
    message += `${item.quantity}x ${item.name} — ${money(item.price * item.quantity)}\n`;

    if (item.isMaisCombo) {
      message += `   Inclui: ${item.burgerName}, 1 refrigerante em lata e batata frita de 200g.\n`;
    }
  });

  if (observations) {
    message += `\n*OBSERVAÇÕES DO PEDIDO:*\n${observations}\n`;
  }

  message += `\n*TOTAL: ${money(cartTotal())}*`;

  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  const url =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
      setCategory(button.dataset.cat, button);
    });
  });

  renderProducts("todos");

  updateCart();

  setType("entrega");

  setPay("Pix", document.querySelector(".pay"));
});
