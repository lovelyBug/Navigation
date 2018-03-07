/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Pages from './src/Pages';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Pages/>
    );
  }
}

const styles = StyleSheet.create({

});
