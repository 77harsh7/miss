canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
//Get rference of canvas created.
color = "red";                                                                    
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

// Attach canvas and addEventListener with 'mousedown' event.

canvas.addEventListner("mousedown ",my_mousedown );

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color=document.getElementById("color").value;
    console.log(color);
    //additional activity ends
    //Get the x and y coordinates when the mouse is clicked.
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientX - canvas.offsetTop ;  
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x, mouse_y);
    //Call the "circle()" function with mouse_x and mouse_y as parameters.  
    

}


function circle(mouse_x , mouse_y)
{
ctx.beginPath();
//Assign 'color' to the 'strokeStyle' of the circle.
ctx.strokeStyle = color;
ctx.lineWidth = 2;
// Use "arc()" function to create a circle.


ctx.stroke();
}

//additional activity



	
