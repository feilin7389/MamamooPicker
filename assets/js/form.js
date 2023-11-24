 /*
  * Name: Fei Lin
  * Date: 03/06/2021
  * Project 1 - ISTE-340
  */


//variables
var num = 0;
var sumbit;
var selectDiv;

var count;
var div;
var time;
var img;

var video;
var source1; 
var source2;
var main;


//Create an array of images 
var imageArray = ["1", "2","3","4"];
		
		
		
	/*
	 *This function will remove element by class name.
	*/		
function removeElementsByClass(className){
	var elements = document.getElementsByClassName(className);
	while(elements.length > 0){
    	elements[0].parentNode.removeChild(elements[0]);
	}
}



   /*
	 *  This function will create the  body of the html
	*/	
function createform(){

		// create the main tag to the body
		main = document.createElement('main');
		
        document.body.append(main);
		
		
		
		// create h1 inside the main tag
		var h1 = document.createElement('h1');
        var title = document.createTextNode("Mamamoo");
        h1.appendChild(title);
        main.appendChild(h1);
        
      
        // create the p inside the main tag and under the h1
		var sub = document.createElement('p');
        var subtitle = document.createTextNode("From the below you can hear each member’s solo music, and click submit for which music your like the most");
        sub.id = "subtitle";
        sub.appendChild(subtitle);
        main.appendChild(sub);
		
		// create the form 
		var form = document.createElement("form");
		form.id = "form";
		form.setAttribute("onsubmit", "storeInLocalStorage()");// when user click submit it will storage in local storage
		
		
		//create text input 
		var name = document.createElement('input');
		name.type = "text";
		name.id = "name";
		
	
		
		//create select div
        selectDiv = document.createElement("div");
        selectDiv.id ="selectDiv";
        
        
		
        //create h3 tag
        var h3 = document.createElement('h3');
        var nametitle = document.createTextNode("Your Name: ");
        h3.appendChild(nametitle);
        
        
        //let form inside the main
        main.appendChild(form);
        
        
        //let user input and selection inside the main
        form.appendChild(h3);
        form.appendChild(name);
        form.appendChild(selectDiv);
		
    	
		createSelectElement("Main");//create the selection
		
		//submit button
		var sumbit = document.createElement('input');
		sumbit.type = "submit";
		sumbit.id = "submit";
		sumbit.value = "submit";
		
		
		//clear button 
		var clear = document.createElement('button');
		clear.type = "button";
		
		
		// display data in local storage
		displayStorage();	
		
		
		//create div to store image and video 
		img = document.createElement("img"); 
		div = document.createElement("div");
		div.appendChild(img);
 		form.appendChild(div);
 		
 		var cleartext = document.createTextNode("Clear");
        clear.appendChild(cleartext);
		clear.id = "clear";
		clear.setAttribute("onclick", "clearLocalStorage()");//clear data when user click
 		
 					
 					
		form.appendChild(sumbit);
		
		main.appendChild(clear);
		
		

}//createForm


/*
 *  This function will clear the local storage and reload the website.
*/	
function clearLocalStorage(){
	localStorage.clear();
	location.reload();
}//Clear


/*
 *  This function will validate the user input.
 *  return ture or false to check user input empty or didn't select the option
*/	
function vaildform(){
	var isvalid=true;
 	var class0 = document.getElementsByClassName('0');
 	var class1 = document.getElementsByClassName('1');
 	var class2 = document.getElementsByClassName('2');

	// check name
	if(document.getElementById("name").value.trim().length == 0){
		alert("please enter your name");
		isvalid=false;
	}
    
	// check option 1
    else if(class0[1].value == 'Select an Option'){
		alert("please select the member's position");
		isvalid=false;
	}
	
	// check option 2
    else if(class1[1].value == 'Select an Option'){
		alert("please select the member");
		isvalid=false;
	}
	
	// check option 3
    else if(class2[1].value == 'Select an Option'){
		alert("please select the music your like to listen");
		isvalid=false;
	}
	
	
	else{
       isvalid=true;
    }
    
    return isvalid;
	   
}//valid

