function solve() {

  let textareaElements = Array.from(document.querySelectorAll('textarea'));
  let buttonElements = Array.from(document.querySelectorAll('button'));

  let tableBody = document.querySelector('table tbody');

  buttonElements[0].addEventListener('click', generate);
  buttonElements[1].addEventListener('click', buy);

  function generate() {
    let inputFurniture = JSON.parse(textareaElements[0].value);

    for (const furniture of inputFurniture) {
      let trElement = createElement('tr');

      // image 
      let tdImg = createElement('td');
      let img = createElement('img');
      img.src = furniture.img;
      tdImg.appendChild(img);

      // name 
      let tdName = createElement('td');
      let name = createElement('p', furniture.name);
      tdName.appendChild(name);

      // price
      let tdPrice = createElement('td');
      let price = createElement('p', furniture.price);
      tdPrice.appendChild(price);

      // decoration factor 
      let tdDecorationFactor = createElement('td');
      let decorationFactor = createElement('p', furniture.decFactor);
      tdDecorationFactor.appendChild(decorationFactor);

      let tdCheckbox = createElement('td');
      let checkbox = createElement('input');
      checkbox.type = 'checkbox';
      tdCheckbox.appendChild(checkbox);

      trElement.appendChild(tdImg);
      trElement.appendChild(tdName);
      trElement.appendChild(tdPrice);
      trElement.appendChild(tdDecorationFactor);
      trElement.appendChild(tdCheckbox);
      tableBody.appendChild(trElement);
    }
  };

  function buy() {
    let tableRows = Array.from(document.querySelectorAll('table tbody tr'));

    let boughtProducts = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const row of tableRows) {
      if (row.children[4].children[0].checked) {
        let name = row.children[1].children[0].textContent;
        let price = Number(row.children[2].children[0].textContent);
        let decFactor = Number(row.children[3].children[0].textContent);

        boughtProducts.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
      }
    }

    textareaElements[1].value +=
      `Bought furniture: ${boughtProducts.join(', ')}` +
      '\n' +
      `Total price: ${totalPrice.toFixed(2)}` +
      '\n' +
      `Average decoration factor: ${totalDecFactor / boughtProducts.length}`
  };

  function createElement(type, content) {
    let element = document.createElement(type);
    element.textContent = content;

    return element;
  };
}