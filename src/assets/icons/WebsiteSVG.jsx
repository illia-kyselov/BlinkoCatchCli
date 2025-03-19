import * as React from "react"
import Svg, { Path } from "react-native-svg"
const WebsiteSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            stroke="#A71ABA"
            strokeWidth={2}
            d="M18 31.875c7.663 0 13.875-6.212 13.875-13.875S25.663 4.125 18 4.125 4.125 10.337 4.125 18 10.337 31.875 18 31.875Z"
        />
        <Path
            stroke="#A71ABA"
            strokeWidth={2}
            d="M18 31.875c3.107 0 5.625-6.212 5.625-13.875S21.107 4.125 18 4.125 12.375 10.337 12.375 18 14.893 31.875 18 31.875Z"
        />
        <Path
            stroke="#A71ABA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.25 13.5h25.5m-25.5 9h25.5"
        />
    </Svg>
)
export default WebsiteSVG
