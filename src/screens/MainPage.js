import React from 'react';
import {
  View, ScrollView, Image, Dimensions, StyleSheet,
  StatusBar, Text, SectionList, FlatList
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import faker from 'faker';

import WideCard from '../components/WideCard';
import MainArticle from '../components/MainArticle'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ViewTypes = {
  MAIN_ARTICLE: 0,
  WIDE_CARD: 1,
  SMALL_CARD: 2,
  SECTION_LIST: 3
};


class MainPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      sections: [],
    };
  }

  componentDidMount() {

    const newsData = [];
    newsData.push({ type: ViewTypes.WIDE_CARD })
    newsData.push({ type: ViewTypes.WIDE_CARD })
    newsData.push({ type: ViewTypes.WIDE_CARD })
    newsData.push({ type: ViewTypes.WIDE_CARD })
    newsData.push({ type: ViewTypes.SMALL_CARD })

    const roadTestData = [];
    roadTestData.push({ type: ViewTypes.MAIN_ARTICLE })
    roadTestData.push({ type: ViewTypes.WIDE_CARD })
    roadTestData.push({ type: ViewTypes.WIDE_CARD })
    roadTestData.push({ type: ViewTypes.SMALL_CARD })

    const sections = [
      { title: 'חדשות', data: newsData },
      { title: 'מבחני דרכים', data: roadTestData },
      { title: 'מגזין', data: [] },
      { title: 'ספורט מוטורי', data: [] }
    ]

    this.setState({ 
      sections
     })
  }

  renderFlatListRow = ({ item: {type} }) => {
    console.log(type)
    return (
      <View>
        {type == ViewTypes.MAIN_ARTICLE ? <MainArticle />
          : type == ViewTypes.WIDE_CARD ? <WideCard />
            : type == ViewTypes.SMALL_CARD? <SmallCard /> 
              
        : null}
      </View>
      )
  }

  renderSectionListItem = ({ item: {type}, index, section }) => (
    <View style={{ marginTop: index == 0 ? scale(10) : 0 }}>
      {type == ViewTypes.MAIN_ARTICLE ? <MainArticle />
       : type == ViewTypes.SMALL_CARD ? <SmallCard />
        : type == ViewTypes.WIDE_CARD ? <WideCard />
        : null }
    </View>
  )
  
  renderSectionHeader = ({ section: {title} }) => (
    <View style={styles.viewSectionHeader} >
      <Text style={[styles.textSectionHeader, {paddingRight: scale(3)}]}> {/* it probably doesnt recognize rtl since paddingStart doesnt work like paddingRight, its equal to paddingLeft */}
        {title}
      </Text>
    </View>
  )

  _keyExtractor = (item, index) => index+'';

  renderListHeader = () => {

    return (
      <View>
        <MainArticle />
        <WideCard />
        <WideCard />
        <WideCard />
        <SmallCard />
      </View>
    )
  }

  render() {
    console.log('rendered MainPage')
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#fff'} 
          barStyle="dark-content" animated={true} showHideTransition={'slide'} />
      
        <SectionList 
              style={{flex : 1}}
              renderItem={this.renderSectionListItem}
              renderSectionHeader={this.renderSectionHeader}
              sections={this.state.sections}
              keyExtractor={(item, index) => item + index}
              stickySectionHeadersEnabled
              ListHeaderComponent={this.renderListHeader}
              />
        
      </View>
    );
  }
}

export default MainPage;

const SmallCard = () => (
  <View style={{
    height: scale(110), width: '100%',
    justifyContent: 'space-around', flexDirection: 'row',
    paddingBottom: scale(15)
  }}>
    <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/honda-x-adv.jpg')} ></Image>
    <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/cadillac.jpg')} ></Image>
    <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/honda-x-adv.jpg')} ></Image>
  </View>
)

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  viewSectionHeader: {
    justifyContent: 'center',
    backgroundColor: '#002366',
    height: scale(45),
    //marginBottom: scale(10)
  },
  textSectionHeader: {
    color: '#fff',
    fontSize: scale(15),
    fontWeight: 'bold',
    
  }
})