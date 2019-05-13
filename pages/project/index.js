/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CreditItem from "../../components/creditItem";
import Head from "../../components/head";
type Props = {};
export default class ProjectIndex extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Head title={'产品'} showReturn={false}/>
          <CreditItem></CreditItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
