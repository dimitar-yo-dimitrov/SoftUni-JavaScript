function solution() {
    let input = document.querySelector('input');
    let addBtn = document.querySelector('div button');

    let [listOfGifts, sentGifts, discardedGifts] = document.querySelectorAll('ul');

    addBtn.addEventListener('click', addGift)

    function addGift() {
        if (input.value) {

            let li = document.createElement('li');
            li.textContent = input.value;
            li.classList = 'gift';

            let sentBtn = document.createElement('button');
            sentBtn.id = 'sendButton';
            sentBtn.textContent = 'Send';
            sentBtn.addEventListener('click',sent);

            let discardBtn = document.createElement('button');
            discardBtn.id = 'discardButton';
            discardBtn.textContent = 'Discard';
            discardBtn.addEventListener('click',discard);

            li.appendChild(sentBtn);
            li.appendChild(discardBtn);
            listOfGifts.appendChild(li);

            Array.from(listOfGifts.getElementsByTagName('li'))
            .sort((a,b)=>a.textContent.localeCompare(b.textContent))
            .forEach(li=>listOfGifts.appendChild(li));

            input.value = '';
        }
    };

    function sent(ev) {

        let currentLi = ev.currentTarget.parentElement;
        currentLi.children[1].remove();
        currentLi.children[0].remove();
        sentGifts.appendChild(currentLi);
    };

    function discard(ev) {

        let currentLi = ev.currentTarget.parentElement;
        currentLi.children[1].remove();
        currentLi.children[0].remove();
        discardedGifts.appendChild(currentLi);
    };
}