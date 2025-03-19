import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowBackSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={31}
        height={31}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
            d="m12.361 7.66-7.84 7.84 7.84 7.84M26.48 15.5H4.74"
        />
    </Svg>
)
export default ArrowBackSVG
