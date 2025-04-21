import { YelpResult } from '@/types/types';
import { View, Text, StyleSheet, Image } from 'react-native';

type ResultsDetailProps = {
  result: YelpResult;
};

const ResultsDetail = ({ result }: ResultsDetailProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 4,
    elevation: 4,
    marginBottom: 5,
  },
  name: { fontSize: 15, fontWeight: '500' },
  details: {},
});
