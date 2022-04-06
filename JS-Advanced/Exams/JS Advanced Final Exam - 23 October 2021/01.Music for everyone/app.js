window.addEventListener('load', solve);

function solve() {

    let genre = document.getElementById('genre');
    let nameOfSong = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);

    let count = 0;

    function addSong(ev) {

        ev.preventDefault();

        if (genre.value != '' && nameOfSong.value != '' && author.value != '' && date.value != '') {

            let divSongInfo = document.createElement('div');
            divSongInfo.className = 'hits-info';

            let img = document.createElement('img');
            img.src = './static/img/img.png';
            divSongInfo.appendChild(img);

            let genreH2 = document.createElement('h2');
            let songH2 = document.createElement('h2');
            let authorH2 = document.createElement('h2');
            let dateH3 = document.createElement('h3');

            genreH2.textContent = `Genre: ${genre.value}`;
            songH2.textContent = `Name: ${nameOfSong.value}`;
            authorH2.textContent = `Author: ${author.value}`;
            dateH3.textContent = `Date: ${date.value}`;

            divSongInfo.appendChild(genreH2);
            divSongInfo.appendChild(songH2);
            divSongInfo.appendChild(authorH2);
            divSongInfo.appendChild(dateH3);

            let saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save song';
            divSongInfo.appendChild(saveBtn);

            saveBtn.addEventListener('click', onSave);

            let likeBtn = document.createElement('button');
            likeBtn.className = 'like-btn';
            likeBtn.textContent = 'Like song';
            divSongInfo.appendChild(likeBtn);

            likeBtn.addEventListener('click', onLike);

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            divSongInfo.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', onDelete);

            document.querySelector('.all-hits-container').appendChild(divSongInfo);

            genre.value = '';
            nameOfSong.value = '';
            author.value = '';
            date.value = '';

            function onSave() {
                document.querySelector('.saved-container').appendChild(divSongInfo);
                divSongInfo.removeChild(saveBtn);

                divSongInfo.removeChild(likeBtn);
            }

            function onLike(ev) {
                count++;
                document.querySelector('.likes').children[0].textContent = `Total Likes: ${count}`;
                ev.target.disabled = true;
            }

            function onDelete(ev) {
                ev.target.parentNode.remove();
            }
        }
    }
}