import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   marginTop:150,
    width: 800,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    position:'relative',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',

    fontSize: 33,
    textAlign: 'center',
    margin: 15,
  },
});
export default Header;
