import * as React from "react"
import Svg, { Rect, G, Ellipse, Defs, ClipPath } from "react-native-svg"
const Level2SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={88}
        height={88}
        fill="none"
        {...props}
    >
        <Rect width={88} height={88} fill="#A71ABA" opacity={0.77} rx={20} />
        <G clipPath="url(#a)">
            <Rect width={18} height={18} x={6} y={8} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={6} y={8} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={6} y={8} fill="#D50909" rx={9} />
            <Ellipse cx={21} cy={11} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#b)">
            <Rect width={18} height={18} x={35} y={8} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={35} y={8} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={35} y={8} fill="#3700B8" rx={9} />
            <Ellipse cx={50} cy={11} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#c)">
            <Rect width={18} height={18} x={63} y={8} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={63} y={8} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={63} y={8} fill="#ED007E" rx={9} />
            <Ellipse cx={78} cy={11} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#d)">
            <Rect width={18} height={18} x={6} y={33} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={6} y={33} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={6} y={33} fill="#C4D509" rx={9} />
            <Ellipse cx={21} cy={36} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#e)">
            <Rect width={18} height={19} x={6} y={57} fill="#D50909" rx={9} />
            <Rect width={18} height={19} x={6} y={57} fill="#D50909" rx={9} />
            <Rect width={18} height={19} x={6} y={57} fill="#09D52E" rx={9} />
            <Ellipse cx={21} cy={60} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#f)">
            <Rect width={18} height={18} x={63} y={33} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={63} y={33} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={63} y={33} fill="#fff" rx={9} />
            <Ellipse cx={78} cy={36} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#g)">
            <Rect width={18} height={18} x={35} y={33} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={35} y={33} fill="#D50909" rx={9} />
            <Rect width={18} height={18} x={35} y={33} fill="#000" rx={9} />
            <Ellipse cx={50} cy={36} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <Defs>
            <ClipPath id="a">
                <Rect width={18} height={18} x={6} y={8} fill="#fff" rx={9} />
            </ClipPath>
            <ClipPath id="b">
                <Rect width={18} height={18} x={35} y={8} fill="#fff" rx={9} />
            </ClipPath>
            <ClipPath id="c">
                <Rect width={18} height={18} x={63} y={8} fill="#fff" rx={9} />
            </ClipPath>
            <ClipPath id="d">
                <Rect width={18} height={18} x={6} y={33} fill="#fff" rx={9} />
            </ClipPath>
            <ClipPath id="e">
                <Rect width={18} height={19} x={6} y={57} fill="#fff" rx={9} />
            </ClipPath>
            <ClipPath id="f">
                <Rect width={18} height={18} x={63} y={33} fill="#fff" rx={9} />
            </ClipPath>
            <ClipPath id="g">
                <Rect width={18} height={18} x={35} y={33} fill="#fff" rx={9} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Level2SVG
