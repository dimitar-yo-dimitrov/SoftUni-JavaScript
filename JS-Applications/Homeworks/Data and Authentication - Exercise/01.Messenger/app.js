function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const messages = document.getElementById('messages');

    document.getElementById('submit').addEventListener('click', sendMessage)
    document.getElementById('refresh').addEventListener('click', getMessages);

    async function getMessages() {
        const res = await fetch(url);
        const data = await res.json();

        messages.value = Object.values(data).map(x => `${x.author}: ${x.content}`).join('\n');
    }

    async function sendMessage() {
        const author = document.querySelector('[name="author"]');
        const content = document.querySelector('[name="content"]');

        if (!author.value && !content.value) {

            const res = await fetch(url, {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data),
            });

            const data = await res.json();

            author.value = '';
            content.value = '';

            return data;
        }
    }
}

attachEvents();