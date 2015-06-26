/**
 * 
 */

function stringFind()
{
 var test_String="abcabcdefahijbc";
	 var i=0;
 	var j, cnt_Char;
 	var tested_String="";
 	
 	alert("outside first while");
 	
 while(i<test_String.length){
	 
	 j=test_String.length-1;
	 cnt_Char = 0;
	 		if (tested_String.match(test_String.charAt(i))==null){
		 		 while(j>=0){
				 if(test_String.charAt(i)==test_String.charAt(j))
					 {
					 	cnt_Char++;
					 	tested_String=test_String.charAt(i);
					 }
				 j--;
				 }
			 alert(test_String.charAt(i) + " appears " + cnt_Char + " times ");			 
		 }
 	}
	 
 }
 	
}

stringFind();