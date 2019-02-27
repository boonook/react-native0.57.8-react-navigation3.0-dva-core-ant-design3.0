import React, { Component } from "react";
import { View, Text,StyleSheet,PermissionsAndroid,Dimensions,Platform} from "react-native";
import Pdf from 'react-native-pdf';
import {
    Icon,
} from '@ant-design/react-native';
// npm install rn-fetch-blob --save
// npm install react-native-pdf --save
//
// react-native link rn-fetch-blob
// react-native link react-native-pdf
export default class PdfRead extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    render() {
        const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
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
                            <Text>扫一扫</Text>
                        </View>
                        <View style={styles.flex1}>

                        </View>
                    </View>
                    <Pdf
                        source={source}
                        onLoadComplete={(numberOfPages,filePath)=>{
                            console.log(`number of pages: ${numberOfPages}`);
                        }}
                        onPageChanged={(page,numberOfPages)=>{
                            console.log(`current page: ${page}`);
                        }}
                        onError={(error)=>{
                            console.log(error);
                        }}
                        style={styles.pdf}/>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    },
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor:'transparent',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        elevation:9999999
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