import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { Button,Icon } from '@ant-design/react-native';
export default class mySound extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>  navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>好友</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity
                            onPress={() => this.setState({ state: !this.state.state })}
                            style={{alignSelf:'flex-end',marginRight:10}}>
                            <Icon style={{color:'#fff',paddingLeft:10}} name={'user-add'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button onPress={()=>{
                    this.props.navigation.navigate("Mp3Detail")
                }}>点击播放</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
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
