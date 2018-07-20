
function calcDate(date1,date2) {
    

    var todayYear = date1.getFullYear();
    var birthDayYear = date2.getFullYear();

    var todayMonth = date1.getMonth() + 1 ;
    var birthDayMonth = date2.getMonth() + 1 ;

    var todayDay = date1.getDate();
    var birthdayDay = date2.getDate();


    if( todayDay < birthdayDay ){
    	todayDay+=30;
    	todayMonth--;

    }
    if( todayMonth < birthDayMonth ){
    	todayMonth+=12;
    	todayYear--;
    }

    var year = todayYear - birthDayYear;
    var month = todayMonth - birthDayMonth;
    var day = todayDay - birthdayDay;

    


    message = year +" years "+month+" months "+day+" days";




    return message
}


function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}

window.onload = function()
{
	
	chrome.storage.sync.get( 'bday', 
		function(data)
		{
			if( typeof data.bday == 'undefined' ){
				var s = "Set Your Birthday! <br> Right click the icon then select 'options' "


				document.getElementById('result').innerHTML=s;
			}
			else{
					var today = new Date();
					var birthday = parseDate( data.bday );




					document.getElementById('result').innerHTML= calcDate( today, birthday );		


			}
		}

	 );


}
