import * as React from "react"
import Svg, {
    Rect,
    G,
    Ellipse,
    Path,
    Circle,
    Defs,
    ClipPath,
} from "react-native-svg"
const Leavel5SVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={67}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#fff" rx={10} />
        <Rect width={30} height={30} y={32} fill="#fff" rx={10} />
        <G clipPath="url(#a)">
            <Rect width={22} height={22} x={4} y={36} fill="#D50909" rx={11} />
            <Rect width={22} height={22} x={4} y={36} fill="#D50909" rx={11} />
            <Rect width={22} height={22} x={4} y={36} fill="#09D52E" rx={11} />
            <Ellipse cx={19} cy={39} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
            <Path
                fill="#FFF9F9"
                d="M6.941 56.588c.151-.209 1.664 1.33 3.031 2.796a13.37 13.37 0 0 0 5.413 3.518c1.796.62 3.658 1.325 3.51 1.529-.28.387-5.358-1.084-7.39-2.556s-4.844-4.9-4.564-5.287Z"
                opacity={0.36}
            />
        </G>
        <G clipPath="url(#b)">
            <Rect width={20} height={20} x={5} y={5} fill="#D50909" rx={10} />
            <Rect width={20} height={20} x={5} y={5} fill="#D50909" rx={10} />
            <Rect width={20} height={20} x={5} y={5} fill="#3700B8" rx={10} />
            <Ellipse cx={20} cy={8} fill="#FFF9F9" opacity={0.36} rx={3} ry={1} />
            <Path
                fill="#FFF9F9"
                d="M7.941 25.588c.151-.209 1.664 1.33 3.031 2.796a13.37 13.37 0 0 0 5.413 3.518c1.796.62 3.658 1.325 3.51 1.529-.28.387-5.358-1.084-7.39-2.556s-4.844-4.9-4.564-5.287Z"
                opacity={0.36}
            />
        </G>
        <G filter="url(#c)">
            <Circle cx={47.5} cy={14.5} r={12.5} fill="#fff" />
            <Circle cx={47.5} cy={14.5} r={12} stroke="#410563" />
        </G>
        <G filter="url(#d)">
            <Circle cx={47.5} cy={46.5} r={12.5} fill="#fff" />
            <Circle cx={47.5} cy={46.5} r={12} stroke="#410563" />
        </G>
        <Path
            fill="#4E0058"
            d="M40.196 20.47v-4.255L47.05 6.44h5.497v9.614h1.656v4.416h-1.656V23h-5.152v-2.53h-7.199Zm7.613-8.211-2.484 3.795h2.484v-3.795ZM40.196 52.47v-4.255l6.854-9.775h5.497v9.614h1.656v4.416h-1.656V55h-5.152v-2.53h-7.199Zm7.613-8.211-2.484 3.795h2.484v-3.795Z"
        />
        <Defs>
            <ClipPath id="a">
                <Rect width={22} height={22} x={4} y={36} fill="#fff" rx={11} />
            </ClipPath>
            <ClipPath id="b">
                <Rect width={20} height={20} x={5} y={5} fill="#fff" rx={10} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Leavel5SVG
