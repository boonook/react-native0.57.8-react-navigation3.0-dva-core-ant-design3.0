import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,ScrollView,Dimensions,TouchableOpacity,ImageBackground } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createMaterialTopTabNavigator,
    createDrawerNavigator
} from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import MessageScreen from "./screen/message/MessageScreen";
import FriendScreen from "./screen/friend/FriendScreen";
import ActiveScreen from "./screen/active/ActiveScreen";
import WatchScreen from "./screen/watch/WatchScreen";
import LoginScreen from "./screen/login/LoginScreen";
import SettingScreen from "./components/setting/SettingScreen";
import ForgetPassword from "./screen/forgetPassword/ForgetPassword";
import Registered from "./screen/registered/Registered";
import MapLocation from "./components/map/MapLocation";

const {height,width} =  Dimensions.get('window');

const appTabNavigator = createBottomTabNavigator({
    Message:{
        screen:MessageScreen,
        navigationOptions: () => ({
            tabBarLabel: '消息',

            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('./assets/images/message.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
        })
    },
    Friend:{
        screen:FriendScreen,
        navigationOptions: () => ({
            tabBarLabel: '好友',
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
        })
    },
    Active:{
        screen:ActiveScreen,
        navigationOptions: () => ({
            tabBarLabel: '活动',
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('./assets/images/message.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
        })
    },
    Watch:{
        screen:WatchScreen,
        navigationOptions: () => ({
            tabBarLabel: '看点',
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('./assets/images/move.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
        })
    }
},{
    initialRouteName: 'Message',
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: '#0187FB',
        style: {
            backgroundColor: '#fff',
        },
    }
});

const DrawerNavigator =  createDrawerNavigator({
    Home:{
        screen:appTabNavigator
    },
    Setting:{
        screen:SettingScreen,
        navigationOptions: {
            drawerLabel:'Setting',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    },
    MapLocation:{
        screen:MapLocation,
        navigationOptions: {
            drawerLabel:'MapLocation',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    }
},{
    initialRouteName: 'Home',
    drawerWidth:  width-100, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: props => (<CustomDrawerContentComponent {...props} />)
});

const CustomDrawerContentComponent = props => {
    return (
        <ScrollView style={{flex: 1,backgroundColor:'#fff'}}>
            <View>
                <View style={{height:200,width:width-100,backgroundColor:'#0187FB',flex:1}}>

                </View>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.closeDrawer()}
                >
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'home'}/>首页</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("Setting")}
                >
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'setting'}/>设置</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("MapLocation")}
                >
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'map'}/>地图定位</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("Login")}
                >
                    <Text style={{fontSize:18}}> <Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'user'}/>退出登录</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const  StackNavigator = createStackNavigator({
    Login:{
        screen:LoginScreen,
    },
    Home:{
        screen:DrawerNavigator,
    },
    ForgetPassword:{
        screen:ForgetPassword
    },
    Registered:{
        screen:Registered
    }
},{
    headerMode: 'none',
    headerBackTitleVisible: false,
});

const styles = StyleSheet.create({
    tabBarImage: {
        width: 24,
        height: 24,
    },
    btnStyle: {
        height: 45,
        width: width-100,
        justifyContent: "center",
        // alignItems: "center",
        margin: 1,
        backgroundColor: "#fff",
        paddingLeft:20,
        lineHeight:45,
    },
});

const Url = createAppContainer(StackNavigator);

export default Url;