import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Header } from '../../components';

const Home = () => {
    return (
        <View>
            <Header />
            <Text>Home Page</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    input: {
        borderWidth: 1
    }
})
