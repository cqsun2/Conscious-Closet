/*
const header = document.getElementById("header");
about.addEventListener("change", e => {
    fetch('http://localhost/about', {
    method: 'POST',
    body: JSON.stringify({about: "Hello"}),
    headers: {
      'Content-Type': 'application/json',
    },
    })
    .then(console.log("done"));
    
});

function createParkHTML(park) {
    const item = document.createElement('a');
    item.classList.add('park');
    item.href = '/park?id=' + park.id;
  
    const name = document.createElement('h2');
    name.innerHTML = park.name;
    item.appendChild(name);
  
    const img = document.createElement('img');
    img.src = "/img/park.jpg";
    item.appendChild(img);
  
    const countyLabel = document.createElement('div');
    countyLabel.innerHTML = 'Spans Counties:';
    countyLabel.classList.add('counties-list');
    item.appendChild(countyLabel);
  
    park.counties.forEach(county => {
      const countyTag = document.createElement('span');
      countyTag.classList.add('county');
      countyTag.innerHTML = county.name;
      item.appendChild(countyTag);
    });
  
    return item;
  }

*/

const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data.csv') 
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () =>  {
    console.log(results);
  });
    
