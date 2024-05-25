function InsertionSort(){
    document.getElementById("Worst_Time").innerText="O(n^2)";
    document.getElementById("Average_Time").innerText="Θ(n^2)";
    document.getElementById("Best_Time").innerText="Ω(n)";

    document.getElementById("Worst_Space").innerText="O(1)";

    c_delay = 0;

    for(var i=0; i<array_size; i++){
        div_update(divs[i], div_sizes[i], "yellow");

        var key = div_sizes[i];
        var j = i-1;

        while(j>=0 && div_sizes[j] > key){
            div_update(divs[j], div_sizes[j], "red");
            div_update(divs[j+1], div_sizes[j+1], "red");

            div_sizes[j+1] = div_sizes[j];

            div_update(divs[j], div_sizes[j], "red");
            div_update(divs[j+1], div_sizes[j+1], "red");

            div_update(divs[j], div_sizes[j], "blue");

            if(j == i-1){
                div_update(divs[j+1], div_sizes[j+1], "yellow");
            }
            else{
                div_update(divs[j+1], div_sizes[j+1], "blue");
            }

            j--;
        }
        div_sizes[j+1] = key;

        for(var k=0; k<i; k++){
            div_update(divs[k], div_sizes[k], "green");
        }

       
    }

    div_update(divs[array_size-1], div_sizes[array_size-1], "green");

    enable_buttons();



}