class SelectionSort
{
    array;
    iter = 0;
    constructor(arr)
    {
        this.array = [...arr];
        console.log("Unsorted: " + this.array);
        this.selectionSorter(arr);
        console.log("Sorted: " + this.array);
    }

    selectionSorter(arr)
    {
        var i = 0;
        var min;
        while(i<arr.length-1)
        {
            min = this.findMinimumIndex(this.array, i, arr.length-1);

            this.swap(i,min);

            displayArray.displayArrays([...this.array], i, min, this.iter);
            this.iter++;
            i++;
        }
    }

    findMinimumIndex(arr, lower, upper)
    {
        var i = lower + 1;
        var minimumIndex = lower;
        while(i<=upper)
        {
            if(arr[i] < arr[minimumIndex])
            {
                minimumIndex = i;
            }
            i++;
        }
        return minimumIndex;
    }
    
    swap(i, j)
    {
        var temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }
}