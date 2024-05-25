function QuickSort(){
    document.getElementById("Worst_Time").innerText="O(n^2)";
    document.getElementById("Average_Time").innerText="Θ(nlogn)";
    document.getElementById("Best_Time").innerText="Ω(nlogn)";

    document.getElementById("Worst_Space").innerText="O(logn)";

    c_delay = 0;

    quickFun(0, array_size-1);

    enable_buttons();

}

function partitionFun(start, end){
    var i = start+1;
    var pivot = div_sizes[start];

    div_update(divs[start], div_sizes[start], "yellow");

    for(var j=start+1; j<=end; j++){
        if(div_sizes[j] < pivot){
            div_update(divs[j], div_sizes[j], "yellow");
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            div_update(divs[i], div_sizes[i], "blue");
            div_update(divs[j], div_sizes[j], "blue");

            i++;
        }
    }
    div_update(divs[start], div_sizes[start], "red");
    div_update(divs[i-1], div_sizes[i-1], "red");

    var temp = div_sizes[start];
    div_sizes[start] = div_sizes[i-1];
    div_sizes[i-1] = temp;

    div_update(divs[start], div_sizes[start], "red");
    div_update(divs[i-1], div_sizes[i-1], "red");

    for(var k=start; k<=i; k++){
        div_update(divs[k], div_sizes[k], "green");
    }

    return i-1; //pivot position
}

function quickFun(start, end){
    if(start < end){
        var pivot_partition = partitionFun(start, end);
        quickFun(start, pivot_partition-1);
        quickFun(pivot_partition+1, end);
    }
}