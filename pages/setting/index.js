/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {px} from './../util/fix'
import RowList from "../../components/RowList";
import Head from "../../components/head";
import NavBar from "../nav";
import LoginIndex from './../login'
import {getNavigator} from "../route";
import Toast from './../util/toast'
import LoadingManagerView from './../../components/LoadingManagerView'

export default class SettingIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingStatus: LoadingManagerView.LoadingSuccess
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Head title={'设置'} navigator={this.props.navigator}></Head>
                <ScrollView>
                <View style={styles.mt16}>
                    <RowList leftTitle={'登录密码'} rightTitle={'修改密码'} isFinished={true}></RowList>
                    <RowList leftTitle={'交易密码'} rightTitle={'未设置'} isFinished={false}></RowList>
                </View>
                <View style={styles.mt16}>
                    <RowList leftTitle={'意见反馈'}></RowList>
                    <RowList leftTitle={'功能介绍'}></RowList>
                    <RowList leftTitle={'去评分'}></RowList>
                    <RowList leftTitle={'版本更新'} pressAlert={() => {Toast.show('当前已是最新版本')}}></RowList>
                    {/*<RowList leftTitle={'关于'}></RowList>*/}
                </View>
                    <View style={styles.mt16}>
                        <TouchableOpacity style={styles.logout} onPress={() => this.layOut()}>
                            <Text style={styles.logoutText}>安全退出</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <LoadingManagerView status={this.state.loadingStatus}></LoadingManagerView>
            </View>
        );
    }
    layOut () {
        getNavigator().replace({
            // component: LoginIndex,
            name: 'LoginIndex'
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4FB'
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
    mt16: {
        marginTop:16*px
    },
    logout: {
        height: 104*px,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    logoutText: {
        fontSize:32*px,
        color: '#F5222D'
    }
});
