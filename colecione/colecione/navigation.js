import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProductListScreen from './src/ProductList';
import ProductItemScreen from './src/ProductItem';
import ChatScreen from './src/Chat';
import ProfileScreen from './src/Profile';

const AppNavigator = createStackNavigator(
    {
        ProductList: ProductListScreen,
        ProductItem: ProductItemScreen,
        Chat: ChatScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: "ProductList"
    }
);

export default createAppContainer(AppNavigator);