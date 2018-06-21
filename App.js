import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { addNumber } from './src/store/actions/index';

class App extends React.Component {
  onPressAdd = () => {
    console.log('test')
    this.props.onAddNumber(10)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.sum}</Text>        
        <Button
          onPress={this.onPressAdd}
          title="+10"
          color="#841584"
          accessibilityLabel="plusTen"
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

mapStateToProps = state => {
  return {
    sum: state.main.sum,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddNumber: value => dispatch(addNumber(value))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);