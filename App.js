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
import codePush from 'react-native-code-push';
type Props = {};
export default class App extends Component<Props> {
    componentDidMount(){
        codePush.sync({
            updateDialog: {
                appendReleaseDescription: true,
                descriptionPrefix:'\n\n更新内容：\n',
                title:'更新',
                mandatoryUpdateMessage:'',
                mandatoryContinueButtonLabel:'更新',
            },
            mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
            //deploymentKey: '',
        });
        //codePush.sync();
    }
  render() {
    return (
      <Pages/>
    );
  }
}

const styles = StyleSheet.create({

});
