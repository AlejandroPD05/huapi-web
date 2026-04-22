const productos = [
    // PROMOCIONES
    { nombre: "Pack 6 Empanadas", precio: "Promo", categoria: "promos", desc: "Tus 6 sabores favoritos en caja especial.", destacado: true, foto: "img/promo-6empanadas.jpg" },
    { nombre: "Pack 12 Empanadas", precio: "Promo", categoria: "promos", desc: "Ideal para compartir y ahorrar.", destacado: true, foto: "img/promo-12empanadas.jpg" },
    { nombre: "Pack 6 Cookies", precio: "Promo", categoria: "promos", desc: "Media docena de pura felicidad.", destacado: true, foto: "img/promo-6cookies.jpg" },
    { nombre: "Pack 12 Cookies", precio: "Promo", categoria: "promos", desc: "La caja definitiva de Crumble Cookies.", destacado: true, foto: "img/promo-12cookies.jpg" },

    // CRUMBLE COOKIES (Categoría Dulce)
    { nombre: "Cookie Pistacho", precio: "4.50€", categoria: "cookies", desc: "Nuestra estrella con pistacho real.", foto: "img/cookie-pistacho.jpg" },
    { nombre: "Cookie Oreo", precio: "4.20€", categoria: "cookies", desc: "Chocolate y trozos de Oreo.", foto: "img/cookie-oreo.jpg" },
    { nombre: "Cookie Red Velvet", precio: "4.20€", categoria: "cookies", desc: "Color vibrante y corazón de crema.", foto: "img/cookie-red-velvet.jpg" },
    { nombre: "Cookie Nutella", precio: "4.20€", categoria: "cookies", desc: "Relleno fluido de Nutella.", foto: "img/cookie-nutella.jpg" },
    { nombre: "Cookie Lotus", precio: "4.20€", categoria: "cookies", desc: "Sabor a galleta caramelizada belga.", foto: "img/cookie-lotus.jpg" },
    { nombre: "Cookie Kinder Bueno", precio: "4.50€", categoria: "cookies", desc: "Cremoso de avellana crujiente.", foto: "img/cookie-kinder-bueno.jpg" },
    { nombre: "Cookie Lemon Berry", precio: "4.20€", categoria: "cookies", desc: "Toque cítrico y frutos rojos.", foto: "img/cookie-lemon-berry.jpg" },
    { nombre: "Cookie Dulce de Leche", precio: "4.20€", categoria: "cookies", desc: "El clásico más dulce.", foto: "img/cookie-dulce-leche.jpg" },
    { nombre: "Cookie Clásica", precio: "3.90€", categoria: "cookies", desc: "Chips de chocolate y masa artesana.", foto: "img/cookie-clasica.jpg" },
    { nombre: "Cookie Carrot Cake", precio: "4.20€", categoria: "cookies", desc: "Especias, zanahoria y frosting.", foto: "img/cookie-carrot-cake.jpg" },

    // EMPANADAS (Categoría Salado)
    { nombre: "Empanada Messi", precio: "3.50€", categoria: "empanadas", desc: "Carne suave, la favorita de todos.", foto: "img/empanada-messi.jpg" },
    { nombre: "Empanada Gringa", precio: "3.50€", categoria: "empanadas", desc: "Sabor intenso y especiado.", foto: "img/empanada-gringa.jpg" },
    { nombre: "Empanada Turia", precio: "3.50€", categoria: "empanadas", desc: "Nuestra receta con alma local.", foto: "img/empanada-turia.jpg" },
    { nombre: "Empanada Power Vegan", precio: "3.50€", categoria: "empanadas", desc: "100% vegetal, máximo sabor.", foto: "img/empanada-vegan.jpg" },
    { nombre: "Empanada Cheeseburger", precio: "3.50€", categoria: "empanadas", desc: "Sabor a burger en masa artesana.", foto: "img/empanada-burger.jpg" },

    // BOCAPIZZAS (Categoría Salado)
    { nombre: "Bocapizza York & Mozzarella", precio: "5.50€", categoria: "bocapizza", desc: "Jamón york y mucho queso fundido.", foto: "img/bocapizza-york.jpg" },
    { nombre: "Bocapizza Cheddar & Bacon", precio: "5.90€", categoria: "bocapizza", desc: "Intenso, crujiente y delicioso.", foto: "img/bocapizza-bacon.jpg" },

    // TARTAS DE QUESO (Categoría Dulce)
    { nombre: "Tarta Frutos Rojos", precio: "6.50€", categoria: "tartas", desc: "Individual y cremosa.", foto: "img/tarta-rojos.jpg" },
    { nombre: "Tarta de Pistacho", precio: "7.50€", categoria: "tartas", desc: "Receta fluida premium.", foto: "img/tarta-pistacho.jpg" },
    { nombre: "Tarta de Nutella", precio: "7.00€", categoria: "tartas", desc: "Para los amantes del chocolate.", foto: "img/tarta-nutella.jpg" },

    // OTROS (Dulces y Bebidas)
    { nombre: "Brownie Nutella", precio: "4.00€", categoria: "otros", desc: "Chocolate intenso y meloso.", foto: "img/brownie-nutella.jpg" },
    { nombre: "Brownie Pistacho", precio: "4.50€", categoria: "otros", desc: "El toque dulce perfecto.", foto: "img/brownie-pistacho.jpg" },
    { nombre: "Refrescos", precio: "2.50€", categoria: "otros", desc: "Coca-Cola, Fanta, Nestea, Agua.", foto: "img/refrescos.jpg" },
    { nombre: "Cerveza Amstel", precio: "3.00€", categoria: "otros", desc: "Tercio 33cl.", foto: "img/cerveza.jpg" }
];

const grid = document.getElementById('menu-grid');
const botones = document.querySelectorAll('.filter-btn');

function mostrarProductos(catFiltro) {
    grid.innerHTML = "";
    
    const filtrados = productos.filter(p => {
        if (catFiltro === "todos") return true;
        if (catFiltro === "promos") return p.categoria === "promos";
        if (catFiltro === "dulce") return ["cookies", "tartas"].includes(p.categoria) || (p.categoria === "otros" && !p.nombre.includes("Cerveza") && !p.nombre.includes("Refrescos"));
        if (catFiltro === "salado") return ["empanadas", "bocapizza"].includes(p.categoria);
        if (catFiltro === "bebidas") return p.nombre.includes("Cerveza") || p.nombre.includes("Refrescos") || p.nombre.includes("Agua");
        return false;
    });

    filtrados.forEach(p => {
        const div = document.createElement('div');
        div.className = p.destacado ? 'menu-item promo-card' : 'menu-item';
        // CORRECCIÓN AQUÍ: Usamos p.foto directamente porque ya incluye "img/"
        div.innerHTML = `
            <img src="${p.foto}" alt="${p.nombre}" class="item-img" onerror="this.src='img/placeholder.jpg'">
            <div class="item-info">
                <div>
                    <h3>${p.nombre}</h3>
                    <p>${p.desc}</p>
                </div>
                <span class="price-tag">${p.precio}</span>
            </div>
        `;
        grid.appendChild(div);
    });
}

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.filter-btn.active');
        if (activeBtn) activeBtn.classList.remove('active');
        btn.classList.add('active');
        mostrarProductos(btn.dataset.cat);
    });
});

mostrarProductos('todos');