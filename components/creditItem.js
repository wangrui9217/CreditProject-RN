/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ListView} from 'react-native';
import {px} from './../pages/util/fix'

export default class CreditItem extends Component {
    static defaultProps =
        {
            productList: ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
        }
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.productList)
        };
    }
    render() {
        return (
            <ListView
                style={styles.outSideBox}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderProjectItem(rowData)}
            />
        );
    }
    renderProjectItem (rowData) {
        return (
            <View style={styles.container}>
                <View style={styles.credit1}>
                    <Text style={styles.credit2}>合同编号:209840934809</Text>
                    <View style={styles.credit3}>
                        <Text style={styles.credit4}>签署合同</Text>
                    </View>
                </View>
                <View style={styles.credit5}>
                    <Text style={styles.credit6}>信用快贷</Text>
                    <Text style={styles.credit7}>额度最高300万</Text>
                </View>
                <View style={styles.credit8}>
                    <View style={styles.credit9}>
                        <Text style={styles.credit10}>500,000.00</Text>
                        <Text style={styles.credit11}>借款金额</Text>
                    </View>
                    <View style={styles.credit9}>
                        <Text style={styles.credit12}>12</Text>
                        <Text style={styles.credit11}>期数</Text>
                    </View>
                    <View style={styles.credit9}>
                        <Text style={styles.credit12}>2018-08-08</Text>
                        <Text style={styles.credit11}>申请时间</Text>
                    </View>
                </View>
            </View>
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
        paddingBottom: 32*px,
        paddingRight: 32*px,
        paddingLeft:32*px,
        marginBottom: 16 *px
    },
    credit1: {
        borderBottomWidth: 1*px,
        height: 87*px,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#E6E6E6',
        flexDirection: 'row'
    },
    credit2: {
        color:'#999999',
        fontSize: 28*px
    },
    credit3: {
        width:151*px,
        height:48*px,
        borderRadius: 48*px,
        backgroundColor:'#E6EBFF',
        justifyContent:'center',
        alignItems:'center'
    },
    credit4: {
        color: '#1546FF',
        fontSize:26*px
    },
    credit5: {
        paddingBottom:16*px,
        paddingTop:32*px,
        flexDirection:'row'
    },
    credit6: {
        color: '#666666',
        fontSize: 32*px,
        marginRight: 33*px
    },
    credit7: {
        color: '#666666',
        fontSize: 32*px,
    },
    credit8: {
        flexDirection:'row'
    },
    credit9: {
        flex: 1
    },
    credit10: {
        lineHeight: 50*px,
        color: '#FF3253',
        fontSize: 36*px
    },
    credit11: {
        color: '#999999',
        fontSize: 24*px,
        lineHeight:32*px
    },
    credit12: {
        color: '#333333',
        fontSize:32*px,
        lineHeight:50*px
    },
});
