import Matter, { Bodies, Composite } from "matter-js";
import generateDots from "./generateDots";
import PinsRenderer from "../components/PinsRenderer";
import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const createEntities = (engine, world, currentLevel, handleBallFall) => {
    const dots = generateDots();
    dots.forEach((dot) => {
        const pin = Bodies.circle(dot.x, dot.y, 8, {
            isStatic: true,
            restitution: 0.5,
        });
        Composite.add(world, pin);
    });

    const floor = Bodies.rectangle(
        SCREEN_WIDTH / 2,
        SCREEN_HEIGHT + 50,
        SCREEN_WIDTH,
        20,
        { isStatic: true }
    );
    const leftWall = Bodies.rectangle(-50, SCREEN_HEIGHT / 2, 100, SCREEN_HEIGHT, {
        isStatic: true,
    });
    const rightWall = Bodies.rectangle(
        SCREEN_WIDTH + 50,
        SCREEN_HEIGHT / 2,
        100,
        SCREEN_HEIGHT,
        { isStatic: true }
    );
    Composite.add(world, [floor, leftWall, rightWall]);

    return {
        physics: { engine, world },
        gameState: {
            spawnTimer: 0,
            holeX: SCREEN_WIDTH / 2,
            holeY: -30,
            onBallFall: handleBallFall,
        },
        pins: { dots, renderer: PinsRenderer },
    };
};

export default createEntities;
