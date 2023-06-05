document.getElementById('tip-button-choose').addEventListener('click', function() {
  showTipForm();
});

document.getElementById('tip-button-confirm').addEventListener('click', function() {
  var tipAmount = parseFloat(document.getElementById('tip-amount').value);
  if (!isNaN(tipAmount)) {
    alert('Obrigado pela gorjeta de R$ ' + tipAmount.toFixed(2) + '!');
  } else {
    alert('Por favor, insira um valor válido para a gorjeta.');
  }
});

document.getElementById('tip-button-no').addEventListener('click', function() {
  alert('Agradecemos sua visita!');
});

function showTipForm() {
  document.getElementById('tip-form').classList.remove('hidden');
}
