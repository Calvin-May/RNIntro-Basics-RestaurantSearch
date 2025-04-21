import { View, Text, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '@/app/navigation';
import { useState, useEffect } from 'react';

// Import | APIs
import yelp from '@/api/yelp';
// Imports | Components
import SearchBar from '@/components/UI/SearchBar';
// Imports | Custom Hooks
import useResults from '@/hooks/useResults';

const SearchScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'SearchScreen'>) => {
  const [term, setTerm] = useState('');
  const [searchAPI, APIResults, errorMessage] = useResults();

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={term}
        onSearchTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {APIResults.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
