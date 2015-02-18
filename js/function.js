$('.hamburger').on('click', function() {
    $('.menu').slideToggle();
});

$('.hamburger').on('click', function() {
    $('.logo').css('display', 'none');
});

//measure size of window
//take size of window
//set homePage height to window size


//set page-height to optimal height of window
function setPageHeight () {
	var windowHeight = $(window).height();
	var headerHeight = $('header').height();
	pageHeight = (windowHeight - headerHeight);
	$('.homePage').css('min-height', pageHeight + 'px');
};

//set initial page height on load
setPageHeight();

//resize the height of the page based on height of window
$(window).resize(setPageHeight);



function setIconHeight () {
	var iconWidth = $('.imageBlock').width();
	$('.imageBlock').css('height', iconWidth + 'px');
}

setIconHeight();

$(window).resize(setIconHeight);


function setServiceHeight () {
	var serviceWidth = $('.service').width();
	$('.service').css('height', serviceWidth + 'px');
};

setServiceHeight();

$(window).resize(setServiceHeight);




//get the height of each element
//if current element height is greater than previous element height
//set height of css to current height
heightsArray = [];

function heights(element){
  for(i = 0; i < element.length; i++) {
    element.height();
  	heightsArray.push(element.height())
return heightArray;
};
};

$('.service').heights;

console.log(heightsArray);





/*
var serviceBoxes = $('.service')

function getHeight (element) {
	element.height()
};
function setHeight () {	
	for (var i = 0; i <= serviceBoxes.length - 1; i++) {
		
		if getHeight(serviceBoxes[i]) >  0; [i]
	};
};
*/







//set height function
/*function setHeight (variable) {
	var setWidth = variable.width();
	variable.css('height', setWidth + 'px');
};

//setting var for element to be called
variable = $('.imageBlock')

//calling setHeight function on p elements
setHeight(variable);

//resizing the min-height according to width
$(window).resize(setHeight);

*/

/*function setFooterHeight () {
	var ulHeight = $('.footNav').height();
	$('.footCol').css('height', ulHeight + 'px');
}

setFooterHeight();
*/






//on page load select first problem block
// make problem block image bigger
// lengthen texts to fit across page
//make left problem statement smaller
//make right problem statement smaller
//on click move problem statements left (clockwise)
//bring new problem statement forward/larger

/*

var problemStatements = [
	$('#problemBlock1'),
	$('#problemBlock2'),
	$('#problemBlock3')
];

counter = 0;

$(document).ready(function(){
	problemStatements[0].removeClass('.problemBlock').addClass('mainProblem');
	problemStatements[1].removeClass('.problemBlock').addClass('leftSideProblem');
	problemStatements[2].removeClass('.problemBlock').addClass('rightSideProblem');
});

*/
/*

$('.problemPage').on('click', function(?, index) {
	counter++;
	problemStatements.each()
	var problemIndex = (counter + index) % problemStatements.length;

});

*/














