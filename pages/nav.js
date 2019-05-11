/*TabNavigatorDemo*/
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
//const Home = require('../home')
//const Product = require('../product')
//const Credit = require('../credit')
//const Mine = require('../mine')
export default class NavBar extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home'
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}><Text style={{fontSize:25}}>TabNavigator组件</Text></View>
        <TabNavigator>
          <TabNavigator.Item title='首页'
                             badgeText="new"
                             selected={this.state.selectedTab==='home'}
                             renderIcon={()=><Image style={styles.iconImg} source={require('../../img/tabbar_home_nor@2x.png')} />}
                             renderSelectedIcon={()=><Image style={styles.iconActive} source={require('../../img/tabbar_home_sel@2x.png')} />}
                             onPress={()=>{this.setState({selectedTab:'home'})}}
          >
            <View style={[styles.pageView,{backgroundColor:'#ffdd57'}]}>
              <Text style={{fontSize:50}}>首页</Text>
              <Home />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item title='产品'
                             selected={this.state.selectedTab==='category'}
                             renderIcon={()=><Image style={styles.iconImg} source={require('../../img/tabbar_chanpin_nor@2x.png')} />}
                             renderSelectedIcon={()=><Image style={styles.iconActive} source={require('../../img/tabbar_chanpin_sel@2x.png')} />}
                             onPress={()=>{this.setState({selectedTab:'category'})}}
          >
            <View style={[styles.pageView,{backgroundColor:'#ff8454'}]}>
              <Text style={{fontSize:50}}>分类详情</Text>
              <Product />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item title='用信'
                             selected={this.state.selectedTab==='find'}
                             renderIcon={()=><Image style={styles.iconImg} source={require('../../img/tabbar_yongxin_nor@2x.png')} />}
                             renderSelectedIcon={()=><Image style={styles.iconActive} source={require('../../img/tabbar_yongxin_sel@2x.png')} />}
                             onPress={()=>{this.setState({selectedTab:'find'})}}
          >
            <View style={[styles.pageView,{backgroundColor:'#9aff5a'}]}>
              <Text style={{fontSize:50}}>发现更多</Text>
              <Credit />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item title='我的'
                             badgeText="6"
                             selected={this.state.selectedTab==='mine'}
                             renderIcon={()=><Image style={styles.iconImg} source={require('../../img/tabbar_mine_nor@2x.png')} />}
                             renderSelectedIcon={()=><Image style={styles.iconActive} source={require('../../img/tabbar_mine_sel@2x.png')} />}
                             onPress={()=>{this.setState({selectedTab:'mine'})}}
          >
            <View style={[styles.pageView,{backgroundColor:'#648eff'}]}>
              <Text style={{fontSize:50}}>我的空间</Text>
              <Mine />
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header:{
    height:50,
    backgroundColor:'#bcfffd',
    justifyContent:'center',
    alignItems:'center'
  },
  pageView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  iconImg:{
    width:25,
    height:25
  },
  iconActive:{
    width:35,
    height:35
  }
});
