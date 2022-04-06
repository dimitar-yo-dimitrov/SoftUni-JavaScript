import { html } from "./lib.js";

export const notifyTemplate = (err) => html` 
<section id="notifications">
  <div id="errorBox" class="notification">
    <span>${err}</span>
  </div>
</section>`;
