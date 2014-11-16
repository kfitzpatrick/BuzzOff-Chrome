

function buzzoff(){

	var urlList = $.getJSON('block.JSON');

	var stories = document.querySelectorAll("._4-u2");
	var story;
	for(var i=0; i < stories.length; i++){
		story = stories[i];
		killList(story, urlList);
		}
	}

//Creates array of stories and checks for blacklisted urls, sends blacklisted urls to killLink
function killItems(item){
	var links = item.getElementsByTagName("a");
	for(var k=0; k < links.length; k++){
		var link = links[k];
		var href = link.href.toLowerCase();
		// decide which type of link it is
		var linkType = null;
		if (href.indexOf("facebook.com/buzzfeed") !== -1 ){
		    linkType = "page link";
		    }
		else if (href.indexOf("bzfd.it") !== -1 ){
		    linkType = "shortened link";
		    }
		else if (href.indexOf("buzzfeed.com") !== -1 ){
		   	linkType = "regular link";
		}
		// kill the story that contains this link
		if(linkType !== null){
	      killLink(item);
	    }
	  }

}

function killList(urls, item)
{
	var links = item.getElementsByTagName("a");
	var linkfound= false;
	var i=0;
	alert(urls.length)
	while (linkfound === false)
	{
		alert(urls[i]);
		if (i===urls.length) break;
		if (item.href.indexOf(urls[i]) !== -1 ){
		    linkfound=true;
		    } 
		 i++;
	}

	if(linkfound)
	{
		killLink(item);
	}

}


//Hides the story containing the link with a blacklisted string
function killLink(item){

	item.style.opacity = "0.0";
	item.style.display = "None";

}


buzzoff();
document.addEventListener("scroll", buzzoff);

