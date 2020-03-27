/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import { addFood, deleteFood } from './src/redux/actions/food_actions'
import { connect } from 'react-redux'

class App extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      food: ''
    }
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{ alignItems: 'stretch' }}>
          <TextInput
            value={this.state.food}
            onChangeText={(text) => {
              this.setState({
                food: text
              })
            }} />
          <Button title={"Add Food"}
            onPress={() => {

              this.props.addFood(this.state.food)
            }} />
          <FlatList
            data={this.props.foodList}
            renderItem={({ item }) => (
              <Text onPress={() => {
                this.props.deleteFood(item.key)
              }}>{item.food}</Text>
            )} />
        </View>
        {/* <View style={{ alignItems: 'stretch' }}>
          <TextInput
            value={this.state.food}
            onChangeText={(text) => {
              this.setState({
                food: text
              })
            }} />
          <Button title={"Add Food"}
            onPress={() => {
              
              this.props.addFood(this.state.food)
            }} />
          <FlatList
            data={this.props.foodList}
            renderItem={({ item, index }) => (
             <View/>
            )}
            keyExtractor={(item, index) => item + index} />)
        </View> */}
      </SafeAreaView>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    foodList: state.foodReducer.foodList
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    addFood: (food) => dispatch(addFood(food)),
    deleteFood: (key) => dispatch(deleteFood(key))
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
