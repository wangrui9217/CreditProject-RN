// import ViewPager from 'react-native-viewpager';页面滑动组建
//跳转并清空路由记录
// import { NavigationActions } from 'react-navigation'
// const  resetAction = NavigationActions.reset({
//     index: 0,
//     actions: [
//         NavigationActions.navigate({routeName:'xxx'})//要跳转到的页面名字
//     ]
// });
// this.props.navigation.dispatch(resetAction);
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, ListView,RefreshControl} from 'react-native';
import {px} from './util/fix'
import LoadMoreFooter from './../components/LoadMoreFooter'
import Head from "../components/head";
export default class DemoComponent extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
        this.state = {
            data:['111', '222', '333'],
            dataSource: ds.cloneWithRows(['111', '222', '333']),
            isRefreshing: false,
            isEmptyData: false,
            isLoadMore: false,
            isLoadAll: false,
            extend: '',
            page: 1
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Head title={'测试'}></Head>
                {
                    this.state.isEmptyData ?
                        this.isEmptyData():
                        <ListView
                        dataSource={this.state.dataSource}
                        renderRow={rowData => this.renderRow(rowData)}
                        onEndReached={() => this._toEnd()}
                        onEndReachedThreshold={10}
                        // renderFooter={this._toEnd}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                tintColor="gray"
                                title="正在刷新"
                                onRefresh={() => this._onRefresh()}/>}
                    />
                }
                {
                    this.state.isLoadMore ?
                        <LoadMoreFooter isLoadAll={this.state.isLoadAll} />
                        : null
                }
            </View>
        )
    }
    renderRow (rowData) {
        return (
            <Text style={{lineHeight: 400}}>{rowData}</Text>
        )
    }
    _toEnd(){
        if (this.state.isRefreshing==false) {
            this.setState({
                isLoadMore:true,
            })
            // 立即更改属性值 page+1
            this.state.page = this.state.page + 1
            // 网络请求数据
            this.getEduData();
        }
    }
    getEduData () {
        setTimeout(() => {
            // 更新数据源
            let responseData = [this.state.page, this.state.page, this.state.page]
            var data = this.state.data;
            if (!responseData || responseData.length==0) {
                this.setState({
                    isEmptyData: this.state.isLoadMore ? false : true,
                    isRefreshing:false,
                    isLoadMore:false
                });
                if (this.state.isLoadMore) {
                    // 立即更改属性值 page-1
                    this.state.page = this.state.page - 1
                }
            } else {
                data = this.state.isLoadMore ? [...this.state.data , ...responseData] : responseData
                this.setState({
                    data:data,
                    isRefreshing:false,
                    dataSource:this.state.dataSource.cloneWithRows(data),
                    isLoadMore:false,
                });
            }
        }, 3000)
    }
    _onRefresh () {
        this.setState({
            isRefreshing: true,
            isLoadMore: false,
            page: 1
        })
        this.getEduData()
    }
    isEmptyData () {
        return (
            <Text>暂无数据</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
