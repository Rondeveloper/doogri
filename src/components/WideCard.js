import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from 'react-native-size-matters';
import Constants from '../constants';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { loadArticle } from '../actions';

function WideCard(props) {

    const navigation = useNavigation();

    const [article, setArticle] = useState({
        imageUri: Constants.golfgti,
        title: Constants.carTitle1,
        subtitle: Constants.carSubtitle1,
        longSubtitle: Constants.longCarSubtitle1})

    const openArticle = () => {
        props.loadArticle(article);
        navigation.navigate("ArticlePage");
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={openArticle} style={{marginBottom: scale(8)}}>
            <View style={styles.container}>
                <Image style={styles.image} source={ { uri: article.imageUri } } />
                <View style={styles.textContainer}>
                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                        {article.title}
                    </Text>
                    <Text numberOfLines={2} style={[styles.text, { fontSize: scale(11), lineHeight: scale(17) }]}>
                        {article.subtitle}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


function mapDispatchToProps(dispatch) {
    return {
        loadArticle: article => dispatch(loadArticle(article))
    }
}

export default connect(null, mapDispatchToProps) (WideCard);

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: scale(80),
        flexDirection: 'row',
        //marginBottom: scale(8)
    },
    image: {
        width: '34%',
        height: '100%'
    },
    textContainer: {
        flex: 1,
        padding: scale(7),
        backgroundColor: '#000'
    },
    text: {
        color: '#f7ea08',
        fontSize: scale(15),
        
    }
})