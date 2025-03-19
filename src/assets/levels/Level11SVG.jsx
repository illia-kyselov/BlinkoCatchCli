import * as React from "react"
import Svg, { Rect, Ellipse, Path } from "react-native-svg"
const Level11SVG = (props) => (
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
        <Rect width={67} height={67} x={10} y={10} fill="#000" rx={33.5} />
        <Ellipse
            cx={39.701}
            cy={15.315}
            fill="#FFF9F9"
            opacity={0.36}
            rx={4.5}
            ry={1.5}
            transform="rotate(-10.78 39.701 15.315)"
        />
        <Path
            fill="#FFF9F9"
            d="M20.322 58.826c.247-.34 3.084 2.64 5.175 4.92a12.916 12.916 0 0 0 5.407 3.514c2.817.946 6.455 2.247 6.211 2.583-.394.544-7.527-1.522-10.382-3.59-2.855-2.068-6.805-6.883-6.41-7.427Z"
            opacity={0.36}
        />
        <Path
            stroke="#D50909"
            strokeLinecap="round"
            strokeWidth={3}
            d="M79 10 8 81m0-71 71 71"
        />
    </Svg>
)
export default Level11SVG
