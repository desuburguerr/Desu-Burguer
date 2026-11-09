// ======================================
// CONFIGURAÇÕES DA DESU BURGUER
// ======================================

const CONFIG = {
  whatsapp: "5589981501360",
  pixKey: "+5589981501360",
  pixName: "ANDERSON HENRIQUE BATISTA",
  pixCity: "CRISTINO CASTRO",
  mapLink: "https://maps.app.goo.gl/nPViaJ3Nayq3momMA?g_st=ac"
};

// ======================================
// CONTROLE DE HORÁRIO COMPLETO
// ======================================
function obterStatusLoja() {
  const agora = new Date();
  const diaSemana = agora.getDay(); // 0 = Dom, 1 = Seg, 2 = Ter, 3 = Qua, 4 = Qui, 5 = Sex, 6 = Sáb
  const horaAtual = agora.getHours() + agora.getMinutes() / 60;

  const nomesDias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  // Quarta-feira (dia 3): Fechado o dia todo -> Abre na Quinta-feira
  if (diaSemana === 3) {
    return { aberta: false, mensagem: "A Desu Burguer está fechada hoje (Quarta-feira). Abrimos amanhã (Quinta-feira) às 18:30! 🏴‍☠️" };
  }

  // Terça-feira (dia 2): Abre às 18:00 e fecha às 23:30
  if (diaSemana === 2) {
    if (horaAtual < 18.0) {
      return { aberta: false, mensagem: "A Desu Burguer abre hoje (Terça-feira) às 18:00! 🏴‍☠️" };
    }
    if (horaAtual >= 23.5) {
      return { aberta: false, mensagem: "A Desu Burguer fechou por hoje. Abrimos amanhã às 18:30! 🏴‍☠️" };
    }
    return { aberta: true };
  }

  // Demais dias (Dom, Seg, Qui, Sex, Sáb): Abre às 18:30 e fecha às 23:30
  if (horaAtual < 18.5) {
    return { aberta: false, mensagem: `A Desu Burguer abre hoje (${nomesDias[diaSemana]}) às 18:30! 🏴‍☠️` };
  }
  if (horaAtual >= 23.5) {
    let proximoDia = (diaSemana + 1) % 7;
    if (proximoDia === 3) proximoDia = 4; // Se amanhã for quarta, pula para quinta
    return { aberta: false, mensagem: `A Desu Burguer fechou por hoje. Abrimos novamente ${proximoDia === 4 ? "na" : "no"} ${nomesDias[proximoDia]} às 18:30! 🏴‍☠️` };
  }

  return { aberta: true };
}

function verificarLojaAberta() {
  return obterStatusLoja().aberta;
}

// ======================================
// CARDÁPIO COMPLETO COM IMAGENS (.jpg)
// ======================================

