const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Token de autenticación (guárdalo de manera segura en un entorno real)
const token = 'afXsnPjblxcDc7G0obT3ifmIxLljtaJ4x4DzleUc00zuQNQj6Y1Iyosque1PHSYPEI36Jf6yLNbyx6fe2JiH3ZsGwUHMG4OpWXUfehFzuXIQ3OuIpnaDg4s6g2ep4D1AZ54j9Pb2ZePVaFc4Q7cGvixV6sre3RgDJThSFxlP6Zmw2uOPHA9ym0n0xiiEx4sNeAMnybhQXD1XPpqpN4YlD6OMQoUZmn3CyHa6cFZGxthwQow9G0yaeZnX8a0MyZ5';

app.get('/balance/:cardNumber', async (req, res) => {
  const cardNumber = req.params.cardNumber;
  
  try {
    const response = await axios.get(`http://8.43.115.20//WSVistaWebClient/RESTData.svc/gift-cards/balance/${cardNumber}`, {
      headers: {
        'connectapitoken': token
      }
    });
    
    const balance = response.data.BalanceInCents / 100; // Convertir centavos a dólares o pesos
    res.json({ balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar la API' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
