/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import CreditItem from "../../components/creditItem";
import Head from "../../components/head";

type Props = {};
export default class CreditIndex extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Head title={'用信'} showReturn={false}/>
          <ScrollView>
              <CreditItem></CreditItem>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
