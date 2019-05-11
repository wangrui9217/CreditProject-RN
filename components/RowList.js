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

export default class RowList extends Component {
    static defaultProps =
        {
            leftTitle: '',
            rightTitle: '',
            isFinished: false,
            pressAlert: () => {}
        }
    // static propTypes = {
    //     age: PropTypes.int,
    //     name: PropTypes.string.isRequired,
    // }

    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.pressAlert()}} style={{paddingLeft: 32 * px,backgroundColor: '#fff',
                paddingRight: 32 * px}}>
                <View style={styles.container}>
                    <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                    <View style={styles.containerRight}>
                        {
                           this.renderRightText()
                        }

                        <Image style={styles.iconImg}
                               source={require('./../img/common/right.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    renderRightText () {
        if (this.props.isFinished) {
            return (
                <Text style={styles.rightTitle}>{this.props.rightTitle}</Text>
            )
        } else {
            return (
                <Text style={styles.rightTitleNotFinished}>{this.props.rightTitle}</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 104 * px,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1*px,
        borderBottomColor: '#eee'
    },
    leftTitle: {
        color: '#333333',
        fontSize: 32 * px
    },
    containerRight: {
        flexDirection: 'row'
    },
    rightTitle: {
        color: '#999',
        fontSize: 30 * px
    },
    rightTitleNotFinished: {
        color: '#2B64FF',
        fontSize: 30 * px
    },
    iconImg: {
        width: 16 * px,
        height: 26 * px,
        marginLeft: 32 * px
    }
});
