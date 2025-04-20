import { View, Text, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '@/app/navigation';
import { useState, useEffect } from 'react';
// Imports | Components
import SearchBar from '@/components/UI/SearchBar';

// Import | APIs
import yelp from '@/api/yelp';

const SearchScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'SearchScreen'>) => {
  const [term, setTerm] = useState('');
  const [APIResults, setAPIResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchAPI = async (searchTerm: string = 'Food') => {
    console.log('gotHere');
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          locale: 'en_CA',
          location: 'Ajax Ontario',
          sort_by: 'best_match',
          limit: '50',
        },
      });
      setAPIResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Oops. Something went wrong.');
    }
  };

  useEffect(() => {
    searchAPI();
  }, []);
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
