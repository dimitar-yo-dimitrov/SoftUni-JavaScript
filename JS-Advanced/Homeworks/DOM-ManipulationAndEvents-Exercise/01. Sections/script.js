function create(words) {
   let parentElement = document.getElementById('content');
   let inputElements = words;

   inputElements.forEach(element => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(element);

      div.appendChild(p);
      p.appendChild(text);
      p.style.display = 'none';
      parentElement.appendChild(div);

      div.addEventListener('click', function (ev) {
         ev.target.children[0].style.display = 'block';
        // ev.target = p.style.display = 'block';
      });
   });
}