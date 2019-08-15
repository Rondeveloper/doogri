import React from 'react';
import {
  View, ScrollView, Image, Dimensions, StyleSheet,
  StatusBar, Text, SectionList, FlatList
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import NewsPage from './NewsPage';

class SwiperPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <SwiperNavigationContainer />
         );
    }
}
const SwiperNavigationContainer = createAppContainer(TopTabNavigator);
const TopTabNavigator = createMaterialTopTabNavigator({
    News: NewsPage
})
 
export default SwiperPage;