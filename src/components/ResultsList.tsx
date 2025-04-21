import { View, Text, StyleSheet } from 'react-native';
type ResultsListProps = {
  title: string;
};
const ResultsList = ({ title }: ResultsListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
