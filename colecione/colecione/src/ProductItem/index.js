import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'

import { Content } from 'native-base';
import Swiper from 'react-native-swiper'
import styles from './styles'
import MiniSeller from '../MiniSeller'

export default class extends Component {
  render () {
    return (
        <Content style={styles.container}>
            <View style={styles.containerWrapper}>
                <Swiper paginationStyle={styles.paginationStyle} >
                    <View style={styles.slide}>
                        <Image  style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFL6CuHfMVMskHxEFnGtTVv9vxq5erC1_N05umMo9MnZqJqjr" }} />
                    </View>
                    <View style={styles.slide}>
                        <Image  style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsERRpFEy83g-gmsy7MlNMNYRR6kJcTXpTVV05jOiHTXJFT3zd" }} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsERRpFEy83g-gmsy7MlNMNYRR6kJcTXpTVV05jOiHTXJFT3zd" }} />
                    </View>
                    <View style={styles.slide}>
                        <Image  style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsERRpFEy83g-gmsy7MlNMNYRR6kJcTXpTVV05jOiHTXJFT3zd" }} />
                    </View>
                </Swiper>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.price}>R$ 80,22</Text>
                <Text style={styles.text}>Titulo da merda do produto</Text>
            </View>
            <MiniSeller onPressChat={() => this.props.navigation.navigate('Chat')} onPressProfile={() => this.props.navigation.navigate('Profile')} />
            <View style={{backgroundColor: "#FFFFFF", padding: 10, marginTop: 5}}>
                <Text style={{fontSize: 18, fontWeight: "bold", color: "#000"}}>Descrição:</Text>
                <Text style={{color: "#000"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dolor est, dapibus sagittis enim egestas eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin consequat justo libero. Quisque mattis posuere enim, at ultrices felis posuere sit amet. Donec ac euismod neque. Donec ac diam quis sapien porttitor pharetra. Morbi eleifend elit non enim tincidunt vestibulum. Aliquam congue tincidunt libero, at venenatis ligula dictum a. Ut sit amet massa id ipsum placerat interdum sit amet vel lectus. Integer iaculis eros ut metus molestie luctus. Nulla et lacinia odio, ac euismod enim.</Text>
            </View>
            <View style={{flexDirection: "column"}}>
                <View style={{flexDirection: "row", backgroundColor: "#FFFFFF"}}>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Tamanho
                    </Text>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Grande
                    </Text>
                </View>
                <View style={{flexDirection: "row", backgroundColor: "#EEEEEE"}}>
                <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Cor
                    </Text>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Azul
                    </Text>
                </View>
                <View style={{flexDirection: "row", backgroundColor: "#FFFFFF"}}>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Tamanho
                    </Text>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Grande
                    </Text>
                </View>
                <View style={{flexDirection: "row", backgroundColor: "#EEEEEE"}}>
                <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Cor
                    </Text>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Azul
                    </Text>
                </View>
                <View style={{flexDirection: "row", backgroundColor: "#FFFFFF"}}>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Tamanho
                    </Text>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Grande
                    </Text>
                </View>
                <View style={{flexDirection: "row", backgroundColor: "#EEEEEE"}}>
                <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Cor
                    </Text>
                    <Text style={{width: "50%", paddingHorizontal: 10, paddingVertical: 5}}>
                        Valor bem grande só para ver como o campo vai se comportar
                    </Text>
                </View>
            </View>
        </Content>
    )
  }
}
