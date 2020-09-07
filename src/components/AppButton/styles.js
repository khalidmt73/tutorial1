import {StyleSheet} from 'react-native';

const buttonColor = 'black';
const textColor   = 'white';

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:buttonColor,
        borderColor:textColor,
        borderRadius:5,
        borderWidth:1,
        padding:10,
        justifyContent: 'center',
        alignItems:'center',
    },
    title: {
        color: textColor,
        fontWeight:'bold',
    }
});
export default styles;