const contenedorQR = document.getElementById('contenedorQR');

const QR = new QRCode(contenedorQR);

QR.makeCode("https://winestrace.netlify.app/traza-botella");
