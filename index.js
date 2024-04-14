async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'qrcode.png'; // Set the filename for the downloaded image
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function handleSubmit(event) {
    event.preventDefault();

    // Get input text
    let text = document.getElementById("inptxt").value;

    // Generate QR code
    //let qrsrc = `http://api.qrserver.com/v1/create-qr-code/?data=${text}`;
    let qrsrc = `https://quickchart.io/qr?text=${text}`;
    let qrimg = document.getElementById("qrimg");


    //  Set QR code source after it's fully loaded
    qrimg.onload = function () {
        //enabling the download button
        document.getElementById("downloadButton").disabled = false;

    };
    // Set QR code source
    qrimg.src = qrsrc;

}

function handleDownload() {
    let text = document.getElementById("inptxt").value;
    let qrsrc = `https://quickchart.io/qr?text=${text}`;


    //Download the image
    downloadImage(qrsrc)
}



