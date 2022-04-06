function solve() {

    let nameInput = document.getElementById('container').children[0];
    let hallInput = document.getElementById('container').children[1];
    let priceInput = document.getElementById('container').children[2];

    let onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', addMovie);

    let sectionMovies = document.querySelector('#movies ul');
    let archiveSection = document.querySelector('#archive ul');

    let archiveButton = document.querySelector('#archive button');
    archiveButton.addEventListener('click', clearArchive);

    function addMovie(ev) {

        ev.preventDefault();

        if (nameInput.value && hallInput.value && Number(priceInput.value)) {

            let liElement = document.createElement('li');
            let spanElement = document.createElement('span');
            spanElement.textContent = nameInput.value;
            liElement.appendChild(spanElement);
            let strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${hallInput.value}`;
            liElement.appendChild(strongElement);
            let divElement = document.createElement('div');
            let strongToDivElement = document.createElement('strong');
            strongToDivElement.textContent = Number(priceInput.value).toFixed(2);
            divElement.appendChild(strongToDivElement);
            let inputElement = document.createElement('input');
            inputElement.placeholder = 'Tickets Sold';
            divElement.appendChild(inputElement);
            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', archiveMovie)
            divElement.appendChild(archiveButton);
            liElement.appendChild(divElement);
            sectionMovies.appendChild(liElement);
        }

        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';

        function archiveMovie(ev) {

            if (ev.target.parentNode.children[1].value && Number(ev.target.parentNode.children[1].value) >= 0) {

                let movieLi = ev.target.parentNode.parentNode;
                let newLi = document.createElement('li');
                let spanElement = document.createElement('span');
                spanElement.textContent = movieLi.children[0].textContent;
                newLi.appendChild(spanElement);
                let strongElement = document.createElement('strong');
                strongElement.textContent = `Total amount: ${(Number(movieLi.children[2].children[1].value) * Number(movieLi.children[2].children[0].textContent)).toFixed(2)}`;
                newLi.appendChild(strongElement);
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', (ev) => ev.target.parentNode.remove());
                newLi.appendChild(deleteButton);
                archiveSection.appendChild(newLi);
                movieLi.remove();
            }
        };
    };

    function clearArchive() {

        let archiveItems = Array.from(archiveSection.children);
        archiveItems.forEach(element => element.remove());
    };
}