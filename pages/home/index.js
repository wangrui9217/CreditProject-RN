/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert} from 'react-native';
import ProductItem from "../../components/productItem";
import ProjectDetail from './../project/projectDetail'
import {px} from './../util/fix'
import NavBar from "../nav";


export default class HomeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applyState: 1
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.home1}>
                        <Image source={require('../../img/home/home_bg.png')} style={styles.home2} resizeMode={'stretch'}/>
                        <View style={styles.home3}>
                            <Text style={styles.home4}>小微企业信贷</Text>
                        </View>
                        <View style={styles.home5}>
                            {
                                this.renderApplyTip()
                            }
                            {
                                this.renderApplyState()
                            }
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
                    <ProductItem pressFunc={(val, index) => this.goApply(val, index)}></ProductItem>
                </ScrollView>
            </View>

        );
    }
    renderApplyTip () {
        if (this.state.applyState === 0) {
            return(
                <Text style={styles.home6}>暂无额度</Text>
            )
        } else {
            return(
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.home11}>我的额度(元)</Text>
                    <Text style={styles.home10}>200,000</Text>
                </View>
            )
        }
    }
    renderApplyState () {
        if (this.state.applyState === 0) {
            return(
                <Text style={styles.home7}>授信申请失败</Text>
            )
        } else {
            return(
                <TouchableOpacity style={styles.home8}>
                    <Text style={styles.home9}>申请额度</Text>
                </TouchableOpacity>
            )
        }
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
    goApply (val ,index) {
        // Alert.alert(val, index.toString())
        this.props.navigator.push({
            component: ProjectDetail,
            passProps: {
                data: val
            }
        })
    }
    componentDidMount () {
        Alert.alert(
            '签署合同',
            '您有一个产品订单审核成功，签署合同后将收到你申请的借款。',
            [
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: '签署合同', onPress: () => console.log('OK Pressed')},
            ],
        )
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
        top: 230 * px,
        bottom: 0
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
    home8: {
        width: 352*px,
        height: 60*px,
        borderRadius: 60*px,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100*px
    },
    home9: {
        fontSize: 26 * px,
        color: '#fff'
    },
    home10: {
        fontSize: 80*px,
        color: '#FFFFFF'
    },
    home11: {
        fontSize:28*px,
        color: '#fff',
        opacity: 0.8
    },
    home12: {},
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
