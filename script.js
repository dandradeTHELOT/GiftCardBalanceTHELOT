// Reemplaza 'your-api-token' con tu token real
const API_TOKEN = 'your-api-token';

async function fetchCardBalance(cardNumber) {
  try {
    // Envía la solicitud al backend
    const response = await fetch(`http://8.43.115.20//WSVistaWebClient/RESTData.svc/gift-cards/balance/${cardNumber}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      }
    });
    const data = await response.json();
    
    // Muestra el saldo en el frontend
    document.getElementById('balance').innerText = `Balance: $${data.balance}`;
  } catch (error) {
    console.error('Error
