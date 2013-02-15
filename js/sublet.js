//Sublet App for the New TuftsLife
//This code is (C)2013 Fred Teumer

function Listing() {
	
	//private function to initialize a new Listing
	var init = function(lister, address, description, images, rent, contact) {}
	
	//a unique id is attached to each listing, this is private
	var id;
	
	//this variable says whether this has been filled and will remove this from the list
	//if a specific sublet is 'filled'
	var filled;
	
	//group of easy to use vars that hold address
	this.lister;
	this.add_st;
	this.add_city;
	this.add_zip;
	
	this.description;
	//images is an array of up to (5) images of the residence
	this.images;
	this.rent;
	//contact information, must list email, phone is optional
	this.email;
	this.phone;
	
	//public function used to view a listing
	this.view = function() {}
	
	this.list = function() {}
	
}

var allListings;
 
function init() {
	
	//sidebar
    var add = "<p class=\"button\" id=\"addButton\" onclick=\"openPopup(this, \'add\')\">Add Listing</p>";
    var rem = "<p class=\"button\" id=\"remButton\" \
      onclick=\"openPopup(this, \'rem\')\">Remove Listing</p>";
    $('#sidebar').append(add);
    $('#sidebar').append(rem);
    
   
    
    if(allListings == null){
	    $('#listings').append("<p>There doesn't seem to be anything here...</p>");
    }
	
}

function openPopup(item, type) {
	if(type == 'add'){
		$('#popupTitle').html("List Your Apartment");
		$('#popupBody').html("<form class=\"iform\" id=\"addForm\" action=\"\"> \
            Address: <input type=\"text\" maxlength=\"40\" name=\"address\" /><br /> \
            City/Zip: <input type=\"text\" name=\"city\" maxlength=\"25\" /> \
            <input type=\"text\" id=\"fzip\" name=\"zip\" maxlength=\"5\"/><br /> \
            Description*: <input type=\"text\" id=\"fdesc\" name=\"desc\" maxlength=\"250\" /><br /> \
            Rent: <input type=\"text\" id=\"frent\" name=\"rent\" maxlength=\"4\" /><br /> \
            Name: <input type=\"text\" name=\"uname\" maxlength=\"40\" /><br /> \
            Email: <input type=\"email\" name=\"email\" maxlength=\"40\" /><br /> \
            Phone*: <input type=\"text\" id=\"fphone\" name=\"phone\" maxlength=\"10\" /> \
        </form> \
        <p class=\"tiny\">* = optional field.</p>");
		$('#popup').modal();
	} 
	else if(type == 'rem'){
		$('#popupTitle').html("Remove Your Listing");
		$('#popupBody').html("<form class=\iform\" id=\"remForm\" action=\"\"> \
			Secret Code: <input type=\"text\" size=\"7\" id=\"frem\" name=\"remove\" /> \
			</form>");
		$('#popup').modal();
	} 
	else if(type == 'view'){
		$('#popupTitle').html($(item).html());
		$('#popup').modal();
	}
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