let DATA = [];

async function loadData() {
    try {
        const response = await fetch('/data/products.json');
        DATA = await response.json();
        populate();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function populate() {
    const container = document.getElementById('product-list');
    if (!container) return;
    
    container.innerHTML = DATA.map(item => `
        <div class="product-card">
            <h3>${item.brand} - ${item.series}</h3>
            <p>Poles: ${item.poles} | Current: ${item.currentRating}</p>
            <p>Order Code: ${item.orderCode}</p>
            <p>Price: ${item.unitPrice} THB</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadData);
