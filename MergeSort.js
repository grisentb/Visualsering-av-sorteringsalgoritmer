class MergeSort
{
    rounds = 0;
    array = [];
    iter = 0;
    constructor(arr)
    {
        this.array = arr;
        console.log(this.array);
        this.mergeSorter(this.array, 0, this.array.length -1);
        console.log("Sorted: " + this.array);

    }

    mergeSorter(arr, lowerBound, upperBound)
    {   
        //this.printer(arr, lowerBound, upperBound);
        this.rounds++;
        //console.log("Numeber of Rounds: " + this.rounds);
        if(upperBound - lowerBound >= 0 && upperBound > lowerBound)
        {
            var middlePoint = Math.floor((upperBound - lowerBound) / 2) + lowerBound;

            this.mergeSorter(arr, lowerBound, middlePoint);

            this.mergeSorter(arr, middlePoint+1, upperBound);

            //console.log("BEFORE MERGE: " + this.array);
            this.array = this.merger(lowerBound, middlePoint, upperBound);
            //console.log("AFTER MERGE: " + this.array);
        }
        displayArray.displayArrays([...this.array], lowerBound, upperBound, this.iter);
        this.iter++;
    }

    merger(lower, middle, upper)
    {
        var i = lower;
        var j = middle + 1;
        var k = lower;
        var arr = [...this.array];
        //console.log("Comparing: " + this.array[i] + "(" + i + ")" + " and " + this.array[j] + "(" + j + ")");
        while(k<=upper)
        {
            displayArray.displayArrays([...this.array], i, j, this.iter);
            this.iter++;
            //console.log("ARRAY DURING MERGE!: " + arr + " || i " + i + " j " + j + " k " + k + " array[i] " + this.array[i]);
            if(j > upper)
            {
                arr[k] = this.array[i];
                i++;
            }
            else if(i > middle)
            {
                arr[k] = this.array[j];
                j++;
            }
            else if(this.array[i] > this.array[j])
            {
                arr[k] = this.array[j];
                j++;
            }else if(this.array[i] <= this.array[j])
            {
                arr[k] = this.array[i];
                i++;
            }
            k++;
        }
        return arr;
    }
    swap(ind1, ind2)
    {
        //console.log(this.array + " SWAPING!");
        var temp = this.array[ind1];
        this.array[ind1] = this.array[ind2];
        this.array[ind2] = temp;
        //console.log("ARRAY AFTER SWAP: " + this.array + " TEMP: " + temp);
    }
    printer(arr, lower, higher)
    {
        var i = lower;
        while(i<=higher)
        {
            console.log(arr[i]);
            i++;
        }
    }
}