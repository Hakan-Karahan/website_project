const products = [
    {
      name: "Modern Koltuk",
      price: 12499,
      image: "https://via.placeholder.com/400x300",
      description: "Rahat ve şık koltuk takımı.",
      stars: 5,
      category: "koltuk"
    },
    {
      name: "Ahşap Masa",
      price: 7499,
      image: "https://via.placeholder.com/400x300",
      description: "Doğal ahşap masa, yemek odaları için ideal.",
      stars: 4,
      category: "masa"
    },
    {
      name: "Ortopedik Yatak",
      price: 8999,
      image: "https://via.placeholder.com/400x300",
      description: "Konforlu uyku için ortopedik yatak.",
      stars: 4,
      category: "yatak"
    }
  ];
  
  function renderProducts(productList) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";
  
    productList.forEach(product => {
      const stars = "★".repeat(product.stars) + "☆".repeat(5 - product.stars);
      grid.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <div class="stars">${stars}</div>
          <p class="description">${product.description}</p>
          <p>₺${product.price.toLocaleString()}</p>
          <button>Sepete Ekle</button>
        </div>
      `;
    });
  }
  
  function filterProducts() {
    const category = document.getElementById("categoryFilter").value;
    const filtered = category ? products.filter(p => p.category === category) : products;
    renderProducts(filtered);
  }
  
  // Sayfa yüklendiğinde tüm ürünleri göster
  window.onload = () => renderProducts(products);
  