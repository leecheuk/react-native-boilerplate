import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import Header from '../components/Header';

class HomeScreen extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <Header />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Home</Text>
                    <Button 
                        style={{background: '#fafafa'}}
                        title="Go to settings"
                        onPress={() => this.props.navigation.navigate('Settings')} />
                </View>
            </View>
        )
    }
}

export default HomeScreen;