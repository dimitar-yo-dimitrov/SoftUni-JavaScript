function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    let mouseGradientHandler = (e) => {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);

        resultElement.textContent = `${percent}%`;
    };

    gradientElement.addEventListener('mousemove', mouseGradientHandler);
}