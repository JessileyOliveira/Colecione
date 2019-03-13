import React, {Component} from 'react';
import { View, Text, ScrollView,TouchableOpacity } from 'react-native';
import { Thumbnail, Icon } from 'native-base';
import RatingUser from './../RatingUser';
import ProductList from './../ProductList'
import styles from './styles';

class Profile extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#EEEEEE"}}>
                <View style={{height: 160, backgroundColor: "#FFFFFF"}}>
                    <View style={{backgroundColor: "#FFFF00", height: 80, alignContent: "flex-end", alignItems: "center"}}>
                        <Thumbnail style={{marginTop: 40}} large source={{uri: 'https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'}} />
                        <Text style={{fontSize: 24}}>Mario Narigudo da Silva</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", backgroundColor: "#FFFFFF", marginTop: 2, padding: 10, justifyContent: "space-around"}} >
                    <TouchableOpacity style={{flexDirection: "column", alignItems: "center"}} onPress={() => this.props.navigation.navigate('Chat')}>
                        <Icon type="FontAwesome5"  name="comment" style={{color: "#0000FF"}} />
                        <Text >Contato</Text>
                    </TouchableOpacity>
                    <RatingUser/>
                </View>
                <ScrollView style={{backgroundColor: "#FFFFFF", marginTop: 2}}>
                    <ProductList />
                </ScrollView>
            </View>
        );
    }
}

export default Profile;