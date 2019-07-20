import React from 'react';
import { View, ScrollView, Image, Dimensions,  StyleSheet,
     StatusBar, } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';

import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import faker from 'faker';

import WideCard from '../components/WideCard';
//import { TouchableNativeFeedback} from 'react-native-gesture-handler';
import MainArticle from '../components/MainArticle'

const { SCREEN_WIDTH, SCREEN_HEIGHT } = Dimensions.get('window');

class TestMain extends React.Component {
    
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);

    const fakeData = [];
    for(i = 0; i < 100; i+= 1) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: i,
          image: faker.image.avatar(),
          name: faker.name.firstName(),
          description: faker.random.words(5),
        },
      });
    }
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };

    this.layoutProvider = new LayoutProvider((i) => {
      return this.state.list.getDataForIndex(i).type;
    }, (type, dim) => {
      switch (type) {
        case 'NORMAL': 
          dim.width = SCREEN_WIDTH;
          dim.height = 100;
          break;
        default: 
          dim.width = 0;
          dim.height = 0;
          break;
      };
    })

    console.log('rendered constructor')
  }

  renderRow = (type, data) => {
    console.log('called renderRow function')
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>This is a row :)</Text>
      </View>
    )
  }

  render() {
    console.log('rendered TestMain')
    return (
      <View style={styles.container}>
        <RecyclerListView
          style={{flex: 1}}
          rowRenderer={this.renderRow}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
        />
      </View>
    );
  }
}
 
export default TestMain;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      minHeight: 1,
      minWidth: 1,
    },
    body: {
      marginLeft: 10,
      marginRight: 10,
      maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
    },
    image: {
      height: 80,
      width: 80,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      opacity: 0.5,
    },
    listItem: {
      flexDirection: 'row',
      margin: 10,
    },
})