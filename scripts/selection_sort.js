function SelectionSort(){
    document.getElementById("Worst_Time").innerText="O(n^2)";
    document.getElementById("Average_Time").innerText="Θ(n^2)";
    document.getElementById("Best_Time").innerText="Ω(n^2)";

    document.getElementById("Worst_Space").innerText="O(1)";

    c_delay = 0;

    for(var i=0; i<array_size-1; i++){
        div_update(divs[i], div_sizes[i], "red");

        index_min = i;

        for(var j=i+1; j<array_size; j++){
            div_update(divs[j], div_sizes[j], "yellow");

            if(div_sizes[j] < div_sizes[index_min]){
                if(index_min != i){
                    div_update(divs[index_min], div_sizes[index_min], "blue");
                }
                index_min = j;

                div_update(divs[index_min], div_sizes[index_min], "red");
            }
            else{
                div_update(divs[j], div_sizes[j], "blue");
            }
        }

        if(index_min != i){
            var temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "red");
            div_update(divs[i], div_sizes[i], "red");

            div_update(divs[index_min], div_sizes[index_min], "blue");
        }

        div_update(divs[i], div_sizes[i], "green");
    }
    div_update(divs[array_size-1], div_sizes[array_size-1], "green");

    enable_buttons();

}