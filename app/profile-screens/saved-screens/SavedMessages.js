import { Text, ScrollView, StyleSheet } from 'react-native';

export default function SavedMessages() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text>SavedMessages</Text>
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
