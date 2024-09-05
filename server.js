const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/check-balance', async (req, res) => {
  const cardNumber = req.query.cardNumber;
  try {
    const response = await axios.get(`http://8.43.115.20//WSVistaWebClient/RESTData.svc/gift-cards/balance/${cardNumber}`, {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el saldo' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
