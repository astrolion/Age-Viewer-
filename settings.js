
window.onload = function()
{

function test() {
	var bday = document.getElementById('dateInput').value;
	console.log(bday);
	if( bday ){

		chrome.storage.sync.set( {'bday' : bday }, 
			function(){
				close();
		});

		alert("Birthday : "+bday+" saved!");


	}
	else{
		alert("Input a valid Birthday");
	}
}


document.getElementById('btn').onclick = test;



}