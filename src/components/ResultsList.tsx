import { YelpResult } from '@/types/types';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './UI/ResultsDetail';
type ResultsListProps = {
  title: string;
  resultsList: YelpResult[];
};
const ResultsList = ({ title, resultsList }: ResultsListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={resultsList}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export { ResultsList };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#242424',
    fontWeight: '600',
    marginHorizontal: 12,
    marginBottom: 5,
  },
});
