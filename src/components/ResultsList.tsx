import { YelpResult } from '@/types/types';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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
          return <Text>{item.name} </Text>;
        }}
        horizontal
      />
    </View>
  );
};

export { ResultsList };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#242424',
    fontWeight: '600',
  },
});
