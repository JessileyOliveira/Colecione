import React, { Component } from 'react';
import { Container, View, Content, ListItem, Text, Icon, Left, Body, Title, Thumbnail } from 'native-base';
import Navigation from './navigation';
export default class ListIconExample extends Component {
  render() {
    return (
      <Container>
        <View style={{backgroundColor: "#123456", flexDirection: "row", alignItems: "center", padding: 10}} >
            <Thumbnail source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx' }} />
            <Title style={{marginLeft: 15}}>Mario Narigudo</Title>
        </View>
        <Content >
          <ListItem icon onPress={() => this.props.navigation.navigate("ProductItem")} >
            <Left>
                <Icon name="home" style={{color: "#777777"}} />
            </Left>
            <Body>
              <Text style={{color: "#777777"}}>Home</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
                <Icon name="finger-print"  style={{color: "#777777"}} />
            </Left>
            <Body>
              <Text  style={{color: "#777777"}}>Perfil</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
                <Icon name="book"  style={{color: "#777777"}} />
            </Left>
            <Body>
              <Text  style={{color: "#777777"}}>Meus Anúncios</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
                <Icon name="mail"  style={{color: "#777777"}} />
            </Left>
            <Body>
              <Text  style={{color: "#777777"}}>Mensagens</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
                <Icon name="settings" style={{color: "#777777"}} />
            </Left>
            <Body>
              <Text  style={{color: "#777777"}}>Configurações</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}