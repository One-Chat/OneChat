import { ScrollView, Text, StyleSheet } from 'react-native';
import CallsBox from './CallsBox';

export default function MissCalls() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}
    >
      <CallsBox />
    </ScrollView>
  );
}

//// Styles ////
const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
    padding: '5%',
  },
});
