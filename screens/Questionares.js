import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import { LinearGradient } from "expo";
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
import UVMainPage from '../components/UVMainPage'
import Drawer from 'react-native-drawer';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
const { height, width } = Dimensions.get('window');
import { CheckBox } from 'react-native-elements'

export default class Questionares extends React.Component {
  static navigationOptions = {
    header: null
  };
constructor(props) {
    super(props);
    this.state = {
        state:false,
        asthma:{
            status:false,
            name:'asthma'
        },
        COPD_exacerbations:{
            status:false,
            name:'COPD_exacerbations'
        },
        coronary_artery_disease:{
            status:false,
            name:'coronary_artery_disease'
        },
        myocardial_infarction:{
            status:false,
            name:'myocardial_infarction'
        },
        emphysema:{
            status:false,
            name:'emphysema'
        },
        bronchitis:{
            status:false,
            name:'bronchitis'
        },
        lung_problem:{
            status:false,
            name:'lung_problem'
        },
        chest_infection: {
            status:false,
            name:'chest_infection'
        },
        pneumonitis: {
            status:false,
            name:'pneumonitis'
        }
    }
}
    onSaveDeseases = () => {
        this.props.navigation.navigate('MainScreen')
    }

  render() {
    return (
        <View style={styles.container}>

        <View style={{flex:2, marginTop:40,alignSelf:'center', flexDirection:'column', marginTop: 50,}}>
            <Text style={styles.questionaresTxt}>Select your breathing problems</Text>
            <Image style={{height:260, width:200, alignSelf:'center',marginTop:5}} source={require('../assets/images/body.png')}></Image>

        </View>
        <View style={{flex:4}}>
        
        <View style={{flexDirection:'column', justifyContent:'center'}}>
            <CheckBox
                title='Asthma'
                checked={this.state.asthma.status}
                onPress={() => this.setState({asthma: {...this.state.asthma,status:!this.state.asthma.status}})}
                containerStyle={styles.checkBox}
                textStyle={styles.textStyle}
                checkedColor={'#fff'}
            />
            <CheckBox
                title='COPD exacerbations'
                checked={this.state.COPD_exacerbations.status}
                onPress={() => this.setState({COPD_exacerbations: {...this.state.COPD_exacerbations,status:!this.state.COPD_exacerbations.status}})}
                containerStyle={styles.checkBox}
                textStyle={styles.textStyle}
                checkedColor={'#fff'}

            />
        </View>


        {/* <View style={{flexDirection:'column',justifyContent:'center'}}> */}
            <CheckBox
                title='coronary artery disease'
                checked={this.state.coronary_artery_disease.status}
                onPress={() => this.setState({coronary_artery_disease: {...this.state.coronary_artery_disease,status:!this.state.coronary_artery_disease.status}})}
                containerStyle={styles.checkBox}
                textStyle={styles.textStyle}
                checkedColor={'#fff'}

            />
            <CheckBox
                title='myocardial infarction'
                checked={this.state.myocardial_infarction.status}
                onPress={() => this.setState({myocardial_infarction: {...this.state.myocardial_infarction,status:!this.state.myocardial_infarction.status}})}
                containerStyle={styles.checkBox}
                textStyle={styles.textStyle}
                checkedColor={'#fff'}

            />

            <CheckBox
                title='bronchitis'
                checked={this.state.bronchitis.status}
                onPress={() => this.setState({bronchitis: {...this.state.bronchitis,status:!this.state.bronchitis.status}})}
                containerStyle={styles.checkBox}
                textStyle={styles.textStyle}
                checkedColor={'#fff'}

            />

             <CheckBox
                title='Lung related problem'
                checked={this.state.lung_problem.status}
                onPress={() => this.setState({lung_problem: {...this.state.lung_problem,status:!this.state.lung_problem.status}})}
                containerStyle={styles.checkBox}
                textStyle={styles.textStyle}
                checkedColor={'#fff'}

            />

            <CheckBox
                title='Chest Infection'
                checked={this.state.chest_infection.status}
                onPress={() => this.setState({chest_infection: {...this.state.chest_infection,status:!this.state.chest_infection.status}})}
                containerStyle={styles.checkBox}
                textStyle={styles.textStyle}
                checkedColor={'#fff'}

            />

            <CheckBox
                title='pneumonitis'
                checked={this.state.pneumonitis.status}
                onPress={() => this.setState({pneumonitis: {...this.state.pneumonitis,status:!this.state.pneumonitis.status}})}
                containerStyle={styles.checkBox}
                textStyle={styles.textStyle}
                checkedColor={'#fff'}

            />
        {/* </View> */}


        {/* <View style={{flexDirection:'column',justifyContent:'center'}}> */}



        {/* <View style={{flexDirection:'column',justifyContent:'center'}}> */}

        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={styles.saveButton}>
                <Button color='#fff' title="Save" onPress={()=>this.onSaveDeseases()}></Button>
            </View>

            <View style={styles.noProbelmBtn}>
                <Button color='#fff' title="I don't have any problem" onPress={()=>this.onSaveDeseases()}></Button>
            </View>
        </View>
        
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(225, 230, 242,1)',
  },
  saveButton: {
        backgroundColor:'#5e73ff',
        borderRadius: 10,
        width:100,
        alignSelf: 'center',
        marginTop: 30,
        marginRight: 5,

  },
  noProbelmBtn:{
        backgroundColor:'#c1c1c1',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        marginLeft: 5,

  },
  checkBox: {
    backgroundColor:'rgba(94, 115, 255,0.7)',
    borderRadius: 10,
    shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowColor: '#5e73ff',
      shadowOpacity: 0.4,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,

  },
  textStyle: {
      color:'#fff'
  },
  questionaresTxt: {
    alignContent: 'center',
    fontSize: 20,
    fontWeight:'500',
    color:'#5e73ff'
    }
});
