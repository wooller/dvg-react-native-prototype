/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class digitalVisitorGuide extends Component {
    render() {
        return (
            <Image style={styles.image} source={require('./welcome_screen.jpg')}>
                <View style={styles.backdropView}>
                    <Image style={styles.logo} source={require('./hcp_icon.png')} />
                    <Text style={styles.logoText}>Hampton Court Palace</Text>
                    <Text style={styles.textTitle}>A Journey of Discovery</Text>
                    <Button activeOpacity={1} style={styles.button}>Show me where to start</Button>
                    <Button activeOpacity={1} style={styles.button}>Explore for myself</Button>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    imageContainer: {
        flex: 1,
        width: null,
        height: null
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
    },
    backdropView: {
        width: null,
        height: null,
        backgroundColor: 'rgba(10,0,0,0)'
    },
    textTitle: {

        textAlign: 'center',
        color: 'white',
        fontSize: 35,
        paddingLeft: 25,
        paddingRight: 25
    },
    logo: {
        height: 50,
        resizeMode: 'contain',
        width: null,
        marginTop: 115
    },
    logoText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'Farao OT',
        marginBottom: 50
    },
    button:{
        color: 'white',
        backgroundColor: '#107aab',
        width: 'auto',
        fontWeight: 'normal',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 45,
        marginLeft: 45,
        marginTop: 35,
        marginBottom: 25,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1
    }
});

AppRegistry.registerComponent('digitalVisitorGuide', () => digitalVisitorGuide);
