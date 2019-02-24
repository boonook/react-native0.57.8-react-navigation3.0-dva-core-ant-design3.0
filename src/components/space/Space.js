import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    BackHandler
} from 'react-native';
import {
    Icon,Button
} from '@ant-design/react-native';
import clear from 'react-native-clear-app-cache';
export default class Space extends Component {

    static navigationOptions = {
        title: '内存管理'
    };

    constructor () {
        super();
        this.state = {
            cacheSize:"",
            unit:"",
        };
        this.listener=null;
        clear.getAppCacheSize((value,unit)=>{
            alert(123);
            this.setState({
                cacheSize:value, //缓存大小
                unit:unit  //缓存单位
            })
        });
    }

    handlerClearAppCache = () => {
        clear.clearAppCache(() => {
            console.log("清除成功");
            clear.getAppCacheSize((value, unit) => {
                this.setState({
                    cacheSize: value, //缓存大小
                    unit: unit  //缓存单位
                })
            });
        });
    };
    componentDidMount() {
        let vm = this;
        vm.listener = vm.props.navigation.addListener('didFocus', payload => {
            clear.getAppCacheSize((value,unit)=>{
                vm.setState({
                    cacheSize:value, //缓存大小
                    unit:unit  //缓存单位
                })
            });
        });

    }

    render() {
        return (
            <View
                style={{
                    flex:1,
                    flexDirection: 'column',
                }}
            >
                <View style={styles.header}>
                    <View style={styles.headLeft}>
                        <Icon style={{color:'rgba(0,0,0,0.6)',paddingLeft:10}} name={'arrow-left'}
                              onPress={()=>{
                                  this.props.navigation.goBack();
                              }}
                        />
                    </View>
                    <View style={styles.flex1}>
                        <Text>内存管理</Text>
                    </View>
                    <View style={styles.flex1}>

                    </View>
                </View>
                <View>
                    <Text>缓存大小{this.state.cacheSize}{this.state.unit}</Text>
                    <Button style={styles.btncolor} onPress={this.handlerClearAppCache.bind(this)}>清除缓存</Button>
                </View>
            </View>
        );
    }
    componentWillUnmount() {
        // 移除监听
        this.listener && this.listener.remove();
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress',()=>{});
        }
    }
}


let theme = require('../../theme/Theme');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor:'#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    headLeft:{
        flex: 1,
        justifyContent: 'center',
    },
    flex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    title: {
        fontSize: 20,
        color:'rgba(0,0,0,0.6)'
    },
    add: {
        fontSize: 18,
        color: '#fff',
    },
    btncolor:{
        backgroundColor:theme.backgroundColor,
    }
});