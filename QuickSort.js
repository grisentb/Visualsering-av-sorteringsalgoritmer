class QuickSort
{
	static array;
	static iter;
	constructor(arr)
	{
		this.iter = 0;
		this.array = arr;
		console.log("Unsorted: " + this.array + " Size: " + this.array.length);
		this.quickSorter(0,this.array.length -1 , this.array);
		console.log(this.array)

	}
	
	quickSorter(lowerBound, upperBound)
	{
		if(upperBound - lowerBound > 1 && upperBound > lowerBound)
		{
			var pivotIndex = Math.ceil((upperBound - lowerBound)/2 + lowerBound);
			//console.log("Pivot: " + this.array[pivotIndex]);

			//Sort by pivot
			//console.log("Before: " + this.array);
			pivotIndex = this.sortByPivot(pivotIndex,lowerBound,upperBound);
			displayArray.displayArrays(this.array, -1, pivotIndex, this.iter);
			this.iter++;
			//Branching left
			this.quickSorter(lowerBound, pivotIndex-1);
			//Branching right
			this.quickSorter(pivotIndex+1, upperBound);
		}
		else
		{
			if(this.array[upperBound] < this.array[lowerBound] && upperBound > lowerBound)
			{
				var temp = this.array[upperBound];
				this.array[upperBound] = this.array[lowerBound];
				this.array[lowerBound] = temp;
			}
			return;
		}
	}

	sortByPivot(pivotIndex, lower, upper)
	{
		var tempArr = [...this.array];
		var i = lower;
		var smaller = lower;
		var bigger = upper;
		var pivot = this.array[pivotIndex];
		while(i<=upper)
		{
			displayArray.displayArrays([...tempArr], pivotIndex, pivotIndex, this.iter);
			this.iter++;

			if(this.array[i] <= pivot && i != pivotIndex)
			{
				//console.log("arr[smaller] " + this.array[i] + " index: " + smaller);
				tempArr[smaller] = this.array[i]
				smaller++;
			}
			else if(this.array[i] > pivot)
			{
				//console.log("arr[bigger] " + this.array[i] + " index " + bigger);
				tempArr[bigger] = this.array[i];
				bigger--;
			}
			i++
		}
		pivotIndex = smaller;
		tempArr[smaller] = pivot;
		this.array = tempArr;
		return pivotIndex;
	}
}