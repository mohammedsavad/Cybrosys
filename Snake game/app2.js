let display = $('#game-display')
let ctx = $("#game-display")[0].getContext('2d');


let speed = 2
let tile_count = 20
let tile_size = 18
let headX = 10
let headY = 10
let Stop = false
let game_over = false
let eat = false
let appleX = Math.floor(Math.random()*tile_count)
let appleY = Math.floor(Math.random()*tile_count)

let score = 0
let highest_score = 0
let score_inc = 1
let bounes_inc = 9
let bounes = 1

let snake_tails = [{'x':9,'y':10},{'x':8,'y':10}]
snake_tails_temp ={}

let up_down = 0
let right_left = 0

$.fn.snake_move = function(){
    if(up_down!=0 || right_left!=0){
        for(let j = snake_tails.length-1;j>0;--j){
            snake_tails[j]['x'] = snake_tails[j-1]['x']
            snake_tails[j]['y'] = snake_tails[j-1]['y']
        }
        if(eat){
            snake_tails.push(snake_tails_temp)
            eat = false
        }
        snake_tails[0]['x'] = headX
        snake_tails[0]['y'] = headY
        headX += up_down
        headY += right_left
    }
}
$('#easy').click(function (e) { 
    $('#level').text('Easy')
    speed = 2
    score_inc = 1
    bounes_inc = 9
});

$('#medium').click(function (e) { 
    speed = 8
    score_inc = 3
    bounes_inc = 19
    $('#level').text('Medium')
});

$('#hard').click(function (e) { 
    speed = 16
    score_inc = 10
    bounes_inc = 39
    $('#level').text('Hard')
});
$('#up').mousedown(function (e) { 
    if(right_left==0){
        up_down=0
        right_left = -1
    }
});

$('#down').mousedown(function(e){
    if(right_left==0){
        up_down=0
        right_left = 1
    }
});

$('#right').mousedown(function(e){
    if(up_down==0){
    up_down=1
    right_left = 0
    }
});

$('#left').mousedown(function(e){
    if(up_down==0){
        up_down=-1
        right_left = 0
    }
});

$(document).on('keydown',function(e){
    if (e.keyCode == 38){
        if(right_left==0){
            up_down=0
            right_left = -1
        }
    }else if (e.keyCode == 37){
        if(up_down==0){
            up_down=-1
            right_left = 0
        }
    }else if (e.keyCode == 39){
        if(up_down==0){
            up_down=1
            right_left = 0
        }
    }else if ( e.keyCode == 40){
        if(right_left==0){
            up_down=0
            right_left = 1
        }
    }
})

$.fn.set_apple_position = function(){
    if(appleX == headX && appleY == headY){
        if(bounes == 5){
            score += bounes_inc
            bounes=1
        }
        appleX = Math.floor(Math.random()*tile_count)
        appleY = Math.floor(Math.random()*tile_count)
        score += score_inc
        if (score>highest_score){
            highest_score = score
            $('#h-s').text(score)
        }
        bounes +=1
        $('#n-s').text(score); 
        snake_tails_temp ={
            'x' : snake_tails[snake_tails.length-1]['x'],
            'y' : snake_tails[snake_tails.length-1]['y']
        }
        eat = true

    }
}


$.fn.screen_clear = function(){
    ctx.fillStyle= '#56F76C'
    ctx.fillRect(0,0,420,420)
}
$.fn.snake = function(){
    ctx.fillStyle = '#dc3545'
    ctx.fillRect(headX * tile_count,headY* tile_count, tile_size,tile_size)
    for(let i=0;i<snake_tails.length;++i){
        ctx.fillStyle = '#f70776'
        ctx.fillRect(snake_tails[i]['x']*tile_count,snake_tails[i]['y']*tile_count, tile_size,tile_size)
    }
    
}

$.fn.apple = function(){
    if (bounes == 5){
        ctx.fillStyle = '#ffcc00'
        ctx.fillRect(appleX * 19.6,appleY*19.7,25,25)
    }else{
        ctx.fillStyle = '#1687a7'
        ctx.fillRect(appleX * tile_count,appleY*tile_count,tile_size,tile_size)
    }
    
}

$.fn.game_over_check = function(){
    if (headX<0){
        game_over = true
    }else if (headX>tile_count){
        game_over = true
    }else if(headY<0){
        game_over = true
    }else if(headY>tile_count){
        game_over = true
    }
}

$.fn.gameOver = function(){
    if(game_over){
        score = 0
        headX = 10
        headY = 10
        bounes = 1
        snake_tails = [{'x':9,'y':10},{'x':8,'y':10}]
        ctx.fillStyle= '#56F76C'
        ctx.fillRect(0,0,420,420)
        ctx.fillStyle="black";
        ctx.font="50px verdana";
        ctx.fillText("Game Over! ",420/6.5, 420/2);
        $('#stop').hide();
        $('.controls').hide();
        $('#start').show();
        $('.level').show();
    }
}


function main_loop(){
    if (!stop){
        $('#h-s').text(highest_score)
        $('#n-s').text(score)        
        $.fn.screen_clear()
        $.fn.set_apple_position()
        $.fn.snake_move()
        $.fn.snake()
        $.fn.apple()
        $.fn.game_over_check()
        $.fn.gameOver()
        snake_tails.forEach(element => {
        if(element['x'] == headX && element['y'] == headY){
            game_over = true
            score = 0
            headX = 10
            headY = 10
            bounes = 1
            ctx.fillStyle= '#56F76C'
            ctx.fillRect(0,0,420,420)
            ctx.fillStyle="black";
            ctx.font="50px verdana";
            ctx.fillText("Game Over! ",420/6.5, 420/2);
            $('#stop').hide();
            $('.controls').hide();
            $('#start').show();
            $('.level').show();
        }

        });
        if(!game_over){
            setTimeout(main_loop,1000/speed)
        }
    }
}

$(document).ready(function () {
    $('#stop').hide();
    $('.controls').hide();
    $('#restart').hide()
});
$('#start').click(function (e) { 
    e.preventDefault();
    $(this).hide();
    $('.controls').show();
    $('#stop').show();
    $('.level').hide();
    $('#restart').show()

    stop=false
    game_over = false
    main_loop()
});

$('#stop').click(function (e) { 
    e.preventDefault();
    $(this).hide();
    $('.controls').hide();
    $('#start').show();
    stop = true
});

$('#restart').click(function(e){
    game_over = true
  $.fn.gameOver()
  $('#restart').hide()

})