/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {px} from './../pages/util/fix'

export default class ProductItem extends Component {
    static defaultProps =
        {
            productList: ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'],
            pressFunc: () => {}
        }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.outSideBox}>
                {
                    this.renderProjectItem(this.props.productList)
                }
            </View>
        );
    }
    renderProjectItem (rowData) {
        return (
            rowData.map((val, index) => {
                return (
                <View style={styles.container} key={index}>
                    <View style={styles.product1}>
                        <Text style={styles.product2}>信用快贷</Text>
                        <Text style={styles.product3}>额度最高300万</Text>
                    </View>
                    <View style={styles.product4}>
                        <View style={styles.product5}>
                            <Text style={styles.product6}>3.988%</Text>
                            <Text style={styles.product7}>贷款年利率</Text>
                        </View>
                        <View style={styles.product5}>
                            <Text style={styles.product8}>12个月</Text>
                            <Text style={styles.product7}>贷款期限</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.pressFunc(val, index)}>
                        <Text style={styles.btnText}>立即申请</Text>
                    </TouchableOpacity>
                </View>
            )
            })
        );
    }
}

const styles = StyleSheet.create({
    outSideBox: {
        paddingRight: 32*px,
        paddingLeft:32*px,
        width: '100%',
    },
    container: {
        width: '100%',
        backgroundColor: '#F3F4FB',
        paddingTop: 32 * px,
        paddingBottom: 32*px,
        marginBottom: 32 *px
    },
    product1: {
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom: 8 * px
    },
    product2: {
        fontSize: 32 * px,
        lineHeight: 46 * px,
        color: '#333',
        marginRight: 33 * px
    },
    product3: {
        fontSize: 32 * px,
        lineHeight: 46 * px,
        color: '#333'
    },
    product4: {
        flexDirection: 'row',
        justifyContent:'center',
    },
    product5: {
        width: 208 * px,
        alignItems:'center'
    },
    product6: {
        lineHeight: 68 * px,
        color: '#FF3253'
    },
    product7: {
        color: '#999',
        fontSize: 24 * px,
    },
    product8: {
        lineHeight: 68 * px,
        fontSize: 32 * px,
        color: '#333'
    },
    btn: {
        backgroundColor: '#2B64FF',
        width: 352 * px,
        height: 60 * px,
        borderRadius: 60 * px,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16 * px,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btnText: {
        fontSize: 26 * px,
        color: '#FFFFFF',
    }
});
