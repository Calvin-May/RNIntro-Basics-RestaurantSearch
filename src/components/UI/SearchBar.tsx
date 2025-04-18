import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type SearchBarProps = {
  searchTerm: string;
  onSearchTermChange: Function;
};
const SearchBar = ({ searchTerm, onSearchTermChange }: SearchBarProps) => {
  return (
    <View style={styles.background}>
      <MaterialCommunityIcons name='magnify' style={styles.searchIcon} />
      <TextInput
        placeholder='Search'
        value={searchTerm}
        onChangeText={(newTerm) => onSearchTermChange(newTerm)}
        style={styles.searchInput}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flexDirection: 'row',
    backgroundColor: '#DBDBDB',
    height: 50,
    borderRadius: 24,
    borderWidth: 0.1,
    elevation: 4,
    margin: 10,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginRight: 0,
    color: '#808080',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 20,
  },
});
