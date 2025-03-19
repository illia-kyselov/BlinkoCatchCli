import React from 'react';
import { View } from 'react-native';

const PinsRenderer = ({ dots }) => {
    return (
        <>
            {dots.map((d) => (
                <View
                    key={d.id}
                    style={{
                        position: 'absolute',
                        left: d.x - 8,
                        top: d.y - 8,
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: '#410563',
                    }}
                />
            ))}
        </>
    );
};

export default PinsRenderer;
