function solve() {

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');

    let allSection = Array.from(document.querySelectorAll('section'));
    let openSection = allSection[1];
    let inProgress = allSection[2];
    let complete = allSection[3];

    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        if (task.value && description.value && date.value) {

            let openDiv = openSection.querySelector('div:last-of-type');
            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = task.value;

            let firstP = document.createElement('p');
            firstP.textContent = `Description: ${description.value}`;

            let secondP = document.createElement('p');
            secondP.textContent = `Due Date: ${date.value}`;

            let div = document.createElement('div');
            div.className = 'flex';
            let startBtn = document.createElement('button');
            startBtn.className = 'green';
            startBtn.textContent = 'Start';

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'red';
            deleteBtn.textContent = 'Delete';

            div.appendChild(startBtn);
            div.appendChild(deleteBtn);

            article.appendChild(h3);
            article.appendChild(firstP);
            article.appendChild(secondP);
            article.appendChild(div);

            openDiv.appendChild(article);

            task.value = '';
            description.value = '';
            date.value = '';

            startBtn.addEventListener('click', (ev) => {

                article.removeChild(div);

                let inProgressDiv = inProgress.querySelector('div:last-of-type');
                let div2 = document.createElement('div');
                div2.className = 'flex';

                let deleteBtnInProgress = document.createElement('button');
                deleteBtnInProgress.className = 'red';
                deleteBtnInProgress.textContent = 'Delete';

                let finishBtn = document.createElement('button');
                finishBtn.className = 'orange';
                finishBtn.textContent = 'Finish';

                div2.appendChild(deleteBtnInProgress);
                div2.appendChild(finishBtn);

                article.appendChild(div2);
                inProgressDiv.appendChild(article);


                finishBtn.addEventListener('click', () => {

                    let completeDiv = complete.querySelector('div:last-of-type');
                    completeDiv.appendChild(article);
                    article.removeChild(div2);
                });

                deleteBtnInProgress.addEventListener('click', (ev) => {
                    article.remove();
                });
            });

            deleteBtn.addEventListener('click', (ev) => {
                article.remove();
            });
        }
    });
}