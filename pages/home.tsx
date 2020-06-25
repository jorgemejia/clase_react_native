import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export class Home extends Component {

    componentDidMount(){
        console.log("Component mount");
    }


    render (){
        return (
            <View style={styles.container}>
                <Text>Home Page</Text>
                <Button
                    title="Go to Details"
                    onPress={ () => this.props.navigation.navigate('Products') }
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;