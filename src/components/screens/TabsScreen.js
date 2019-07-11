import { StyleSheet, View, Text, Button, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';
import { increaseNumber } from '../../actions';
import React from 'react';

class TabsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <Text>TabsScreen</Text>
            </View>
         );
    }
}
 
export default TabsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });