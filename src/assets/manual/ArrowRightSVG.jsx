import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowRightSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            stroke="#410563"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
            d="m15.639 1.66 7.84 7.84-7.84 7.84M1.52 9.5h21.74"
        />
    </Svg>
)
export default ArrowRightSVG
