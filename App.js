import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform, ToastAndroid, BackHandler} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import {getRouteMap, registerNavigator} from './pages/route';
let lastClickTime = 0;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.onBackAndroid = this.onBackAndroid.bind(this);
        this.renderScene = this.renderScene.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                        name: 'LaunchPage'
                    }}/>
            </View>
        );
    }
    //出场动画
    configureScene(route) {
        let sceneAnimation = getRouteMap().get(route.name).sceneAnimation;
        if (sceneAnimation) {
            return sceneAnimation;
        }
        //默认
        return Navigator.SceneConfigs.PushFromRight
    }
    renderScene(route, navigator) {
        this.navigator = navigator;
        registerNavigator(navigator);
        //Each component name should start with an uppercase letter
        //jsx中的组件都得是大写字母开头, 否则将报错, expected a component class, got [object Object]
        let Component = getRouteMap().get(route.name).component;
        console.log(route.name, Component, getRouteMap().get(route.name),getRouteMap(),777)
        if (!Component) {
            return (
                <View style={styles.errorView}>
                    <Text style={styles.errorText}>您所启动的Component未在routeMap中注册</Text>
                </View>
            );
        }
        return (
            <Component {...route}/>
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
    },
    navigator: {
        flex: 1,
        backgroundColor: 'white'
    },
});