/*
 *  This function will store data as array in the local storage if user input is validate
 * and use the time as the key making it unique.  
*/	
function storeInLocalStorage(){
		if (vaildform()){
			// get time
			var date = new Date();
			var n = date.getTime();
			
			// get user data
			var a = document.getElementById("name").value;
			var b = document.getElementsByClassName("0")[1].value;
			var c = document.getElementsByClassName("1")[1].value;
			var d = document.getElementsByClassName("2")[1].value;
			var e = [a,b,c,d];
			
			//storage in local storage
			localStorage.setItem(n,JSON.stringify(e));
	
		}

}//store    


/*
 *  This function will display every data in the local storage. 
*/	
function displayStorage(){


	var h3 = document.createElement('h3');
    var nametitle = document.createTextNode("Information that store in Local Storage");
    h3.appendChild(nametitle);
    main.appendChild(h3);
    
    
	for (var i = 0; i < localStorage.length; i++){
			
			//name
			var p = document.createElement('p');
        	var data = document.createTextNode("Name: " + JSON.parse(localStorage.getItem(localStorage.key(i)))[0]);
       		p.appendChild(data);
			main.appendChild(p);
			
			//option1
			p = document.createElement('p');
        	data = document.createTextNode("Member's Position: " + JSON.parse(localStorage.getItem(localStorage.key(i)))[1]);
       		p.appendChild(data);
			main.appendChild(p);
			
			///option2
			p = document.createElement('p');
        	data = document.createTextNode("Member: " + JSON.parse(localStorage.getItem(localStorage.key(i)))[2]);
       		p.appendChild(data);
			main.appendChild(p);
			
			
			//option3
			p = document.createElement('p');
        	data = document.createTextNode("Solo Music: " + JSON.parse(localStorage.getItem(localStorage.key(i)))[3]);
       		p.appendChild(data);
			main.appendChild(p);

			//create line to sperate the data
	        var br = document.createElement('p');
			var line = document.createTextNode("-----------------------------------");
			br.appendChild(line);
			main.appendChild(br);	
	}
	
} //display
 
 
/*
 *  This function will create the selection and update the selection by user input
*/	      
function createSelectElement(dataKey){
	const choiceData = selectInfo.choices;
	const dataLength = Object.keys(choiceData).length;
    		
	var countnodeDe = 0;
	for (var i = 0; i < dataLength; i++) {
		// If choice does not match key, skip this data point
		if (choiceData[i].key != dataKey)
    		continue;
        		
        		
		// Creates a header to label the specific select menu
		var h2 = document.createElement('h2');
		var textNode = document.createTextNode(choiceData[i].description);
		h2.className = choiceData[i].depth;
		h2.appendChild(textNode);
		selectDiv.appendChild(h2);
        
		// Creates the select list element
		var selectList = document.createElement('select');
		selectList.id = choiceData[i].key;
		selectList.name = choiceData[i].description;
		selectList.className = choiceData[i].depth;
		selectDiv.appendChild(selectList);
        
		// Creates null Select option
		var nullOption = document.createElement('option');
		nullOption.text = "Select an Option";
		nullOption.selected = this;
		nullOption.disabled = true;
		selectList.appendChild(nullOption);                
        
		 // Creates option 1
		var newOption1 = document.createElement('option');
		newOption1.value = choiceData[i].option_1;
		newOption1.text = choiceData[i].option_1;
		selectList.appendChild(newOption1);
        
		 // Creates option 2
		var newOption2 = document.createElement('option');
		newOption2.value = choiceData[i].option_2;
		newOption2.text = choiceData[i].option_2;
		selectList.appendChild(newOption2);
                
                
		// Hooks up an event to reload the choices whenever the select value is changed
		selectList.addEventListener("change", function () {
    		this.selectedOptions;
    	

                	
			// call a function to remove select lists if necessary
	 		selectInfo.choices.forEach(element =>{
				if(element.key == selectList.value){
					var depth = element.depth;
					
					// remove the select list
					if (depth <= num){
						if (depth == "1"){
							clearInterval(time);
							removeElementsByClass("2");
							img = document.createElement("img");
							div.appendChild(img);
							removeElementsByClass(depth);
					
						}
						if (depth == "2"){
							clearInterval(time);
							removeElementsByClass(depth);
							img = document.createElement("img");
							div.appendChild(img);
								
						}	
					}
					//display image slideshow by user choice
					if ( depth == "2" ){
						putImage();
					}
					num = element.depth;
					
					//create new selection
					createSelectElement(element.key);	
				}//key,value
			}); // selectionInfo
			
			//display music video by user choice
			if ( num == "2"){
				putVideo();
			}
	
    	});//addActionEvent
	}// for 
	
	
}// create Element list


