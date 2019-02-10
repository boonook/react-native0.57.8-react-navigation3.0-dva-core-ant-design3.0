
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image} from 'react-native';
import { DatePicker, List ,Provider,Icon} from '@ant-design/react-native'
export default class MessageScreen extends Component {
    constructor(props) {
        super(props);
        this.onChange = value => {
            this.setState({ value });
        };
        this.state = {
            value: undefined,
        };
    }

    onChange = (value: any) => {
        this.setState({ value });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };

    render() {
        const {navigation} = this.props;
        return (
            <Provider>
                <View>
                    <View style={styles.header}>
                        <View style={styles.flex1}>
                            <TouchableOpacity onPress={() =>  navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                                <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.flex1}>
                            <Text style={styles.title}>消息</Text>
                        </View>
                        <View style={styles.flex1}>
                            <TouchableOpacity onPress={() =>{
                                navigation.navigate('FriendAdd')
                            }} style={{alignSelf:'flex-end',marginRight:10}}>
                                <Icon style={{color:'#fff',paddingLeft:10}} name={'plus'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Button
                            title='消息'
                            onPress={() =>  navigation.openDrawer()}
                        />
                        <View>
                            <List>
                                <DatePicker
                                    value={this.state.value}
                                    mode="date"
                                    minDate={new Date(2015, 7, 6)}
                                    maxDate={new Date(2026, 11, 3)}
                                    onChange={this.onChange}
                                    format="YYYY-MM-DD"
                                >
                                    <List.Item arrow="horizontal">Select Date</List.Item>
                                </DatePicker>
                            </List>
                        </View>
                    </View>
                </View>
            </Provider>
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
