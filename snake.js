import { getinputdirection} from "./input.js";
export const snake_speed=4;

const snakebody = [{x:10,y:11},{x:11,y:11},{x:12,y:11}]
let newSegment=0;
export function updateSnake()
{ 
    const inputdirection = getinputdirection()
    if(inputdirection.x===0  && inputdirection.y===0 ) return ;
    addSegment();
   
    for(let i=snakebody.length-2;i>=0;i--)
    {
        snakebody[i+1] = {...snakebody[i]};
    }
    snakebody[0].x+=inputdirection.x;
    snakebody[0].y+=inputdirection.y;
}
export function drawSnake(gameboard)
{
    snakebody.forEach(segment=>{
        const snakeElement  = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake')
        gameboard.appendChild(snakeElement);
    }
    )
}
export function expandsnake(amount)
{
    newSegment+=amount;
}
export function onSnake(position,{ignoreHead=false}={})
{
   return snakebody.some((segment,index )=>{
      if(ignoreHead && index===0) return false;
      return equalposition(segment,position)
   })
}
export function getsnakeHead()
{
    return snakebody[0]
}
export function snakeIntersection()
{
    return onSnake(snakebody[0],{ignoreHead:true})
}
export function equalposition(pos1,pos2)
{
   return pos1.x===pos2.x && pos1.y==pos2.y
}

export function addSegment()
{
    for(let i=0;i<newSegment;i++)
    {
        snakebody.push({...snakebody[snakebody.length-1]})
        newSegment=0;
    }
}