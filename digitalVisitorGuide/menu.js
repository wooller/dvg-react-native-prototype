/**
 * Created by admin on 06/07/2017.
 */
import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableNativeFeedback
} from 'react-native';

const menuStyles = StyleSheet.create({
    menu:{
        backgroundColor: '#535353',
        paddingTop: 50
    },
    textItem:{
        marginLeft: 10,
        color: 'white',
        textAlign: 'left',
        fontSize: 18,
        fontFamily: 'OpenSans-Medium'
    },
    menuIcon:{
        height: 40,
        resizeMode: 'contain',
        width: 40,
        marginLeft: 25
    },
    menuItem:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 50,
        alignItems: 'center',
    },
    menuItemInactive:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 50,
        alignItems: 'center',
        opacity: 0.5
    }
});

class Menu extends React.Component {
    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired
    }
    render() {
        return (
            <ScrollView  scrollsToTop={false} style={menuStyles.menu}>
                <TouchableNativeFeedback  onPress={() => this.props.onItemSelected('Explore')} >
                    <View style={menuStyles.menuItem}>
                        <Image style={menuStyles.menuIcon} source={require('./explore.png')} />
                        <Text style={menuStyles.textItem}>Explore</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./programmes.png')} />
                    <Text style={menuStyles.textItem}>Daily Programme</Text>
                </View>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./gift_shop.png')} />
                    <Text style={menuStyles.textItem}>Gift Shops</Text>
                </View>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./drink.png')} />
                    <Text style={menuStyles.textItem}>Food and Drink</Text>
                </View>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./settings.png')} />
                    <Text style={menuStyles.textItem}>Settings</Text>
                </View>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./explore.png')} />
                    <Text style={menuStyles.textItem}>Explore</Text>
                </View>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./programmes.png')} />
                    <Text style={menuStyles.textItem}>Daily Programme</Text>
                </View>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./gift_shop.png')} />
                    <Text style={menuStyles.textItem}>Gift Shops</Text>
                </View>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./drink.png')} />
                    <Text style={menuStyles.textItem}>Food and Drink</Text>
                </View>
                <View style={menuStyles.menuItemInactive}>
                    <Image style={menuStyles.menuIcon} source={require('./settings.png')} />
                    <Text style={menuStyles.textItem}>Settings</Text>
                </View>
            </ScrollView>
        );
    }
}
export default Menu;