import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const GroupSvg = ({color, height, width, handleClick}) => (
    <TouchableOpacity onPress={handleClick}>
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
            d="M11.4583 20.8333C11.4583 21.1096 11.5681 21.3746 11.7634 21.5699C11.9588 21.7653 12.2237 21.875 12.5 21.875C12.7763 21.875 13.0412 21.7653 13.2366 21.5699C13.4319 21.3746 13.5417 21.1096 13.5417 20.8333V13.5417H20.8333C21.1096 13.5417 21.3746 13.4319 21.5699 13.2366C21.7653 13.0412 21.875 12.7763 21.875 12.5C21.875 12.2237 21.7653 11.9588 21.5699 11.7634C21.3746 11.5681 21.1096 11.4583 20.8333 11.4583H13.5417V4.16667C13.5417 3.8904 13.4319 3.62545 13.2366 3.4301C13.0412 3.23475 12.7763 3.125 12.5 3.125C12.2237 3.125 11.9588 3.23475 11.7634 3.4301C11.5681 3.62545 11.4583 3.8904 11.4583 4.16667V11.4583H4.16667C3.8904 11.4583 3.62545 11.5681 3.4301 11.7634C3.23475 11.9588 3.125 12.2237 3.125 12.5C3.125 12.7763 3.23475 13.0412 3.4301 13.2366C3.62545 13.4319 3.8904 13.5417 4.16667 13.5417H11.4583V20.8333Z"
            fill={color}
        />
        </Svg>
    </TouchableOpacity>
);