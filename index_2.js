$(document).ready(function() {
    $("#calcButton").click(function doCalc() {
        var change = 0; // <-- is undefined in your example
        var saleTotal = +$('#saleTotalInput').val();
        var paidTotal = +$('#customerCashInput').val();
        // var change = paidTotal - saleTotal;
        var change = Math.round((paidTotal - saleTotal) * 100) / 100;
        // var dollars = 0;


        $("#totalChangeP").text(" $" + change);

        // getting the whole number value for the change 
        var dollars = parseInt(change);
        console.log(dollars);
        // subtracting whole numbers(dollar amount) from the total change given to see the cent value
        var centsLeft = parseFloat(change - dollars);
        //defining the coin object with value
        var coin = {
            quarters: .25,
            dimes: .10,
            nickels: .05,
            pennies: .01
        };
        //opening up a result object to store the calucualted objects as they are iterated through
        var results = {};
        //a for in loop that access the properties in the coin object
        for (var prop in coin) {

            console.log(prop);
            results[prop] = parseInt(centsLeft / coin[prop]);
            // centsLeft -= results[prop] * coin[prop];

            var subtract = (results[prop] * coin[prop]); //      (results[prop] * coin[prop])
            centsLeft -= subtract;
            console.log(centsLeft);
        };
        $("#quarters").text(results.quarters);
        $("#dimes").text(results.dimes);
        $("#nickels").text(results.nickels);
        $("#pennies").text(results.pennies);


    });


});
