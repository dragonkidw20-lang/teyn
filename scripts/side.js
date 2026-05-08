console.log(document.title);
document.title = "changed"
console.log(document.title);

console.log(document.body)

//console.log(document.body.innerHTML)

document.body.innerHTML = "<button>Good</button>"
console.log(document.querySelector("button"))
document.querySelector("button")
    .innerHTML = "c"