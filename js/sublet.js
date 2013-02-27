//Sublet App for the New TuftsLife
//This code is (C)2013 Fred Teumer

var allListings;

function init() {
	
	//sidebar
    var add = "<p class=\"button\" id=\"addButton\" onclick=\"openPopup(this, \'add\')\">Add Listing</p>";
    var rem = "<p class=\"button\" id=\"remButton\" \
      onclick=\"openPopup(this, \'rem\')\">Remove Listing</p>";
    $('#sidebar').append(add);
    $('#sidebar').append(rem);
    
   
    
    if(allListings == null){
	    
	    $('#listings').prepend('<div class=\'listing\' onclick=\'openPopup(this, \'view\')\' \
			id=\'LIST0\'</div>');
	    	
	   	$('#LIST0').html("<h3 class=\"listtitle\"> 29 Frederick Ave </h3>\
			<p class=\'rentsmall\'>$650\/mo</p> \
			<p class=\'citysmall\'>Medford 02155</p> \
			<p class=\'datesmall\'>6/1/2013-6/1/2014</p> \
			<p class=\'hidden\'>Fred T</p> \
			<p class=\'hidden\'>bob@bob.bob</p> \
			<p class=\'hidden\'>555.555.5555</p> \
			<p class=\'hidden\'>Great apartment, a bit far off campus!</p> ");
    }
	
}

function openPopup(item, type, more) {
	if(type == 'add'){
		$('#popupTitle').html("List Your Apartment");
		
		$('#popupBody').html("<form class=\"iform\" id=\"addForm\" action=\"\"> \
            Address*: <input type=\"text\" maxlength=\"40\" name=\"address\" /><br /> \
            City/Zip*: <input type=\"text\" name=\"city\" maxlength=\"25\" /> \
            <input type=\"text\" id=\"fzip\" name=\"zip\" maxlength=\"5\"/><br /> \
            Description: <textarea id=\"fdesc\" name=\"desc\" maxlength=\"250\" \
            rows=\"3\" cols=\"40\"></textarea> \
            Rent/Month: <input type=\"text\" id=\"frent\" name=\"rent\" maxlength=\"4\" /><br /> \
            Start Date* (MM/DD/YYYY): <input type=\"text\" class=\"ftwo\" name=\"startm\" \
            	maxlength=\"2\" /> \
            / <input type=\"text\" class=\"ftwo\" name=\"startd\" maxlength=\"2\" /> \
            / <input type=\"text\" class=\"ffour\" name=\"starty\" maxlength=\"4\" /><br /> \
            End Date* (MM/DD/YYYY): <input type=\"text\" class=\"ftwo\" name=\"endm\" maxlength=\"2\" /> \
            / <input type=\"text\" class=\"ftwo\" name=\"endd\" maxlength=\"2\" /> \
            / <input type=\"text\" class=\"ffour\" name=\"endy\" maxlength=\"4\" /><br /> \
            Name*: <input type=\"text\" name=\"uname\" maxlength=\"40\" /><br /> \
            Email*: <input type=\"email\" name=\"email\" maxlength=\"40\" /><br /> \
            Phone: <input type=\"text\" id=\"fphone\" name=\"phone\" maxlength=\"10\" /><br /> \
        </form>");
        
        $('#popupFoot').html("<button id=\"listButton\" class=\"btn btn-primary\" \
        	data-dismiss=\"modal\" aria-hidden=\"true\" onclick=\"createListing()\" >List</button>");
        	
		$('#popup').modal();
	} 
	else if(type == 'rem'){
		$('#popupTitle').html("Remove Your Listing");
		
		$('#popupBody').html("<form class=\iform\" id=\"remForm\" action=\"\"> \
			Secret Code: <input type=\"text\" size=\"7\" id=\"frem\" name=\"remove\" /> \
			</form>");
			
		$('#popupFoot').html("<button id=\"remButton\" class=\"btn btn-primary\" \
        	onclick=\"remListing()\" data-dismiss=\"modal\" aria-hidden=\"true\"> \
        	Remove Listing</button>");
        	
		$('#popup').modal();
	} 
	else if(type == 'view'){
		$('#popupTitle').html($(item).html());
		
		$('#popupFoot').html("<button id=\"closeButton\" class=\"btn btn-primary\" \
        	data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>");
        	
		$('#popup').modal();
	}
}

function createListing(){
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
	console.log(today);
	
	
	var st_add = $('#addForm').find('input[name="address"]').val();
	var city = $('#addForm').find('input[name="city"]').val();
	var zip = $('#addForm').find('input[name="zip"]').val(); 
	var desc = $('#addForm').find('input[name="desc"]').val();
	var rent = $('#addForm').find('input[name="rent"]').val(); 
	var startm = $('#addForm').find('input[name="startm"]').val();
	var startd = $('#addForm').find('input[name="startd"]').val();
	var starty = $('#addForm').find('input[name="starty"]').val();
	var endm = $('#addForm').find('input[name="endm"]').val();
	var endd = $('#addForm').find('input[name="endd"]').val();
	var endy = $('#addForm').find('input[name="endy"]').val();
	var name = $('#addForm').find('input[name="uname"]').val();
	var email = $('#addForm').find('input[name="email"]').val(); 
	var phone = $('#addForm').find('input[name="phone"]').val();
	
	var startdate = startm+'/'+startd+'/'+starty;
	var enddate = endm+'/'+endd+'/'+endy;
	
	if(st_add == "" || city == "" || zip  == "" || name == "" || email == "" || startm == "" ||
		startd == "" || starty == "" || endm == "" || endd == "" || endy == ""){
		alert("Please fill in required fields!\n\n(Required fields are marked with * )");
		return 0;
	}
	else{
		var nextID = "LIST"+(parseInt($('#listings').children(0).attr("id").substring(4))+1);
		$('#listings').prepend('<div class=\'listing\' onclick=\'openPopup(this, \'view\')\' \
			id=\''+nextID+'\'</div>');
	
		$('#'+nextID).html("<h3 class=\"listtitle\"> "+st_add+" </h3>\
			<p class=\'rentsmall\'>$"+rent+"\/mo</p> \
			<br /> \
			<p class=\'citysmall\'>"+city+" "+zip+"</p> \
			<p class=\'datesmall\'>"+startdate+" - "+enddate+"</p> \
			<p class=\'hidden\'>"+name+"</p> \
			<p class=\'hidden\'>"+email+"</p> \
			<p class=\'hidden\'>"+phone+"</p> \
			<p class=\'hidden\'>"+desc+"</p> ");
		
		return 1;
	}
}

function remListing(){
	var remID = $('#remForm').find('input[name="remove"]').val();
	if(remID == ""){
		return 0;
	}
	else{
		$('#LIST'+remID).remove();
		return 1;
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