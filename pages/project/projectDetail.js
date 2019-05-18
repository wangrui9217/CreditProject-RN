/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableNativeFeedback,
    RefreshControl, StatusBar
} from 'react-native';
import Head from "../../components/head";
import {px} from './../util/fix'
import {getNavigator} from "../route";

export default class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    componentDidMount () {
        this._onRefresh()
    }
    _onRefresh () {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        }, 2000)
    }
    static defaultProps =
        {
            id: '信用快贷'
        }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#fff'}
                />
                <Head title={this.props.data.name}></Head>
                <View style={styles.box}>
                    <ScrollView refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this._onRefresh()}/>}>
                        <View style={styles.box1}>
                            <Text style={styles.box5}>{this.props.data.name}</Text>
                            <View style={styles.box6}>
                                <View style={styles.box2}>
                                    <Text style={styles.box3}>{this.props.data.rate}%</Text>
                                    <Text style={styles.box4}>七日年化收益率</Text>
                                </View>
                                <View style={styles.box2}>
                                    <Text style={styles.box7}>{this.props.data.term}个月</Text>
                                    <Text style={styles.box4}>产品期限</Text>
                                </View>
                            </View>

                        </View>
                        <View style={styles.detail}>
                            <View style={[{marginBottom: 16*px},styles.detail1]}>
                                <Text style={styles.detail2}>借款金额范围</Text>
                                <Text style={styles.detail3}>1万~20万</Text>
                            </View>
                            <View style={styles.detail1}>
                                <Text style={styles.detail2}>还款方式</Text>
                                <Text style={styles.detail3}>等额本金</Text>
                            </View>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.info1}>
                                <View style={styles.info2}></View>
                                <Text style={styles.info3}>产品特点</Text>
                            </View>
                            <View>
                                <Text style={styles.info4}>产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点</Text>
                            </View>
                            <View style={styles.info1}>
                                <View style={styles.info2}></View>
                                <Text style={styles.info3}>产品介绍</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.listItem1}>产品名称</Text>
                                <Text style={styles.listItem2}>产品名产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称称产品名称产品名称</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.listItem1}>产品类型</Text>
                                <Text style={styles.listItem2}>产品名产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称称产品名称产品名称</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.listItem1}>风险说明</Text>
                                <Text style={styles.listItem2}>产品名产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称产品名称称产品名称产品名称</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPress={() => {getNavigator().pop()}}
                    >
                        <View style={styles.bottom}>
                            <Text style={styles.bottomBtn}>立即申请</Text>
                        </View>

                </TouchableNativeFeedback>
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
    },
    detail: {
        padding: 32*px,
        backgroundColor: '#fff',
        marginBottom: 32*px
    },
    detail1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    detail2: {
        color: '#999',
        fontSize: 28*px
    },
    detail3: {
        color: '#333',
        fontSize: 28*px
    },
    info: {
        paddingLeft: 32*px,
        paddingRight: 32*px,
        paddingBottom: 32*px,
        backgroundColor: '#fff'
    },
    info1: {
        flexDirection: 'row',
        height: 102*px,
        alignItems: 'center'
    },
    info2: {
        width: 16*px,
        height: 16*px,
        borderColor: '#2B64FF',
        borderRadius: 16*px,
        borderWidth: 3*px,
        marginRight:8*px
    },
    info3: {
        fontSize: 32*px,
        color: '#333'
    },
    info4: {
        color: '#666',
        fontSize: 28*px
    },
    list: {
        flexDirection: 'row',
        marginBottom:5*px
    },
    listItem1: {
        fontSize:28*px,
        color: '#999',
        marginRight: 42*px
    },
    listItem2: {
        fontSize: 28*px,
        color: '#666',
        flex: 1,
        flexWrap: 'wrap'
    }
});
