import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RootStackScreenProps } from '@/app/navigation';
import { useState } from 'react';

// Import | APIs
import yelp from '@/api/yelp';
// Imports | Components
import SearchBar from '@/components/UI/SearchBar';
import { ResultsList } from '@/components/ResultsList';
// Imports | Custom Hooks
import useResults from '@/hooks/useResults';

const SearchScreen = ({}: RootStackScreenProps<'SearchScreen'>) => {
  const [term, setTerm] = useState('');
  const [searchAPI, APIResults, errorMessage] = useResults();

  const filterResultsByPrice = (price: string) => {
    // price === '$' || '$$' || '$$$'

    return APIResults.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={term}
        onSearchTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      />
      <ScrollView>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ResultsList
          title='Bites on a Budget'
          resultsList={filterResultsByPrice('$')}
          //navigation={navigation}
        />
        <ResultsList
          title='Conventional Cuisine'
          resultsList={filterResultsByPrice('$$')}
          //navigation={navigation}
        />
        <ResultsList
          title='Extravagant Eateries'
          resultsList={filterResultsByPrice('$$$')}
          //navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
