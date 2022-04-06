function loadCommits() {
    let username = document.getElementById('username');
    let repository = document.getElementById('repo');
    let ulCommits = document.getElementById('commits');

    let url = `https://api.github.com/repos/${username.value}/${repository.value}/commits`;

    ulCommits.innerHTML = '';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw response;
            }

            return response.json();
        })
        .then(data => {

            data.forEach(item => {
                let li = document.createElement('li');
                li.textContent=`${item.commit.author.name}: ${item.commit.message}`;
                ulCommits.appendChild(li);
            });
        })
        .catch(error => {
            let li = document.createElement('li');
            li.textContent = `Error: ${error.status} (Not Found)`;
            ulCommits.appendChild(li);
        });
}