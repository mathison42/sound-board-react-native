import React from 'react';
import { ImageBackground } from 'react-native';

let pictures = [
    require('../pictures/nationals.jpg'),
    require('../pictures/regionals-2016.jpg'),
    require('../pictures/regionals-2017.jpg')
]

const Slide = ({num}) => {
    return <ImageBackground
                source={pictures[num]}
                style={{flex: .3, alignSelf: 'stretch' }}
            />
}

export default Slide;
