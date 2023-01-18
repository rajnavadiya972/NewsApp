import { StyleSheet, Text, View,SafeAreaView  } from 'react-native';
import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

const Home = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', shadowColor: 'black', shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 } }}>
        <Text style={styles.header}>Home</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          inputStyle={{ backgroundColor: 'white' }}
          containerStyle={{ padding: 0, backgroundColor: 'white', borderWidth: 1, borderRadius: 20 }}
          inputContainerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 20, borderColor: 'grey' }}
          placeholderTextColor={'#111111'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '500',
  },
});