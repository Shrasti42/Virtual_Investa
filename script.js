let initialFunds = 100000;
let remainingFunds = initialFunds;
document.getElementById('transactions-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const stock = document.getElementById('stock').value;
    const quantity = document.getElementById('quantity').value;
    const action = document.getElementById('action').value;

    if (stock && quantity && action) {
        const portfolioItems = document.getElementById('portfolio-items');
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="stock-details">${stock}</div>
            <div class="stock-quantity">${quantity}</div>
        `;
        portfolioItems.appendChild(li);

        updatePortfolioProfit();
    }

    document.getElementById('transactions-form').reset();
});

function updatePortfolioProfit() {
    const portfolioItems = document.getElementById('portfolio-items');
    const items = portfolioItems.getElementsByTagName('li');
    let totalProfit = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemText = item.getElementsByClassName('stock-details')[0].textContent;
        const quantity = parseInt(item.getElementsByClassName('stock-quantity')[0].textContent);
        const stockValue = 10; // Replace with actual stock value

        totalProfit += quantity * stockValue;
    }
    remainingFunds = initialFunds - totalProfit; // Calculate the remaining funds
    

    document.getElementById('portfolio-profit').textContent = 'Profit: $' + totalProfit;
    document.getElementById('virtual-funds').textContent = 'Remaining Funds: Rs. ' + remainingFunds;

}
