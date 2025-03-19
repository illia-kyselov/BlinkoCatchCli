import React from 'react';
import { View } from 'react-native';
const Ball = props => {
    const { body, radius, BallComponent, isEaten } = props;
    if (isEaten) return null;
    const x = body.position.x - radius;
    const y = body.position.y - radius;
    return (
        <View style={{ position: 'absolute', width: radius * 2, height: radius * 2, left: x, top: y }}>
            <BallComponent width={radius * 2} height={radius * 2} />
        </View>
    );
};
export default Ball;
