//define screen width and height
var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;

//declare arrays for each view
var viewList = ["aboutButton", "projectsButton", "contactButton"];
var viewPage = ["about", "projects", "contact"];
var viewTitle = ["Miguel Acevedo - Software Developer", "Projects by Miguel Acevedo", "Contact"];
var view = 0;

$(document).ready(function(){

    //on animeJS click remove div
    $('#anime').click(function () {
        $('#anime').remove();
    });


    //declare start view
    $('#about').show();
    $('#projects').hide();
    $('#contact').hide();
    if (w > 736){
        $("#aboutButton").css('padding', '1.4em');
    } else {
        $("#aboutButton").css('padding', '1em');
    }

    //define jquery methods for navbar
    $('#aboutButton').click(function () {
        var ratio = window.devicePixelRatio || 1;
        var w = screen.width * ratio;

        $('#about').show();
        document.getElementById('title').innerHTML = viewTitle[0];
        $('#projects').hide();
        $('#contact').hide();

        //for mobile
        if (w <= 736){
            $('#aboutButton').css('padding', '1em');
            $('#projectsButton').css('padding', '0.8em');
            $('#contactButton').css('padding', '0.8em');
        } else {
            $('#aboutButton').css('padding', '1.4em');
            $('#projectsButton').css('padding', '1em');
            $('#contactButton').css('padding', '1em');
        }

        view = 0;
    });

    $('#projectsButton').click(function () {
        var ratio = window.devicePixelRatio || 1;
        var w = screen.width * ratio;

        $('#about').hide();
        $('#projects').show();
        document.getElementById('title').innerHTML = viewTitle[1];
        $('#contact').hide();

        //for mobile
        if (w <= 736){
            $('#aboutButton').css('padding', '0.8em');
            $('#projectsButton').css('padding', '1em');
            $('#contactButton').css('padding', '0.8em');
        } else {
            $('#aboutButton').css('padding', '1em');
            $('#projectsButton').css('padding', '1.4em');
            $('#contactButton').css('padding', '1em');
        }

        view = 1;
    });

    $('#contactButton').click(function () {
        var ratio = window.devicePixelRatio || 1;
        var w = screen.width * ratio;

        $('#about').hide();
        $('#projects').hide();
        $('#contact').show();
        document.getElementById('title').innerHTML = viewTitle[2];

        //for mobile
        if (w <= 736){
            $('#aboutButton').css('padding', '0.8em');
            $('#projectsButton').css('padding', '0.8em');
            $('#contactButton').css('padding', '1em');
        } else {
            $('#aboutButton').css('padding', '1em');
            $('#projectsButton').css('padding', '1em');
            $('#contactButton').css('padding', '1.4em');
        }

        view = 2;
    });


    $('#hoverGit').mouseenter(function () {
        var reverseAnim = anime({
            targets: '#github',
            scale: {
                value: 2,
                duration: 1000,
                direction: 'alternate'
            }
        });
        reverseAnime.play();
    });

    $('#hoverResume').mouseenter(function () {
        var reverseAnim = anime({
            targets: '#doc',
            scale: {
                value: 2,
                duration: 1000,
                direction: 'alternate'
            }
        });
        reverseAnime.play();
    });

    $('#hoverIn').mouseenter(function () {
        var reverseAnim = anime({
            targets: '#in',
            scale: {
                value: 2,
                duration: 1000,
                direction: 'alternate'
            }
        });
        reverseAnime.play();
    });

    // $('#hoverGit').mouseout(function () {
    //     var reverseAnim = anime({
    //         targets: '#github',
    //         scale: {
    //             value: 2,
    //             duration: 1000,
    //             direction: 'alternate'
    //         }
    //     });
    //     reverseAnime.reverse();
    // });





});


//up function for navbar
function up() {
    if(view > 0){
        //take current view and decrement by one
        var prevId = "#" + viewPage[view];
        var prevButId  = "#" + viewList[view];
        $(prevId).hide();
        //for mobile
        if (w <= 736){
            $(prevButId).css('padding', '0.8em');
        } else {
            $(prevButId).css('padding', '1em');
        }
        view
        view--;
        var id = "#" + viewPage[view];
        var butId = "#" + viewList[view];
        $(id).show();
        document.getElementById('title').innerHTML = viewTitle[view];
        //for mobile
        if (w <= 736){
            $(butId).css('padding', '1em');
        } else {
            $(butId).css('padding', '1.4em');
        }
    }
}

//down function for navbar
function down() {
    if(view < 2){
        //take current view and increment by one
        var prevPageId = "#" + viewPage[view];
        var prevButId  = "#" + viewList[view];
        $(prevPageId).hide();
        //for mobile
        if (w <= 736){
            $(prevButId).css('padding', '0.8em');
        } else {
            $(prevButId).css('padding', '1em');
        }
        view++;
        var id = "#" + viewPage[view];
        var butId = "#" + viewList[view];
        $(id).show();
        document.getElementById('title').innerHTML = viewTitle[view];
        //for mobile
        if (w <= 736){
            $(butId).css('padding', '1em');
        } else {
            $(butId).css('padding', '1.4em');
        }
    }
}




var array = ["let", "developer", "=", "'Miguel Acevedo'", ";"];
var classN = ['first', 'second', 'third', 'fourth', 'fifth'];



setTimeout(function() {
    $('#anime').fadeOut('slow');
}, 15000); // <-- time in milliseconds


for (var i in array){
    var div = document.createElement('div');
    div.innerHTML = array[i];
    div.classList.add(classN[i]);
    document.getElementById('anime').appendChild(div);
}



    anime({
        targets: '.first',
        translateY: [
            { value: -1000, duration: 200 },
            { value: 0, duration: 10000 },
            { value: -500, duration: 1000 }
        ],
        // rotate: {
        //     value: '1turn',
        //     easing: 'easeInOutSine'
        // },
        scale: {
            value: 0.5,
            duration: 7000,
            loop: true,
            easing: [0.645, 0.045, 0.355, 1],
            direction: 'alternate'
        }
    });

    anime({
        targets: '.second',
        translateY: [
            { value: 2000, duration: 400, delay: 300 },
            { value: 0, duration: 10000 },
            { value: -500, duration: 1000 }
        ]
        // rotate: {
        //     value: '1turn',
        //     easing: 'easeInOutSine'
        // }
    });

    anime({
        targets: '.third',
        translateY: [
            { value: -5000, duration: 600, delay: 600 },
            { value: 0, duration: 10000 },
            { value: -500, duration: 1000 }
        ],
        // rotate: {
        //     value: '1turn',
        //     easing: 'easeInOutSine'
        // },
        scale: {
            value: 0.5,
            duration: 7000,
            loop: true,
            easing: [0.645, 0.045, 0.355, 1],
            direction: 'alternate'
        }
    });

    anime({
        targets: '.fourth',
        translateY: [
            { value: 300, duration: 1000, delay: 1500 },
            { value: 0, duration: 10000 },
            { value: -500, duration: 1000 }
        ]
        // rotate: {
        //     value: '1turn',
        //     easing: 'easeInOutSine'
        // }
    });

    anime({
        targets: '.fifth',
        translateY: [
            { value: -4000, duration: 1000, delay: 1000 },
            { value: 0, duration: 10000 },
            { value: -500, duration: 1000 }
        ],
        // rotate: {
        //     value: '1turn',
        //     easing: 'easeInOutSine'
        // },
        scale: {
            value: 0.5,
            duration: 7000,
            loop: true,
            easing: [0.645, 0.045, 0.355, 1],
            direction: 'alternate'
        }
    });
