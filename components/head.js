/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Share} from 'react-native';
import {px} from './../pages/util/fix'
import {getNavigator} from "../pages/route";

export default class Head extends Component {
    static defaultProps =
        {
            title: '',
            showReturn: true,
            showShare: true,
        }
    // static propTypes = {
    //     age: PropTypes.int,
    //     name: PropTypes.string.isRequired,
    // }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.showBackBtn()
                }
                <Text style={styles.title}>{this.props.title}</Text>
                {
                    this.props.showShare?
                        <TouchableOpacity style={styles.shareBox} onPress={() => this.sharePicture()}>
                            <Image style={styles.share} source={require('./../img/share.png')}/>
                        </TouchableOpacity>:
                        null
                }
                <Text></Text>
            </View>
        );
    }
    showBackBtn () {
        if (this.props.showReturn) {
            return (
                <TouchableOpacity onPress={() => {getNavigator().pop()}} style={styles.pl32}>
                    <Image style={styles.iconImg} source={require('./../img/common/left.png')}></Image>
                </TouchableOpacity>
            )
        }
    }
    sharePicture = async() => {
        try {
            const result = await Share.share({
                message: '小微企业信贷https://fir.im/w8kf',
                title: '小微企业信贷'
            })

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 88 * px,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'relative'
    },
    pl32: {
        paddingLeft: 32 * px,
        paddingRight: 32 * px,
        position: 'absolute',
        left: 0,
        top: '50%',
        marginTop: -39 * px / 2
    },
    iconImg: {
        width: 26 * px,
        height: 39 * px,
    },
    title: {
        color: '#333',
        fontSize: 36 * px
    },
    share: {
        width: 39 * px,
        height: 39 * px,
    },
    shareBox: {
        paddingLeft: 32 * px,
        paddingRight: 32 * px,
        position: 'absolute',
        right: 0,
        top: '50%',
        marginTop: -39 * px / 2
    }
});
