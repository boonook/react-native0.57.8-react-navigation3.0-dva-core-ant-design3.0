/**
 * 模态窗口
 * */
/* tslint:disable:no-console */
import React from 'react';
import { ScrollView, Text, View , Picker, StyleSheet} from 'react-native';
import {
    Modal,PickerView
} from '@ant-design/react-native';

const seasons = [
    [
        {
            label: '2013',
            value: '2013',
        },
        {
            label: '2014',
            value: '2014',
        },
    ],
    [
        {
            label: '春',
            value: '春',
        },
        {
            label: '夏',
            value: '夏',
        },
    ],
];
export class BasicModalExample extends React.Component {

    // 定义默认属性
    static defaultProps = {
        // 默认显示北京(省)
        selectedProvince: '北京',
        // 默认显示北京省会市)
        selectedCity: '北京',
        // 默认显示(区)
        selectedArea: '东城区'
    };


    constructor(props) {
        super(props);
        this.onClose2 = () => {
            this.setState({
                visible2: false,
            });
        };
        this.state = {
            visible2: false,
        };
    }
    setModalVisible(state){
        this.setState({ visible2: state })
    }


    render() {
        return (
            <ScrollView style={{ marginTop: 20 }}>
                <Modal
                    popup
                    visible={this.state.visible2}
                    animationType="slide-up"
                    onClose={this.onClose2}
                    style={{
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10
                    }}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{width: 70, height: 50}}>
                            <Text style={{textAlign:'center',padding:10}} onPress={this.onClose2}>取消</Text>
                        </View>
                        <View style={{width: 70, height: 50}} >
                            <Text style={{textAlign:'center',padding:10}} onPress={this.onClose2}>确定</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 20, paddingHorizontal: 20,height:300 }}>
                        <Text>测试</Text>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF'
    },
    text: {
        width: 200,
        height: 60,
        marginTop: 100,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    pickerViewContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 30

    },
    pickerItem: {
        flex: 1,
    }
})