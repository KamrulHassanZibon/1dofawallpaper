function generateImage() {
    const name = document.getElementById('name').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const address = document.getElementById('address').value;
    const emergencyNumber = document.getElementById('emergencyNumber').value;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'background.jpg';

    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        
        ctx.fillText(`Name: ${name.toUpperCase()}`, canvas.width / 2, canvas.height / 4);
        ctx.fillText(`Blood Group: ${bloodGroup.toUpperCase()}`, canvas.width / 2, canvas.height / 3);
        ctx.fillText(`Address: ${address.toUpperCase()}`, canvas.width / 2, canvas.height / 2.4);
        ctx.fillText(`Emergency Number: ${emergencyNumber}`, canvas.width / 2, canvas.height / 2);

        const link = document.createElement('a');
        link.download = 'wallpaper.png';
        link.href = canvas.toDataURL();
        link.click();
    };
}
