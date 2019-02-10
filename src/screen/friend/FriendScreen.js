
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image} from 'react-native';
import { DatePicker, List ,Provider,Icon} from '@ant-design/react-native'
export default class FriendScreen extends Component {
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
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>  navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>联系人</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>{
                            navigation.navigate('FriendAdd')
                        }} style={{alignSelf:'flex-end',marginRight:10}}>
                            <Icon style={{color:'#fff',paddingLeft:10}} name={'usergroup-add'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    {/*<Video*/}
                        {/*ref={(ref) => {*/}
                            {/*this.video = ref*/}
                        {/*}}*/}
                        {/*//来自本地的MP4视频*/}
                        {/*source={require('../../assets/video/gbqq.mp4')}*/}
                        {/*//1.0表示默认速率*/}
                        {/*rate={1.0}*/}
                        {/*//图片等比例缩放*/}
                        {/*resizeMode='contain'*/}
                        {/*//不重复播放*/}
                        {/*repeat={false}*/}
                        {/*//默认音量*/}
                        {/*volume={1.0}*/}
                        {/*//样式*/}
                        {/*style={styles.backgroundVideo}/>*/}
                </View>
                <Button
                    title='朋友'
                />
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
    container:{
        flex: 1,
    },
    backgroundVideo:{}
});
