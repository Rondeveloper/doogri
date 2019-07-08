import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { increaseNumber } from '../../actions';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {  }
    }

    onPressIncrease = () => {
        this.props.increaseNumber({num: 0})
    }

    render() { 
        return ( 
            <View style={styles.container}>
                <Text>MainPage Screen</Text>
                <Text>number: {this.props.number}</Text>
                <Button title="Press to increase" 
                onPress={this.onPressIncrease}
                 />
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function mapStateToProps(state) {
    return {
        number: state.number
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseNumber: a => dispatch(increaseNumber(a))
        
    };
}
 
//export default MainPage;
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);