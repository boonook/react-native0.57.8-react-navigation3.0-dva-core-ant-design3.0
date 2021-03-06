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
import SelectImage from "./components/selectImage/SelectImage";
import ScanCode from "./components/scanCode/ScanCode";
import ChartScreen from "./components/chart/ChartScreen";
import Space from "./components/space/Space";
import PdfRead from "./components/pdf/PdfRead";
import Mp3Detail from "./screen/map3/Mp3Detail";

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
                return <Image source={require('./assets/images/men.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
        })
    },
    Active:{
        screen:ActiveScreen,
        navigationOptions: () => ({
            tabBarLabel: '活动',
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('./assets/images/star.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
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
    lazy: false,//懒加载
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
    },
    SelectImage:{
        screen:SelectImage,
        navigationOptions: {
            drawerLabel:'SelectImage',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    },
    ScanCode:{
        screen:ScanCode,
        navigationOptions: {
            drawerLabel:'ScanCode',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    },
    ChartScreen:{
        screen:ChartScreen,
        navigationOptions: {
            drawerLabel:'ChartScreen',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    },
    Space:{
        screen:Space,
        navigationOptions: {
            drawerLabel:'Space',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    },
    PdfRead:{
        screen:PdfRead,
        navigationOptions: {
            drawerLabel:'PdfRead',
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
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'environment'}/>地图定位</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("SelectImage")}
                >
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'picture'}/>图片选择</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("ScanCode")}
                >
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'scan'}/>扫一扫</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("ChartScreen")}
                >
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'scan'}/>统计图</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("Space")}
                >
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'scan'}/>内存管理</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("PdfRead")}
                >
                    <Text style={{fontSize:18}}><Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'scan'}/>Pdf预览</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("Login")}
                >
                    <Text style={{fontSize:18}}> <Icon style={{color:'#000',fontSize:18,paddingRight:10}} name={'export'}/>退出登录</Text>
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
    },
    Mp3Detail:{
        screen:Mp3Detail
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