const products = [
  // COMBOS
  { id: 1, name: "Piscininha Desu", category: "Combos", price: 32, desc: "Piscina de cheddar com bacon e simples.", image: "piscininha-desu.jpg" },
  { id: 2, name: "Combo Simples", category: "Combos", price: 34, desc: "1 Simples, 1 batata 200g, refri lata.", image: "combo-simples.jpg" },
  { id: 3, name: "Combo Duplo", category: "Combos", price: 80, desc: "2 Duplo, 2 porção batatas, refri 1 litro.", image: "combo-duplo.jpg" },
  { id: 4, name: "Combo Desu", category: "Combos", price: 100, desc: "3 X Desu, 3 batatas 200g, refri 1 litro.", image: "combo-desu.jpg" },

  // HAMBÚRGUERES
  { id: 5, name: "Burguer Kids", category: "Hambúrgueres", price: 18, desc: "Pão brioche, carne 140g, mussarela e molho da casa.", image: "burguer-kids.jpg" },
  { id: 6, name: "Filé de Frango", category: "Hambúrgueres", price: 21, desc: "Pão brioche, filé de frango 120g, mussarela, bacon, cebola e molho da casa.", image: "file-frango.jpg" },
  { id: 7, name: "Frango Duplo", category: "Hambúrgueres", price: 28, desc: "Pão brioche, 2 filés de frango 120g, mussarela, 2 bacon, cebola e molho da casa.", image: "frango-duplo.jpg" },
  { id: 8, name: "Simples", category: "Hambúrgueres", price: 23, desc: "Pão brioche, carne 140g, cheddar, bacon, cebola caramelizada e molho da casa.", image: "simples.jpg" },
  { id: 9, name: "Duplo", category: "Hambúrgueres", price: 34, desc: "Pão brioche, 2 carnes de 140g, cheddar, 2 bacon, cebola caramelizada e molho da casa.", image: "duplo.jpg" },
  { id: 10, name: "Giga", category: "Hambúrgueres", price: 46, desc: "Pão brioche, 3 carnes de 140g, 3 cheddar, 3 bacon, cebola caramelizada, picles e molho da casa.", image: "giga.jpg" },
  { id: 11, name: "X Desu", category: "Hambúrgueres", price: 26, desc: "Pão brioche, carne 140g, mussarela, bacon, alface e tomate e molho da casa.", image: "x-desu.jpg" },
  { id: 12, name: "X Desu Duplo", category: "Hambúrgueres", price: 36, desc: "Pão brioche, 2 carnes 140g, mussarela, 2 bacon, alface, tomate, cebola e molho da casa.", image: "x-desu-duplo.jpg" },
  { id: 13, name: "Tropical", category: "Hambúrgueres", price: 25, desc: "Pão brioche, blend 140g, cheddar, 1 bacon, abacaxi caramelizado molho da casa.", image: "tropical.jpg" },
  { id: 14, name: "Tropical Duplo", category: "Hambúrgueres", price: 35, desc: "Pão brioche, 2 carne 140g, cheddar, bacon, abacaxi caramelizado e molho da casa.", image: "tropical-duplo.jpg" },
  { id: 15, name: "Tropical Picante", category: "Hambúrgueres", price: 26, desc: "Pão brioche, 1 carne de 140g, cheddar, 2 bacon, geleia abacaxi picante molho da casa.", image: "tropical-picante.jpg" },

  // PORÇÕES
  { id: 16, name: "Coxinha 150g", category: "Porções", price: 10, desc: "Coxinha com queijo Catupiry.", image: "coxinha.jpg" },
  { id: 17, name: "Batata Simples 300g", category: "Porções", price: 18, desc: "Porção tradicional crocante.", image: "batata-simples.jpg" },
  { id: 18, name: "Batata Completa 300g", category: "Porções", price: 22, desc: "Acompanha cheddar e bacon especial.", image: "batata-completa-300.jpg" },
  { id: 19, name: "Batata Completa 400g", category: "Porções", price: 25, desc: "Porção família com cheddar e bacon.", image: "batata-completa-400.jpg" },

  // BEBIDAS
  { id: 20, name: "Água", category: "Bebidas", price: 5, desc: "Água mineral 500ml.", image: "agua.jpg" },
  { id: 21, name: "Água com gás", category: "Bebidas", price: 5, desc: "Água com gás 500ml.", image: "agua-gas.jpg" },
  { id: 22, name: "KS", category: "Bebidas", price: 4, desc: "Refrigerante garrafinha KS.", image: "ks.jpg" },
  { id: 23, name: "Skol Lata", category: "Bebidas", price: 4, desc: "Cerveja lata.", image: "skol-lata.jpg" },
  { id: 24, name: "Skol 600", category: "Bebidas", price: 10, desc: "Cerveja garrafa 600ml.", image: "skol-600.jpg" },
  { id: 25, name: "Brahma 600", category: "Bebidas", price: 10, desc: "Cerveja garrafa 600ml.", image: "brahma-600.jpg" },
  { id: 26, name: "Original", category: "Bebidas", price: 12, desc: "Cerveja Original 600ml.", image: "original.jpg" },
  { id: 27, name: "Heineken", category: "Bebidas", price: 15, desc: "Cerveja Heineken Long Neck.", image: "heineken.jpg" },

  // SUCOS
  { id: 28, name: "Suco Simples", category: "Sucos", price: 8, desc: "Sabor da fruta refrescante.", image: "suco-simples.jpg" },
  { id: 29, name: "Suco Cremoso", category: "Sucos", price: 10, desc: "Suco cremoso especial da casa.", image: "suco-cremoso.jpg" }
];

let cart = [];
let selectedCategory = "Todos";
let currentOrder = null;
let customerLocation = null;

// ======================================
// ELEMENTOS E INTERFACE
// ======================================

const categoriesElement = document.getElementById("categories");
const productsElement = document.getElementById("products");

const cartOverlay = document.getElementById("cartOverlay");
const checkoutOverlay = document.getElementById("checkoutOverlay");
const pixOverlay = document.getElementById("pixOverlay");
const orderOverlay = document.getElementById("orderOverlay");

const cartDrawer = document.getElementById("cartDrawer");
const checkoutDrawer = document.getElementById("checkoutDrawer");
const pixDrawer = document.getElementById("pixDrawer");
const orderDrawer = document.getElementById("orderDrawer");

