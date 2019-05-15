/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Image,
    Dimensions,
    TextInput,
    Alert, StatusBar
} from 'react-native';
import HomeIndex from "../home";
import {px} from './../util/fix'
import NavBar from "../nav";
const dismissKeyboard = require('dismissKeyboard')
// import TabNavigator from "../main.js";


export default class LoginIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            pwd: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    barStyle={'dark-content'}
                    backgroundColor={'#fff'}
                />
                <Image style={styles.logo} source={require('../../img/logo_sing.png')}/>
                <Text style={styles.text}>小微企业信贷</Text>
                <TextInput
                    // autoFocus={true}
                    underlineColorAndroid="transparent"
                    keyboardType='numeric'
                    style={styles.phoneInput}
                    onChangeText={(phone) => this.setState({phone})}
                    value={this.state.phone}
                    placeholder={'请输入手机号码'}
                ></TextInput>
                <TextInput
                    secureTextEntry={true}
                    password={true}
                    style={styles.phoneInput}
                    onChangeText={(pwd) => this.setState({pwd})}
                    value={this.state.pwd}
                    placeholder={'请输入密码'}
                ></TextInput>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.login.bind(this)}>
                    <Text style={styles.btnText}>登 录</Text>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        style={styles.left}
                        >
                        <Text>忘记密码</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>免费注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    login() {
        dismissKeyboard()
        this.props.navigator.replace({
            // component: MainIndex
            // component: HomeIndex,
            component: NavBar,
            params: {
                phone: this.state.phone,
                pwd: this.state.pwd,
            }
        })
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 128 * px,
        height: 128 * px,
        marginTop: 96 * px
    },
    text: {
        fontSize: 36 * px,
        color: '#333333',
        marginTop: 24 * px,
        marginBottom: 48 * px
    },
    phoneInput: {
        height: 104 * px,
        textAlign: 'left',
        width: '100%',
        paddingRight: 32 * px,
        borderBottomWidth: 1 * px,
        borderBottomColor: 'rgba(0,0,0,0.57)'
    },
    btn: {
        backgroundColor: '#2B64FF',
        width: '100%',
        height: 88 * px,
        borderRadius: 88 * px,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 64 * px,
        marginBottom: 32 * px
    },
    btnText: {
        fontSize: 34 * px,
        color: '#FFFFFF',
    },
    bottom: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    left: {
        marginRight: 33 * px
    },
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 32 * px,
        paddingRight: 32 * px
    }
});
