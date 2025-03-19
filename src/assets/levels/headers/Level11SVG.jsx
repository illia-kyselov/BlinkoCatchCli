import * as React from "react"
import Svg, {
    G,
    Rect,
    Ellipse,
    Path,
    Circle,
    Defs,
    ClipPath,
} from "react-native-svg"
const Level11SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={79}
        height={78}
        fill="none"
        {...props}
    >
        <G filter="url(#a)">
            <Rect width={58} height={58} x={4} fill="#fff" rx={10} />
            <G clipPath="url(#b)">
                <Rect width={30} height={30} x={18} y={13} fill="#D50909" rx={15} />
                <Rect width={30} height={30} x={18} y={13} fill="#D50909" rx={15} />
                <Rect width={30} height={30} x={18} y={13} fill="#000" rx={15} />
                <Ellipse
                    cx={47.701}
                    cy={18.315}
                    fill="#FFF9F9"
                    opacity={0.36}
                    rx={4.5}
                    ry={1.5}
                    transform="rotate(-10.78 47.701 18.315)"
                />
            </G>
            <Path
                stroke="#D50909"
                strokeLinecap="round"
                strokeWidth={3}
                d="M49 13 17 45m0-32 32 32"
            />
        </G>
        <G filter="url(#c)">
            <Circle cx={62.5} cy={57.5} r={12.5} fill="#fff" />
            <Circle cx={62.5} cy={57.5} r={12} stroke="#410563" />
        </G>
        <Path
            fill="#4E0058"
            d="M55.15 55.155v-3.12h5.085V63H56.74v-7.845h-1.59Zm6.861 5.19c1.34-1 2.4-1.905 3.18-2.715.78-.82 1.17-1.585 1.17-2.295 0-.24-.055-.425-.165-.555a.484.484 0 0 0-.405-.195c-.2 0-.36.105-.48.315-.11.2-.15.51-.12.93h-3.225c.03-.93.23-1.695.6-2.295.38-.6.87-1.04 1.47-1.32s1.26-.42 1.98-.42c1.28 0 2.215.31 2.805.93.6.61.9 1.395.9 2.355 0 1.01-.325 1.96-.975 2.85a8.624 8.624 0 0 1-2.415 2.235h3.435v2.685h-7.755v-2.505Z"
        />
        <Defs>
            <ClipPath id="b">
                <Rect width={30} height={30} x={18} y={13} fill="#fff" rx={15} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Level11SVG
