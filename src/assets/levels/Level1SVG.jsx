import * as React from "react"
import Svg, { Rect, G, Ellipse, Path, Defs, ClipPath } from "react-native-svg"
const Level1SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={88}
        height={88}
        fill="none"
        {...props}
    >
        <Rect width={88} height={88} fill="#A71ABA" opacity={0.77} rx={20} />
        <G clipPath="url(#a)">
            <Rect width={67} height={67} x={11} y={8} fill="#D50909" rx={33.5} />
            <Rect width={67} height={67} x={11} y={8} fill="#D50909" rx={33.5} />
            <Rect width={67} height={67} x={11} y={8} fill="#D50909" rx={33.5} />
            <Ellipse
                cx={44.5}
                cy={13}
                fill="#FFF9F9"
                opacity={0.36}
                rx={5.5}
                ry={2}
            />
            <Path
                fill="#FFF9F9"
                d="M18.668 58.042c.335-.463 4.462 3.935 7.12 6.854a12.713 12.713 0 0 0 5.4 3.509c3.619 1.2 8.998 3.078 8.666 3.536-.497.687-9.496-1.92-13.098-4.53-3.601-2.608-8.585-8.683-8.088-9.37Z"
                opacity={0.36}
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Rect width={67} height={67} x={11} y={8} fill="#fff" rx={33.5} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Level1SVG
