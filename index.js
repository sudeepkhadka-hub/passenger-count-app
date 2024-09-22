let countEl = document.getElementById("count")
let count = 0

//function

function countIncrement() {
    count = count + 1
    countEl.innerText = count
    
    
}

function save() {
    console.log(count)
}

