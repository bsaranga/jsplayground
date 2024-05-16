const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let done = false;
let frameCount = 0;

function step(timestamp) {

    console.log(timestamp);
    frameCount++;

    if (timestamp > 500) {
        done = true;
        const fps = frameCount / (timestamp/1000);
        console.log(`FPS: ${fps}`);
    }

    if (!done) {
        window.requestAnimationFrame(step);
    }
}

const animationId = window.requestAnimationFrame(step);


console.log(animationId)