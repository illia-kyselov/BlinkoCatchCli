import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HistorySVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#410563"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6Z"
        />
        <Path
            stroke="#410563"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M7 9.5h10M7 14.5h7"
        />
    </Svg>
)
export default HistorySVG
