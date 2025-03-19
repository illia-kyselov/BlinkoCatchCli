import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const generateDots = () => {
    const dotsPositions = [];
    let dotId = 1;
    const colsOdd = 7;
    const colsEven = 6;
    const rowSpacing = 40;
    const LEFT_PADDING = 16;
    const RIGHT_PADDING = 16;
    const GRID_WIDTH = SCREEN_WIDTH - LEFT_PADDING - RIGHT_PADDING;
    const colSpacing = GRID_WIDTH / (colsOdd - 1);
    const startX = (SCREEN_WIDTH - (colsOdd - 1) * colSpacing) / 2;
    const startY = 46 + 83;
    for (let row = 0; dotsPositions.length < 46; row++) {
        const isEvenRow = row % 2 === 1;
        const cols = isEvenRow ? colsEven : colsOdd;
        const offsetX = isEvenRow ? colSpacing / 2 : 0;
        for (let col = 0; col < cols; col++) {
            dotsPositions.push({
                id: dotId++,
                x: startX + col * colSpacing + offsetX,
                y: startY + row * rowSpacing,
            });
        }
    }
    return dotsPositions;
};

export default generateDots;
