
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

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    onPressIncrease = () => {
        this.props.increaseNumber()
    }

    openArticle = () => {
        this.props.navigation.navigate("ArticlePage", {

        })
    }

    render() {
        
        return (
                <ScrollView style={{ flex: 1, }}
                    contentContainerStyle={{ paddingBottom: scale(30) }}>
                    
                    <StatusBar backgroundColor={'#fff'} 
                    barStyle="dark-content" animated={true} showHideTransition={'slide'} />
                    
                    <MainArticle />

                    <WideCard />
                    <WideCard />
                    <WideCard />

                    <View style={{height: scale(110), width: '100%',
                     justifyContent:'space-around', flexDirection: 'row',
                     paddingBottom: scale(10) }}>
                        <Image style={{height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/honda-x-adv.jpg')} ></Image>
                        <Image style={{height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/cadillac.jpg')} ></Image>
                        <Image style={{height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/honda-x-adv.jpg')} ></Image>
                    </View>

                    <View style={{height: scale(110), width: '100%',
                     justifyContent:'space-around', flexDirection: 'row',
                     paddingBottom: scale(10) }}>
                        <Image style={{height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/cadillac.jpg')} ></Image>
                        <Image style={{height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/honda-x-adv.jpg')} ></Image>
                        <Image style={{height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/cadillac.jpg')} ></Image>
                    </View>

                </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);