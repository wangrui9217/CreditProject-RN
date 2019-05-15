/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Alert, TouchableOpacity} from 'react-native';
import LoginIndex from "./login";
let toLogin = ''
export default class Launch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftTime: 3
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    // backgroundColor='rgba(255,96,0,1.0)'
                    // backgroundColor={'red'}
                    // barStyle={'light-content'}
                    // animated={true}
                />
                <TouchableOpacity style={styles.countTime} onPress={() => {this.toLogin()}}>
                    <View>
                        <Text style={styles.countTimeText}>{this.state.leftTime}</Text>
                    </View>
                </TouchableOpacity>
                <Image style={styles.launch} source={require('./../img/launch.png')}/>
            </View>
        );
    }
    componentDidMount() {
        toLogin = setInterval(() => {
            let time = this.state.leftTime
            if (time === 0) {
                clearInterval(toLogin)
                this.toLogin()
            } else {
                time = this.state.leftTime - 1
                this.setState({leftTime: time})
            }
        }, 1000)
    }
    componentWillUnmount () {
        clearInterval(toLogin)
    }
    toLogin() {
        this.props.navigator.replace({
            component:LoginIndex,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    launch: {
        width: '100%',
        height: '100%'
    },
    countTime: {
        position: 'absolute',
        right:30,
        top: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
    },
    countTimeText:{
        color: '#fff'
    }
});
