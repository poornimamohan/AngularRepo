/**
 * 
 */


function go()
{
	var i;
	
	var j;
	
	var prime;
	
	for(i=2; i<=3; i++){
		alert(i);
	}
	
	for(i=i;i<100;i++){
		prime = true;
		for (j=2;j<i;j++){
			if(i%j==0){
				prime=false;
				break;
			}
		}
		if (prime==true){alert(i);}
	}
	

}

go();
