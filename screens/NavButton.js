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
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { LinearGradient } from "expo";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import ActionButton from 'react-native-circular-action-menu';


export default class AirPollutionDaily extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{marginBottom:30}}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item  buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon onPress={() => this.props.navigation.navigate('MainScreen')} name = "ios-home" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="Notifications" onPress={() => {}}>
            <Icon onPress={() => this.props.navigation.navigate('MapView')} name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="UVRadiation" onPress={() => {}}>
            <Icon onPress={() => this.props.navigation.navigate('UVRadiation')}  name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="All Tasks" onPress={() => {}}>
            <Icon onPress = {() => this.props.navigation.navigate('ListCityScreen')} name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="All Tasks" onPress={() => {}}>
            <Icon name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="All Tasks" onPress={() => {}}>
            <Icon name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
