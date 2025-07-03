import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronoun = ['the', 'our'];
  let adj = ['horrible', 'oscuro'];
  let nouns = ['flores', 'viernes', 'banco', 'perro'];
  let ext = ['es', 'co', 'com']

  let domain = []
  for (const pron of pronoun) {
    for (const adective of adj) {
      for (const noun of nouns) {
        for (const extension of ext) {
          domain.push(`${pron}${adective}${noun.endsWith(extension) ? noun.slice(0, -extension.length) : noun}.${extension}`)
        }
      }
    }
  }
  console.log(domain)

  const list = document.getElementById("newList");


  for (let i = 0; i < domain.length; i++) {
    let text = domain[i];
    let listItem = document.createElement("li");
    listItem.textContent = text;
    list.appendChild(listItem);

  }

};

