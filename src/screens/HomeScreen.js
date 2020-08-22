import React, { Component } from 'react'
import BookItem from '../components/BookItem'
import { View, FlatList, SafeAreaView } from 'react-native'
import axios from 'axios'


export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    async componentDidMount() {
        await this.getBooks()
    }

    getBooks = async () => {
        await axios.all([
            axios.get('https://res.cloudinary.com/dqcfea0ze/raw/upload/v1598100214/bookApp/sample_book_1_v3jr5c.txt'),
            axios.get('https://res.cloudinary.com/dqcfea0ze/raw/upload/v1598100215/bookApp/sample_book_2_ie8eyc')
        ]).then(axios.spread((...responses) => {
            this.setState({ books: [...this.state.books, ...responses] })
        }))
    }

    handleBookPress = (data) => {
        console.log(data.title)
    }

    render() {
        return (
            <View style={{ height: '100%', width: '100%' }}>
                <SafeAreaView>
                    <FlatList
                        data={this.state.books}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <BookItem
                                data={item.data}
                                handleBookPress={this.handleBookPress}
                            />
                        )}
                        numColumns={2}
                    />
                </SafeAreaView>
            </View>
        )
    }
}
