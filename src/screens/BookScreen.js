import React, { Component } from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class BookScreen extends Component {


    render() {
        const { title, body } = this.props.route.params.data

        return (
            <SafeAreaView>
                <View style={{ alignItems: 'flex-start' }}>
                    <Button
                        title="Go Back"
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
                <ScrollView>
                    <View style={{ paddingHorizontal: 50, paddingBottom: 50 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
                        <Text>{body}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
