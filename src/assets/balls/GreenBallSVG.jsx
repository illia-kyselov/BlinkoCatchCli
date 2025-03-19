import * as React from "react"
import Svg, { G, Rect, Ellipse, Path, Defs, ClipPath } from "react-native-svg"
const GreenBallSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={27}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Rect width={27} height={27} fill="#D50909" rx={13.5} />
            <Rect width={27} height={27} fill="#D50909" rx={13.5} />
            <Rect width={27} height={27} fill="#09D52E" rx={13.5} />
            <Ellipse cx={15} cy={3} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
            <Path
                fill="#FFF9F9"
                d="M2.941 20.588c.151-.209 1.664 1.33 3.031 2.796a13.371 13.371 0 0 0 5.413 3.518c1.796.62 3.659 1.325 3.51 1.529-.28.387-5.357-1.084-7.39-2.556-2.032-1.472-4.844-4.9-4.564-5.287Z"
                opacity={0.36}
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Rect width={27} height={27} fill="#fff" rx={13.5} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default GreenBallSVG
