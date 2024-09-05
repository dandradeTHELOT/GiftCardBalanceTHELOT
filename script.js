async function fetchCardBalance(cardNumber) {
  try {
    // Envía la solicitud al backend
    const response = await fetch(`/api/check-balance?cardNumber=${cardNumber}`);
    const data = await response.json();
    
    // Muestra el saldo en el frontend
    document.getElementById('balance').innerText = `Balance: $${data.balance}`;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('balance').innerText = 'Error al obtener el saldo.';
  }
}

// Maneja el evento para verificar el saldo
document.getElementById('balanceForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario
  const cardNumber = document.getElementById('cardNumber').value;
  fetchCardBalance(c
