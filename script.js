async function fetchCardBalance(cardNumber) {
  try {
    // Envía la solicitud al backend
    const response = await fetch(`/api/check-balance?cardNumber=${cardNumber}`);
    const data = await response.json();
    
    // Muestra el saldo en el frontend
    document.getElementById('balance').innerText = `Saldo: $${data.balance}`;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Maneja el evento para verificar el saldo
document.getElementById('check-button').addEventListener('click', () => {
  const cardNumber = document.getElementById('card-number').value;
  fetchCardBalance(cardNumber);
});
