import * as React from "react"
import Svg, {
    G,
    Rect,
    Ellipse,
    Circle,
    Path,
    Defs,
    ClipPath,
} from "react-native-svg"
const Level9SVG = (props) => (
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
                <Rect width={31} height={31} x={17} y={13} fill="#D50909" rx={15.5} />
                <Rect width={31} height={31} x={17} y={13} fill="#D50909" rx={15.5} />
                <Rect width={31} height={31} x={17} y={13} fill="#3700B8" rx={15.5} />
                <Ellipse
                    cx={50.5}
                    cy={17.5}
                    fill="#FFF9F9"
                    opacity={0.36}
                    rx={4.5}
                    ry={1.5}
                />
            </G>
        </G>
        <G filter="url(#c)">
            <Circle cx={62.5} cy={57.5} r={12.5} fill="#fff" />
            <Circle cx={62.5} cy={57.5} r={12} stroke="#410563" />
        </G>
        <Path
            fill="#4E0058"
            d="M55.15 55.155v-3.12h5.085V63H56.74v-7.845h-1.59Zm6.921 2.205c0-1.73.365-3.09 1.095-4.08.74-.99 1.875-1.485 3.405-1.485 1.52 0 2.65.5 3.39 1.5.74.99 1.11 2.345 1.11 4.065 0 1.73-.37 3.095-1.11 4.095-.74.99-1.87 1.485-3.39 1.485-1.53 0-2.665-.495-3.405-1.485-.73-1-1.095-2.365-1.095-4.095Zm5.715 0c0-.8-.08-1.4-.24-1.8-.16-.41-.485-.615-.975-.615-.5 0-.83.205-.99.615-.16.4-.24 1-.24 1.8 0 .81.08 1.42.24 1.83.16.4.49.6.99.6.49 0 .815-.2.975-.6.16-.41.24-1.02.24-1.83Z"
        />
        <Defs>
            <ClipPath id="b">
                <Rect width={31} height={31} x={17} y={13} fill="#fff" rx={15.5} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Level9SVG
