/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform, ToastAndroid, BackHandler, StatusBar} from 'react-native';
import Launch from "./pages/Launch";
import LoginIndex from './pages/login'
import {Navigator} from "react-native-deprecated-custom-components";
let lastClickTime = 0;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.onBackAndroid = this.onBackAndroid.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    // backgroundColor='rgba(255,96,0,1.0)'
                    // backgroundColor={'red'}
                barStyle={'light-content'}
                    // animated={true}
            />
            <Navigator
                // initialRoute={{name: '启动页', component: Launch}}
                initialRoute={{name: '登录页', component: LoginIndex}}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    this.navigator = navigator
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
            </View>
        );
    }

    onBackAndroid() {
        const routers = this.navigator.getCurrentRoutes();
        if (routers.length > 1) {
            this.navigator.pop();
            return true;
        }
        let now = new Date().getTime();
        if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次推出应用程序
            return false;//控制权交给原生
        }
        lastClickTime = now;
        ToastAndroid.show('再按一次退出一个', ToastAndroid.SHORT);
        return true;
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
