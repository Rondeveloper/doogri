import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from 'react-native-size-matters';
import Constants from '../constants';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { loadArticle } from '../actions';

class WideCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {
                imageUri: Constants.golfgti,
                title: Constants.carTitle1,
                subtitle: Constants.carSubtitle1
            }
        }
    }

    openArticle = () => {
        this.props.loadArticle(this.state.article);
        this.props.navigation.navigate("ArticlePage");
    }

    render() {
        const { article } = this.state;
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={this.openArticle} >
                <View style={styles.container}>
                <Image style={styles.image}
                source={ { uri: article.imageUri } }
                />
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
}

function mapDispatchToProps(dispatch) {
    return {
        loadArticle: article => dispatch(loadArticle(article))
    }
}

export default connect(null, mapDispatchToProps) (withNavigation(WideCard));

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: scale(80),
        flexDirection: 'row',
        paddingBottom: scale(8)
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