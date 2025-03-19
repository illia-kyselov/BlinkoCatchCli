import * as React from "react"
import Svg, {
    Rect,
    G,
    Ellipse,
    Circle,
    Path,
    Defs,
    ClipPath,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Level2SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={75}
        height={78}
        fill="none"
        {...props}
    >
        <Rect width={58} height={58} fill="#fff" rx={10} />
        <G clipPath="url(#a)">
            <Rect width={13} height={13} x={3} y={5} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={3} y={5} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={3} y={5} fill="#D50909" rx={6.5} />
            <Ellipse cx={18} cy={8} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#b)">
            <Rect width={13} height={13} x={23} y={5} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={23} y={5} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={23} y={5} fill="#3700B8" rx={6.5} />
            <Ellipse cx={38} cy={8} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#c)">
            <Rect width={13} height={13} x={42} y={5} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={42} y={5} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={42} y={5} fill="#ED007E" rx={6.5} />
            <Ellipse cx={57} cy={8} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#d)">
            <Rect width={13} height={13} x={3} y={23} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={3} y={23} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={3} y={23} fill="#C4D509" rx={6.5} />
            <Ellipse cx={18} cy={26} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#e)">
            <Rect width={13} height={13} x={3} y={41} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={3} y={41} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={3} y={41} fill="#09D52E" rx={6.5} />
            <Ellipse cx={18} cy={44} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G clipPath="url(#f)">
            <Rect width={13} height={13} x={42} y={23} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={42} y={23} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={42} y={23} fill="#fff" rx={6.5} />
            <Ellipse cx={57} cy={26} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <Rect
            width={12.8}
            height={12.8}
            x={42.1}
            y={23.1}
            stroke="#410563"
            strokeWidth={0.2}
            rx={6.4}
        />
        <G clipPath="url(#g)">
            <Rect width={13} height={13} x={23} y={23} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={23} y={23} fill="#D50909" rx={6.5} />
            <Rect width={13} height={13} x={23} y={23} fill="#000" rx={6.5} />
            <Ellipse cx={38} cy={26} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
        </G>
        <G filter="url(#h)">
            <Circle cx={58.5} cy={57.5} r={12.5} fill="#fff" />
            <Circle cx={58.5} cy={57.5} r={12} stroke="#410563" />
        </G>
        <Path
            fill="#4E0058"
            d="M63.432 54.672h-6.67v1.932c.291-.26.667-.468 1.127-.621a5.152 5.152 0 0 1 1.587-.23c1.043 0 1.924.245 2.645.736.72.49 1.257 1.15 1.61 1.978.353.813.529 1.717.529 2.714 0 1.84-.521 3.274-1.564 4.301C61.669 66.494 60.25 67 58.441 67c-1.319 0-2.461-.23-3.427-.69-.95-.46-1.679-1.096-2.185-1.909-.49-.813-.72-1.74-.69-2.783h4.968c0 .245.084.475.253.69.169.215.445.322.828.322.383 0 .667-.138.851-.414.184-.276.276-.652.276-1.127 0-.445-.107-.782-.322-1.012-.2-.23-.49-.345-.874-.345-.322 0-.567.077-.736.23a.698.698 0 0 0-.253.529h-4.968V50.187h11.27v4.485Z"
        />
        <Defs>
            <ClipPath id="a">
                <Rect width={13} height={13} x={3} y={5} fill="#fff" rx={6.5} />
            </ClipPath>
            <ClipPath id="b">
                <Rect width={13} height={13} x={23} y={5} fill="#fff" rx={6.5} />
            </ClipPath>
            <ClipPath id="c">
                <Rect width={13} height={13} x={42} y={5} fill="#fff" rx={6.5} />
            </ClipPath>
            <ClipPath id="d">
                <Rect width={13} height={13} x={3} y={23} fill="#fff" rx={6.5} />
            </ClipPath>
            <ClipPath id="e">
                <Rect width={13} height={13} x={3} y={41} fill="#fff" rx={6.5} />
            </ClipPath>
            <ClipPath id="f">
                <Rect width={13} height={13} x={42} y={23} fill="#fff" rx={6.5} />
            </ClipPath>
            <ClipPath id="g">
                <Rect width={13} height={13} x={23} y={23} fill="#fff" rx={6.5} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Level2SVG
