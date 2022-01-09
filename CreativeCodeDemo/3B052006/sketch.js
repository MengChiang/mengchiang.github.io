let systems;

function setup() {
    createCanvas(700, 900);
    systems = [];
}

function draw() {
    background(100);
    background(23);
    for (i = 0; i < systems.length; i++) {
        systems[i].run();
        systems[i].addParticle();
    }
    if (systems.length == 0) {
        fill(255, 236, 139);
        textAlign(CENTER);
        textSize(41);
        text("按一下，你會發現神奇的事情發生", width / 2, height / 2);
        textSize(32);
    }
}

function mousePressed() {
    this.p = new ParticleSystem(createVector(mouseX, mouseY));
    systems.push(p);
}

// A simple Particle class
let Particle = function (position) {
    this.acceleration = createVector(0, 0.1);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 235.33;
};

Particle.prototype.run = function () {
    this.update();
    this.display();
};

// Method to update position
Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 0.3;
};

// Method to display
Particle.prototype.display = function () {
    stroke(255, 69, 0, this.lifespan);
    strokeWeight(4);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 5, 5);
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
    if (this.lifespan < 0) {
        return true;
    } else {
        return false;
    }
};

let ParticleSystem = function (position) {
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
    // Add either a Particle or CrazyParticle to the system
    if (int(random(0, 2)) == 0) {
        p = new Particle(this.origin);
    } else {
        p = new CrazyParticle(this.origin);
    }
    this.particles.push(p);
};

ParticleSystem.prototype.run = function () {
    for (let i = this.particles.length - 1; i >= 0; i--) {
        let p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};

// A subclass of Particle

function CrazyParticle(origin) {
    // Call the parent constructor, making sure (using Function#call)
    // that "this" is set correctly during the call
    Particle.call(this, origin);

    // Initialize our added properties
    this.theta = 0.0;
}

// Create a Crazy.prototype object that inherits from Particle.prototype.
// Note: A common error here is to use "new Particle()" to create the
// Crazy.prototype. That's incorrect for several reasons, not least
// that we don't have anything to give Particle for the "origin"
// argument. The correct place to call Particle is above, where we call
// it from Crazy.
CrazyParticle.prototype = Object.create(Particle.prototype); // See note below

// Set the "constructor" property to refer to CrazyParticle
CrazyParticle.prototype.constructor = CrazyParticle;

// Notice we don't have the method run() here; it is inherited from Particle

// This update() method overrides the parent class update() method
CrazyParticle.prototype.update = function () {
    Particle.prototype.update.call(this);
    // Increment rotation based on horizontal velocity
    this.theta += (this.velocity.x * this.velocity.mag()) / 10.0;
};

// This display() method overrides the parent class display() method
CrazyParticle.prototype.display = function () {
    // Render the ellipse just like in a regular particle
    Particle.prototype.display.call(this);
    // Then add a rotating line
    push();
    translate(this.position.x, this.position.y);
    rotate(this.theta);
    stroke(255, 193, 37, this.lifespan);
    line(22, 3, 16, 7);
    pop();
};
