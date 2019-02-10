import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,StatusBar,TouchableOpacity,FlatList,Image,ScrollView } from 'react-native';
import {
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
    Icon,
    List
} from '@ant-design/react-native';
import {BasicModalExample} from "../messageModal/MessageModal";
type Props = {};
export default class SettingScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headLeft}>
                        <Icon style={{color:'rgba(0,0,0,0.6)',paddingLeft:10}} name={'arrow-left'}
                              onPress={()=>{
                                  this.props.navigation.goBack();
                              }}
                        />
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>设置</Text>
                    </View>
                    <View style={styles.flex1}>

                    </View>
                </View>
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <List>
                            <List.Item
                                extra={
                                    <Image
                                        source={{
                                            uri:
                                                'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                                        }}
                                        style={{ width: 29, height: 29 ,borderRadius:14.5}}
                                    />
                                }
                                arrow="horizontal"
                            >
                                <Text>账号管理</Text>
                            </List.Item>
                            <List.Item disabled extra={
                                <Text>177*****471</Text>
                            } arrow="horizontal" onPress={() => {}}>
                                <Text>手机号码</Text>
                            </List.Item>
                            <List.Item
                                extra={
                                    <View>
                                        <Image
                                            source={{
                                                uri:
                                                    'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                                            }}
                                            style={{ width: 29, height: 29 ,borderRadius:14.5}}
                                        />
                                    </View>
                                }
                                arrow="horizontal"
                            >
                                <Text>三人行达人</Text>
                            </List.Item>
                        </List>
                        <List style={{marginTop:20}}>
                            <List.Item>
                                <Text>消息通知</Text>
                            </List.Item>
                            <List.Item>
                                <Text>聊天记录</Text>
                            </List.Item>
                            <List.Item>
                                <Text>空间清理</Text>
                            </List.Item>
                        </List>
                        <List style={{marginTop:20}}>
                            <List.Item>
                                <Text>设备安全</Text>
                            </List.Item>
                            <List.Item>
                                <Text>联系人、隐私</Text>
                            </List.Item>
                            <List.Item>
                                <Text>通用</Text>
                            </List.Item>
                            <List.Item>
                                <Text>辅助功能</Text>
                            </List.Item>
                        </List>
                        <List style={{marginTop:20}}>
                            <List.Item>
                                <Text>免流特权</Text>
                            </List.Item>
                            <List.Item
                                extra={
                                    <Image
                                        source={{
                                            uri:
                                                'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                                        }}
                                        style={{ width: 29, height: 29 }}
                                    />
                                }
                                arrow="horizontal"
                            >
                                extra为Image
                            </List.Item>
                        </List>
                        <Button
                            title={'展开'}
                            style={{marginTop:20}}
                            onPress={() => {
                                this.refs.son.setModalVisible(true)
                            }}
                        />
                    </View>
                </ScrollView>
                <Provider style={{marginTop:100}}>
                    <BasicModalExample ref='son'/>
                </Provider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        height:50,
        width:600,
        borderWidth:1,
        marginTop:20,
        borderColor:'#ccc'
    },
    container: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.1)'
    },
    content:{
        marginTop:16,
        backgroundColor:'#fff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
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
    }
});
