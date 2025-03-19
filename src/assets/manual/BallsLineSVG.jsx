import * as React from "react"
import Svg, { G, Rect, Ellipse, Defs, ClipPath } from "react-native-svg"
const BallsLineSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={178}
        height={17}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Rect width={17.682} height={17} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} fill="#D50909" rx={8.5} />
            <Ellipse cx={15} cy={3} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#b)">
            <Rect width={17.682} height={17} x={27.113} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={27.113} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={27.113} fill="#3700B8" rx={8.5} />
            <Ellipse cx={42.112} cy={3} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#c)">
            <Rect width={17.682} height={17} x={54.225} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={54.225} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={54.225} fill="#ED007E" rx={8.5} />
            <Ellipse cx={69.225} cy={3} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#d)">
            <Rect width={17.682} height={17} x={81.338} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={81.338} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={81.338} fill="#C4D509" rx={8.5} />
            <Ellipse cx={96.338} cy={3} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#e)">
            <Rect width={17.682} height={17} x={106.682} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={106.682} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={106.682} fill="#09D52E" rx={8.5} />
            <Ellipse
                cx={121.682}
                cy={3}
                fill="#FFF9F9"
                opacity={0.36}
                rx={3}
                ry={1}
            />
        </G>
        <G clipPath="url(#f)">
            <Rect width={17.682} height={17} x={133.795} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={133.795} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={133.795} fill="#fff" rx={8.5} />
            <Ellipse
                cx={148.795}
                cy={3}
                fill="#FFF9F9"
                opacity={0.36}
                rx={3}
                ry={1}
            />
        </G>
        <G clipPath="url(#g)">
            <Rect width={17.682} height={17} x={160.318} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={160.318} fill="#D50909" rx={8.5} />
            <Rect width={17.682} height={17} x={160.318} fill="#000" rx={8.5} />
            <Ellipse
                cx={175.318}
                cy={3}
                fill="#FFF9F9"
                opacity={0.36}
                rx={3}
                ry={1}
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Rect width={17.682} height={17} fill="#fff" rx={8.5} />
            </ClipPath>
            <ClipPath id="b">
                <Rect width={17.682} height={17} x={27.113} fill="#fff" rx={8.5} />
            </ClipPath>
            <ClipPath id="c">
                <Rect width={17.682} height={17} x={54.225} fill="#fff" rx={8.5} />
            </ClipPath>
            <ClipPath id="d">
                <Rect width={17.682} height={17} x={81.338} fill="#fff" rx={8.5} />
            </ClipPath>
            <ClipPath id="e">
                <Rect width={17.682} height={17} x={106.682} fill="#fff" rx={8.5} />
            </ClipPath>
            <ClipPath id="f">
                <Rect width={17.682} height={17} x={133.795} fill="#fff" rx={8.5} />
            </ClipPath>
            <ClipPath id="g">
                <Rect width={17.682} height={17} x={160.318} fill="#fff" rx={8.5} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default BallsLineSVG
