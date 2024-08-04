function generateImage() {
    const name = document.getElementById('name').value.toUpperCase();
    const bloodGroup = document.getElementById('bloodGroup').value.toUpperCase();
    const address = document.getElementById('address').value.toUpperCase();
    const emergencyNumber = document.getElementById('emergencyNumber').value.toUpperCase();

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'background.jpg';  // Ensure the correct path if the image is in the same directory

    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        ctx.fillStyle = 'white';
        ctx.font = 'bold 34px Arial';
        ctx.textAlign = 'center';

        // Assuming the white line is at approximately 2/3 of the image height
        const startY = image.height * 0.67;
        const lineHeight = 40;

        // Draw text in separate lines below the white line
        ctx.fillText(`NAME: ${name}`, canvas.width / 2, startY);
        ctx.fillText(`BLOOD GROUP: ${bloodGroup}`, canvas.width / 2, startY + lineHeight);
        ctx.fillText(`ADDRESS: ${address}`, canvas.width / 2, startY + 2 * lineHeight);
        ctx.fillText(`EMERGENCY NUMBER: ${emergencyNumber}`, canvas.width / 2, startY + 3 * lineHeight);

        // Ensure download works on mobile
        canvas.toBlob(function(blob) {
            const link = document.createElement('a');
            link.download = 'wallpaper.png';
            link.href = URL.createObjectURL(blob);
            link.click();
        }, 'image/png');
    };
}
