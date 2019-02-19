import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './styles';
import Product from './Product';

class ProductList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Product 
                    uri="http://cdn.revistadonna.clicrbs.com.br/wp-content/uploads/sites/17/2016/09/fresh_100ml_bottle.jpg"
                    nomeProd="Baguio louco da Fresh"
                />
                <Product 
                    uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKe1AV_6M0Bi4OGjBw2fBOu7X4rGKChlpU2_9wdUk9ewnfbS9"
                    nomeProd="Suquinho 2000"
                />
                <Product 
                    uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsERRpFEy83g-gmsy7MlNMNYRR6kJcTXpTVV05jOiHTXJFT3zd"
                    nomeProd="Bom Bril"
                />
                <Product 
                    uri="https://cdn.igui.com/assets/produto/tratamento/solo/solo-produto-quimico-igui.jpg"
                    nomeProd="Solo kill"
                />
                <Product 
                    uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFL6CuHfMVMskHxEFnGtTVv9vxq5erC1_N05umMo9MnZqJqjr"
                    nomeProd="Cachaça Tucano"
                />
                <Product 
                    uri="https://www.acqualimp.com/wp-content/uploads/2017/05/www.acqualimp.com-waterbox-waterbox-acqualimp.jpg"
                    nomeProd="Negócio estranho cheio de buracos"
                />
                <Product 
                    uri="https://img2.ibxk.com.br/2019/01/08/08182140759116.jpg?w=700"
                    nomeProd="Peça HDMI"
                />
                <Product 
                    uri="http://cdn.revistadonna.clicrbs.com.br/wp-content/uploads/sites/17/2016/09/fresh_100ml_bottle.jpg"
                    nomeProd="Baguio louco da Fresh"
                />
                <Product 
                    uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKe1AV_6M0Bi4OGjBw2fBOu7X4rGKChlpU2_9wdUk9ewnfbS9"
                    nomeProd="Suquinho 2000"
                />
            </View>
        );
    }
}

export default ProductList;