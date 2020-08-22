import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

const book1 = 'https://res.cloudinary.com/dqcfea0ze/raw/upload/v1598100214/bookApp/sample_book_1_v3jr5c.txt'
const book2 = 'https://res.cloudinary.com/dqcfea0ze/raw/upload/v1598100215/bookApp/sample_book_2_ie8eyc'

export default class App extends Component {

  async componentDidMount() {

    axios.all([
      axios.get(book1),
      axios.get(book2)
    ]).then(axios.spread((obj1, obj2) => {
      console.log(obj1.status)
      console.log(obj2.status)
    }))

  }

  render() {
    return (
      <View>
        <Text>"Hello World"</Text>
      </View>
    )
  }
}
