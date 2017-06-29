/**
 * Created by admin on 29/06/2017.
 */

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
import {StackNavigator} from 'react-navigation';
class welcomeScreen extends React.Component {
    static navigationOptions = { headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 } };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Image style={styles.image} source={require('./welcome_screen.jpg')}>
                <View style={styles.backdropView}>
                    <Image style={styles.logo} source={require('./hcp_icon.png')} />
                    <Text style={styles.logoText}>Hampton Court Palace</Text>
                    <Text style={styles.textTitle}>A Journey of Discovery</Text>
                    <Button activeOpacity={1} style={styles.button}>Show me where to start</Button>
                    <Button activeOpacity={1} onPress={() =>
                        navigate('Explore')} style={styles.button}>Explore for myself</Button>
                </View>
            </Image>
        );
    }
}

class exploreScreen extends React.Component {
    static navigationOptions = {headerTintColor: 'white', headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 } };
    render() {
        return (
            <View style={styles.exploreScreenView}>
                <Text style={styles.exploreScreenText}>Explore the palace</Text>
                <Text style={styles.exploreScreenSubtitle}>Scroll through the list below to view the routes</Text>
            </View>
        );
    }
}

const digitalVisitorGuide = StackNavigator({
    Welcome: { screen: welcomeScreen },
    Explore: { screen: exploreScreen },
});

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
        marginTop: 50
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
    },
    exploreScreenView: {
        flex: 1,
        backgroundColor: '#323232',
        paddingLeft: 25,
        paddingRight: 25
    },
    exploreScreenText: {
        color: 'white',
        textAlign: 'left',
        fontSize: 24,
        marginTop: 60
    },
    exploreScreenSubtitle: {
        color: 'white',
        textAlign: 'left',
        fontSize: 14,
        marginTop: 10
    }
});

AppRegistry.registerComponent('digitalVisitorGuide', () => digitalVisitorGuide);
