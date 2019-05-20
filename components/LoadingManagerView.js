/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,ActivityIndicator} from 'react-native';
import {px, deviceWidth, deviceHeight} from './../pages/util/fix'
const Loading = 'LOADING';//加载中
const LoadingError = 'LOADING_ERROR';//加载失败
const LoadingSuccess = 'LOADING_SUCCESS';//加载成功

export default class LoadingManagerView extends Component {
    render() {
        switch (this.props.status) {
            case Loading:
                return (
                    <View style={styles.container}>
                        <View style={styles.box}>
                            <ActivityIndicator size="large" color="#2B64FF" />
                            <Text style={styles.text}>加载中</Text>
                        </View>
                    </View>
                );
            case LoadingError:
                return (
                    <View>
                        <Text style={styles.text}>加载失败, 请点击重试</Text>
                    </View>
                );
            case LoadingSuccess:
                return null;
            default:
                return (
                    <View>
                        <Text style={styles.errorText}>状态定义错误</Text>
                    </View>
                );
        }
    }
}

LoadingManagerView.Loading = Loading;//加载中
LoadingManagerView.LoadingError = LoadingError;//加载失败
LoadingManagerView.LoadingSuccess = LoadingSuccess;//加载成功


const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: deviceHeight,
        // justifyContent: 'center',
        // alignItems: 'center',
        zIndex: 99,
        // backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute'
    },
    box: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '80%',
        left: '10%',
        top: '50%',
        height: '10%'
    }
});
