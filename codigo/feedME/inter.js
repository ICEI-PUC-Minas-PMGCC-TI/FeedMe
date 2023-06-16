window.onload = function() {
    var selectedDish = JSON.parse(localStorage.getItem('selectedDish'));
    if (!selectedDish) {
        alert('Nenhum prato foi selecionado.');
        return;
    }

    document.getElementById('dish-name').textContent = selectedDish.name;
    document.getElementById('dish-description').textContent = selectedDish.description;
    document.getElementById('dish-image').src = selectedDish.image;
    document.getElementById('dish-price').textContent = '' + selectedDish.price;

    var quantityElement = document.getElementById('quantity');
    document.querySelector('.quantity button:first-child').onclick = function() {
        var quantity = parseInt(quantityElement.value);
        if (quantity > 1) {
            quantityElement.value = quantity - 1;
        }
    };
    document.querySelector('.quantity button:last-child').onclick = function() {
        var quantity = parseInt(quantityElement.value);
        quantityElement.value = quantity + 1;
    };
    document.getElementById('add-to-cart').onclick = function() {
        alert('Adicionado ao carrinho:\n\nPrato: ' + selectedDish.name + '\nQuantidade: ' + quantityElement.value);
    };
};
