import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const NotificationSvg = ({color, height, width, handleClick}) => (
    <TouchableOpacity onPress={handleClick}>
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M3 17H17V10.031C17 6.148 13.866 3 10 3C6.134 3 3 6.148 3 10.031V17ZM10 1C14.97 1 19 5.043 19 10.031V19H1V10.031C1 5.043 5.03 1 10 1ZM7.5 20H12.5C12.5 20.663 12.2366 21.2989 11.7678 21.7678C11.2989 22.2366 10.663 22.5 10 22.5C9.33696 22.5 8.70107 22.2366 8.23223 21.7678C7.76339 21.2989 7.5 20.663 7.5 20Z"
            fill={color}
        />
        </Svg>
    </TouchableOpacity>
);