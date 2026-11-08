let lastrendertime=0
import {updateSnake,drawSnake,snake_speed, getsnakeHead,snakeIntersection } from "./snake.js"
import {update as updatefood,draw as drawfood} from "./food.js";
import { outsideGrid } from "./Grid.js";
const gameboard = document.getElementById("game-board");

let gameover = false;

function main(currenttime )
{
    if(gameover){
       if(confirm('Game Over Press Ok to restart')){
         window.location.reload()
       }
       return 
    }

    const secondsincelastrender = (currenttime-lastrendertime)/1000
    window.requestAnimationFrame(main)
    if(secondsincelastrender<1/snake_speed) return 
     console.log("Render")
    lastrendertime =   currenttime
    update()
    draw()
    
}
window.requestAnimationFrame(main);

function update(){
    updateSnake()
    updatefood()
    checkdeath()

}
function draw()
{
    gameboard.innerHTML='';
    drawSnake(gameboard)
    drawfood(gameboard)
}
function checkdeath()
{
    gameover = outsideGrid(getsnakeHead())|| snakeIntersection()
}