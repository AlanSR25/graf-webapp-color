document.addEventListener('DOMContentLoaded', function () {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const colorBox = document.getElementById('color-box');
    const hexCode = document.getElementById('hex-code');
    const colorPicker = document.getElementById('color-picker');

    function updateColor() {
        const red = parseInt(redSlider.value);
        const green = parseInt(greenSlider.value);
        const blue = parseInt(blueSlider.value);
        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        const hex = rgbToHex(red, green, blue);
        hexCode.value = hex;
        colorPicker.value = hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);
    colorPicker.addEventListener('input', function () {
        const hex = colorPicker.value;
        const { r, g, b } = hexToRgb(hex);
        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;
        updateColor();
    });

    updateColor();
});
