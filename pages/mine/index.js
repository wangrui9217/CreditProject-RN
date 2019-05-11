/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert, ListView, Image, ScrollView} from 'react-native';
import {px} from './../util/fix'
import RowList from "../../components/RowList";
import SettingIndex from "../setting";


export default class MineIndex extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.mine1}>
                        <Image source={require('./../../img/mine/bg_wode.png')} style={styles.mine2}></Image>
                        <View style={styles.mine3}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('./../../img/mine/imag_touxiang_wode.png')}
                                       style={styles.mine5}></Image>
                                <Text style={styles.mine4}>上海指望金科</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity>
                                    <Image source={require('./../../img/mine/personal_message_red.png')}
                                           style={styles.mine6}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {this.goSetting()}}>
                                    <Image source={require('./../../img/mine/personal_setting.png')}
                                           style={styles.mine7}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.hedInfo1}>
                            <Text style={styles.hedInfo2}>待还金额(元)</Text>
                            <View style={styles.hedInfo3}>
                                <Text style={styles.hedInfo4}>200,000</Text>
                                <TouchableOpacity style={styles.hedInfo5}>
                                    <Text style={styles.hedInfo6}>还 款</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.hedInfo7}>
                                <TouchableOpacity style={styles.hedInfo10}>
                                    <Text style={styles.hedInfo8}>可用额度(元)</Text>
                                    <Text style={styles.hedInfo9}>200,000</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.hedInfo10}>
                                    <Text style={styles.hedInfo8}>我的借款(元)</Text>
                                    <Text style={styles.hedInfo9}>200,000</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mine8}>
                        <Text style={{fontSize:32*px,color:'#333',fontWeight:'500'}}>授信资料</Text>
                    </View>
                    <View style={{marginBottom: 16 * px}}>
                        <RowList leftTitle={'企业信息'} rightTitle={'已完成'} isFinished={true}
                                 pressAlert={this.pressAlert}></RowList>
                        <RowList leftTitle={'法人信息'} rightTitle={'已完成'} isFinished={true}></RowList>
                        <RowList leftTitle={'征信报告'} rightTitle={'已完成'} isFinished={true}></RowList>
                        <RowList leftTitle={'财务信息'} rightTitle={'未完成'} isFinished={false}></RowList>
                        <RowList leftTitle={'资产信息'} rightTitle={'未完成'} isFinished={false}></RowList>
                        <RowList leftTitle={'担保信息'} rightTitle={'未完成'} isFinished={false}></RowList>
                    </View>
                    <RowList leftTitle={'借款记录'} rightTitle={'已完成'} isFinished={true}></RowList>
                    <RowList leftTitle={'对公账户'} rightTitle={'已完成'} isFinished={true}></RowList>
                </View>
            </ScrollView>
        );
    }

    pressAlert() {
        Alert.alert('点击了')
    }
    goSetting () {
        this.props.navigator.push({
            component: SettingIndex
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4FB',
        paddingBottom: 50
    },
    mine1: {
        position: 'relative'
    },
    mine2: {
        width: '100%',
        height: 320 * px
    },
    mine3: {
        height: 88 * px,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 40*px,
        paddingRight: 32 * px,
        paddingLeft: 32 * px,
        width: '100%'
    },
    mine4: {
        fontSize: 32 * px,
        color: '#fff'
    },
    mine5: {
        width: 56 * px,
        height: 56 * px,
        marginRight: 16*px
    },
    mine6: {
        width: 46 * px,
        height: 46 * px,
        marginRight: 44 * px
    },
    mine7: {
        width: 46 * px,
        height: 46 * px,
    },
    mine8: {
        height: 104*px,
        justifyContent:'center',
        paddingLeft:32*px,
        backgroundColor:'#fff',
        marginTop: 204*px
    },
    hedInfo1: {
        backgroundColor: '#fff',
        borderRadius: 16*px,
        height:332*px,
        width: '90%',
        top: 160*px,
        position: 'absolute',
        left: '5%',
        paddingLeft:32*px
    },
    hedInfo2: {
        fontSize:28*px,
        opacity:0.8,
        color: '#999',
        paddingTop:32*px
    },
    hedInfo3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    hedInfo4: {
        lineHeight: 90*px,
        fontSize: 80*px,
        color: '#333'
    },
    hedInfo5: {
        width:136*px,
        height:60*px,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#2B64FF',
        borderTopLeftRadius: 30*px,
        borderBottomLeftRadius: 30*px
    },
    hedInfo6: {
        fontSize:26*px,
        color: '#fff'
    },
    hedInfo7: {
        flexDirection: 'row',
        marginTop:45*px
    },
    hedInfo8: {
        color:'#999',
        fontSize: 24*px
    },
    hedInfo9: {
        lineHeight:56*px,
        fontSize:40*px,
        color: '#333'
    },
    hedInfo10: {
        flex:1
    },
});
