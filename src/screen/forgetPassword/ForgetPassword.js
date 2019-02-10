
import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import { Icon, Steps, WingBlank,List,InputItem,Button } from '@ant-design/react-native';

const Step = Steps.Step;
export default class ForgetPassword extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.headLeft}>
                        <Icon style={{color:'rgba(0,0,0,0.6)',paddingLeft:10}} name={'arrow-left'}
                            onPress={()=>{
                                this.props.navigation.navigate("Login")
                            }}
                        />
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>忘记密码</Text>
                    </View>
                    <View style={styles.flex1}>

                    </View>
                </View>
                <View>
                    <ScrollView>
                        <List>
                            <List.Item>
                                <List.Item>
                                    <InputItem
                                        clear
                                        maxLength={11}
                                        extra={<Button><Text style={{color:'rgba(0,0,0,0.6)',fontSize:12}}>获取验证码</Text></Button>}
                                    >
                                        <Text style={{color:'rgba(0,0,0,0.6)'}}>手机号</Text>
                                    </InputItem>
                                </List.Item>
                                <List.Item>
                                    <InputItem
                                        error={false}
                                        maxLength={6}
                                    >
                                        <Text style={{color:'rgba(0,0,0,0.6)'}}>动态码</Text>
                                    </InputItem>
                                </List.Item>
                                <List.Item>
                                    <InputItem
                                        error={false}
                                        maxLength={10}
                                    >
                                        <Text style={{color:'rgba(0,0,0,0.6)'}}>新密码</Text>
                                    </InputItem>
                                </List.Item>
                                <List.Item>
                                    <InputItem
                                        error={false}
                                        maxLength={10}
                                    >
                                        <Text style={{color:'rgba(0,0,0,0.6)'}}>确认新密码</Text>
                                    </InputItem>
                                </List.Item>
                            </List.Item>
                            <List.Item>
                                <Button
                                    type="primary"
                                >
                                    重置新密码
                                </Button>
                            </List.Item>
                        </List>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#fff',
        // borderBottomWidth: 1,
        // borderColor: '#000'
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
        fontSize: 18,
        color:'rgba(0,0,0,0.6)'
    },
    add: {
        fontSize: 18,
        color: '#fff',
    },
    container:{
        flex: 1,
    },
    backgroundVideo:{}
});
