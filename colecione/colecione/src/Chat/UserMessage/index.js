import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class UserMessage extends Component {

    render() {
        return (
            <View style={{backgroundColor: "#FFFFFF", padding: 10, paddingRight: 5, paddingTop: 3, margin: 5, marginTop: 10, borderRadius: 5, marginLeft: 50, alignSelf: 'flex-end'}}>
                <Text style={{paddingRight: 5, color: "#000000"}}>
                    {this.props.message}
                </Text>
                <Text style={{paddingRight: 5, marginBottom: -5, color: "#cccccc", alignSelf: 'flex-start', fontSize: 9 }}>
                    {this.props.date}
                </Text>
            </View>
        );
    }
}

export default UserMessage;