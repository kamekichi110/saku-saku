// game.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');

// Matter.js モジュールのエイリアス
const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse;

const engine = Engine.create();
const world = engine.world;

const render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
        width: 400,
        height: 600,
        wireframes: false,
        background: '#fff8dc'
    }
});

Render.run(render);

const runner = Runner.create();
Runner.run(runner, engine);

const elements = [
    { symbol: 'H', color: 'white' },
    { symbol: 'He', color: 'lightgrey' },
    { symbol: 'Li', color: 'red' },
    { symbol: 'Be', color: 'green' },
    { symbol: 'B', color: 'blue' },
    { symbol: 'C', color: 'black' },
    { symbol: 'N', color: 'purple' },
    { symbol: 'O', color: 'orange' },
    { symbol: 'F', color: 'pink' },
    { symbol: 'Ne', color: 'yellow' },
    { symbol: 'Na', color: 'cyan' },
    { symbol: 'Mg', color: 'magenta' },
    // さらに追加...
];

let score = 0;
let gameOver = false;

// ビーカーの壁と床
const walls = [
    Bodies.rectangle(200, 600, 400, 50, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(400, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(200, 100, 300, 50, { isStatic: true, angle: Math.PI / 2 })
];

Composite.add(world, walls);

function createNewElement() {
    const x = canvas.width / 2;
    const y = 0;
    const radius = 15;
    const level = 0;

    const element = Bodies.circle(x, y, radius, {
        restitution: 0.5,
        render: {
            fillStyle: elements[level].color
        }
    });

    element.level = level;

    return element;
}

let currentElement = createNewElement();
Composite.add(world, currentElement);

Events.on(engine, 'collisionStart', function(event) {
    const pairs = event.pairs;
    for (let pair of pairs) {
        const { bodyA, bodyB } = pair;
        if (bodyA.level !== undefined && bodyB.level !== undefined) {
            if (bodyA.level === bodyB.level) {
                Composite.remove(world, bodyA);
                bodyB.level++;
                bodyB.render.fillStyle = elements[bodyB.level].color;
                score += 500;
                updateScore();
                if (bodyB.level === elements.length - 1) {
                    Composite.remove(world, bodyB);
                }
            }
        }
    }
});

function updateScore() {
    scoreDisplay.textContent = `スコア: ${score}`;
}

function gameLoop() {
    if (!gameOver) {
        if (currentElement.position.y > canvas.height - 30) {
            Composite.remove(world, currentElement);
            currentElement = createNewElement();
            Composite.add(world, currentElement);
            score += 100;
            updateScore();
        }

        for (let body of Composite.allBodies(world)) {
            if (body.position.y <= 50 && body.level !== undefined) {
                gameOver = true;
                alert(`ゲームオーバー! スコア: ${score}`);
                break;
            }
        }
    }

    requestAnimationFrame(gameLoop);
}

const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(world, mouseConstraint);

gameLoop();
