import LaunchPage from './launch'
import NavBar from './nav'
import SettingIndex from './setting'
import HomeIndex from './home'
import ProjectIndex from './project'
import ProjectDetail from './project/projectDetail'
import CreditIndex from './credit'
import LoginIndex from './login'
import MineIndex from './mine'
import DemoComponent from './demo'
import WebViewDemo from './webView'
import {
    Navigator,
} from 'react-native-deprecated-custom-components';

let navigator;

// PushFromRight
// PushFromLeft
// FloatFromRight
// FloatFromLeft
// FloatFromBottom
// FloatFromBottomAndroid
// FadeAndroid
// HorizontalSwipeJump
// HorizontalSwipeJumpFromRight
// VerticalUpSwipeJump
// VerticalDownSwipeJump

const routeMap = new Map();


routeMap.set('NavBar', {
    component: NavBar
});
routeMap.set('LaunchPage', {
    component: LaunchPage,
    hidden: true
});
routeMap.set('SettingIndex', {
    component: SettingIndex,
    sceneAnimation: Navigator.SceneConfigs.FloatFromBottom
});
routeMap.set('HomeIndex', {
    component: HomeIndex,
});
routeMap.set('ProjectIndex', {
    component: ProjectIndex
});
routeMap.set('ProjectDetail', {
    component: ProjectDetail,
});
routeMap.set('CreditIndex', {
    component: CreditIndex
});
routeMap.set('LoginIndex', {
    component: LoginIndex
});
routeMap.set('MineIndex', {
    component: MineIndex
});
routeMap.set('MineIndex', {
    component: MineIndex
});
routeMap.set('DemoComponent', {
    component: DemoComponent
});
routeMap.set('WebViewDemo', {
    component: WebViewDemo
});



// routeMap.set('MyGithubPage', {
//   component: MyGithubPage,
//   sceneAnimation: Navigator.SceneConfigs.FloatFromBottom
// });


export function registerNavigator(tempNavigator) {
    if (navigator) {
        return;
    }
    navigator = tempNavigator;

}

export function getNavigator() {
    return navigator;
}

export function getRouteMap() {
    return routeMap;
}






