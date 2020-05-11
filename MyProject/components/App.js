import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Game from './Game';

class App extends Component {
  constructor() {
    super();
    this.state = {gameStarted: false};
  }

  startGame() {
    this.setState({gameStarted: true});
  }
  render() {
    const {gameStarted} = this.state;
    return (
      <View style={styles.container}>
        {gameStarted ? (
          <Game />
        ) : (
          <View style={styles.subcontenedor}>
            <Text style={styles.welcome}>¡Bienvenido {'\n'}al juego!</Text>
            <Text style={styles.symbol}>X0</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.startGame()}>
              <Text style={styles.btnText}>Toca aquí para comenzar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cf6a87',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontenedor: {
    width: 300,
    height: 400,
    flexDirection: 'column',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 40,
    color: '#ffff',
    fontWeight: 'bold',
    lineHeight: 60,
  },
  btn: {
    width: 200,
    height: 80,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8a5c2',
    marginTop: 30,
    marginLeft: 45,
  },
  btnText: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  symbol: {
    paddingVertical: 20,
    textAlign: 'center',
    color: '#ffff',
    fontSize: 150,
    marginTop: 20,
  },
});

export default App;
