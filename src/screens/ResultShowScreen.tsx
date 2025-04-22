import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';
import type { RootStackScreenProps } from '@/app/navigation';
import yelp from '@/api/yelp';
import { YelpResult } from '@/types/types';

const ResultShowScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'ResultShowScreen'>) => {
  const resultID = route.params.resultID;
  const [result, setResult] = useState<YelpResult | null>(null);

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    console.log(response.data);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(resultID);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 300,
    margin: 12,
  },
});
