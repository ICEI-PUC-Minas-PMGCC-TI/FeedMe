let cart = [];
let modalQt = 1;
let modalKey = 0;

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// Listagem dos produtos
produtoJson.forEach((item, index) => {
  let produtoItem = c('.models .produto-item').cloneNode(true);

  produtoItem.setAttribute('data-key', index);
  produtoItem.querySelector('.produto-item--img img').src = item.img;
  produtoItem.querySelector('.produto-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  produtoItem.querySelector('.produto-item--name').innerHTML = item.name;
  produtoItem.querySelector('.produto-item--desc').innerHTML = item.description;

  produtoItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    let key = e.target.closest('.produto-item').getAttribute('data-key');
    modalQt = 1;
    modalKey = key;

    c('.produtoBig img').src = produtoJson[key].img;
    c('.produtoInfo h1').innerHTML = produtoJson[key].name;
    c('.produtoInfo--desc').innerHTML = produtoJson[key].description;
    c('.produtoInfo--actualPrice').innerHTML = `R$ ${produtoJson[key].price.toFixed(2)}`;

    c('.produtoInfo--qt').innerHTML = modalQt;

    c('.produtoWindowArea').style.opacity = 0;
    c('.produtoWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.produtoWindowArea').style.opacity = 1;
    }, 200);
  });

  c('.produto-area').appendChild(produtoItem);
});

// Eventos do MODAL
function closeModal() {
  c('.produtoWindowArea').style.opacity = 0;
  setTimeout(() => {
    c('.produtoWindowArea').style.display = 'none';
  }, 500);
}
cs('.produtoInfo--cancelButton, .produtoInfo--cancelMobileButton').forEach((item) => {
  item.addEventListener('click', closeModal);
});
c('.produtoInfo--qtmenos').addEventListener('click', () => {
  if (modalQt > 1) {
    modalQt--;
    c('.produtoInfo--qt').innerHTML = modalQt;
  }
});
c('.produtoInfo--qtmais').addEventListener('click', () => {
  modalQt++;
  c('.produtoInfo--qt').innerHTML = modalQt;
});

c('.produtoInfo--addButton').addEventListener('click', () => {
  let identifier = produtoJson[modalKey].id;
  let key = cart.findIndex((item) => item.identifier == identifier);
  if (key > -1) {
    cart[key].qt += modalQt;
  } else {
    cart.push({
      identifier,
      id: produtoJson[modalKey].id,
      qt: modalQt
    }); window.localStorage.setItem('cart', JSON.stringify(cart))
  }
  updateCart();
  closeModal();
});

c('.menu-openner').addEventListener('click', () => {
  if (cart.length > 0) {
    c('aside').style.left = '0';
  }
});
c('.menu-closer').addEventListener('click', () => {
  c('aside').style.left = '100vw';
});

function updateCart() {
  c('.menu-openner span').innerHTML = cart.length;

  if (cart.length > 0) {
    c('aside').classList.add('show');
    c('.cart').innerHTML = '';

    let subtotal = 0;
    let desconto = 0;
    let total = 0;

    for (let i in cart) {
      let produtoItem = produtoJson.find((item) => item.id == cart[i].id);
      subtotal += produtoItem.price * cart[i].qt;

      let cartItem = c('.models .cart--item').cloneNode(true);

      cartItem.querySelector('img').src = produtoItem.img;
      cartItem.querySelector('.cart--item-nome').innerHTML = produtoItem.name;
      cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
      cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
        if (cart[i].qt > 1) {
          cart[i].qt--;
        } else {
          cart.splice(i, 1);
        }
        updateCart();
      });
      cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
        cart[i].qt++;
        updateCart();
      });

      c('.cart').appendChild(cartItem);
    }

    desconto = subtotal * 0.1;
    total = subtotal - desconto;

    c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
    c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
    c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

  } else {
    c('aside').classList.remove('show');
    c('aside').style.left = '100vw';
  }
}
