import { Bodies, Composite } from "matter-js";
import RedBallSVG from "../assets/balls/RedBallSVG";
import BlackBallSVG from "../assets/balls/BlackBallSVG";
import GreenBallSVG from "../assets/balls/GreenBallSVG";
import PurpleBallSVG from "../assets/balls/PurpleBallSVG";
import RoseBallSVG from "../assets/balls/RoseBallSVG";
import WhiteBallSVG from "../assets/balls/WhiteBallSVG";
import YellowBallSVG from "../assets/balls/YellowBallSVG";
import Ball from "../components/Ball";

const BALL_TYPES = [
    { component: BlackBallSVG, color: "black" },
    { component: GreenBallSVG, color: "green" },
    { component: PurpleBallSVG, color: "purple" },
    { component: RedBallSVG, color: "red" },
    { component: RoseBallSVG, color: "pink" },
    { component: WhiteBallSVG, color: "white" },
    { component: YellowBallSVG, color: "yellow" },
];

const Spawner = (entities, { time }) => {
    const engine = entities.physics.engine;
    const world = engine.world;
    const gameState = entities.gameState;
    gameState.spawnTimer += time.delta;
    if (gameState.spawnTimer >= 3000) {
        gameState.spawnTimer = 0;
        const randomIndex = Math.floor(Math.random() * BALL_TYPES.length);
        const ballType = BALL_TYPES[randomIndex];
        const radius = 14;
        const startX = gameState.holeX;
        const startY = gameState.holeY;
        const ballBody = Bodies.circle(startX, startY, radius, {
            restitution: 0.8,
            friction: 0.1,
            label: "ball",
            collisionFilter: { group: 0, category: 0x0001, mask: 0xFFFFFFFF },
        });
        Composite.add(world, ballBody);
        const ballId = "ball_" + new Date().getTime();
        entities[ballId] = {
            body: ballBody,
            radius: radius,
            BallComponent: ballType.component,
            color: ballType.color,
            isEaten: false,
            processed: false,
            renderer: Ball,
        };
    }
    return entities;
};

export default Spawner;
