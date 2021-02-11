class displayArray
{
    static defaultColor = 'rgb(255, 200, 132)';
    static highlightColor = 'rgb(255, 155, 132)';
    static time = 20;

    static displayArrays(array, tempI, tempJ, iteration)
    {
        setTimeout(function()
        {
            //console.log("INSIDE: arr: " + array + " || i " + tempI + " || and j " + tempJ);
            var c = document.getElementById('myCanvas');
            var ctx = document.getElementById('myCanvas').getContext('2d');
            var barSize = c.width / array.length;
            //Clear Canvas
            ctx.clearRect(0,0,c.width, c.height);
            //Declare colors
            var colors = displayArray.highlighter(array, tempI, tempJ);
            //Create Bars from array
            var i = 0;
            while(i<array.length)
            {
                ctx.beginPath();
                ctx.fillStyle = colors[i];
                ctx.fillRect((i)*barSize, c.height,barSize, -array[i]);
                ctx.strokeStyle = "white";
                ctx.rect((i)*barSize, 0, barSize, array[i]);
                //ctx.stroke();
                
                i++;
            }
        }, iteration*this.time);
    }
    

    static highlighter(arr, i, j)
    {
        var colors = [];
        var loopindex = 0;
        while(loopindex < arr.length)
        {
            colors.push(this.defaultColor);
            loopindex++;
        }
        if(i > 0 && j > 0)
        {
            colors[i] = this.highlightColor;
            colors[j] = this.highlightColor;
        }
        else if(i == j)
        {
            colors[i] = "0xffff";
        }
        return colors;
    }
}