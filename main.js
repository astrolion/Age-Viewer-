
function calcDate(date1,date2) {
    

    var todayYear = date1.getFullYear();
    var birthDayYear = date2.getFullYear();

    var todayMonth = date1.getMonth();
    var birthDayMonth = date2.getMonth();

    var year = todayYear - birthDayYear;

    if( todayMonth < birthDayMonth )
    {
    	todayMonth += 12;
    	year--;

    }

    var month = todayMonth - birthDayMonth;

    message = year +":"+month;




    return message
}


window.onload = function()
{
	var today = new Date();
	var birthDay = new Date(1992,06,01);

	var a = calcDate( today, birthDay );

	document.getElementById('result').innerHTML=a;


}