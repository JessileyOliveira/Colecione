import React, {Component} from 'react';
import styles from './styles';
import RatingUser from '../RatingUser';
import { TouchableOpacity } from 'react-native';
import { View, Thumbnail, Text, Icon } from 'native-base';

class MiniSeller extends Component {

    render() {
        return (
            <View style={{marginTop: 5, backgroundColor: "#ffffff", flexDirection: "row", alignItems: "center", padding: 10, borderColor: "#eee", borderTopWidth: 1, borderBottomWidth: 1}} >
                <TouchableOpacity onPress={this.props.onPressProfile} style={{flexDirection: "row", alignItems: "center"}}>
                    <Thumbnail source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx' }}  />
                    <View style={{ flexDirection: "column", alignItems: "flex-start", paddingHorizontal: 15}}>
                        <Text style={{color: "#000000"}}>Mario Narigudo</Text>
                        <RatingUser />
                    </View>
                </TouchableOpacity>
                <View  style={{alignContent: "flex-end", alignItems: "flex-end",  flex: 1, paddingRight: 10}}>
                    <Icon type="FontAwesome5"  name="comment" style={{color: "#0000FF"}} onPress={this.props.onPressChat} />
                </View>
            </View>
        );
    }
}

export default MiniSeller;