function MergeSort(){
    document.getElementById("Worst_Time").innerText="O(nlogn)";
    document.getElementById("Average_Time").innerText="Θ(nlogn)";
    document.getElementById("Best_Time").innerText="Ω(nlogn)";

    document.getElementById("Worst_Space").innerText="O(n)";

    c_delay = 0;

    partition(0, array_size-1);

    enable_buttons();

}


function mergeAll(start, mid, end){
    var p = start;
    var q = mid+1;
    var k = 0;

    var arr=[];

    for(var i=start; i<=end; i++){
        if(p > mid){
            arr[k++] = div_sizes[q++];
            div_update(divs[q-1], div_sizes[q-1], "red");
        }
        else if(q > end){
            arr[k++] = div_sizes[p++];
            div_update(divs[p-1], div_sizes[p-1], "red");
        }
        else if(div_sizes[p] < div_sizes[q]){
            arr[k++] = div_sizes[p++];
            div_update(divs[p-1], div_sizes[p-1], "red");
        }
        else{
            arr[k++] = div_sizes[q++];
            div_update(divs[q-1], div_sizes[q-1], "red");
        }
    }

    for(var t=0; t<k; t++){
        div_sizes[start++] = arr[t];
        div_update(divs[start-1], div_sizes[start-1], "green");
    }
}

function partition(start, end){
    if(start < end){
        var mid = Math.floor((start + end)/2);

        div_update(divs[mid], div_sizes[mid], "yellow");

        partition(start, mid);
        partition(mid+1, end);

        mergeAll(start, mid, end);
    }
}