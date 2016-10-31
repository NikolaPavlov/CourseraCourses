function bad_choice() {
    return alert('This is a bad choice');
}

function good_choice() {
    return alert('this is a good choice');
}


var time_to_sleep;
function start_timer() {
    time_to_sleep = prompt('How many seconds do you want to sleep?');
    the_timer = setTimeout(show_wake_up_msg(), time_to_sleep);
}

function show_wake_up_msg() {
    alert('Wake up timer finished!');
}


function set_timer() {
    the_image_to_move = document.getElementById('fb_icon');
    x_position=x_position+1;
    the_image_to_move.style.left=x_position;
    the_timer = setTimeout(set_timer, 50);
}
