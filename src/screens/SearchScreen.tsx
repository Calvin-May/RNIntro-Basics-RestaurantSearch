import { View, Text, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '@/app/navigation';
import { useState } from 'react';
// Imports | Components
import SearchBar from '@/components/UI/SearchBar';

const SearchScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'SearchScreen'>) => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={term}
        onSearchTermChange={(newTerm: string) => setTerm(newTerm)}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
