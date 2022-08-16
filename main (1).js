var canvas = new fabric.Canvas('myCanvas');

block_image_width =30;
blcok_iamge_height =30;

player_x = 10;
player_y = 10;

var player_objects="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_objects = Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(150);
        player_objects.set({
            top:player_y,
            left:player_x
        });
canvas.add(player_objects);

        
    });
}


function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        player_objects = Img;

       block_image_objects.scaleToWidth(block_image_width);
        block_image_objects.scaleToHeight(blcok_iamge_height);
        block_image_objects.set({
            top:player_y,
            left:player_x
});
canvas.add(block_image_objects);
    });
}

window.addEventListener ("keydown", my_keydown);
function my_keydown (e)
{
    keypressed = e.keycode;
    console.log (keypressed);
    if (e.shiftkey == true && keypressed == '80'){
        console.log ("P and Shift are pressed together.");
        blcok_iamge_height = blcok_iamge_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_height").innerHTML = blcok_iamge_height;
        document.getElementById("current_width").innerHTML = block_image_width;

    }

    if (e.shiftkey == true && keypressed == '77'){
        console.log ("M and Shift are pressed together.");
        blcok_iamge_height = blcok_iamge_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_height").innerHTML = blcok_iamge_height;
        document.getElementById("current_width").innerHTML = block_image_width;
        
    }
    if (keypressed == '38'){
        up();
        console.log ("up");

    }

    if (keypressed == '40'){
        down();
        console.log ("down");

    }

    if (keypressed == '37'){
        left();
        console.log ("left");

    }

    if (keypressed == '39'){
        right();
        console.log ("right");

    }





    if (keypressed == '67'){
        new_image("cloud.jpg");
console.log ("c");
    }

    if (keypressed == '68'){
        new_image("dark_green.png");
console.log ("d");
    }
    
    if (keypressed == '71'){
        new_image("ground.png");
console.log ("g");
    }
    
if (keypressed == '76'){
    new_image("light_green.png");
console.log ("l");
}
    
if (keypressed == '82'){
    new_image("roof.jpg");
console.log ("r");
}

if (keypressed == '84'){
    new_image("trunk.jpg");
console.log ("t");
}

if (keypressed == '85'){
    new_image("unique.png");
console.log ("u");
}

if (keypressed == '87'){
    new_image("wall.jpg");
console.log ("w");
}

if (keypressed == '89'){
    new_image("yellow_wall.png");
console.log ("y");
}
}

function up()
{
    if(player_y >=0){
        player_y = player_y - blcok_iamge_height;
        console.log("block image height =" + blcok_iamge_height);
        console.log("When up arrow key is pressed, X =" + player_x + " ,  Y = " + player_y);
        canvas.remove(player_objects);
        player_update();

    }
}

function down()
{
    if(player_y <=500){
        player_y = player_y + blcok_iamge_height;
        console.log("block image height =" + blcok_iamge_height);
        console.log("When down arrow key is pressed, X =" + player_x + " ,  Y = " + player_y);
        canvas.remove(player_objects);
        player_update();
        
    }
}

function left()
{
    if(player_x >=0){
        player_x = player_x - block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Left arrow key is pressed, X =" + player_x + " ,  Y = " + player_y);
        canvas.remove(player_objects);
        player_update();
        
    }


    
}

function right()
{
    if(player_x <=500){
        player_x = player_x + block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When right arrow key is pressed, X =" + player_x + " ,  Y = " + player_y);
        canvas.remove(player_objects);
        player_update();
        
    }


    
}