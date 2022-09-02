import { ScrollView, Text, StyleSheet } from 'react-native';

export default function MissCalls() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text>SavedLinks</Text>
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
