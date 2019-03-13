import React, {Component} from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import UserMessage from './UserMessage';
import VisitorMessage from './VisitorMessage';

class Chat extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#EEEEEE"}}>
            
                <ScrollView style={{alignSelf: 'flex-end'}}>
                    <VisitorMessage message="Esperando a Van" date="12/11/2018 12:12"/>
                    <UserMessage message="Esperando a Van para ir para a faculdade" date="12/11/2018 12:15"/>
                    <VisitorMessage message="Nossa, esse aplicativo facilitou muito o meu dia a dia. Sei exatamente que horas a van vai passar." date="12/11/2018 12:19"/>
                    <VisitorMessage message="Mais uma viajem tranquila com o Motorista Marcos." date="12/11/2018 13:19"/>
                    <VisitorMessage message="Cheguei em casa Tranquilo." date="12/11/2018 13:25"/>
                    <UserMessage message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book2. " date="12/11/2018 14:15"/>
                    <VisitorMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac felis ut mauris tincidunt vehicula id vitae turpis. Integer sed bibendum dolor." date="12/11/2018 19:25"/>
                </ScrollView>
                
                <View>
                    <TextInput
                        style={{height: 40, borderRadius: 5, borderColor: "#FFFFFF", borderWidth: 1, backgroundColor: "#FFFFFF", color: "#cccccc"}}
                        value="Escreva aqui"
                        />
                </View>
                
            </View>
        );
    }
}

export default Chat;