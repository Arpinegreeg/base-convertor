module.exports = {
	convertToBinary: function(n) {
        array = [];
        if(n==0)
        {
            array.push(0);
            return array;
        }
        while (n!=0)
        {
            array.unshift(n%2);
            n = Math.floor(n/2);
        }
        return array;
	},
	printArray: function(array) {
		for(let i=0; i<array.length; i++)
			process.stdout.write(array[i].toString());
	}
};