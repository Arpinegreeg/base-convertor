module.exports = {
	convertToBinary: function(n) {
        s = "";
        if(0==n)
        {
            s = "0";
            return s;
        }
        while (0!=n)
        {
            s = n%2 + s;
            n = Math.floor(n/2);
        }
        return s;
    },
    convertToHexa: function(n) {
        s = "";
        if(0==n)
        {
            s = "0";
            return s;
        }
        while (0!=n)
        { 
            switch(n%16) 
            {
                case 10:
                    s = "A" + s;
                    break;
                case 11: 
                    s = "B" + s;
                    break;
                case 12: 
                    s = "C" + s;
                    break;
                case 13: 
                    s = "D" + s;
                    break;
                case 14: 
                    s = "E" + s;
                    break;
                case 15: 
                    s = "F" + s;
                    break;
                default:
                    s = n%16 + s;
                    break;
            }
            n = Math.floor(n/16);
        }
        return s;
    }
};