import tops from "../data/tops.json" assert {type: "json"}
let data = [];

parseJSON();

const list = document.getElementById("myList")
const submit = document.getElementById("submit");

submit.addEventListener('click', e => {
    console.log("click")
    fillContentHTML()
});

function fillContentHTML() {
    let count = 0; 
    data.forEach((item) => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let p = document.createElement('p');
        p.innerHTML = item[0];
        img.src = item[1];
        img.id = `${count}`;
        p.setAttribute("class", "list-p");
        console.log("src", img.src);
        li.appendChild(img);
        console.log(img)
        li.appendChild(p);
        img.addEventListener('click', e => {
            handleImgClick(e.target)
        });
        list.appendChild(li);
        count++;
    })  
}

function handleImgClick(e) {
  console.log(e, "img clicked!")
}

function parseJSON() {
  let jdata = JSON.stringify(tops);
  let j_data_str = jdata.slice(1,jdata.length - 1)
  let tokens = j_data_str.split(',');
  for (let token of tokens){
    let tokens2 =  token.split(':');
    data.push([tokens2[0].slice(1,tokens2[0].length-1), tokens2[1].slice(1,tokens2[1].length-1)]);
  }
}
