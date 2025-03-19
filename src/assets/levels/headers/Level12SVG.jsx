import * as React from "react"
import Svg, {
    G,
    Rect,
    Circle,
    Path,
    Ellipse,
    Defs,
    ClipPath,
} from "react-native-svg"
const Level12SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={79}
        height={78}
        fill="none"
        {...props}
    >
        <G filter="url(#a)">
            <Rect width={58} height={58} x={4} fill="#fff" rx={10} />
        </G>
        <G filter="url(#b)">
            <Circle cx={62.5} cy={57.5} r={12.5} fill="#fff" />
            <Circle cx={62.5} cy={57.5} r={12} stroke="#410563" />
        </G>
        <Path
            fill="#4E0058"
            d="M55.15 55.155v-3.12h5.085V63H56.74v-7.845h-1.59Zm15.201-.195h-4.35v1.26c.19-.17.435-.305.735-.405.31-.1.655-.15 1.035-.15.68 0 1.255.16 1.725.48.47.32.82.75 1.05 1.29.23.53.345 1.12.345 1.77 0 1.2-.34 2.135-1.02 2.805-.67.66-1.595.99-2.775.99-.86 0-1.605-.15-2.235-.45-.62-.3-1.095-.715-1.425-1.245-.32-.53-.47-1.135-.45-1.815h3.24c0 .16.055.31.165.45.11.14.29.21.54.21.25 0 .435-.09.555-.27.12-.18.18-.425.18-.735 0-.29-.07-.51-.21-.66-.13-.15-.32-.225-.57-.225-.21 0-.37.05-.48.15a.455.455 0 0 0-.165.345h-3.24v-6.72h7.35v2.925Z"
        />
        <G clipPath="url(#c)">
            <Rect width={36} height={36} x={15} y={11} fill="#D50909" rx={18} />
            <Rect width={36} height={36} x={15} y={11} fill="#D50909" rx={18} />
            <Rect width={36} height={36} x={15} y={11} fill="#EAEAEA" rx={18} />
            <Ellipse
                cx={48.5}
                cy={16}
                fill="#858585"
                opacity={0.36}
                rx={5.5}
                ry={2}
            />
        </G>
        <Rect
            width={35.5}
            height={35.5}
            x={15.25}
            y={11.25}
            stroke="#410563"
            strokeWidth={0.5}
            rx={17.75}
        />
        <Defs>
            <ClipPath id="c">
                <Rect width={36} height={36} x={15} y={11} fill="#fff" rx={18} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Level12SVG
