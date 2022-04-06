function sumTable() {
    let costElements = document.querySelectorAll('tbody tr td:last-child:not(#sum)');

    document.getElementById('sum').innerHTML = Array
        .from(costElements)
        .map(x => Number(x.innerHTML))
        .reduce((acc, el) =>
            acc + el, 0);
}