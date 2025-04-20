import { View, Text, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '@/app/navigation';
import { useState } from 'react';
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

  console.log(term);

  const searchAPI = async () => {
    console.log('gotHere');
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
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

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={term}
        onSearchTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={searchAPI}
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
