import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SettingsSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            stroke="#410563"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M14.725 17.05V8.525M14.725 5.425V1.55M9.3 17.05v-3.875M9.3 10.075V1.55M3.875 17.05V8.525M3.875 5.425V1.55M2.325 8.525h3.1M13.175 8.525h3.1M7.75 10.075h3.1"
        />
    </Svg>
)
export default SettingsSVG
