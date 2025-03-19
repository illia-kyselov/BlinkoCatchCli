import * as React from "react"
import Svg, { Rect, Ellipse, Path } from "react-native-svg"
const Level9SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={88}
        height={88}
        fill="none"
        {...props}
    >
        <Rect width={88} height={88} fill="#A71ABA" opacity={0.77} rx={20} />
        <Rect width={67} height={67} x={10} y={9} fill="#D50909" rx={33.5} />
        <Rect width={67} height={67} x={10} y={9} fill="#D50909" rx={33.5} />
        <Rect width={67} height={67} x={10} y={9} fill="#3700B8" rx={33.5} />
        <Ellipse
            cx={43.5}
            cy={13.5}
            fill="#FFF9F9"
            opacity={0.36}
            rx={4.5}
            ry={1.5}
        />
        <Path
            fill="#FFF9F9"
            d="M20.496 59.934c.291-.401 3.769 3.282 6.153 5.893a12.802 12.802 0 0 0 5.405 3.511c3.232 1.078 7.733 2.667 7.446 3.064-.446.615-8.518-1.723-11.749-4.063-3.23-2.34-7.7-7.789-7.255-8.405Z"
            opacity={0.36}
        />
    </Svg>
)
export default Level9SVG
