class InsertionSort
{
    array = [];
    iter = 0;

    constructor(arr)
    {
        var resultsArray;
        this.array = arr;
        console.log(this.array);
        var resultsArray = this.insertionSorter(this.array);
        console.log("Sorted: " + resultsArray);
    }

    insertionSorter(arr)
    {
        var i = 1;
        while(i<arr.length)
        {
            //console.log("arrayState: " + arr + " iteration: " + i);
            var j = i;
            while(j>=0)
            {
                displayArray.displayArrays([...arr], i, j, this.iter);
                this.iter++;
                if (arr[j-1] < arr[i] || j==0)
                {
                    arr = this.insert(arr, arr[i], j, i);

                    break;
                }
                else
                {
                    j--;
                }
               //}, 10);
            }
            i++;
        }
        displayArray.displayArrays([...arr], i, j, this.iter);
        this.iter++;
        return arr;
    }
    /*insert(arr, value, index, insertionJump)
    {
        var tempArr = [...arr];
        var i = index + 1;
        var a = 2;
        tempArr[index] = value;
        while(i < arr.length)
        {
            if(i == insertionJump)
            {
                a = 0;
            }
            console.log("ARR: " + arr[i-a]);
            tempArr[i] = arr[i-a];
            i++;
        }
        console.log(tempArr);
        return tempArr;
    }*/
    insert(arr, value, index, valueIndex)
    {
        var i = 0;
        var tempArr = [];
        while(i<arr.length)
        {
            if (i == index)
            {
                tempArr[i] = value;
            }
            else if(i>=index && i <= valueIndex)
            {
                tempArr[i] = arr[i-1];
            }else
            {
                tempArr[i] = arr[i];
            }
            //console.log(tempArr[i]);
            i++;
        }
        //console.log(tempArr);
        return tempArr;
    }
}