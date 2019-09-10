import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

class Header extends Component {
    render () {
        if (!this.props.notification.text) {
            return null
        }
        return (
            <View style={{width: '100%', position: 'absolute', zIndex: 100, height: 80, padding: 10, backgroundColor: '#333', justifyContent: 'center'}}>
                <Text style={{paddingTop: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 25, color: '#FFF'}}>{this.props.notification.text}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Header);