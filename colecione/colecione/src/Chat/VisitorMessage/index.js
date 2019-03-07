import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class VisitorMessage extends Component {

    render() {
        return (
            <View>
                <View style={{backgroundColor: "#42a5f5", padding: 10, paddingLeft: 5, paddingTop: 3, margin: 5, marginTop: 10, borderRadius: 5, marginRight: 50, alignSelf: 'flex-start'}}>
                        <Text style={{paddingLeft: 5, color: "#FFFFFF"}}>
                            {this.props.message}
                        </Text>
                        <Text style={{paddingLeft: 5, color: "#cccccc", alignSelf: 'flex-end', fontSize:9 }}>
                            {this.props.date}
                        </Text>
                    </View>
            </View>
        );
    }
}

export default VisitorMessage;