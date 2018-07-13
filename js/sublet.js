//Sublet App for the New TuftsLife
//This code is (C)2013 Fred Teumer

//testing new commit

function init() {
	
	//sidebar
    var add = "<p class=\"button\" id=\"addButton\" onclick=\"openPopup(this, \'add\')\">Add Listing</p>";
    var rem = "<p class=\"button\" id=\"remButton\" \
      onclick=\"openPopup(this, \'rem\')\">Remove Listing</p>";
    $('#sidebar').append(add);
    $('#sidebar').append(rem);
    
   
    
	    
	$('#listings').prepend('<div class=\'listing\' onclick=\'openPopup(this, \"view\")\' \
		id=\'LIST0\'</div>');
	    	
	$('#LIST0').html("<h3 class=\"listtitle\">100 Demo Lane</h3>\
		<p class=\'rentsmall\'>FREE\/mo</p> \
		<p class=\'citysmall\'>Medford 02155</p> \
		<p class=\'datesmall\'>06/01/9999-06/01/0000</p> \
		<p class=\'hidden\'>Demo Guy</p> \
		<p class=\'hidden\'>demoguy@gmail.com</p> \
		<p class=\'hidden\'>555.guy.demo</p> \
		<p class=\'hidden\'>Welcome to the Sublet App! Be sure to include visuals by uploading \
		an image of your apartment to a site like imgur! Happy Hunting!</p> \
		<p class=\'hidden\'>http://www.clker.com/cliparts/l/j/T/V/5/v/home-icon-md.png</p> \
		<p class=\'hidden\'>02/26/2013</p>");
	
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
            Phone: <input type=\"text\" id=\"fphone\" name=\"phone\" maxlength=\"10\" /> \
            Image: <input type=\"text\" id=\"fimg\" name=\"img\" /> \
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
		$('#popupTitle').html($(item).children().eq(0).html());
		
		$('#popupBody').html("\
			<h3 class=\"rentlarge\">"+$(item).children().eq(1).html()+"</h3>\
			<p class=\'datefull\'>"+$(item).children().eq(3).html()+"</p> \
			<p class=\'cityreg\'>"+$(item).children().eq(2).html()+"</p> \
			<p class=\'namereg\'>Contact: "+$(item).children().eq(4).html()+"</p> \
			<p class=\'emailreg\'>"+$(item).children().eq(5).html()+"</p> \
			<p class=\'phonereg\'>"+$(item).children().eq(6).html()+"</p> \
			<p class=\'descreg\'>"+$(item).children().eq(7).html()+"</p> \
			<a class=\'imlink\' href=\'"+$(item).children().eq(8).html()+"\'><img class=\'pic\' \
			src=\'"+$(item).children().eq(8).html()+"\' alt=\'uploaded image\'/></a> \
			");
		
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
	var img = $('#addForm').find('input[name="img"]').val();
	
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
			<p class=\'citysmall\'>"+city+" "+zip+"</p> \
			<p class=\'datesmall\'>"+startdate+" - "+enddate+"</p> \
			<p class=\'hidden\'>"+name+"</p> \
			<p class=\'hidden\'>"+email+"</p> \
			<p class=\'hidden\'>"+phone+"</p> \
			<p class=\'hidden\'>"+desc+"</p> \
			<p class=\'hidden\'>"+today+"</p> \
			<p class=\'hidden\'>"+img+"</p>");
		
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