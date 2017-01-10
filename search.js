//Matt Meuwissen 1/10/2017

	//Different onClick functions for different websites
function musicOnClick(info, tab) {
	//sTextMusic gets selcted text
    var sTextMusic = info.selectionText;
	//Adds the highlighted text to the search Url for Google Music
  var urlMusic = "https://play.google.com/music/listen#/sr/" + encodeURIComponent(sTextMusic);  
	//Opens a new window with the modified Url
  window.open(urlMusic, '_blank');
}
function netflixOnClick(info, tab) {
    var sTextNetflix = info.selectionText;
  var urlNetflix = "https://www.netflix.com/search?q=" + encodeURIComponent(sTextNetflix);  
  window.open(urlNetflix , '_blank');
}
function amazonOnClick(info, tab) {
    var sTextAmazon = info.selectionText;
  var urlAmazon = "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dprime-instant-video&field-keywords=" + encodeURIComponent(sTextAmazon);  
  window.open(urlAmazon , '_blank');
}

function pirateOnClick(info, tab) {
    var sTextPirate = info.selectionText;
  var urlPirate = "https://thepiratebay.org/search/" + encodeURIComponent(sTextPirate);  
  window.open(urlPirate , '_blank');
}

// Create one menu item for each search engine type.
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var childMusic = chrome.contextMenus.create({"title": "Google Music Search", "contexts":[context],"onclick": musicOnClick});
	var childNetflix = chrome.contextMenus.create({"title": "Netflix Search","contexts":[context], "onclick": netflixOnClick});
	var childAmazon = chrome.contextMenus.create({"title": "Amazon Search","contexts":[context], "onclick": amazonOnClick});
	var childPirate = chrome.contextMenus.create({"title": "Pirate Search","contexts":[context], "onclick": pirateOnClick});
};