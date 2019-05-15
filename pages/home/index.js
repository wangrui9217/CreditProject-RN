/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import ProductItem from "../../components/productItem";
import {px} from './../util/fix'


type Props = {};
export default class HomeIndex extends Component<Props> {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.home1}>
                    <Image source={require('../../img/home/home_bg.png')} style={styles.home2}/>
                    <View style={styles.home3}>
                        <Text style={styles.home4}>小微企业信贷</Text>
                    </View>
                    <View style={styles.home5}>
                        <Text style={styles.home6}>暂无额度</Text>
                        <Text style={styles.home7}>授信申请失败</Text>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                    {
                        this.renderScrollImage()
                    }
                </ScrollView>
                <View style={styles.tipBox}>
                    <Text style={styles.tip}>我要贷款</Text>
                </View>
                <ProductItem></ProductItem>
            </ScrollView>
        );
    }
    renderScrollImage() {
        return [1,2,3,4,5,6].map((val, index) => {
            return(
                <View style={styles.lunboBox} key={index}>
                <Image source={require('./../../img/common/lunbo.png')} style={styles.lunbo}/>
                </View>
            )
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    home1: {
        position: 'relative'
    },
    home2: {
        width: '100%',
        height: 632 * px
    },
    home3: {
        width: '100%',
        height: 88 * px,
        alignItems: 'center',
        justifyContent: 'center',
        top: 40 * px,
        position: 'absolute'
    },
    home4: {
        fontSize: 36 * px,
        color: '#FFFFFF'
    },
    home5: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        top: 290 * px
    },
    home6: {
        color: '#fff',
        fontSize: 34 * px,
        marginBottom: 16 * px
    },
    home7: {
        fontSize: 28 * px,
        color: '#fff'
    },
    lunbo: {
        width: 686*px,
        height:176*px
    },
    lunboBox: {
        alignItems: 'center',
        width: 750*px
    },
    tipBox:{
        paddingLeft: 33*px,
        paddingTop: 56*px,
        paddingBottom: 16*px
    },
    tip:{
        fontSize:36*px,
        color: '#333'
    }
});
