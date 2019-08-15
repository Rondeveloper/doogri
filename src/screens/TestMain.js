
import React from 'react';
import { View, ScrollView, Image, Dimensions, 
     StatusBar, } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';


import { increaseNumber } from '../actions';
import WideCard from '../components/WideCard';
//import { TouchableNativeFeedback} from 'react-native-gesture-handler';
import MainArticle from '../components/MainArticle'

const { SCREEN_WIDTH, SCREEN_HEIGHT } = Dimensions.get('window');

class TestMain extends React.Component {

    constructor(props) {
        super(props);
        
        const mydata = [];
        mydata.push({ type: 'MAIN_ARTICLE' })
        for (let i = 0; i < 3; i++) {
          mydata.push({ type: 'WIDE_CARD' })
        }
        mydata.push({ type: 'SECTIONS' })
        mydata.push({ type: 'SMALL_CARD' })
        mydata.push({ type: 'SMALL_CARD' })
        this.state = {
          list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(mydata),
        };
    
        this.layoutProvider = new LayoutProvider((i) => {
          return this.state.list.getDataForIndex(i).type;
        }, (type, dim) => {
          switch (type) {
            case 'MAIN_ARTICLE':
              dim.width = SCREEN_WIDTH;
              dim.height = scale(305);
              break;
            case 'WIDE_CARD':
              dim.width = SCREEN_WIDTH;
              dim.height = scale(80);
              break;
            case 'SMALL_CARD':
              dim.width = SCREEN_WIDTH;
              dim.height = scale(110);
              break;
            /*case 'SECTIONS': 
              dim.width = SCREEN_WIDTH;
              dim.height = scale(500)*/
            default:
              dim.width = 0;
              dim.height = 0;
              break;
          };
        })
    
      }
    
      renderRow = (type, data) => {
        //const { typeR } = data;
        //console.log('called renderRow function')
        return (
          <View>
            {type == 'MAIN_ARTICLE' ? <MainArticle />
              : type == 'WIDE_CARD' ? <WideCard />
                : type == 'SECTIONS'?
                <View>
                  <Text>Sections</Text>
                </View>
                /*: type == 'SMALL_CARD' ?
                  <View style={{
                    height: scale(110), width: '100%',
                    justifyContent: 'space-around', flexDirection: 'row',
                    paddingBottom: scale(10)
                  }}>
                    <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/honda-x-adv.jpg')} ></Image>
                    <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/cadillac.jpg')} ></Image>
                    <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/honda-x-adv.jpg')} ></Image>
                  </View>*/ : null}
          </View>
        )
      }
    
      render() {
        console.log('rendered TestMain')
        return (
          <View style={styles.container}>
            <StatusBar backgroundColor={'#fff'} 
              barStyle="dark-content" animated={true} showHideTransition={'slide'} />
            <RecyclerListView
              style={{ flex: 1 }}
              rowRenderer={this.renderRow}
              dataProvider={this.state.list}
              layoutProvider={this.layoutProvider}
            />
          </View>
        );
      }
}

/*MainArticle = () => (
    <View style={{ paddingBottom: scale(10) }}>
        <View style={[styles.imageContainer]}>
            <Image style={{ width: '100%', height: '100%' }} source={ require('../images/motorcycle_full.jpg') }/>
        </View>
        <View style={styles.titlesContainer}>
            <Text style={styles.title}>{Constants.title}</Text>
            <Text numberOfLines={3} style={[styles.subtitle, {lineHeight: scale(16)}]}>
                {Constants.subtitle}
            </Text>
        </View>
    </View>
)*/

const styles = EStyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black'
    },
    imageContainer: {
        height: scale(210),
        width: '100%'
    },
    text: {
        color: '#fff',
        fontSize: scale(15)
    },
    titlesContainer: {
        //height: scale(200),
        width: SCREEN_WIDTH,
        padding: scale(7),
        paddingStart: scale(12),
        backgroundColor: '#f7ea08'
    },
    title: {
        color: '#000',
        fontSize: scale(16),
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#000',
        fontSize: scale(12),
    },
    mainArticleDate: {
        color: '#000',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
});

function mapStateToProps(state) {
    return {
        number: state.number
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseNumber: dispatch(increaseNumber())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestMain);