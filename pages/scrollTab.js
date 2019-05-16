import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    TouchableOpacity,
    View, StyleSheet,
    Image
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import {Navigator} from "react-native-deprecated-custom-components";
import HomeIndex from './home'
import {px} from './util/fix'
import ProjectIndex from './project'
import CreditIndex from './credit'
import MineIndex from './mine'
const TabImg = [require('./../img/tabbar_home_nor.png'), require('./../img/tabbar_chanpin_nor.png'),
    require('./../img/tabbar_yongxin_nor.png'), require('./../img/tabbar_mine_nor.png')]
const TabImgActive = [require('./../img/tabbar_home_sel.png'), require('./../img/tabbar_chanpin_sel.png'),
    require('./../img/tabbar_yongxin_sel.png'), require('./../img/tabbar_mine_sel.png')]
const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row'
    },
    tab: {
        flex: 1,
        height: 98*px,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 48*px,
        height: 48*px
    },
    text: {
        fontSize: 20*px,
        color: '#999'
    },
    activeText: {
        color: '#333'
    }
})
class RenderTabbar extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.tabs, this.props.style, ]}>
                {
                    this.props.tabs.map((tab, i) => {
                        return (
                            <TouchableOpacity  key={i} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                                <Image style={styles.icon} source={this.props.activeTab === i ? TabImgActive[i] : TabImg[i]}/>
                                <Text style={this.props.activeTab === i ? [styles.text, styles.activeText] : [styles.text]}>{tab}</Text>
                            </TouchableOpacity >
                        )
                    })
                }
            </View>
        )
    }

}

export default class ScrollableTab extends Component {
    render() {
        return (
            <ScrollableTabView
                tabBarPosition={'bottom'}
                tabBarActiveTextColor="#333"//选中的tab的文字颜色
                tabBarInactiveTextColor="#999"//没有选中的tab的文字颜色
                tabBarTextStyle={{fontSize:20*px,lineHeight: 28*px}}//tab的字体的style
                style={{}}
                initialPage={0}
                // renderTabBar={() => <DefaultTabBar />}
                renderTabBar={() => <RenderTabbar />}
            >
                <HomeIndex tabLabel='首页' navigator={this.props.navigator}></HomeIndex>
                <ProjectIndex tabLabel='产品' navigator={this.props.navigator}></ProjectIndex>
                <CreditIndex tabLabel='用信' navigator={this.props.navigator}></CreditIndex>
                <MineIndex tabLabel='我的' navigator={this.props.navigator}></MineIndex>
            </ScrollableTabView>
        )
    }
}