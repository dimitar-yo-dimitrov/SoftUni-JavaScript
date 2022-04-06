function solve() {

   let creator = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');

   let createBtn = document.getElementsByClassName('btn create')[0];

   createBtn.addEventListener('click', addArticle);

   function addArticle(ev) {
      ev.preventDefault();

      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = title.value;

      let categoryP = document.createElement('p');
      let firstStrong = document.createElement('strong');
      firstStrong.textContent = category.value;
      categoryP.textContent = `Category: `;
      categoryP.appendChild(firstStrong);

      let creatorP = document.createElement('p');
      let secondStrong = document.createElement('strong');
      secondStrong.textContent = creator.value;
      creatorP.textContent = `Creator: `;
      creatorP.appendChild(secondStrong);

      let contentP = document.createElement('p');
      contentP.textContent = content.value;

      let div = document.createElement('div');
      div.className = 'buttons';
      let deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn delete';
      deleteBtn.textContent = 'Delete';
      div.appendChild(deleteBtn);

      let archiveBtn = document.createElement('button');
      archiveBtn.className = 'btn archive';
      archiveBtn.textContent = 'Archive';
      div.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(contentP);
      article.appendChild(div);

      document.querySelector('main section').appendChild(article)

      creator.value = '';
      title.value = '';
      category.value = '';
      content.value = '';

      deleteBtn.addEventListener('click', () => {
         article.remove();
      });

      archiveBtn.addEventListener('click', () => {
         let ol = document.querySelector('ol');
         let li = document.createElement('li');
         li.textContent = h1.textContent;
         ol.appendChild(li);

         let sorted = Array.from(document.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent));
         ol.innerHTML=sorted.map(li=>li.outerHTML).join('');

         article.remove();
      });
   }
}
