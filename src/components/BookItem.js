import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class BookItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.data.split('\n')[0],
            body: this.props.data.split('\n').filter((value, index) => 0 !== index)
        })
    }

    render() {
        const { title, body } = this.state

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.handleBookPress({ title, body })}>
                    <View style={styles.box}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.text} numberOfLines={7}>{body}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const boxW = width * .45
const boxH = height * .25

const styles = StyleSheet.create({
    container: {
        width: width * .5,
        height: height * .3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: boxW,
        height: boxH,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 2
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        fontSize: 14,
        color: 'black'
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: 150,
        height: 45,
        borderRadius: 100,
        marginBottom: 10,
        backgroundColor: '#41B6E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white'
    }
})