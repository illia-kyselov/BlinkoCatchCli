import * as React from "react"
import Svg, { Rect, Ellipse, Path } from "react-native-svg"
const Level7SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={88}
        height={88}
        fill="none"
        {...props}
    >
        <Rect width={88} height={88} fill="#A71ABA" opacity={0.77} rx={20} />
        <Rect width={31} height={31} x={10} y={13} fill="#D50909" rx={15} />
        <Rect width={31} height={31} x={10} y={13} fill="#D50909" rx={15} />
        <Rect width={31} height={31} x={10} y={13} fill="#ED007E" rx={15} />
        <Ellipse cx={25} cy={16} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        <Path
            fill="#FFF9F9"
            d="M12.941 33.588c.151-.209 1.664 1.33 3.031 2.796a13.37 13.37 0 0 0 5.413 3.518c1.796.62 3.658 1.325 3.51 1.529-.28.387-5.358-1.084-7.39-2.556s-4.844-4.9-4.564-5.287Z"
            opacity={0.36}
        />
        <Rect width={31} height={31} x={47} y={48} fill="#D50909" rx={15} />
        <Rect width={31} height={31} x={47} y={48} fill="#D50909" rx={15} />
        <Rect width={31} height={31} x={47} y={48} fill="#C4D509" rx={15} />
        <Ellipse cx={62} cy={51} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        <Path
            fill="#FFF9F9"
            d="M49.941 68.588c.151-.209 1.664 1.33 3.031 2.796a13.37 13.37 0 0 0 5.413 3.518c1.796.62 3.658 1.325 3.51 1.529-.28.387-5.358-1.084-7.39-2.556s-4.844-4.9-4.564-5.287Z"
            opacity={0.36}
        />
    </Svg>
)
export default Level7SVG
