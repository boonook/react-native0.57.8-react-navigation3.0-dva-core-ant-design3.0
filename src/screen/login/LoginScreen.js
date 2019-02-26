import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableOpacity,Image} from 'react-native';
import { Button, InputItem, List,Icon,Checkbox } from '@ant-design/react-native';
import { connect } from 'react-redux';

@connect(({global})=>({global}))
export default class LoginScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };

    changew = ()=>{
        const { dispatch } = this.props;
        dispatch({
            type:'global/default',
            payload:{
                index:'世界你好'
            }
        })
    };
    changeq = ()=>{
        const { dispatch } = this.props;
        dispatch({
            type:'global/change',
            payload:{
                index:'异步世界'
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value1: '',
        };
    }

    render() {
        const {global} = this.props;
        console.log(global);

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={styles.header}>
                    <View style={styles.headLeft}>

                    </View>
                    <View style={styles.flex1}>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.add}
                              onPress={()=>{
                                  this.props.navigation.navigate("Registered")
                              }}
                        >注册</Text>
                    </View>
                </View>
                <View style={styles.c}>
                    <Image style={{width:100,height:100}} source={require('../../assets/images/qq.png')}/>
                </View>
                <View>
                    <List>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="账号"
                        >
                            <Icon name={'github'}><Text style={{fontSize:14}}>姓名</Text></Icon>
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.value1}
                            onChange={value => {
                                this.setState({
                                    value1:value,
                                });
                            }}
                            placeholder="密码"
                        >
                            <Icon name={'lock'} />
                        </InputItem>
                        <List.Item>
                            <Checkbox>记住密码</Checkbox>
                        </List.Item>
                        <List.Item>
                            <Text style={{textAlign:'right'}}>
                                <Text
                                    onPress={()=>{
                                        this.props.navigation.navigate("ForgetPassword")
                                    }}
                                >
                                    忘记密码？
                                </Text>
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Button
                                onPress={() => {
                                    this.props.navigation.navigate("Home")
                                }}
                                type="primary"
                            >
                                登录
                            </Button>
                        </List.Item>
                    </List>
                    <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
                        <View style={{marginLeft:15,}}>
                            <Image style={{width:30,height:30}} source={require('../../assets/images/qq_2.png')}/>
                        </View>
                        <View style={{marginLeft:15}}>
                            <Image style={{width:30,height:30}} source={require('../../assets/images/weixin.png')}/>
                        </View>
                    </View>
                </View>
                {/*<Button*/}
                    {/*title="Learn More"*/}
                    {/*onPress={() => this.props.navigation.navigate("Home")}*/}
                {/*/>*/}
                {/*<View  style={{ paddingTop: 30 }}>*/}
                    {/*<WingBlank size="lg">*/}
                        {/*<Card>*/}
                            {/*<Card.Header*/}
                                {/*title="This is title"*/}
                                {/*thumbStyle={{ width: 30, height: 30 }}*/}
                                {/*thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"*/}
                                {/*extra="this is extra"*/}
                            {/*/>*/}
                            {/*<Card.Body>*/}
                                {/*<View style={{ height: 42 }}>*/}
                                    {/*<Text style={{ marginLeft: 16 }}>Card Content</Text>*/}
                                {/*</View>*/}
                            {/*</Card.Body>*/}
                            {/*<Card.Footer*/}
                                {/*content="footer content"*/}
                                {/*extra="footer extra content"*/}
                            {/*/>*/}
                        {/*</Card>*/}
                    {/*</WingBlank>*/}
                {/*</View>*/}
                {/*<Text>*/}
                    {/*hello {global.index}*/}
                {/*</Text>*/}
                {/*<Text>*/}
                    {/*data {global.str}*/}
                {/*</Text>*/}
                {/*<Button title='同步数据' onPress={this.changew}/>*/}
                {/*<Button title='异步数据' onPress={this.changeq}/>*/}
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
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    title: {
        fontSize: 20,
        color: '#fff',
        alignItems: 'flex-end',
        paddingRight:10
    },
    add: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.6)',
    },
    c:{
        backgroundColor:'#fff',
        paddingTop:30,
        paddingBottom:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
});
