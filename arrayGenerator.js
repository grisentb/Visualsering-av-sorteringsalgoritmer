class arrayGenerator
{
    array = []
    generate(size, lower, upper)
    {
        this.array = [];
        var i = 0;
        while(i<=size)
        {
            this.array[i] = Math.floor(Math.random() * (upper - lower) + lower);
            i++;
        }
        return this.array;
    }
}