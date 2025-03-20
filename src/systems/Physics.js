import Matter, { Composite } from "matter-js";
import { Dimensions } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const FIXED_STEP = 16.667;

const Physics = (entities, { time }) => {
    const engine = entities.physics.engine;
    Matter.Engine.update(engine, FIXED_STEP);

    Object.keys(entities).forEach((key) => {
        const entity = entities[key];
        if (entity.processed) return;
        if (entity.body && entity.body.label === "ball") {
            if (entity.body.position.y > SCREEN_HEIGHT) {
                if (
                    entities.gameState.onBallFall &&
                    typeof entities.gameState.onBallFall === "function"
                ) {
                    entities.gameState.onBallFall(entity.color);
                }
                entity.processed = true;
                Composite.remove(engine.world, entity.body);
                delete entities[key];
            }
        }
    });
    return entities;
};

export default Physics;