function focused() {
    let inputElements = Array.from(document.querySelectorAll('input'));

    function highlights() {
        this.parentNode.className = 'focused';
    };

    function unhighlight() {
        this.parentNode.removeAttribute('class');
    };

    inputElements.forEach(i => {
        i.addEventListener('focus', highlights);
        i.addEventListener('blur', unhighlight);
    });
}