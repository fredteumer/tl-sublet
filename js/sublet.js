//Sublet App for the New TuftsLife

function Listing() {
	
	//private function to initialize a new Listing
	var init = function() {}
	
	//a unique id is attached to each listing, this is private
	var id;
	
	//this variable says whether this has been filled and will remove this from the list
	//if a specific sublet is 'filled'
	var filled;
	
	this.lister;
	this.address;
	
	this.description;
	//images is an array of up to (5) images of the residence
	this.images;
	this.rent;
	//contact holds a phone number, email address or other contact info
	this.contact;
	
	//public function used to view a listing
	this.view = function() {}
	
	this.append = function() {}
	
	this
	
}

function displayList(id, aList) {
	$(id).html("");
	for (i in aList){
			var it = "<p class=\"categoryButton\" onclick=\"0\">" + aList[i] + "</p>";
   			$(id).append(it);
	}
}

function init() {
	 //sidebar
    var side_elems = ["Add Listing", "Remove Listing"];
    displayList("#sidebar", side_elems);
	
}

//existing js code
//dont touch
function evenOutChildren(divID) {
    var hei = 0;
    $(divID).children().each(function (x) {
        //$(this).attr("top","60%");
    });
}

function sizing() {
    var h = $(window).height() - 2*$("header").height();
    var w = $(window).width();
    var mar = parseInt($("#content").css("margin-top"),10);
    if(w > 767){ //desktop
    	$("#sidebarcol").height((h-(mar/2))+"px");
    	$("#leftpage").height((h-mar)+"px");
    	$("#rightpage").height((h-mar)+"px");
    	//$("#leftarrow").offset().top = ($("#leftpage").offset.top+$("#leftpage").height()/2);
    }
    else{ //mobile
    	$("#sidebarcol").height(6*parseInt($(".categoryButton").height(),10));
    	$("#leftpage").height("0px");
    	$("#rightpage").height("0px");
    }

}

$(window).load(init);
$(document).ready(sizing);
$(window).resize(sizing);