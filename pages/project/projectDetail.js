/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,ScrollView,TouchableNativeFeedback} from 'react-native';
import Head from "../../components/head";
import {px} from './../util/fix'

export default class ProjectDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Head title={'信用快贷'} navigator={this.props.navigator}></Head>
                <View style={styles.box}>
                    <ScrollView>
                        <View style={styles.box1}>
                            <Text style={styles.box5}>信用快贷</Text>
                            <View style={styles.box6}>
                                <View style={styles.box2}>
                                    <Text style={styles.box3}>5.0025%</Text>
                                    <Text style={styles.box4}>七日年化收益率</Text>
                                </View>
                                <View style={styles.box2}>
                                    <Text style={styles.box7}>12个月</Text>
                                    <Text style={styles.box4}>产品期限</Text>
                                </View>
                            </View>

                        </View>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                                <Text style={{margin: 30}}>Button</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.bottom}>
                    <Text style={styles.bottomBtn}>立即申请</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(243,244,251)'
    },
    bottom: {
        backgroundColor: '#2B64FF',
        height: 98*px,
        justifyContent:'center',
        alignItems: 'center'
    },
    bottomBtn: {
        fontSize: 36*px,
        color: '#fff'
    },
    box: {
        flex: 1
    },
    box1: {
        height: 280*px,
        backgroundColor: '#2B64FF',
        paddingLeft: 32*px,
        paddingTop: 48*px
    },
    box2: {
        flex: 1
    },
    box3: {
        lineHeight: 90*px,
        fontSize: 64*px,
        color: '#fff'
    },
    box4: {
        fontSize: 24*px,
        color: '#fff',
        opacity: 0.8
    },
    box5: {
        color: '#fff',
        fontSize: 32*px
    },
    box6: {
        flexDirection: 'row'
    },
    box7:{
        color: '#fff',
        fontSize: 36*px,
        lineHeight: 90*px
    }
});
