import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PlaySVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={27}
        fill="none"
        {...props}
    >
        <Path
            fill="#410563"
            d="M24.585 9.272a3.372 3.372 0 0 1 0 5.956L10.17 23.066C7.851 24.328 5 22.686 5 20.088V4.412c0-2.598 2.851-4.24 5.171-2.978l14.414 7.838Z"
        />
    </Svg>
)
export default PlaySVG
