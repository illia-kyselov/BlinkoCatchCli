import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const CloseSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        fill="none"
        {...props}
    >
        <G stroke="#410563" strokeWidth={3} clipPath="url(#a)">
            <Path d="M2.333 14c0-5.5 0-8.25 1.709-9.958C5.751 2.334 8.5 2.334 14 2.334s8.25 0 9.958 1.708C25.667 5.751 25.667 8.5 25.667 14s0 8.25-1.709 9.958C22.25 25.667 19.5 25.667 14 25.667s-8.25 0-9.958-1.709C2.334 22.25 2.334 19.5 2.334 14Z" />
            <Path
                strokeLinecap="round"
                d="m16.917 11.084-5.834 5.833m0-5.834 5.834 5.834"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h28v28H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default CloseSVG
