"use client";

import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";

const P5Component = () => {
  const [isClient, setIsClient] = useState(false);
  const sketchRef = useRef(null);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  useEffect(() => {
    if (isClient) {
      const sketch = (p) => {

        const game = {
          canvas: null,
          state: {
            start: false,
            playing: false,
            gameOver: false,
            realEnd: false,
          },
          player: null,
          asteroids: [],
          bullets: [],
          score: 0,
          config: {
            canvasWidth: 550,
            canvasHeight: 450,
            maxBullets: 50,
            playerStartingLives: 3,
            difficulty: {
              initialAsteroids: 5,
              asteroidSpeedMultiplier: 1.1,
            },
          },
        };

        // p5.js setup function
        p.setup = function () {
          game.canvas = p.createCanvas(game.config.canvasWidth, game.config.canvasHeight);
          p.textAlign(p.CENTER, p.CENTER);
          resetGame();
        };

        // p5.js draw function
        p.draw = function () {
          p.background(0);

          if (!game.state.start) {
            drawStartScreen();
          } else if (game.state.playing) {
            updateGameplay();
          } else if (game.state.gameOver) {
            drawGameOverScreen();
          }
        };

        function drawStartScreen() {
          p.background(0);
          // Gradient background effect
          const c1 = p.color(0, 0, 0);
          const c2 = p.color(0, 102, 204);
          for (let i = 0; i < p.height; i++) {
            const inter = p.map(i, 0, p.height, 0, 1);
            const c = p.lerpColor(c1, c2, inter);
            p.stroke(c);
            p.line(0, i, p.width, i);
          }
          // Title text (ASTEROIDS)
          p.textSize(80);
          p.textAlign(p.CENTER, p.CENTER);
          p.fill(255, 215, 0);
          p.textStyle(p.BOLD);
          p.text("ASTEROIDS", p.width / 2, p.height / 3);
          // Start Button with hover effect
          p.textFont("Comic Sans MS");
          const buttonColor = mouseOverStartButton() ? p.color(0, 204, 255) : p.color(255, 165, 0);
          p.fill(buttonColor);
          p.textSize(mouseOverStartButton() ? 50 : 40);
          p.text("START GAME", p.width / 2, p.height / 2 + 40);
          // Signature
          p.textSize(10);
          p.textStyle(p.ITALIC);
          p.fill(200);
          p.text("Created by Amaurys", p.width / 2, p.height - 30);
        }

        function mouseOverStartButton() {
          return p.mouseX >= 126 && p.mouseX <= 426 && p.mouseY >= 246 && p.mouseY <= 282;
        }

        function updateGameplay() {
          p.noStroke();
          if (!game.player) {
            startGame();
          }
          game.player.update();
          game.player.display();
          updateAsteroids();
          updateBullets();
          checkCollisions();
          displayGameInfo();
          checkGameConditions();
        }

        function updateAsteroids() {
          for (let i = game.asteroids.length - 1; i >= 0; i--) {
            game.asteroids[i].update();
            game.asteroids[i].display();
          }
        }

        function updateBullets() {
          for (let i = game.bullets.length - 1; i >= 0; i--) {
            game.bullets[i].update();
            game.bullets[i].display();
            if (game.bullets[i].isOffScreen()) {
              game.bullets.splice(i, 1);
            }
          }
        }

        function checkCollisions() {
          if (!game.player) return;
          // Bullet-Asteroid collisions
          for (let i = game.bullets.length - 1; i >= 0; i--) {
            for (let j = game.asteroids.length - 1; j >= 0; j--) {
              if (game.bullets[i] && game.asteroids[j] && game.bullets[i].hits(game.asteroids[j])) {
                destroyAsteroid(j, i);
              }
            }
          }
          // Player-Asteroid collisions
          for (let i = game.asteroids.length - 1; i >= 0; i--) {
            if (game.asteroids[i] && game.player.hits(game.asteroids[i])) {
              game.player.takeDamage();
              game.asteroids.splice(i, 1);
            }
          }
        }

        function destroyAsteroid(asteroidIndex, bulletIndex) {
          const asteroid = game.asteroids[asteroidIndex];
          game.score += 50;
          if (asteroid.size > 10) {
            for (let i = 0; i < 2; i++) {
              const newAsteroid = new Asteroid(
                asteroid.pos.x,
                asteroid.pos.y,
                asteroid.size / 2
              );
              game.asteroids.push(newAsteroid);
            }
          }
          game.asteroids.splice(asteroidIndex, 1);
          game.bullets.splice(bulletIndex, 1);
        }

        function checkGameConditions() {
          if (!game.player) return;
          if (game.player.lives <= 0) {
            endGame(false);
          }
          if (game.asteroids.length === 0) {
            endGame(true);
          }
        }

        function displayGameInfo() {
          if (!game.player) return;
          p.fill(255);
          p.textFont("Arial");
          p.textSize(16);
          p.text(`Score: ${game.score}  Lives: ${game.player.lives}`, p.width / 2, 20);
        }

        p.keyPressed = function () {
          if (p.keyCode === 32 && game.state.playing) {
            if (!game.player) return;
            if (game.bullets.length < game.config.maxBullets) {
              game.bullets.push(new Bullet());
            }
          }
        };

        p.mousePressed = function () {
          if (!game.state.start) {
            if (mouseOverStartButton()) {
              startGame();
            }
          } else if (game.state.gameOver) {
            handleGameOverClick();
          }
        };

        function startGame() {
          game.state.start = true;
          game.state.playing = true;
          game.player = new Player();
          spawnAsteroids(game.config.difficulty.initialAsteroids);
        }

        function spawnAsteroids(count) {
          for (let i = 0; i < count; i++) {
            game.asteroids.push(new Asteroid(p.random(p.width), p.random(p.height), p.random(20, 50)));
          }
        }

        function endGame(won) {
          game.state.playing = false;
          game.state.gameOver = true;
          game.state.realEnd = !won;
        }

        function drawGameOverScreen() {
          p.background(0);
          const c1 = p.color(0, 0, 0);
          const c2 = p.color(255, 0, 0);
          for (let i = 0; i < p.height; i++) {
            const inter = p.map(i, 0, p.height, 0, 1);
            const c = p.lerpColor(c1, c2, inter);
            p.stroke(c);
            p.line(0, i, p.width, i);
          }
          p.textSize(60);
          p.textAlign(p.CENTER, p.CENTER);
          p.fill(255, 0, 0);
          p.textStyle(p.BOLD);
          if (game.asteroids.length === 0) {
            p.text("YOU WON!", p.width / 2, p.height / 2 - 40);
          } else {
            p.text("GAME OVER", p.width / 2, p.height / 2 - 40);
          }
          p.textSize(30);
          p.fill(255);
          p.textStyle(p.NORMAL);
          p.text(`Score: ${game.score}`, p.width / 2, p.height / 2 + 20);
          p.textSize(20);
          p.fill(255, 255, 0);
          p.text("Click to Play Again", p.width / 2, p.height / 2 + 60);
          p.textSize(10);
          p.textStyle(p.ITALIC);
          p.fill(200);
          p.text("Created by Amaurys", p.width / 2, p.height - 30);
        }

        function handleGameOverClick() {
          resetGame();
        }

        function resetGame() {
          game.state.start = false;
          game.state.playing = false;
          game.state.gameOver = false;
          game.state.realEnd = false;
          game.player = null;
          game.asteroids = [];
          game.bullets = [];
          game.score = 0;
        }

        class Player {
          pos: any;
          vel: any;
          angle: number;
          lives: number;
          constructor() {
            this.pos = p.createVector(p.width / 2, p.height / 2);
            this.vel = p.createVector(0, 0);
            this.angle = 0;
            this.lives = game.config.playerStartingLives;
          }
          update() {
            this.handleRotation();
            this.handleMovement();
            this.edgeWrap();
          }
          handleRotation() {
            if (p.keyIsDown(p.LEFT_ARROW)) {
              this.angle -= 0.1;
            }
            if (p.keyIsDown(p.RIGHT_ARROW)) {
              this.angle += 0.1;
            }
          }
          handleMovement() {
            if (p.keyIsDown(p.UP_ARROW)) {
              const force = p5.Vector.fromAngle(this.angle);
              this.vel.add(force.mult(0.2));
            }
            this.vel.mult(0.99);
            this.pos.add(this.vel);
          }
          edgeWrap() {
            if (this.pos.x > p.width) this.pos.x = 0;
            if (this.pos.x < 0) this.pos.x = p.width;
            if (this.pos.y > p.height) this.pos.y = 0;
            if (this.pos.y < 0) this.pos.y = p.height;
          }
          display() {
            p.push();
            p.translate(this.pos.x, this.pos.y);
            p.rotate(this.angle + p.PI / 2);
            p.fill(255);
            p.triangle(-10, 15, 10, 15, 0, -15);
            p.pop();
          }
          hits(asteroid) {
            if (!asteroid) return false;
            const d = p5.Vector.dist(this.pos, asteroid.pos);
            return d < 20 + asteroid.size;
          }
          takeDamage() {
            this.lives--;
          }
        }

        class Asteroid {
          vel: p5.Vector;
          size: any;
          pos: any;
          points: any[];
          constructor(x, y, size) {
            this.pos = p.createVector(
              x || p.random(p.width),
              y || p.random(p.height)
            );
            this.vel = p5.Vector.random2D().mult(game.config.difficulty.asteroidSpeedMultiplier);
            this.size = size || p.random(20, 50);
            this.points = this.generateShape();
          }
          generateShape() {
            const points = [];
            const angleStep = p.TWO_PI / 8;
            for (let i = 0; i < 8; i++) {
              const angle = i * angleStep;
              const variation = p.random(0.7, 1.3);
              const radius = this.size * variation;
              const x = p.cos(angle) * radius;
              const y = p.sin(angle) * radius;
              points.push(p.createVector(x, y));
            }
            return points;
          }
          update() {
            this.pos.add(this.vel);
            this.edgeWrap();
          }
          edgeWrap() {
            if (this.pos.x > p.width) this.pos.x = 0;
            if (this.pos.x < 0) this.pos.x = p.width;
            if (this.pos.y > p.height) this.pos.y = 0;
            if (this.pos.y < 0) this.pos.y = p.height;
          }
          display() {
            p.push();
            p.fill(200);
            p.stroke(255);
            p.strokeWeight(2);
            p.beginShape();
            for (const pt of this.points) {
              p.vertex(this.pos.x + pt.x, this.pos.y + pt.y);
            }
            p.endShape(p.CLOSE);
            p.pop();
          }
        }

        class Bullet {
          pos: any;
          vel: p5.Vector;
          constructor() {
            if (!game.player) return;
            this.pos = game.player.pos.copy();
            this.vel = p5.Vector.fromAngle(game.player.angle).mult(5);
          }
          update() {
            this.pos.add(this.vel);
          }
          display() {
            p.push();
            p.fill(255);
            p.ellipse(this.pos.x, this.pos.y, 5);
            p.pop();
          }
          hits(asteroid) {
            if (!asteroid) return false;
            const d = p5.Vector.dist(this.pos, asteroid.pos);
            return d < 5 + asteroid.size;
          }
          isOffScreen() {
            return (
              this.pos.x < 0 ||
              this.pos.x > p.width ||
              this.pos.y < 0 ||
              this.pos.y > p.height
            );
          }
        }
      };

      const myP5 = new p5(sketch, sketchRef.current);

      return () => {
        myP5.remove();
      };
    };
  }, [isClient]);

  return <div ref={sketchRef} />;
};

export default P5Component;
