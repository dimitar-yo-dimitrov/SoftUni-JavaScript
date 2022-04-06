function solve() {
   let button = document.getElementsByTagName('button');
   let textArea = document.getElementsByTagName('textarea')[0];

   let products = new Map();

   Array.from(button).forEach(btn => {
      btn.addEventListener('click', (ev) => {
         if (ev.target.className === 'add-product') {

            let currentElement = ev.target.parentElement;

            let priceElement = currentElement.nextElementSibling.innerHTML;
            let brandElement = currentElement.previousElementSibling.children[0].innerHTML;

            if (!products.has(brandElement)) {

               products.set(brandElement, 0);
            }

            products.set(brandElement, products.get(brandElement) + Number(priceElement));

            textArea.value += `Added ${brandElement} for ${priceElement} to the cart.\n`;

         } else {

            let totalPrice = Number(Array.from(products.values()).reduce((a, b) => a + b, 0));

            textArea.value += `You bought ${Array.from(products.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`;

            let buttons = Array.from(document.querySelectorAll('button'));
            buttons.forEach(button => button.disabled = true);
         }
      });
   });
}