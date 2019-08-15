import React from 'react';
import {
    View, Text, Image, TouchableOpacity, Dimensions,
    Platform
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from 'react-native-size-matters';
import { connect } from 'react-redux';
import Constants from '../constants';
import { withNavigation } from 'react-navigation'
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import InnerArticle from './InnerArticle';
import { loadArticle } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class MainArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {
                imageUri: Constants.trk502x,
                title: Constants.title,
                subtitle: Constants.subtitle,
                longSubtitle: Constants.longSubtitle
            }
        }

    }

    openArticle = () => {
       /* const { article } = this.props;
        this.props.navigation.navigate("ArticlePage", {
            article
        });*/
        this.props.loadArticle(this.state.article);
        this.props.navigation.navigate("ArticlePage")
        //console.log(this.props) 
    }

    render() {
        return (
            <View>
                {Platform.OS == 'android' ?
                    <TouchableNativeFeedback useForeground
                        //background={TouchableNativeFeedback.Ripple('#fff', false)}
                        onPress={this.openArticle}
                    >
                        <InnerArticle {...this.props} article={this.state.article} />
                    </TouchableNativeFeedback>
                    : Platform.OS == 'ios' ?
                    <TouchableOpacity activeOpacity={0.6}
                    onPress={this.openArticle} >
                        <InnerArticle {...this.props} article={this.state.article} />
                    </TouchableOpacity>
                    : null
                }
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
       loadArticle: article => dispatch(loadArticle(article))
    }
}
function mapStateToProps(state) {
    return {
       article: {
           imageUri: state.article.imageUri
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(MainArticle))

const styles = EStyleSheet.create({
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
})