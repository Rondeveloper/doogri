import React, { useState, useCallback } from 'react';
import {
    View, Text, Image, TouchableOpacity, Dimensions,
    Platform, Animated, TouchableNativeFeedback
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from 'react-native-size-matters';
import { connect } from 'react-redux';
import Constants from '../constants';
import { useNavigation } from '@react-navigation/native'
import { TouchableNativeFeedback as GHTouchableNativeFeedback } from 'react-native-gesture-handler';

import InnerArticle from './InnerArticle';
import { loadArticle } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;


function MainArticle( props ) {

    const [article, setArticle] = useState({
        imageUri: Constants.trk502x,
        title: Constants.title,
        subtitle: Constants.subtitle,
        longSubtitle: Constants.longSubtitle})

    const navigation = useNavigation()

    const openArticle = () => {
        props.loadArticle(article)
        navigation.navigate("ArticlePage")
        console.log(props.article)
    }

    return (
        Platform.select({
            ios: (
                <TouchableOpacity activeOpacity={0.6}
                    onPress={openArticle} >
                    <InnerArticle article={article} />
                </TouchableOpacity>
            ),
            android: (
                <GHTouchableNativeFeedback useForeground delayPressIn={0}
                    background={GHTouchableNativeFeedback.Ripple('#fff', false)}
                    onPress={openArticle}
                >
                    <InnerArticle article={article} />
                </GHTouchableNativeFeedback>
            )
        })
    )

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

export default connect(mapStateToProps, mapDispatchToProps)(MainArticle)

/*const styles = EStyleSheet.create({
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
})*/