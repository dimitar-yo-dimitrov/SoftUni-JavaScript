function loadRepos() {
	let username = document.getElementById('username').value;

	let url = `https://api.github.com/users/${username}/repos`;

	let ulElement = document.getElementById('repos');

	fetch(url)
		.then(response => {
			if (response.status === 404) {
				throw new Error('User not found!');
			}

			return response.json();
		})
		.then(data => {
			ulElement.innerHTML = '';

			data.forEach(repo => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.setAttribute('href', repo.html_url);
				a.textContent = repo.full_name;

				li.appendChild(a);
				ulElement.appendChild(li);
			});
		})
		.catch(error => {
			ulElement.innerHTML = '';

			let li = document.createElement('li');
			li.textContent = error;
			ulElement.appendChild(li);
		});
}