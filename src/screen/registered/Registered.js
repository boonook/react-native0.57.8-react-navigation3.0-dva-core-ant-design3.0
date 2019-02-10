
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image} from 'react-native';
import {Icon,Button, InputItem, List,Checkbox } from '@ant-design/react-native';
export default class Registered extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    render() {
        const {navigation} = this.props;
        return (
            <View style={{
                flex:1,
                flexDirection: 'column',
            }}>
                <View>
                    <View style={styles.header}>
                        <View style={styles.headLeft}>
                            <Icon style={{color:'rgba(0,0,0,0.6)',paddingLeft:10}} name={'close'}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Login")
                                  }}
                            />
                        </View>
                        <View style={styles.flex1}>
                        </View>
                        <View style={styles.flex1}>
                            <Text style={styles.add}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Login")
                                  }}
                            >登录</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.c}>
                            <Image style={{width:100,height:100}} source={require('../../assets/images/qq.png')}/>
                        </View>
                       <List>
                           <List.Item>
                               <InputItem
                                   error={false}
                                   maxLength={6}
                               >
                                   <Text style={{color:'rgba(0,0,0,0.6)'}}>账号</Text>
                               </InputItem>
                           </List.Item>
                           <List.Item>
                               <InputItem
                                   error={false}
                                   maxLength={10}
                               >
                                   <Text style={{color:'rgba(0,0,0,0.6)'}}>密码</Text>
                               </InputItem>
                           </List.Item>
                           <List.Item>
                               <InputItem
                                   error={false}
                                   maxLength={10}
                               >
                                   <Text style={{color:'rgba(0,0,0,0.6)'}}>确认密码</Text>
                               </InputItem>
                           </List.Item>
                           <List.Item>
                               <InputItem
                                   error={false}
                                   maxLength={11}
                               >
                                   <Text style={{color:'rgba(0,0,0,0.6)'}}>手机号</Text>
                               </InputItem>
                           </List.Item>
                           <List.Item>
                               <InputItem
                                   clear
                                   extra={<Button><Text style={{color:'rgba(0,0,0,0.6)',fontSize:12}}>获取验证码</Text></Button>}
                               >
                                   <Text style={{color:'rgba(0,0,0,0.6)'}}>验证码</Text>
                               </InputItem>
                           </List.Item>
                           <List.Item>
                               <Button
                                   type="primary"
                               >
                                   注册
                               </Button>
                           </List.Item>
                           <View>
                              <Text style={{textAlign:'center',color:'rgba(0,0,0,0.4)'}}>注册表示已同意<Text>《三人行使用协议》</Text> 和<Text>《隐私权条款》</Text></Text>
                           </View>
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
        // borderColor: '#fff'
    },
    flex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight:10
    },
    headLeft:{
        flex: 1,
        justifyContent: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    title: {
        fontSize: 20,
        color: '#0187FB'
    },
    add: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.6)',
    },
    container:{
        flex: 1,
    },
    backgroundVideo:{},
    c:{
        paddingTop:30,
        paddingBottom:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
});
