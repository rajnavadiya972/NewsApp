import { color } from '@mui/system';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';

export const Search = () => {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };
    console.log(search);
    return (
        <View>
            <Text>Search bar</Text>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
                inputStyle={{ backgroundColor: 'white' }}
                containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5 }}
                inputContainerStyle={{ backgroundColor: 'white' }}
                placeholderTextColor={'#111111'}
            />
        </View>
    )
}
export default Search;