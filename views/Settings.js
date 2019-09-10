import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNotification, clearNotification } from '../redux/ActionTypes';

class SettingsScreen extends Component {
    onClick(text) {
        this.props.setNotification({
            text,
            isError: false
        });
        setTimeout(() => {
            this.props.clearNotification();
        }, 3000)
    }
    render () {
        return (
            <View style={{flex: 1}}>
                <Header />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Settings</Text>
                    <Button 
                        title="Go to settings"
                        onPress={() => this.props.navigation.navigate('Home')} />
                    <Button title="Say Hello" onPress={this.onClick.bind(this, "Hello")}/>
                    <Button title="Say Bye" onPress={this.onClick.bind(this, "Bye")}/>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setNotification,
        clearNotification
    }, dispatch)
)

export default connect(null, mapDispatchToProps)(SettingsScreen);