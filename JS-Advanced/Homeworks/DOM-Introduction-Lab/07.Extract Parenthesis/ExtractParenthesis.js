function extract(content) {
    let text = document.getElementById(content);

    let regex = /\(([^(]+)\)/g;
    const array = text.textContent.match(regex)

    return array.join('; ');
}
