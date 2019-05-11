/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from "prop-types"
import {px} from './../pages/util/fix'

export default class Head extends Component {
    static defaultProps =
        {
            title: ''
        }
    // static propTypes = {
    //     age: PropTypes.int,
    //     name: PropTypes.string.isRequired,
    // }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.props.navigator.pop()}} style={styles.pl32}>
                    <Image style={styles.iconImg} source={require('./../img/common/left.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 88 * px,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    pl32:{
        paddingLeft:32*px,
    },
    iconImg: {
        width: 26 * px,
        height: 39 * px,
    },
    title: {
        color:'#333',
        fontSize: 36*px
    }
});
