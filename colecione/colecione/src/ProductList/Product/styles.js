import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    "container": {
        margin: 5,
        width: (width - 40) / 2,
        borderRadius: 5,
        shadowColor: "blue",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {width: 80, height: 80},
        borderWidth: 1,
        borderColor: "#EEEEEE"

    },

    "image": {
        width: "100%",
        height: 120,
        resizeMode: "contain"
    },

    "title": {
        marginHorizontal: 10,
        fontSize: 12,
        color: "#000000",
    },
    
    "price": {
        fontWeight: "bold",
        color: "#000000",
        marginHorizontal: 10,
        fontSize: 14,
        marginVertical: 1
    }
});

export default styles;