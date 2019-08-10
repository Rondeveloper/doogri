
import React from 'react';
import {
    View, ScrollView, Image, Dimensions,
    StatusBar, SectionList, Text
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';


import { increaseNumber } from '../actions';
import WideCard from '../components/WideCard';
//import { TouchableNativeFeedback} from 'react-native-gesture-handler';
import MainArticle from '../components/MainArticle'

const { SCREEN_WIDTH, SCREEN_HEIGHT } = Dimensions.get('window');

const ViewTypes = {
    MAIN_ARTICLE: 0,
    WIDE_CARD: 1,
    SMALL_CARD: 2
};


class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: []
        }
    }

    componentDidMount() {
        const newsData = [
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.SMALL_CARD },
        ]

        const motorcycleTests = [
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.SMALL_CARD },
            { type: ViewTypes.SMALL_CARD },
        ]

        const carTests = [
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.WIDE_CARD },
            { type: ViewTypes.SMALL_CARD },
            { type: ViewTypes.SMALL_CARD },
        ]

        this.setState({
            sections: [
                { title: 'חדשות', data: newsData },
                { title: 'מבחני אופנועים', data: motorcycleTests },
                { title: 'מבחני רכב', data: carTests }
            ]
        })
    }

    renderItem = ({ item: { type }, index, section }) => {
        return (
            <View style={{ paddingTop: index == 0 ? scale(8) : 0 }} >
                {type == ViewTypes.MAIN_ARTICLE ? <MainArticle />
                    : type == ViewTypes.WIDE_CARD ? <WideCard />
                        : type == ViewTypes.SMALL_CARD ? <SmallCard />
                            : null}
            </View>
        )

    }

    renderSectionHeader = ({ section: { title } }) => {
        return (
            <View style={styles.viewSectionHeader} >
                <Text style={styles.textSectionHeader} >{title}</Text>
            </View>
        )
    }

    renderListHeader = () => (
        <View>
            <MainArticle />
            <WideCard />
            <WideCard />
            <WideCard />
        </View>
    )

    keyExtractor = (item, index) => index + ''

    render() {

        return (
            <View>
                <StatusBar backgroundColor={'#fff'}
                    barStyle="dark-content" animated={true} showHideTransition={'slide'} />
                <SectionList
                    sections={this.state.sections}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    ListHeaderComponent={this.renderListHeader}
                    keyExtractor={this.keyExtractor}
                    stickySectionHeadersEnabled
                />
            </View>
        );
    }
}

const SmallCard = () => (
    <View style={{
        height: scale(110), width: '100%',
        justifyContent: 'space-around', flexDirection: 'row',
        paddingBottom: scale(10)
    }}>
        <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/cadillac.jpg')} ></Image>
        <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/honda-x-adv.jpg')} ></Image>
        <Image style={{ height: '100%', width: '31%', borderRadius: 6 }} source={require('../images/cadillac.jpg')} ></Image>
    </View>
)

const styles = EStyleSheet.create({
    viewSectionHeader: {
        height: scale(40),
        width: '100%',
        backgroundColor: '#10159e',
        justifyContent: 'center'
    },
    textSectionHeader: {
        paddingRight: scale(7),
        fontSize: scale(15),
        color: '#fff'
    }
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