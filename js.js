//declareer knoppen
let knoppen = document.getElementsByTagName('button');

for(let i=0; i< knoppen.length; i++)
{
  knoppen[i].addEventListener('click', voerUit);
}
let schrijven = document.getElementById('buttonID');

function voerUit(){
  //maak element
  let nieuwEl = document.createElement('article');
  let parag = document.createElement('p');
  //voeg informatie toe aan article
  parag.innerHTML = this.dataset.info;
nieuwEl.append(parag);
  //let newText = document.createTextNode(this.dataset);

schrijven.appendChild(nieuwEl);
//  document.getElementById('buttonID').appendChild(nieuwEl);
}
