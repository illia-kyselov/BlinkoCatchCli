import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
const CancelSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={43}
        height={43}
        fill="none"
        {...props}
    >
        <G filter="url(#a)">
            <Circle cx={21.5} cy={17.5} r={17.5} fill="#FFFBFB" />
            <Circle cx={21.5} cy={17.5} r={16} stroke="#410563" strokeWidth={3} />
        </G>
        <Path
            stroke="#410563"
            strokeLinecap="round"
            strokeWidth={3}
            d="m25 13-8 8m0-8 8 8"
        />
        <Defs></Defs>
    </Svg>
)
export default CancelSVG
