import Matter, { Composite } from "matter-js";

export const resetGame = (basketXAnim, gameEngineRef, world, basketInitialX) => {
    basketXAnim.setValue(basketInitialX);
    if (gameEngineRef.current) {
        const ents = gameEngineRef.current.state.entities;
        Object.keys(ents).forEach((key) => {
            const entity = ents[key];
            if (entity.body && entity.body.label === "ball") {
                Composite.remove(world, entity.body);
                delete ents[key];
            }
        });
    }
};
