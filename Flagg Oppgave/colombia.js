const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 360;
const canvasHeight = 316;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const colors = [
    '#FCD116',
    '£FCD116',
    '#003893',
    '#D12229',
];

const canvasHeightDivision = canvasHeight / 6;

const drawRect = (color, idx) => {
    ctx.fillStyle = color;
    ctx.fillRect(
        0,
        canvasHeightDivision * idx,
        canvasWidth,
        canvasHeightDivision
    );
};

colors.forEach((color, idx) => drawRect(color, idx));