import React from 'react';
import { ScrollView, StyleSheet, View, Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AdvicesList extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
      const {random_recommendations}= this.props;
    return (
    <ScrollView style={{padding:20}}>
        <View style={styles.advice}>
            <Text style={styles.category}>Chilren</Text>
            <Text>{random_recommendations.children}</Text>
        </View>

        <View style={styles.advice}>
            <Text style={styles.category}>Sport</Text>
            <Text>{random_recommendations.sport}</Text>
        </View>

        <View style={styles.advice}>
            <Text style={styles.category}>Heath</Text>
            <Text>{random_recommendations.health}</Text>
        </View>

        <View style={styles.advice}>
            <Text style={styles.category}>Inside</Text>
            <Text>{random_recommendations.inside}</Text>
        </View>

        <View style={styles.advice}>
            <Text style={styles.category}>Outside</Text>
            <Text>{random_recommendations.outside}</Text>
        </View>
        
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    advice:{
        padding:10,
        borderWidth:1,
        borderColor: 'rgba(108, 123, 222,0.1)',
        margin: 10,
        marginBottom: 30,
        backgroundColor: 'rgba(239, 241, 255,0.8)',
        borderRadius: 10,
        shadowOffset: {
            width: 4,
            height: 4,
        },
      shadowColor: '#5e73ff',
      shadowOpacity: 0.4,
    },
    category: {
        color: '#5e73ff'
    }

});