const cartItemsElement = document.getElementById("cartItems");
const cartSubtotalElement = document.getElementById("cartSubtotal");
const cartBarTotalElement = document.getElementById("cartBarTotal");
const cartCountElement = document.getElementById("cartCount");

const checkoutTotalElement = document.getElementById("checkoutTotal");
const pixTotalElement = document.getElementById("pixTotal");

const deliveryFields = document.getElementById("deliveryFields");
const pickupFields = document.getElementById("pickupFields");
const changeFields = document.getElementById("changeFields");
const changeAmountField = document.getElementById("changeAmountField");

const toastElement = document.getElementById("toast");

function money(value) {
  return Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("show");
  setTimeout(() => { toastElement.classList.remove("show"); }, 2600);
}

function openDrawer(name) {
  closeAllDrawers();
  const elements = {
    cart: [cartDrawer, cartOverlay],
    checkout: [checkoutDrawer, checkoutOverlay],
    pix: [pixDrawer, pixOverlay],
    order: [orderDrawer, orderOverlay]
  };
  const selected = elements[name];
  if (selected) {
    selected[0].classList.add("open");
    selected[1].classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeAllDrawers() {
  [cartDrawer, checkoutDrawer, pixDrawer, orderDrawer].forEach(el => el.classList.remove("open"));
  [cartOverlay, checkoutOverlay, pixOverlay, orderOverlay].forEach(overlay => overlay.classList.remove("open"));
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", closeAllDrawers);
});

[cartOverlay, checkoutOverlay, pixOverlay, orderOverlay].forEach(overlay => {
  overlay.addEventListener("click", closeAllDrawers);
});

// ======================================
// LOCAL STORAGE
// ======================================
function saveCart() {
  localStorage.setItem("desuBurguerCart", JSON.stringify(cart));
}

function restoreCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("desuBurguerCart"));
    if (Array.isArray(saved)) {
      cart = saved.filter(item => products.some(p => p.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0);
    }
  } catch {
    cart = [];
  }
}

