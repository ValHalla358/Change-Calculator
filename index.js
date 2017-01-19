$(document).ready(function() {
    $("#calcButton").click(function doCalc() {
        var change = 0; // <-- is undefined in your example
        var saleTotal = +$('#saleTotalInput').val();
        var paidTotal = +$('#customerCashInput').val();
        // var change = paidTotal - saleTotal;
        var change = (paidTotal - saleTotal).toFixed(2);

        $("#totalChangeP").append(" $" + change);

        var dollars = parseInt(change);


        var firstR = change - dollars;
        firstR = +firstR.toFixed(2);


        var quarters = firstR % .25; //this shows what remains after quarters are used
        quarters = +quarters.toFixed(2);

        var coveredByQuarters = firstR - quarters; //shows what was actually covered by quarters
        coveredByQuarters = +coveredByQuarters.toFixed(2); //this makes the equation set at 2 decimal points



        var quartersUsed = coveredByQuarters / .25; //this divides what was covered by the quarters into how many were used 
        $("#quarters").append(quartersUsed);

        var dimes = quarters % .10;
        dimes = +dimes.toFixed(2); //this shows what reamians after dimes are used

        var coveredByDimes = quarters - dimes; //this shows how much was covered by dimes
        coveredByDimes = +coveredByDimes.toFixed(2);

        var dimesUsed = coveredByDimes / .10; //this shows how many dimes were used
        $("#dimes").append(dimesUsed);


        var nickels = dimes % .05;
        nickels = +nickels.toFixed(2);
        var coveredByNickels = dimes - nickels; //this shows how much was covered by nickels
        coveredByNickels = +coveredByNickels.toFixed(2);

        var nickelsUsed = coveredByNickels / .05; //this shows how many nickels were used
        $("#nickels").append(nickelsUsed);




        var pennies = nickels % .01;
        pennies = +pennies.toFixed(2);
        var coveredByPennies = nickels - pennies; //this shows how much was covered by pennies
        coveredByPennies = +coveredByPennies.toFixed(2);

        var penniesUsed = coveredByPennies / .01; //this shows how many pennies were used
        $("#pennies").append(penniesUsed);


    });
    $("#clearButton").click(function() {
        $("#form-group").trigger('reset');
    });
});



/* while(change<=1.00){
	
	}
