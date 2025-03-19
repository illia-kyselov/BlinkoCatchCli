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
const Level6SVG = (props) => (
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
                <Rect width={27} height={27} x={20} y={16} fill="#D50909" rx={13.5} />
                <Rect width={27} height={27} x={20} y={16} fill="#D50909" rx={13.5} />
                <Rect width={27} height={27} x={20} y={16} fill="#D50909" rx={13.5} />
                <Ellipse cx={34} cy={19} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
                <Path
                    fill="#FFF9F9"
                    d="M22.941 33.588c.151-.209 1.664 1.33 3.031 2.796a13.37 13.37 0 0 0 5.413 3.518c1.796.62 3.658 1.325 3.51 1.529-.28.387-5.358-1.084-7.39-2.556s-4.844-4.9-4.564-5.287Z"
                    opacity={0.36}
                />
            </G>
        </G>
        <G filter="url(#c)">
            <Circle cx={62.5} cy={57.5} r={12.5} fill="#fff" />
            <Circle cx={62.5} cy={57.5} r={12} stroke="#410563" />
        </G>
        <Path
            fill="#4E0058"
            d="M68.546 53.936 63.302 67h-5.244l5.29-12.443h-5.934v-4.37h11.132v3.749Z"
        />
        <Defs>
            <ClipPath id="b">
                <Rect width={27} height={27} x={20} y={16} fill="#fff" rx={13.5} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Level6SVG
