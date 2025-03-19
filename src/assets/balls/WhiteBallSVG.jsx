import * as React from "react"
import Svg, { G, Rect, Defs, ClipPath } from "react-native-svg"
const WhiteBallSVG = (props) => (
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
            <Rect width={27} height={27} fill="#fff" rx={13.5} />
        </G>
        <Defs>
            <ClipPath id="a">
                <Rect width={27} height={27} fill="#fff" rx={13.5} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default WhiteBallSVG
