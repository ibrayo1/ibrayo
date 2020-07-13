
let cnv;
let particles = [];
let particlesLength;

function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('canvas');

    particlesLength = Math.floor(window.innerWidth / 13);

    for(let i = 0; i < particlesLength; i++){
        particles.push(new Particle());
    }
}

function draw() {
    background('rgb(49,55,67)');
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    });

}

// resizes canvas when width is changed
function windowResized() {
    cnv = resizeCanvas(windowWidth, windowHeight);
    particles.length = 0;
    for(let i = 0; i < Math.floor(window.innerWidth / 10); i++){
        particles.push(new Particle());
    }
}

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.size = 6;
        this.hue = random(0,231);
        this.counter = 1;
        this.velocity = createVector(random(-1.5), random(1.5));
    }

    update() {
        this.pos.add(this.velocity);
        this.edges();
        this.checkHue();
    }

    draw() {
        noStroke();
        fill(0, this.hue, 255)
        circle(this.pos.x, this.pos.y, this.size);
    }

    edges() {
        if(this.pos.x < 0 || this.pos.x > width) {
            this.velocity.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > height){
            this.velocity.y *= -1;
        }
    }

    checkHue(){
        if (this.counter % 2 == 0){
            this.hue -= 2;
            if(this.hue <= 0){this.counter+=1;}
        } else {
            this.hue += 2;
            if(this.hue >= 230){this.counter+=1;}
        }   
    }

    checkParticles(particles){
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

            if(d < 120){
                stroke(0, this.hue, 255)
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        });
    }
}