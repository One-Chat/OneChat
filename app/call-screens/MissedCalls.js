import { View, StyleSheet } from 'react-native';
import CallsBox from './CallsBox';

export default function MissCalls() {
  return (
    <View showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <CallsBox />
    </View>
  );
}

//// Styles ////
const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
    padding: '3%',
  },
});
