import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,StatusBar,TouchableOpacity,FlatList,Image,ScrollView } from 'react-native';
import {
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
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
                <Button
                    title={'展开'}
                    onPress={() => {
                        this.refs.son.setModalVisible(true)
                    }}
                />
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
        flex: 1,
        backgroundColor: '#F5FCFF',
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
