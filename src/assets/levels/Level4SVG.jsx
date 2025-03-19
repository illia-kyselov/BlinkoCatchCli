import * as React from "react"
import Svg, { Rect, Ellipse, Path } from "react-native-svg"
const Level4SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={88}
        height={88}
        fill="none"
        {...props}
    >
        <Rect width={88} height={88} fill="#A71ABA" opacity={0.77} rx={20} />
        <Rect width={67} height={67} x={10} y={10} fill="#D50909" rx={33.5} />
        <Rect width={67} height={67} x={10} y={10} fill="#D50909" rx={33.5} />
        <Rect width={67} height={67} x={10} y={10} fill="#C4D509" rx={33.5} />
        <Ellipse cx={44} cy={15.5} fill="#FFF9F9" opacity={0.36} rx={4} ry={1.5} />
        <Path
            fill="#FFF9F9"
            d="M19.733 58.082c.352-.485 4.727 4.186 7.483 7.217a12.69 12.69 0 0 0 5.402 3.51c3.759 1.244 9.475 3.234 9.127 3.714-.517.714-9.866-1.995-13.608-4.706-3.743-2.71-8.92-9.022-8.404-9.735Z"
            opacity={0.36}
        />
    </Svg>
)
export default Level4SVG