/*
 *  This function will remove the image slideshow and change it to music video
*/
function putVideo(){
	// create video tag
	video = document.createElement("video"); 
	source1 = document.createElement("source"); 
	source2 = document.createElement("source");
	source1.id = "source1";
	source2.id ="source2";
	video.controls = "controls";
	video.className = "2";
		
		// check each choice user make
		if (document.getElementsByClassName("2")[1].value == "Spit It Out"){ 
			document.getElementById("slideshow").remove();//remove
			clearInterval(time);//stop slidshow
			
			// put video
			video.id = "slideshow";
			source1.src = "assets/music/spititout.mp4";
			source1.type = "video/mp4";
		
			source2.src = "assets/music/spititout.ogg";
			source2.type = "video/ogg";
		
		
		
			video.appendChild(source1);
			video.appendChild(source2);
			div.appendChild(video);
		}
		if (document.getElementsByClassName("2")[1].value == "Ddun Ddun Ddun"){ 
			document.getElementById("slideshow").remove();//remove
			clearInterval(time);//stop slidshow
		
			//put video
			video.id = "slideshow";
			source1.src = "assets/music/ddun.mp4";
			source1.type = "video/mp4";
		
			source2.src = "assets/music/ddun.ogg";
			source2.type = "video/ogg";
		
		
		
			video.appendChild(source1);
			video.appendChild(source2);
			div.appendChild(video);
		}
		if (document.getElementsByClassName("2")[1].value == "Goodbye"){ 
			document.getElementById("slideshow").remove();
			clearInterval(time);//stop slidshow
		
			//put video
			video.id = "slideshow";
			source1.src = "assets/music/goodbye.mp4";
			source1.type = "video/mp4";
		
			source2.src = "assets/music/goodbye.ogg";
			source2.type = "video/ogg";
		
		
		
			video.appendChild(source1);
			video.appendChild(source2);
			div.appendChild(video);
		}
		if (document.getElementsByClassName("2")[1].value == "25(Twenty Five)"){ 
			document.getElementById("slideshow").remove();
			clearInterval(time);//stop slidshow
		
			//put video
			video.id = "slideshow";
			source1.src = "assets/music/twentyfive.mp4";
			source1.type = "video/mp4";
		
			source2.src = "assets/music/twentyfive.ogg";
			source2.type = "video/ogg";
		
		
		
			video.appendChild(source1);
			video.appendChild(source2);
			div.appendChild(video);
		}
		if (document.getElementsByClassName("2")[1].value == "Maria"){ 
			document.getElementById("slideshow").remove();
			clearInterval(time);//stop slidshow
			
			//put video
			video.id = "slideshow";
			source1.src = "assets/music/maria.mp4";
			source1.type = "video/mp4";
		
			source2.src = "assets/music/maria.ogg";
			source2.type = "video/ogg";
		
		
			video.appendChild(source1);
			video.appendChild(source2);
			div.appendChild(video);
		}
		if (document.getElementsByClassName("2")[1].value == "Nobody Else"){ 
			document.getElementById("slideshow").remove();
			clearInterval(time);//stop slidshow
		
		
			//put video
			video.id = "slideshow";
			source1.src = "assets/music/nobodyelse.mp4";
			source1.type = "video/mp4";
		
			source2.src = "assets/music/nobodyelse.ogg";
			source2.type = "video/ogg";
		
		
		
			video.appendChild(source1);
			video.appendChild(source2);
			div.appendChild(video);
		}
		if (document.getElementsByClassName("2")[1].value == "Selfish"){ 
			document.getElementById("slideshow").remove();
			clearInterval(time);//stop slidshow
			
			//put video
			video.id = "slideshow";
			source1.src = "assets/music/selfish.mp4";
			source1.type = "video/mp4";
		
			source2.src = "assets/music/selfish.ogg";
			source2.type = "video/ogg";
		
		
		
			video.appendChild(source1);
			video.appendChild(source2);
			div.appendChild(video);
		}
		if (document.getElementsByClassName("2")[1].value == "Eclipse"){ 
			document.getElementById("slideshow").remove();
			clearInterval(time);//stop slidshow
			
			
			//put video
			video.id = "slideshow";
			source1.src = "assets/music/eclipse.mp4";
			source1.type = "video/mp4";
		
			source2.src = "assets/music/eclipse.ogg";
			source2.type = "video/ogg";
		
		
		
			video.appendChild(source1);
			video.appendChild(source2);
			div.appendChild(video);
		}

}// putVideo



