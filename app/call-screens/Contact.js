import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

// Theme //
import { useColorScheme } from 'react-native';

// db //
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase';

export default function Contact({ navigation }) {
  const colorScheme = useColorScheme();
  const [contactList, setContactList] = useState([]);

  const currentUser = auth.currentUser;

  // Fetch users from db //
  useEffect(() => {
    const fetchContact = async () => {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('Email', '!=', currentUser.email));
      const querySnapshot = await getDocs(q);
      setContactList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchContact();
  }, []);

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
          Contact
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MainCallsView');
          }}
        >
          <Icons
            name='close'
            size={25}
            style={{ right: 20 }}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <FlatList
        data={contactList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OutgoingCalls', {
                userName: item.displayName,
                userImg: {
                  uri: item.photoURL,
                },
                userId: item.uid,
              });
            }}
          >
            <View style={styles.contactContainer}>
              <View style={styles.userContainer}>
                <Image
                  source={{ uri: item.photoURL }}
                  style={{ height: 50, width: 50, borderRadius: 30 }}
                />
                <Text style={styles.name}>{item.displayName}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  contactContainer: {
    alignItems: 'flex-start',
    marginHorizontal: '10%',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  name: {
    padding: 15,
  },
});
