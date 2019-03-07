import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProductListScreen from './src/ProductList';
import ProductItemScreen from './src/ProductItem';

const AppNavigator = createStackNavigator(
    {
        ProductList: ProductListScreen,
        ProductItem: ProductItemScreen
    },
    {
        initialRouteName: "ProductList"
    }
);

export default createAppContainer(AppNavigator);