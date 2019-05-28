import React, {Component} from 'react';
import {
    StyleSheet, View, ProgressViewIOS, ProgressBarAndroid,WebView,Text
} from 'react-native';
// import {WebView} from "react-native-webview";

export default class WebViewDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<View style={styles.titleBar}/>*/}
                {this.state.progress !== 1 &&
                <ProgressBarAndroid color="green" styleAttr="Horizontal" progress={this.state.progress} indeterminate={false} style={{marginTop:10}}/>
                }
                <Text>{this.state.progress}</Text>
                <WebView
                    source={{uri: 'https://www.jianshu.com/u/df38c1b1414a'}}
                    //设置进度 progress值为0～1
                    onLoadProgress={() => {this.setProgress({nativeEvent})}}
                />
            </View> )
    }
    setProgress (nativeEvent) {
        console.log(nativeEvent, '{nativeEvent}')
        this.setState(
            {progress: nativeEvent.progress}
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleBar: {
        height: 64,
        backgroundColor: '#ffc0cb',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
