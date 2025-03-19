import * as React from "react"
import Svg, { Rect, Ellipse, Path } from "react-native-svg"
const Level10SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={88}
        height={88}
        fill="none"
        {...props}
    >
        <Rect width={88} height={88} fill="#A71ABA" opacity={0.77} rx={20} />
        <Rect width={31} height={31} x={9} y={10} fill="#D50909" rx={15} />
        <Rect width={31} height={31} x={9} y={10} fill="#D50909" rx={15} />
        <Rect width={31} height={31} x={9} y={10} fill="#D50909" rx={15} />
        <Ellipse cx={24} cy={13} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        <Path
            fill="#FFF9F9"
            d="M11.941 30.588c.151-.209 1.664 1.33 3.031 2.796a13.372 13.372 0 0 0 5.414 3.518c1.795.62 3.658 1.325 3.51 1.529-.28.387-5.358-1.084-7.39-2.556-2.033-1.472-4.845-4.9-4.565-5.287Z"
            opacity={0.36}
        />
        <Rect width={31} height={31} x={48} y={47} fill="#D50909" rx={15} />
        <Rect width={31} height={31} x={48} y={47} fill="#D50909" rx={15} />
        <Rect width={31} height={31} x={48} y={47} fill="#09D52E" rx={15} />
        <Ellipse cx={63} cy={50} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        <Path
            fill="#FFF9F9"
            d="M50.941 67.588c.151-.209 1.664 1.33 3.031 2.796a13.372 13.372 0 0 0 5.414 3.518c1.795.62 3.658 1.325 3.51 1.529-.28.387-5.358-1.084-7.39-2.556-2.033-1.472-4.845-4.9-4.565-5.287Z"
            opacity={0.36}
        />
    </Svg>
)
export default Level10SVG
