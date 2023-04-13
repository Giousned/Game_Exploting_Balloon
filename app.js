// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let color = ['green', 'blue', 'yellow', 'grey', 'red', 'violet', 'black', 'pink'];

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    render();
}

let ballonAlive = 20

// x0 - x1
let start = "";



for (let i = 0; i<ballonAlive; i++) {
    const randomColor = color[Math.floor(Math.random()*color.length)]
    let ballon = document.createElement("div");
    ballon.classList.add("balloon", "balloon");
    ballon.style.background = randomColor;
    ballon.id = i;

    ballon.addEventListener("click", () => {
        if(ballonAlive == 20){
            start = Date.now()
        }
        ballon.style.visibility = "hidden";
        ballonAlive--;
        render();
    })
    document.querySelector("#balloon-map").appendChild(ballon);
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    // const ballons = ballonsMap.map((color, position) => {
    //     return `<div class="balloon active"></div>`; // <--- render each balloon
    // });

    document.querySelector("#balloon-count").innerHTML = ballonAlive; // <-- render the balloon count into the DOM
    // document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(ballonAlive == 0) {

        // const tiempoTotal = (Date.now() - start)/1000

        document.querySelector("#balloon-map").innerHTML = `<h3> Te has demorado ${(Date.now() - start)/1000} segundos! </h3> `

        setTimeout(() => {
            window.location.reload(); // <--- reload website when no more balloons are left  
        }, 3000)

    } 
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();