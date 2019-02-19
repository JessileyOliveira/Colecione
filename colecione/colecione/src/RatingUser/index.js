import React, {Component} from 'react';
import styles from './styles';
import { Rating } from 'react-native-ratings';
import { View, Text } from 'native-base';

class RatingUser extends Component {

    render() {
        return (
            <View style={{ flexDirection: "row", alignItems: "center"}}>
                <Rating
                    readonly={true}
                    imageSize={15}
                    ratingColor="#ef5350"
                    type='custom'
                />
                <Text style={{marginLeft: 5, color: "#ef5350"}}>3/5</Text>
            </View>
        );
    }
}

export default RatingUser;