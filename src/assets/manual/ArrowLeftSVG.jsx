import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowLeftSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            stroke="#410563"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
            d="M23.958 9.84H2.22M9.84 2 2 9.84l7.84 7.84"
        />
    </Svg>
)
export default ArrowLeftSVG
