import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const SearchSvg = ({color, height, width, handleClick}) => (
    <TouchableOpacity onPress={handleClick}>
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
            d="M19.5725 19.5725L24 24M22.7221 11.8977C22.7221 17.9165 17.859 22.7954 11.8618 22.7954C5.86306 22.7954 1 17.9165 1 11.8991C1 5.87744 5.86306 1 11.8603 1C17.859 1 22.7221 5.87888 22.7221 11.8977Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            fill={color}
        />
        </Svg>
    </TouchableOpacity>
);
