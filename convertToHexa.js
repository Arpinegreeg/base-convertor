module.exports = {
	convertToHexa: function(n) {
        array = [];
        if(n==0)
        {
            array.push(0);
            return array;
        }
        while (n!=0)
        { 
            switch(n%16) 
            {
                case 10:
                    array.unshift('A'); 
                    break;
                case 11: 
                    array.unshift('B');
                    break;
                case 12: 
                    array.unshift('C');
                    break;
                case 13: 
                    array.unshift('D');
                    break;
                case 14: 
                    array.unshift('E');
                    break;
                case 15: 
                    array.unshift('F');
                    break;
                default:
                    array.unshift(n%16);
            }
            n = Math.floor(n/16);
        }
        return array;
    }
}