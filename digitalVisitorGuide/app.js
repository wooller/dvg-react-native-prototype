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
    Image,
    FlatList,
    ListItem
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import standardViews from './assets/content.json';


class welcomeScreen extends React.Component {
    static navigationOptions = { headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 } };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Image style={styles.image} source={require('./welcome_screen.jpg')}>
                <View style={styles.backdropView}>
                    <Image style={styles.logo} source={require('./hcp_icon.png')} />
                    <Text style={styles.logoText}>{standardViews.welcomeScreen.logoLabel}</Text>
                    <Text style={styles.textTitle}>Discover the stories that never got out</Text>
                    <Button activeOpacity={1} onPress={() =>
                        navigate('Explore')} style={styles.button}>Get Started</Button>
                </View>
            </Image>
        );
    }
}

export default class exploreScreen extends Component {
    static navigationOptions = {headerTintColor: 'white', headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 } };
    renderItem({ item, index }) {
         return (
             <View style={styles.listItem}>
                 <Image style={styles.listItemImage} source={item.routeImage}/>
                 <View style={styles.listItemTextContainer}>
                     <Text style={styles.listItemTitle}>{item.routeTitle}</Text>
                     <Text style={styles.listItemDescription}>{item.routeDescription}</Text>
                 </View>
             </View>
         );
    }
    render() {
        return (
            <View style={styles.exploreScreenView}>
                <Text style={styles.exploreScreenText}>Explore the tower</Text>
                <Text style={styles.exploreScreenSubtitle}>Scroll through the list below to view the routes</Text>
                <FlatList
                    data={[
                        {"routeID": "henry_apartments", "routeTitle": "Crown Jewels", "routeDescription": "One of the unmissable highlights of a visit to the Tower of London ", "routeImage": require('./crownJewels.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "White Tower", "routeDescription": "Built by William the Conqueror, which today houses displays from the Royal Armouries collection.", "routeImage": require('./whiteTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Medieval Palace", "routeDescription": "Walk through the surprisingly rich colours and comfortable furnishings of the Medieval Palace", "routeImage": require('./medievalPalace.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Bloody Tower", "routeDescription": "Decide who murdered the Little Princes in the Bloody Tower ", "routeImage": require('./bloodyTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Beauchamp Tower", "routeDescription": "Discover the extraordinary prisoner graffiti in the Beauchamp Tower", "routeImage": require('./BeauchampTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Wakefield Tower", "routeDescription": "See instruments of torture in the Lower Wakefield Tower", "routeImage": require('./wakefieldTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Crown Jewels", "routeDescription": "One of the unmissable highlights of a visit to the Tower of London ", "routeImage": require('./crownJewels.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "White Tower", "routeDescription": "Built by William the Conqueror, which today houses displays from the Royal Armouries collection.", "routeImage": require('./whiteTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Medieval Palace", "routeDescription": "Walk through the surprisingly rich colours and comfortable furnishings of the Medieval Palace", "routeImage": require('./medievalPalace.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Bloody Tower", "routeDescription": "Decide who murdered the Little Princes in the Bloody Tower ", "routeImage": require('./bloodyTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Beauchamp Tower", "routeDescription": "Discover the extraordinary prisoner graffiti in the Beauchamp Tower", "routeImage": require('./BeauchampTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Wakefield Tower", "routeDescription": "See instruments of torture in the Lower Wakefield Tower", "routeImage": require('./wakefieldTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Crown Jewels", "routeDescription": "One of the unmissable highlights of a visit to the Tower of London ", "routeImage": require('./crownJewels.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "White Tower", "routeDescription": "Built by William the Conqueror, which today houses displays from the Royal Armouries collection.", "routeImage": require('./whiteTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Medieval Palace", "routeDescription": "Walk through the surprisingly rich colours and comfortable furnishings of the Medieval Palace", "routeImage": require('./medievalPalace.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Bloody Tower", "routeDescription": "Decide who murdered the Little Princes in the Bloody Tower ", "routeImage": require('./bloodyTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Beauchamp Tower", "routeDescription": "Discover the extraordinary prisoner graffiti in the Beauchamp Tower", "routeImage": require('./BeauchampTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Wakefield Tower", "routeDescription": "See instruments of torture in the Lower Wakefield Tower", "routeImage": require('./wakefieldTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Crown Jewels", "routeDescription": "One of the unmissable highlights of a visit to the Tower of London ", "routeImage": require('./crownJewels.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "White Tower", "routeDescription": "Built by William the Conqueror, which today houses displays from the Royal Armouries collection.", "routeImage": require('./whiteTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Medieval Palace", "routeDescription": "Walk through the surprisingly rich colours and comfortable furnishings of the Medieval Palace", "routeImage": require('./medievalPalace.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Bloody Tower", "routeDescription": "Decide who murdered the Little Princes in the Bloody Tower ", "routeImage": require('./bloodyTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Beauchamp Tower", "routeDescription": "Discover the extraordinary prisoner graffiti in the Beauchamp Tower", "routeImage": require('./BeauchampTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Wakefield Tower", "routeDescription": "See instruments of torture in the Lower Wakefield Tower", "routeImage": require('./wakefieldTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Crown Jewels", "routeDescription": "One of the unmissable highlights of a visit to the Tower of London ", "routeImage": require('./crownJewels.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "White Tower", "routeDescription": "Built by William the Conqueror, which today houses displays from the Royal Armouries collection.", "routeImage": require('./whiteTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Medieval Palace", "routeDescription": "Walk through the surprisingly rich colours and comfortable furnishings of the Medieval Palace", "routeImage": require('./medievalPalace.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Bloody Tower", "routeDescription": "Decide who murdered the Little Princes in the Bloody Tower ", "routeImage": require('./bloodyTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Beauchamp Tower", "routeDescription": "Discover the extraordinary prisoner graffiti in the Beauchamp Tower", "routeImage": require('./BeauchampTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Wakefield Tower", "routeDescription": "See instruments of torture in the Lower Wakefield Tower", "routeImage": require('./wakefieldTower.jpg')},
                        {"routeID": "henry_apartments", "routeTitle": "Yeoman Warder", "routeDescription": "Join one of the famous Yeoman Warder tours and hear exciting tales from the Tower’s past ", "routeImage": require('./yeomanWarder.jpg')}
                    ]}
                    renderItem={this.renderItem}
                />
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
        fontSize: 30,
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 65,
        marginTop: 25,
        fontFamily: 'FaraoText'
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
        fontFamily: 'FaraoText',
        marginTop: 5,
        marginBottom: 50
    },
    button:{
        color: 'white',
        backgroundColor: '#323232',
        width: 'auto',
        fontWeight: 'normal',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 45,
        marginLeft: 45,
        marginTop: 55,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        fontSize: 16,
        fontFamily: 'OpenSans-Semibold'
    },
    exploreScreenView: {
        flex: 1,
        backgroundColor: '#323232'
    },
    exploreScreenText: {
        color: 'white',
        textAlign: 'left',
        fontSize: 24,
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'FaraoText'
    },
    exploreScreenSubtitle: {
        color: 'white',
        textAlign: 'left',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'OpenSans-Light'
    },
    listItem:{
        backgroundColor: '#1f1f1f',
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5
    },
    listItemImage:{
        height: 100,
        width: 95,
        marginRight: 10,
        resizeMode: 'cover',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1
    },
    listItemTextContainer: {
        flexDirection: 'column',
        flex: 1,
        flexWrap:'wrap'
    },
    listItemTitle: {
        color: 'white',
        textAlign: 'left',
        fontSize: 16,
        paddingTop: 5,
        fontFamily: 'OpenSans-Semibold'
    },
    listItemDescription: {
        color: 'white',
        textAlign: 'left',
        fontSize: 14,
        paddingTop: 5,
        paddingRight: 5,
        fontFamily: 'OpenSans-Light'
    }
});

AppRegistry.registerComponent('digitalVisitorGuide', () => digitalVisitorGuide);
