import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowDownSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#410563"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={4}
            d="m19.92 12-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 12"
        />
    </Svg>
)
export default ArrowDownSVG
