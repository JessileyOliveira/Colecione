import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class Product extends Component {

    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image style={styles.image} source={{ uri: this.props.uri }} />
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{this.props.nomeProd}</Text>
                    <Text style={styles.price} >RS 22,50</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Product;