/*
 *  This function will display image slideshow by change the image in the array and set time interval
*/

function putImage(){
	//Set wait time between slides in milliseconds 
	time = setInterval(runit, 3000); //call runit() function
	
	if (document.getElementsByClassName("1")[1].value == "Hwa Sa"){ 
		img.className = "2";
		
		//remove image from array
		imageArray.pop();
		imageArray.pop();
		imageArray.pop();
		imageArray.pop();
		img.src = "assets/images/hwasa1.jpg"; 
		img.id = "slideshow";
		
		//put image to the array				
		imageArray.push("assets/images/hwasa1.jpg");
		imageArray.push("assets/images/hwasa2.jpg");
		imageArray.push("assets/images/hwasa3.jpg");
		imageArray.push("assets/images/hwasa4.jpg");
	}
				
	if (document.getElementsByClassName("1")[1].value == "Moon Byul"){
		img.className = "2";
		
		//remove image from array
		imageArray.pop();
		imageArray.pop();
		imageArray.pop();
		imageArray.pop();
		img.src = "assets/images/moonbyul1.jpg"; 
		img.id = "slideshow";
			
		//put image to the array			
		imageArray.push("assets/images/moonbyul1.jpg");
		imageArray.push("assets/images/moonbyul2.jpg");
		imageArray.push("assets/images/moonbyul3.jpg");
		imageArray.push("assets/images/moonbyul4.jpg");
	}
				
	if (document.getElementsByClassName("1")[1].value == "Wheein"){
		img.className = "2";
		
		//remove image from array
		imageArray.pop();
		imageArray.pop();
		imageArray.pop();
		imageArray.pop();
		img.src = "assets/images/wheein1.jpg"; 
		img.id = "slideshow";
					
		//put image to the array	
		imageArray.push("assets/images/wheein1.jpg");
		imageArray.push("assets/images/wheein2.jpg");
		imageArray.push("assets/images/wheein3.jpg");
		imageArray.push("assets/images/wheein4.jpg");
	}
				
	if (document.getElementsByClassName("1")[1].value == "Solar"){
		img.className = "2"; 
		
		//remove image from array
		imageArray.pop();
		imageArray.pop();
		imageArray.pop();
		imageArray.pop();
		
		
		img.src = "assets/images/solar1.jpg"; 
		img.id = "slideshow";
			
		//put image to the array			
		imageArray.push("assets/images/solar1.jpg");
		imageArray.push("assets/images/solar2.jpg");
		imageArray.push("assets/images/solar3.jpg");
		imageArray.push("assets/images/solar4.jpg");
	}

}//putImage()


//Save total size of array to variable arraySize
var arraySize = imageArray.length;


var x = 1; //Used to count up to arraySize



/*
 *  This function runit play slideshow when called 
*/
function runit() {
    //Set image to next picture in image array
    document.getElementById('slideshow').src = imageArray[x];

    //Increase count by 1
    x++;

    //If count has reached the last index of imageArray than set count back to starting index.
    if (x === arraySize) {
        x = 0;
    }
}//runIt()





