import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

// Theme //
import { useColorScheme } from 'react-native';

// Auth //
import { AuthContext } from '../Auth-screens/AuthContextProvider';

export default function Settings() {
  const colorScheme = useColorScheme();
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.titleContainer}>
        <Text
          style={[
            styles.titleStyle,
            {
              color: colorScheme === 'dark' ? 'white' : 'black',
            },
          ]}
        >
          Settings
        </Text>
      </SafeAreaView>
      <View>
        <Button
          mode='outlined'
          style={{ width: 100, alignSelf: 'center' }}
          onPress={signOut}
        >
          {' '}
          Log out
        </Button>
      </View>
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.07,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
});
