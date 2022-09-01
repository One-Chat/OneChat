import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Controls from './Controls';

export default function Calls({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Text style={styles.titleStyle}>Calls</Text>
      </SafeAreaView>
      {/* <Controls navigation={navigation} /> */}
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleStyle: {
    fontSize: '40%',
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
});
