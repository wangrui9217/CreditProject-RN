/*TabNavigatorDemo*/
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {px} from './util/fix'
import HomeIndex from './home'
import ProjectIndex from './project'
import CreditIndex from './credit'
import MineIndex from './mine'
import {Navigator} from "react-native-deprecated-custom-components";
import LoginIndex from "./login";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    // backgroundColor='rgba(255,96,0,1.0)'
                    // backgroundColor={'red'}
                    // barStyle={'light-content'}
                    // animated={true}
                />
                <TabNavigator>
                    <TabNavigator.Item title='首页'
                                       titleStyle={styles.tabText}
                                       selectedTitleStyle={styles.selectedTabText}
                                       selected={this.state.selectedTab === 'home'}
                                       renderIcon={() => <Image style={styles.iconImg}
                                                                source={require('../img/tabbar_home_nor.png')}/>}
                                       renderSelectedIcon={() => <Image style={styles.iconActive}
                                                                        source={require('../img/tabbar_home_sel.png')}/>}
                                       onPress={() => {
                                           this.setState({selectedTab: 'home'})
                                       }}
                    >
                        <HomeIndex navigator={this.props.navigator}></HomeIndex>
                    </TabNavigator.Item>
                    <TabNavigator.Item title='产品'
                                       titleStyle={styles.tabText}
                                       selectedTitleStyle={styles.selectedTabText}
                                       selected={this.state.selectedTab === 'category'}
                                       renderIcon={() => <Image style={styles.iconImg}
                                                                source={require('./../img/tabbar_chanpin_nor.png')}/>}
                                       renderSelectedIcon={() => <Image style={styles.iconActive}
                                                                        source={require('./../img/tabbar_chanpin_sel.png')}/>}
                                       onPress={() => {
                                           this.setState({selectedTab: 'category'})
                                       }}
                    >
                        <ProjectIndex navigator={this.props.navigator}></ProjectIndex>
                    </TabNavigator.Item>
                    <TabNavigator.Item title='用信'
                                       titleStyle={styles.tabText}
                                       selectedTitleStyle={styles.selectedTabText}
                                       selected={this.state.selectedTab === 'find'}
                                       renderIcon={() => <Image style={styles.iconImg}
                                                                source={require('./../img/tabbar_yongxin_nor.png')}/>}
                                       renderSelectedIcon={() => <Image style={styles.iconActive}
                                                                        source={require('./../img/tabbar_yongxin_sel.png')}/>}
                                       onPress={() => {
                                           this.setState({selectedTab: 'find'})
                                       }}
                    >
                        <CreditIndex navigator={this.props.navigator}></CreditIndex>
                    </TabNavigator.Item>
                    <TabNavigator.Item title='我的'
                                       titleStyle={styles.tabText}
                                       selectedTitleStyle={styles.selectedTabText}
                                       selected={this.state.selectedTab === 'mine'}
                                       renderIcon={() => <Image style={styles.iconImg}
                                                                source={require('./../img/tabbar_mine_nor.png')}/>}
                                       renderSelectedIcon={() => <Image style={styles.iconActive}
                                                                        source={require('./../img/tabbar_mine_sel.png')}/>}
                                       onPress={() => {
                                           this.setState({selectedTab: 'mine'})
                                       }}
                    >
                        <MineIndex navigator={this.props.navigator}></MineIndex>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        height: 50,
        backgroundColor: '#bcfffd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImg: {
        width: 36 * px,
        height: 40 * px
    },
    iconActive: {
        width: 36 * px,
        height: 40 * px
    },
    tabText: {
        color: '#999999',
        fontSize: 20 * px
    },
    selectedTabText: {
        color: '#333333',
        fontSize: 20 * px
    }
});
