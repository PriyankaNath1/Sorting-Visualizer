function BubbleSort(){
    document.getElementById("Worst_Time").innerText="O(n^2)";
    document.getElementById("Average_Time").innerText="Θ(n^2)";
    document.getElementById("Best_Time").innerText="Ω(n)";

    document.getElementById("Worst_Space").innerText="O(1)";

    c_delay = 0;

    for(var i=0; i<array_size-1; i++){
        for(var j=0; j<array_size-i-1; j++){
            div_update(divs[j], div_sizes[j], "yellow");

            if(div_sizes[j] > div_sizes[j+1]){
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j+1], div_sizes[j+1], "red");

                //swapped
                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp; 

                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j+1], div_sizes[j+1], "red");
            }

            div_update(divs[j], div_sizes[j], "blue");
            
        }

        div_update(divs[j], div_sizes[j], "green");
       
    }

    div_update(divs[0], div_sizes[0], "green");

    enable_buttons();
                


}