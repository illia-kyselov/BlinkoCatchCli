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
const Level1SVG = (props) => (
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
                    d="M22.941 33.588c.151-.209 1.664 1.33 3.031 2.796a13.371 13.371 0 0 0 5.413 3.518c1.796.62 3.659 1.325 3.51 1.529-.28.387-5.358-1.084-7.39-2.556s-4.844-4.9-4.564-5.287Z"
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
            d="M67.432 54.672h-6.67v1.932c.291-.26.667-.468 1.127-.621a5.152 5.152 0 0 1 1.587-.23c1.043 0 1.924.245 2.645.736.72.49 1.257 1.15 1.61 1.978.353.813.529 1.717.529 2.714 0 1.84-.521 3.274-1.564 4.301C65.669 66.494 64.25 67 62.441 67c-1.319 0-2.461-.23-3.427-.69-.95-.46-1.679-1.096-2.185-1.909-.49-.813-.72-1.74-.69-2.783h4.968c0 .245.084.475.253.69.169.215.445.322.828.322.383 0 .667-.138.851-.414.184-.276.276-.652.276-1.127 0-.445-.107-.782-.322-1.012-.2-.23-.49-.345-.874-.345-.322 0-.567.077-.736.23a.698.698 0 0 0-.253.529h-4.968V50.187h11.27v4.485Z"
        />
        <Defs>
            <ClipPath id="b">
                <Rect width={27} height={27} x={20} y={16} fill="#fff" rx={13.5} />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Level1SVG
