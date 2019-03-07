import React, { Component } from 'react';
import { Drawer, Container, Header, View, Icon, Item, Input, Content } from 'native-base';
import FooterExample from './sidebar';
import Navigation from './navigation';
export default class DrawerExample extends Component {
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    render() {
        
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<FooterExample navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
                <Container>
                    <Header searchBar rounded>
                        <View transparent style={{alignItems: "center", flexDirection: "row", paddingRight: 10}}>
                            <Icon style={{color: "#FFFFFF", fontSize: 30}} name='menu' onPress={() => this.openDrawer()} />
                        </View>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Procurar" />
                        </Item>
                    </Header>
                    <View style={{flex: 1}}>
                        <Navigation />
                    </View>
                </Container>
            </Drawer>
        );
    }
}