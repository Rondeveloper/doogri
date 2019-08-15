import React from 'react';
import {
  View, ScrollView, Image, Dimensions, StyleSheet,
  StatusBar, Text, SectionList, FlatList
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { withNavigation } from 'react-navigation';

class NewsPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                <Text>News</Text>
            </View>
         );
    }
}
 
export default withNavigation(NewsPage);