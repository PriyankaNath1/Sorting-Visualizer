var inp_as = document.getElementById('a_size');
var array_size=parseInt(inp_as.value);
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var button_algo = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];

var marginSz;

var cont = document.getElementById("array_container");
cont.style="flex-direction: row";

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array(){
    if (isNaN(array_size) || array_size <= 0) {
        alert("Please enter a valid array size.");
        return;
    }

    cont.innerHTML = "";

    for(var i=0; i<array_size; i++){
        div_sizes[i] = Math.floor(Math.random()*(0.5)*(inp_as.max - inp_as.min))+10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        marginSz = 0.1;

        divs[i].style = "margin: 0%" + marginSz + "%; background-color: blue; width:" + (100/array_size-(2*marginSz)) + "%; height:" + (div_sizes[i]) + "%;";

    }
}


function update_array_size(){
    array_size = parseInt(inp_as.value);
    generate_array();
}

window.onload = update_array_size();


for(var i=0; i<button_algo.length; i++){
    button_algo[i].addEventListener("click", run_algo);
}


function disable_buttons(){
    for(var i=0; i<button_algo.length; i++){

        button_algo[i].classList = [];
        button_algo[i].classList.add("button_locked");
        button_algo[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;

    }
}


function run_algo(){
    disable_buttons();
    
    this.classList.add("button_selected");

    switch(this.innerHTML){
        case "Bubble" : BubbleSort(); 
                        break;
        
        case "Selection" : SelectionSort();
                           break;
        
        case "Insertion" : InsertionSort();
                           break;

        case "Merge" : MergeSort();
                       break;

        case "Quick" : QuickSort();
                       break;

    }
}
