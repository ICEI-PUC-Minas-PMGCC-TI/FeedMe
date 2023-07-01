window.onload = function () {
    var dishList = document.getElementById('dish-list');
    var dishes = [
        { name: 'Batata Frita', description: 'Batata frita grande', restaurant: 'McDonalds', rating: 4, image: 'imagens/batata frita mc.jpg', restaurantImage: 'imagens/marca-mcdonalds-logo-1200x670.png', restaurantUrl: 'link_para_o_mcdonalds', price: 'R$ 11,00' },
        { name: 'Pizza gigante de Calabresa', description: 'Pizza de calabresa como só o Pizza Hut sabe fazer', restaurant: 'Pizza Hut', rating: 5, image: 'imagens/pizza calabresa hut.jpg', restaurantImage: 'imagens/pizza hut.png', restaurantUrl: 'link_para_o_pizza_hut', price: 'R$ 80,00' },
        { name: 'Combo Big Mac', description: '2 hambúrgueres, alface, queijo e molho especial', restaurant: 'McDonalds', rating: 4, image: 'imagens/big mac combo.jpg', restaurantImage: 'imagens/marca-mcdonalds-logo-1200x670.png', restaurantUrl: 'link_para_o_mcdonalds', price: 'R$ 32,00' },
        { name: 'Suco de laranja', description: 'Delicioso suco de laranja com açucar', restaurant: 'Restaurante Tira-Dentes', rating: 4, image: 'imagens/suco de laranja.jpg', restaurantImage: 'imagens/uma-sala-de-restaurante-com-paredes-de-tijolo-vermelho-mesas-de-madeira-e-canos-no-teto_140725-8504.png', restaurantUrl: 'link_para_o_restaurante_tira-dentes', price: 'R$ 8,00' },
        { name: 'Macarrão à bolonhesa', description: 'Macarrão à bolonhesa, moda italiana', restaurant: 'Restaurante Kinto do Ouro', rating: 4.5, image: 'imagens/macarrão a bolonhesa italia.jpg', restaurantImage: 'imagens/foto kinto.jpg', restaurantUrl: 'link_para_o_restaurante_Kinto_do_Ouro', price: 'R$ 27,00' },

    ];

    for (var i = 0; i < dishes.length; i++) {
        var dishItem = document.createElement('div');
        dishItem.classList.add('dish-item', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

        var dishDetails = document.createElement('div');
        dishDetails.classList.add('dish-details', 'w-100', 'p-3');

        var restaurantImage = document.createElement('img');
        restaurantImage.src = dishes[i].restaurantImage;
        restaurantImage.classList.add('img-fluid', 'mb-2');
        dishDetails.appendChild(restaurantImage);

        var dishName = document.createElement('h2');
        dishName.textContent = dishes[i].name;
        dishName.classList.add('dish-name', 'mb-2');
        dishDetails.appendChild(dishName);

        var restaurantName = document.createElement('p');
        restaurantName.textContent = "Restaurante: " + dishes[i].restaurant;
        restaurantName.classList.add('restaurant-name', 'mb-2');
        dishDetails.appendChild(restaurantName);

        var dishRating = document.createElement('p');
        dishRating.textContent = "Avaliação: " + dishes[i].rating;
        dishRating.classList.add('dish-rating', 'mb-2');
        dishDetails.appendChild(dishRating);

        dishItem.appendChild(dishDetails);

        var dishImage = document.createElement('img');
        dishImage.src = dishes[i].image;
        dishImage.classList.add('dish-image', 'img-fluid', 'w-100');
        dishItem.appendChild(dishImage);

        dishItem.onclick = (function () {
            var currentI = i;
            return function () {
                localStorage.setItem('selectedDish', JSON.stringify(dishes[currentI]));
                window.location.href = 'inter.html';
            }
        })();

        dishList.appendChild(dishItem);
    }
};