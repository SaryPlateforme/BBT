import mock from "./js/mock";

// const document = document.querySelector("main");

console.log(document.getElementById("test").innerText);

document.addEventListener( "click", function (e) {
    let target = this.documentElement;
    console.log(target.innerText);
  },
  false
);

window.onclick = (e) => {
  let titre = e.target.innerText;
  console.log(titre);
  return titre;
};

let filterPerso = [];

for (let i = 0; i < mock.length; i++) {
  if (mock[i].name === titre) {
    filterPerso = [mock[i]];
  }
}

console.log(filterPerso);

// document.addEventListener('click', function(e) {
//     e = e || window.e;
//     let target = e.target || e.srcElement,
//         text = target.textContent || target.innerText;
// }, false);