// ======================================
// RENDERIZAÇÃO
// ======================================
function renderCategories() {
  const categories = ["Todos", ...new Set(products.map(p => p.category))];
  categoriesElement.innerHTML = categories.map(category => `
    <button class="category-button ${selectedCategory === category ? "active" : ""}" data-category="${category}" type="button">
      ${category}
    </button>
  `).join("");

  categoriesElement.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const filtered = selectedCategory === "Todos" ? products : products.filter(p => p.category === selectedCategory);

  productsElement.innerHTML = filtered.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60'">
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button class="add-button" data-add="${product.id}" type="button">+ ADICIONAR</button>
        </div>
      </div>
    </article>
  `).join("");

  productsElement.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.add));
    });
  });
}

// ======================================
// CARRINHO E PEDIDOS
// ======================================
function addToCart(productId) {
  const status = obterStatusLoja();
  if (!status.aberta) {
    showToast(status.mensagem);
    return;
  }
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  updateCart();
  showToast("Adicionado ao baú!");
}

function changeQuantity(productId, amount) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  updateCart();
}

function getSubtotal() {
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + product.price * item.quantity;
  }, 0);
}

function getTotalItems() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCart() {
  saveCart();
  const subtotal = getSubtotal();
  const totalItems = getTotalItems();

  cartCountElement.textContent = `${totalItems} ${totalItems === 1 ? "item" : "itens"}`;
  cartBarTotalElement.textContent = money(subtotal);
  cartSubtotalElement.textContent = money(subtotal);
  checkoutTotalElement.textContent = money(subtotal);

  if (cart.length === 0) {
    cartItemsElement.innerHTML = `<div class="empty-cart">Seu baú está vazio.<br>Escolha um lanche lendário no cardápio!</div>`;
    return;
  }

  cartItemsElement.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    const itemTotal = product.price * item.quantity;
    return `
      <div class="cart-item">
        <div>
          <h4>${product.name}</h4>
          <small>${money(product.price)} cada · ${money(itemTotal)}</small>
        </div>
        <div class="quantity-controls">
          <button type="button" data-minus="${product.id}">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-plus="${product.id}">+</button>
        </div>
      </div>
    `;
  }).join("");

  cartItemsElement.querySelectorAll("[data-minus]").forEach(btn => {
    btn.addEventListener("click", () => changeQuantity(Number(btn.dataset.minus), -1));
  });
  cartItemsElement.querySelectorAll("[data-plus]").forEach(btn => {
    btn.addEventListener("click", () => changeQuantity(Number(btn.dataset.plus), 1));
  });
}

document.getElementById("cartBar").addEventListener("click", () => {
  openDrawer("cart");
});

document.getElementById("goCheckout").addEventListener("click", () => {
  const status = obterStatusLoja();
  if (!status.aberta) {
    showToast(status.mensagem);
    return;
  }
  if (cart.length === 0) {
    showToast("Adicione pelo menos um produto.");
    return;
  }
  openDrawer("checkout");
});

// ======================================
// STATUS VISUAL NA TELA
// ======================================
function inicializarStatusLojaVisual() {
  const aberta = verificarLojaAberta();
  const openLabel = document.querySelector(".open-label");
  if (openLabel) {
    if (aberta) {
      openLabel.innerHTML = `<i style="background: #42cf74;"></i> Desu Burguer Aberta`;
    } else {
      openLabel.innerHTML = `<i style="background: #ed3030;"></i> Desu Burguer Fechada`;
    }
  }
}

document.querySelectorAll('input[name="fulfillment"]').forEach(input => {
  input.addEventListener("change", () => {
    const isDelivery = input.value === "delivery";
    deliveryFields.classList.toggle("hidden", !isDelivery);
    pickupFields.classList.toggle("hidden", isDelivery);
    document.getElementById("customerAddress").required = isDelivery;
  });
});

document.querySelectorAll('input[name="payment"]').forEach(input => {
  input.addEventListener("change", () => {
    const isCash = input.value === "cash";
    changeFields.classList.toggle("hidden", !isCash);
  });
});

document.getElementById("needsChange")?.addEventListener("change", event => {
  changeAmountField.classList.toggle("hidden", !event.target.checked);
});

// GEOLOCALIZAÇÃO
document.getElementById("locationButton")?.addEventListener("click", () => {
  const status = document.getElementById("locationStatus");
  if (!navigator.geolocation) {
    status.textContent = "Seu navegador não suporta geolocalização.";
    return;
  }
  status.textContent = "Obtendo localização...";
  navigator.geolocation.getCurrentPosition(
    pos => {
      customerLocation = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
      status.textContent = "Localização obtida com sucesso!";
      showToast("Localização adicionada.");
    },
    () => {
      status.textContent = "Não foi possível obter. Informe manualmente.";
      customerLocation = null;
    }
  );
});

// PIX E WHATSAPP
function tlv(id, value) {
  const text = String(value);
  const byteLength = new TextEncoder().encode(text).length;
  return id + String(byteLength).padStart(2, "0") + text;
}
function crc16(payload) {
  let crc = 0xFFFF;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}
function generatePixPayload(amount) {
  const numericAmount = Number(amount);
  const merchantAccount = tlv("00", "br.gov.bcb.pix") + tlv("01", CONFIG.pixKey);
  const additionalData = tlv("05", "***");
  let payload = tlv("00", "01") + tlv("01", "11") + tlv("26", merchantAccount) + tlv("52", "0000") + tlv("53", "986") + tlv("54", numericAmount.toFixed(2)) + tlv("58", "BR") + tlv("59", CONFIG.pixName) + tlv("60", CONFIG.pixCity) + tlv("62", additionalData) + "6304";
  payload += crc16(payload);
  return payload;
}
function generateQRCode(payload) {
  const qrElement = document.getElementById("pixQrCode");
  qrElement.innerHTML = "";
  new QRCode(qrElement, { text: payload, width: 200, height: 200, correctLevel: QRCode.CorrectLevel.M });
}

document.getElementById("copyPix")?.addEventListener("click", async () => {
  const textarea = document.getElementById("pixCode");
  try {
    await navigator.clipboard.writeText(textarea.value);
    showToast("Código Pix copiado!");
  } catch {
    showToast("Erro ao copiar código.");
  }
});

document.getElementById("checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const fulfillment = document.querySelector('input[name="fulfillment"]:checked').value;
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const address = document.getElementById("customerAddress").value.trim();
  const reference = document.getElementById("addressReference").value.trim();
  const needsChange = document.getElementById("needsChange")?.checked || false;
  const changeAmount = document.getElementById("changeAmount")?.value || "";

  if (!name || !phone) { showToast("Preencha seu nome e telefone."); return; }
  if (fulfillment === "delivery" && !address) { showToast("Informe o endereço."); return; }

  const items = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return { id: item.id, name: product.name, quantity: item.quantity, price: product.price, total: product.price * item.quantity };
  });

  currentOrder = { name, phone, fulfillment, payment, address, reference, needsChange, changeAmount, location: customerLocation, items, total: getSubtotal() };

  if (payment === "pix") {
    try {
      const payload = generatePixPayload(currentOrder.total);
      document.getElementById("pixTotal").textContent = money(currentOrder.total);
      document.getElementById("pixCode").value = payload;
      generateQRCode(payload);
      openDrawer("pix");
    } catch (e) {
      showToast("Erro ao gerar Pix.");
    }
  } else {
    showOrderReady(currentOrder);
  }
});

function showOrderReady(order) {
  const title = document.getElementById("orderReadyTitle");
  const description = document.getElementById("orderReadyText");
  const summary = document.getElementById("orderPaymentSummary");

  if (order.payment === "card") {
    title.textContent = "Pagamento no cartão";
    description.textContent = "Seu pedido está pronto. Envie pelo WhatsApp e pague pessoalmente.";
    summary.innerHTML = `<strong>Forma:</strong> Cartão<br><strong>Total:</strong> ${money(order.total)}`;
  } else if (order.payment === "cash") {
    title.textContent = "Pagamento em dinheiro";
    description.textContent = "Seu pedido está pronto. Envie pelo WhatsApp e pague pessoalmente.";
    let changeText = order.needsChange ? `Troco para ${money(Number(order.changeAmount))}` : "Não precisa de troco.";
    summary.innerHTML = `<strong>Forma:</strong> Dinheiro<br><strong>Troco:</strong> ${changeText}<br><strong>Total:</strong> ${money(order.total)}`;
  }
  openDrawer("order");
}

document.getElementById("pixPaidButton")?.addEventListener("click", () => sendWhatsAppMessage());
document.getElementById("sendOrderButton")?.addEventListener("click", () => sendWhatsAppMessage());


// ======================================
// MENSAGEM DO WHATSAPP - DESU BURGUER
// ======================================
function sendWhatsAppMessage() {
  if (!currentOrder) return;

  const lines = [];

  lines.push("🏴‍☠️ *NOVO PEDIDO | DESU BURGUER* 🍔");
  lines.push("");
  lines.push("🛒 *ITENS DO PEDIDO*");
  lines.push("");

  currentOrder.items.forEach(i => {
    const product = products.find(p => p.id === i.id);

    lines.push(`*${i.quantity}x ${product.name}*`);
    lines.push(`Valor unitário: ${money(i.price)}`);
    lines.push(`Subtotal: ${money(i.total)}`);
    lines.push(`_${product.desc}_`);
    lines.push("");
  });

  lines.push("💰 *RESUMO DO PEDIDO*");
  lines.push(`*Total dos produtos: ${money(currentOrder.total)}*`);
  lines.push("🛵 Taxa de entrega: A confirmar pela loja");
  lines.push("");

  lines.push("👤 *DADOS DO CLIENTE*");
  lines.push(`*Nome:* ${currentOrder.name}`);
  lines.push(`*Telefone:* ${currentOrder.phone}`);
  lines.push("");

  if (currentOrder.fulfillment === "delivery") {
    lines.push("📍 *DADOS DA ENTREGA*");
    lines.push(`*Endereço:* ${currentOrder.address}`);

    if (currentOrder.reference) {
      lines.push(`*Referência:* ${currentOrder.reference}`);
    }

    if (currentOrder.location) {
      lines.push(
        `*Localização:* https://www.google.com/maps?q=${currentOrder.location.latitude},${currentOrder.location.longitude}`
      );
    }
  } else {
    lines.push("🏪 *RETIRADA NA LOJA*");
  }

  lines.push("");
  lines.push("💳 *FORMA DE PAGAMENTO*");

  let formaPagamento = currentOrder.payment.toUpperCase();

  if (currentOrder.payment === "cash") formaPagamento = "DINHEIRO";
  if (currentOrder.payment === "pix") formaPagamento = "PIX";
  if (currentOrder.payment === "card") formaPagamento = "CARTÃO";

  lines.push(formaPagamento);

  if (currentOrder.payment === "cash" && currentOrder.needsChange) {
    lines.push(`💵 *Troco para:* ${money(Number(currentOrder.changeAmount))}`);
  }

  lines.push("");
  lines.push("🏴‍☠️ *Obrigado por escolher a DESU BURGUER!* 🍔");
  lines.push("🌊 Seu pedido está navegando até nossa cozinha!");

  const text = encodeURIComponent(lines.join("\n"));

  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${text}`, "_blank");
}

// INICIALIZAÇÃO
restoreCart();
renderCategories();
renderProducts();
updateCart();
inicializarStatusLojaVisual();
