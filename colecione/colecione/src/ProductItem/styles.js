import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cccccc"
    },

    containerWrapper: {
        height: 200,
        backgroundColor: "#ffffff"
    },

    containerContent: {
        padding: 10,
        backgroundColor: "#ffffff"
    },

    slide: {
        backgroundColor: "#ffffff"
    },

    text: {
        color: '#000',
        fontSize: 16,
        marginTop: 5
    },

    price: {
        color: '#000',
        fontSize: 18,
        fontWeight: "bold"
    },

    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover"
        
    },
    paginationStyle: {
        bottom: 2, 
        left: 2,
        right: null
     }
});

export default styles;