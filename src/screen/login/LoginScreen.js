import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableOpacity,Image,Button} from 'react-native';
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native'
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
    }
    changeq = ()=>{
        const { dispatch } = this.props;
        dispatch({
            type:'global/change',
            payload:{
                index:'异步世界'
            }
        })
    }

    render() {
        const {global} = this.props;
        console.log(global);
        return (
            <View>
                <Button
                    title="Learn More"
                    onPress={() => this.props.navigation.navigate("Home")}
                />
                <View  style={{ paddingTop: 30 }}>
                    <WingBlank size="lg">
                        <Card>
                            <Card.Header
                                title="This is title"
                                thumbStyle={{ width: 30, height: 30 }}
                                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                extra="this is extra"
                            />
                            <Card.Body>
                                <View style={{ height: 42 }}>
                                    <Text style={{ marginLeft: 16 }}>Card Content</Text>
                                </View>
                            </Card.Body>
                            <Card.Footer
                                content="footer content"
                                extra="footer extra content"
                            />
                        </Card>
                    </WingBlank>
                </View>
                <Text>
                    hello {global.index}
                </Text>
                <Button title='同步数据' onPress={this.changew}/>
                <Button title='异步数据' onPress={this.changeq}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#0187FB',
        borderBottomWidth: 1,
        borderColor: '#ddd'
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
        color: '#fff'
    },
    add: {
        fontSize: 18,
        color: '#fff',
    }
});
