import { useRef, useEffect } from "react";
import { Dimensions, PanResponder, Animated } from "react-native";
import Matter from "matter-js";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BASKET_WIDTH = 100;

const useBasketMovement = (basketInitialX, basketBody) => {
    const basketXAnim = useRef(new Animated.Value(basketInitialX)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                basketXAnim.stopAnimation();
            },
            onPanResponderMove: (_, gestureState) => {
                let newX = gestureState.moveX - BASKET_WIDTH / 2;
                newX = Math.max(16, Math.min(newX, SCREEN_WIDTH - BASKET_WIDTH - 16));
                basketXAnim.setValue(newX);
            },
            onPanResponderRelease: () => { },
        })
    ).current;

    useEffect(() => {
        const listenerId = basketXAnim.addListener(({ value }) => {
            Matter.Body.setPosition(basketBody, {
                x: value + BASKET_WIDTH / 2,
                y: basketBody.position.y,
            });
        });
        return () => {
            basketXAnim.removeListener(listenerId);
        };
    }, [basketXAnim, basketBody]);

    return { basketXAnim, panResponder };
};

export default useBasketMovement;
