function search() {
  const towns = Array.from(document.querySelectorAll("#towns li"));
  const searchText = document
    .getElementById("searchText")
    .value.toLocaleLowerCase();

  let matches = 0;

  towns.forEach((town) => {
    if (town.textContent.toLocaleLowerCase().includes(searchText)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  });

  document.querySelector("#result").textContent = `${matches} matches found`;
}
