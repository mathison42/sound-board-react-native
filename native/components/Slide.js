import React from 'react';
import { ImageBackground } from 'react-native';

let pictures = [
    require('../pictures/nationals.jpg'),
    require('../pictures/nationals-badminton.jpg'),
    require('../pictures/nationals-friends.jpg'),
    require('../pictures/nationals-tarik.jpg'),
    require('../pictures/nationals-wiz-yelling.jpg'),
    require('../pictures/qctu-cheering.jpg'),
    require('../pictures/regionals-2016.jpg'),
    require('../pictures/regionals-2016-winning.jpg'),
    require('../pictures/regionals-2017.jpg'),
    require('../pictures/regionals-fun.jpg')
]

const Slide = ({num}) => {
    return <ImageBackground
                source={pictures[num]}
                style={{flex: .3, alignSelf: 'stretch' }}
            />
}

export default Slide;
