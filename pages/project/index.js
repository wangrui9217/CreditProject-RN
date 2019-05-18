/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, View, RefreshControl, StatusBar} from 'react-native';
import CreditItem from "../../components/creditItem";
import Head from "../../components/head";
import ProductItem from "../../components/productItem";
import {px} from "../util/fix";
import DemoComponent from './../demo'
import {getNavigator} from "../route";
export default class ProjectIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        }, 1000)
    }
    componentDidMount () {
        this._onRefresh()
    }
    render() {
    return (
      <View style={styles.container}>
          <Head title={'产品'} showReturn={false}/>
          <ScrollView   refreshControl={
              <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}/>}
              >
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                  {
                      this.renderScrollImage()
                  }
              </ScrollView>
              <View style={styles.tipBox}>
                  <Text style={styles.tip}>我要贷款</Text>
              </View>
              <ProductItem pressFunc={(val, index) => this.goApply(val, index)}></ProductItem>
              <Image source={require('./../../img/project/imag_guanggaoci_chanpin.png')} style={styles.bottomImg} resizeMode={'contain'}/>
          </ScrollView>
      </View>
    );
  }
    goApply (val, index) {
        getNavigator().push({
            name: 'DemoComponent',
            passProps: {
                data: val
            }
        })
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
    },
    bottomImg: {
      marginRight: 'auto',
        marginLeft: 'auto',
        width: 312*px,
        height: 82*px,
        marginTop: 64*px,
        marginBottom: 32*px
    }
});
