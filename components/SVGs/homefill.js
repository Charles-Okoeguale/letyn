import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const HomeFillSvg = ({color, height, width, handleClick}) => (
    <TouchableOpacity onPress={handleClick}>
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
            d="M21 20.7337C21 20.9989 20.8946 21.2533 20.7071 21.4408C20.5196 21.6283 20.2652 21.7337 20 21.7337H4C3.73478 21.7337 3.48043 21.6283 3.29289 21.4408C3.10536 21.2533 3 20.9989 3 20.7337V10.2237C2.99989 10.0713 3.03462 9.92091 3.10152 9.78399C3.16841 9.64708 3.26572 9.52726 3.386 9.43369L11.386 3.21069C11.5615 3.07414 11.7776 3 12 3C12.2224 3 12.4385 3.07414 12.614 3.21069L20.614 9.43369C20.7343 9.52726 20.8316 9.64708 20.8985 9.78399C20.9654 9.92091 21.0001 10.0713 21 10.2237V20.7337Z"
            fill={color}
        />
        </Svg>
    </TouchableOpacity>
);