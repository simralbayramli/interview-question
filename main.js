const boxColors =['blue','yellow','red','orange','green','black','lime','aqua']

const containerBackgroundColors=['rgb(89, 12, 92)','rgb(19, 104, 126)','rgb(255, 228, 196)','rgb(255, 255, 255)']
const button=document.getElementById('button')

const container=document.getElementById('container')


button.addEventListener('click', randomBox)


function randomBox(){

   const randomBackgroundColors=containerBackgroundColors[Math.round(Math.random()*containerBackgroundColors.length)]
    const randomBoxColors=boxColors[Math.round(Math.random()*boxColors.length)]
    const topPx = Math.round(Math.random()*800)
    const leftPx = Math.round(Math.random()*1200)
container.style.backgroundColor=randomBackgroundColors
container.style.opacity='0.4'

    const myDiv= document.createElement('div')
    myDiv.style.width="30px";
    myDiv.style.height="30px";
    myDiv.style.borderRadius="50%"
    myDiv.style.backgroundColor=randomBoxColors
    myDiv.style.position="absolute";
    myDiv.style.top=`${topPx}px`
    myDiv.style.left=`${leftPx}px`
   
    container.appendChild(myDiv)
}
