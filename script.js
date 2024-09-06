const API_TOKEN = 'afXsnPjblxcDc7G0obT3ifmIxLljtaJ4x4DzleUc00zuQNQj6Y1Iyosque1PHSYPEI36Jf6yLNbyx6fe2JiH3ZsGwUHMG4OpWXUfehFzuXIQ3OuIpnaDg4s6g2ep4D1AZ54j9Pb2ZePVaFc4Q7cGvixV6sre3RgDJThSFxlP6Zmw2uOPHA9ym0n0xiiEx4sNeAMnybhQXD1XPpqpN4YlD6OMQoUZmn3CyHa6cFZGxthwQow9G0yaeZnX8a0MyZ5'; // Reemplaza con tu token real

async function fetchCardBalance(cardNumber) {
  try {
    // Envía la solicitud al backend
    const response = await fetch(`https://shop.thelotent.com/WSVistaWebClient/RESTData.svc/gift-cards/balance/${cardNumber}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      }
    });

    // Verifica que la respuesta es JSON
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Verifica el tipo de contenido
    const contentType = response.headers.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Expected JSON, but got ' + contentType);
    }

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
  fetchCardBalance(cardNumber);
});
