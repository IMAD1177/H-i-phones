// Chargement des produits
document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
        .then(response => response.json())
        .then(products => displayProducts(products));
});

function displayProducts(products) {
    const container = document.querySelector('.products-container');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>💰 Prix : ${product.price}€</p>
        `;
        container.appendChild(card);
    });
}

// Gestion des comptes
let clients = JSON.parse(localStorage.getItem('clients')) || [];

function createAccount() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Veuillez remplir tous les champs !');
        return;
    }

    if (clients.some(client => client.email === email)) {
        alert('Ce compte existe déjà !');
        return;
    }

    clients.push({ email, password });
    localStorage.setItem('clients', JSON.stringify(clients));
    alert('Compte créé avec succès !');
}
