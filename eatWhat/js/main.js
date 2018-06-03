

$(document).ready(function(){
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var outerWidth = window.outerWidth;
	var count = 0;
	var restaurant = shuffle([
		"王奶奶",
		"雞飯",
		"Zucca",
		"飯堂/飯盒",
		"豬雜湯",
		"The toast",
		"Brazor",
		"麻辣香鍋",
		"Mcdonald or KFC",
		"喇沙",
		"寶貝拉麵",
		"義大利麵",
		"CS",
		"雲吞麵/粿條湯",
		"KSL",
		"飯堂/飯盒"
	])
	if(outerWidth < 500){
		createFields(16, 'item', 100);
	} else{
		createFields(16, 'item', 155);
	}
	$(".rotate").click(function(){
		var random = Math.random() * 360 * 20;
		count += random;
		$(".wheel").css("transform", "rotate(" + count + "deg)");
	});

	function createFields(numberOfItems, className, radius) {
	    var container = $('.wheel');
	    for(var i = 0; i < +numberOfItems; i++) {
	        $('<div/>', {
	            'class': 'field ' + className,
	            'text': restaurant[i]
	        }).appendTo(container);
	    }

	    var fields = $('.' + className), 
	        container = $('.wheel'),
	        width = container.width(), 
	        height = container.height(),
	        angle = 0, 
	        count = 0,
	        step = (2*Math.PI) / fields.length;
	   
	    fields.each(function() {
	        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
	        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
	        $(this).css({
	            left: x + 'px',
	            top: y + 'px',
	            transform: 'rotate(' + count * (360/16) + 'deg)'
	        });
	        angle += step;
	        count += 1
	    });
	}
})