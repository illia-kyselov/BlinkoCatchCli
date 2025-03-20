import Matter, { Composite } from "matter-js";

const handleCollision = ({
    event,
    basketBody,
    currentLevelRef,
    gameEngineRef,
    world,
    isLevelModalVisible,
    setProgress,
    setLoseModalVisible,
    setWinModalVisible,
}) => {
    event.pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;
        if (
            (bodyA.label === "basket" && bodyB.label === "ball") ||
            (bodyB.label === "basket" && bodyA.label === "ball")
        ) {
            const ballBody = bodyA.label === "ball" ? bodyA : bodyB;

            if (ballBody.position.y > basketBody.position.y) return;

            if (gameEngineRef.current) {
                const ents = gameEngineRef.current.state.entities;
                const ballKey = Object.keys(ents).find(
                    (key) => ents[key].body === ballBody
                );
                if (ballKey) {
                    const ballEntity = ents[ballKey];
                    if (ballEntity.processed) return;
                    const lvl = currentLevelRef.current;
                    if (lvl && lvl.requirements) {
                        if (lvl.requirements[ballEntity.color] !== undefined) {
                            setProgress((prev) => {
                                const newProgress = prev + 1;
                                if (newProgress >= lvl.goals && !isLevelModalVisible) {
                                    setWinModalVisible(true);
                                }
                                return newProgress;
                            });
                        } else {
                            setLoseModalVisible(true);
                        }
                    }
                    ballEntity.processed = true;
                    Composite.remove(world, ballBody);
                    delete ents[ballKey];
                }
            }
        }
    });
};

export default handleCollision;
