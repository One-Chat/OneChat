import { ScrollView, StyleSheet, View } from 'react-native';
import CallsBox from './CallsBox';

export default function AllCalls() {
  return (
    <View showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <View>
        <CallsBox />
      </View>
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
