

let count = 0;

counter = document.getElementById("count-el")

function increment (){
    count += 1
    counter.innerText = count
    
    console.log(count)
}

function decrement(){
    count -= 1;
    counter.innerText = count
    console.log(count)
}

let saveEl = document.getElementById("saved-el")

function save(){
    let countStr = count + "- "
    saveEl.textContent += countStr
    console.log(count)
    counter.textContent = 0
    count = 0
   
}


