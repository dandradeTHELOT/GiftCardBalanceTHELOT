document.getElementById('balanceForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;

    try {
        const response = await fetch(`https://api.thelotent.com/WSVistaWebClient/RESTData.svc/gift-cards/balance/${cardNumber}`, {
            headers: { 'Authorization': `afXsnPjblxcDc7G0obT3ifmIxLljtaJ4x4DzleUc00zuQNQj6Y1Iyosque1PHSYPEI36Jf6yLNbyx6fe2JiH3ZsGwUHMG4OpWXUfehFzuXIQ3OuIpnaDg4s6g2ep4D1AZ54j9Pb2ZePVaFc4Q7cGvixV6sre3RgDJThSFxlP6Zmw2uOPHA9ym0n0xiiEx4sNeAMnybhQXD1XPpqpN4YlD6OMQoUZmn3CyHa6cFZGxthwQow9G0yaeZnX8a0MyZ5` } // Añadir el token aquí
        });
        const data = await response.json();
        console.log('Datos recibidos:', data); // Añadir esta línea
        const balance = data.BalanceInCents / 100;
        document.getElementById('balance').textContent = `Saldo: $${balance}`;
    } catch (error) {
        console.error('Error al obtener el saldo:', error); // Añadir esta línea
        document.getElementById('balance').textContent = 'Error al obtener el saldo.';
    }
});
