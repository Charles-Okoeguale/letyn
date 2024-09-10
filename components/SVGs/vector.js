import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const VectorSvg = ({color, height, width, handleClick}) => (
    <TouchableOpacity onPress={handleClick}>
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
           d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75m0 10a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75M2.75 9a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"
           fill={color}
        />
        </Svg>
    </TouchableOpacity>
);