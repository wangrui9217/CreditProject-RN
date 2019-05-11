/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LoginIndex from "./login";


export default class Launch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.launch} source={require('./../img/launch.png')}/>
            </View>
        );
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.props)
            this.props.navigator.replace({
                component:LoginIndex,
            })
        },2000);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    launch: {
        width: '100%',
        height: '100%'
    },
});
