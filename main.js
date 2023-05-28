window.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('add-product');
  var sellingPriceInput = document.getElementById('s-price');
  var productNameInput = document.getElementById('p-name');
  var productsContainer = document.getElementById('product-list');
  var totalValueElement = document.getElementById('total-value');
  var totalValue = 0;

  addButton.addEventListener('click', function() {
    var sellingPrice = parseFloat(sellingPriceInput.value);
    var productName = productNameInput.value;

    var productInfo = document.createElement('p');
    productInfo.textContent = "Selling Price: " + sellingPrice + ", Product Name: " + productName;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() {
      totalValue -= sellingPrice;
      productInfo.remove();
      updateTotalValue();
    });

    productInfo.appendChild(deleteButton);
    productsContainer.appendChild(productInfo);

    totalValue += sellingPrice;
    updateTotalValue();
  });

  function updateTotalValue() {
    totalValueElement.textContent = "Total value of worth of product is: " + totalValue;
  }
});
