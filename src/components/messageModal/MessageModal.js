/* tslint:disable:no-console */
import React from 'react';
import { ScrollView, Text, View , Picker, StyleSheet} from 'react-native';
import {
    Button,
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
} from '@ant-design/react-native';

// 读取本地json文件
let jsonData = require('../../assets/area.json');
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
            // 省
            province: [],
            // 市
            city: [],
            // 区
            area: [],
            // 选中的省
            selectedProvince: this.props.selectedProvince,
            // 选中的市
            selectedCity: this.props.selectedCity,
            // 选中的地区
            selectedArea: this.props.selectedArea,
        };
    }
    setModalVisible(state){
        this.setState({ visible2: state })
    }

    // 获取全国省: ['省1', '省2', '省3'......]
    getProvince=()=> {
        let result = [];

        for (let code in jsonData) {

            result.push(jsonData[code].name);
        }

        return result;
    }

    // 获取各个省的城市[['省1-城市1', '省1-城市2', '省1-城市3'......],['省2-城市1', '省2-城市2', '省2-城市3'......]]
    getProvinceCity=(province) =>{
        let result = [];
        let cityData = [];

        for (let code in jsonData) {

            let temp = jsonData[code].name
            if (temp == province) {

                cityData = jsonData[code].city
                for (let j in cityData) {
                    result.push(cityData[j].name);
                }

                break;
            }
        }

        return result;
    }

    // 获取各个省的城市[['省1-城市1-区1', '省1-城市1-区2', '省1-城市1-区3'......]......]
    getProvinceCityArea=(province, city)=> {

        let result = [];
        let cityData = [];

        for (let code in jsonData) {

            let tempProvince = jsonData[code].name
            if (tempProvince == province) {

                cityData = jsonData[code].city
                for (let j in cityData) {
                    let tempCity = cityData[j].name

                    // console.log('查询省: ' + tempProvince + '    查询城市: ' + city)

                    if (tempCity == city) {

                        result = cityData[j].area
                        // console.log('查询区: ' + result)

                        break;
                    }
                }
            }
        }

        return result;
    }


    componentDidMount() {

        let province = this.getProvince();
        this.state.selectedProvince = province[0];

        let city = this.getProvinceCity(this.state.selectedProvince)
        this.state.selectedCity = city[0]

        let area = this.getProvinceCityArea(this.state.selectedProvince, this.state.selectedCity)
        this.state.selectedArea = area[0]


        this.setState({
            province: province,
            city: city,
            area: area
        });

        console.log('\n******省: '   + province + '\n******默认省: '  + this.state.selectedProvince)
        console.log('\n******城市: ' + city     + '\n******默认城市: ' + this.state.selectedCity)
        console.log('\n******区: '   + area     + '\n******默认区: '   + this.state.selectedArea)
    }

    updateProvince(param) {

        let cityData = this.getProvinceCity(param)
        let defaultCity = cityData[0]

        let areaData = this.getProvinceCityArea(param, defaultCity)
        let defaultArea = areaData[0]

        this.setState({
            selectedProvince: param,
            selectedCity: defaultCity,
            selectedArea: defaultArea,
            city: cityData,
            area: areaData,

        })
    }

    updateProvinceCity(city) {

        let areaData = this.getProvinceCityArea(this.state.selectedProvince, city)
        let defaultArea = areaData[0]

        // console.log(this.state.selectedProvince, city, areaData)

        this.setState({
            selectedCity: city,
            selectedArea: defaultArea,
            area: areaData,

        })
    }

    updateProvinceCityArea(area) {

        this.setState({
            selectedArea: area,

        })
    }


    renderPicker=(key, i)=> {

        return <Picker.Item key={i} label={key} value={key} />
    }

    render() {
        const footerButtons = [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') },
        ];
        return (
            <ScrollView style={{ marginTop: 20 }}>
                <Modal
                    popup
                    visible={this.state.visible2}
                    animationType="slide-up"
                    onClose={this.onClose2}
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
                        <View style={styles.container}>
                            <Text style={styles.text}>{this.state.selectedProvince+this.state.selectedCity+this.state.selectedArea}</Text>
                            <View style={styles.pickerViewContainer}>
                                <Picker style={{flex: 1}}
                                        selectedValue={this.state.selectedProvince}
                                        onValueChange={(language) => this.updateProvince(language)}>
                                    {this.state.province.map((key, i) => this.renderPicker(key, i))}
                                </Picker>
                                <Picker style={styles.pickerItem}
                                        selectedValue={this.state.selectedCity}
                                        onValueChange={(language) => this.updateProvinceCity(language)}>
                                    {this.state.city.map((key, i) => this.renderPicker(key, i))}
                                </Picker>
                                <Picker style={{flex: 1}}
                                        selectedValue={this.state.selectedArea}
                                        onValueChange={(area) => this.updateProvinceCityArea(area)}>
                                    {this.state.area.map((key, i) => this.renderPicker(key, i))}
                                </Picker>
                            </View>
                        </View>
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