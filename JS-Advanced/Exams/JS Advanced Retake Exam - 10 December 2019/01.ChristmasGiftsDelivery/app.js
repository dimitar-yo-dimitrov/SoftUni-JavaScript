function solution() {
    let input = document.querySelector('input');
    let addBtn = document.querySelector('div button');

    let [gifts, sentGifts, discardedGifts] = document.querySelectorAll('ul');

    addBtn.addEventListener('click', (ev) => {

        if (input.value) {
            let li = document.createElement('li');
            li.className = 'gift';
            li.textContent = input.value;

            let sendBtn = document.createElement('button');
            sendBtn.id = 'sendButton';
            sendBtn.textContent = `Send`;


            let discardBtn = document.createElement('button');
            discardBtn.id = 'discardButton';
            discardBtn.textContent = `Discard`;

            sendBtn.addEventListener('click', send);
            discardBtn.addEventListener('click', discard);

            li.appendChild(sendBtn);
            li.appendChild(discardBtn);
            gifts.appendChild(li);

            Array.from(gifts.getElementsByTagName('li'))
            .sort((a,b)=>a.textContent.localeCompare(b.textContent))
            .forEach(li=>gifts.appendChild(li));

            input.value = '';
        }
    });

    function send(ev) {
        let li = ev.currentTarget.parentElement;
        li.children[1].remove();
        li.children[0].remove();

        sentGifts.appendChild(li);
    };

    function discard(ev) {
        let li = ev.currentTarget.parentElement;
        li.children[1].remove();
        li.children[0].remove();

        discardedGifts.appendChild(li);
    };
}