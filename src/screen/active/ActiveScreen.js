
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image,ListView,Animated} from 'react-native';
import { List, SwipeAction,Icon } from '@ant-design/react-native';
export default class ActiveScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    render() {
        const {navigation} = this.props;
        const right = [
            {
                text: 'More',
                onPress: () => console.log('more'),
                style: { backgroundColor: 'orange', color: 'white' },
            },
            {
                text: 'Delete',
                onPress: () => console.log('delete'),
                style: { backgroundColor: 'red', color: 'white' },
            },
            {
                text: 'edit',
                onPress: () => console.log('reply'),
                style: { backgroundColor: 'green', color: 'white' },
            },
        ];
        const left = [
            {
                text: 'Read',
                onPress: () => console.log('read'),
                style: { backgroundColor: 'blue', color: 'white' },
            },
            {
                text: 'Reply',
                onPress: () => console.log('reply'),
                style: { backgroundColor: 'green', color: 'white' },
            },
            {
                text: 'delete',
                onPress: () => console.log('reply'),
                style: { backgroundColor: 'red', color: 'white' },
            },
        ];
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>  navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>活动</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>{
                            navigation.navigate('FriendAdd')
                        }} style={{alignSelf:'flex-end',marginRight:10}}>
                            <Icon style={{color:'#fff',paddingLeft:10}} name={'dash'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    title='活动'
                    onPress={() =>  navigation.openDrawer()}
                />
                <View>
                    <List>
                        <Text>左右侧滑</Text>
                        <SwipeAction
                            autoClose
                            style={{ backgroundColor: 'transparent' }}
                            right={right}
                            left={left}
                            onOpen={() => console.log('open')}
                            onClose={() => console.log('close')}
                        >
                            <List.Item extra="extra content">
                                Simple example: left and right buttons
                            </List.Item>
                        </SwipeAction>
                        <Text>向左侧滑</Text>
                        <SwipeAction
                            autoClose
                            style={{ backgroundColor: 'transparent' }}
                            right={right}
                            onOpen={() => console.log('open')}
                            onClose={() => console.log('close')}
                        >
                            <List.Item extra="extra content">
                                Simple example: left and right buttons
                            </List.Item>
                        </SwipeAction>
                    </List>
                </View>
                <Text style={{fontSize:89}}>福</Text>
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
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#8BC645',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    backTextWhite: {
        color: '#FFF'
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 50,
    },
});
