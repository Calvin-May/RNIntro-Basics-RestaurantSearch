import { YelpResult } from '@/types/types';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import ResultsDetail from './UI/ResultsDetail';
// import type { RootStackParamList } from '@/app/navigation';
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type ResultsListProps = {
  title: string;
  resultsList: YelpResult[];
  // navigation: NativeStackNavigationProp<
  //   RootStackParamList,
  //   'SearchScreen',
  //   'RootStack'
  // >;
};
const ResultsList = ({ title, resultsList }: ResultsListProps) => {
  const navigation = useNavigation();

  // Wait for ResultList to populate with data rendering anything
  if (!resultsList.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={resultsList}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={({ pressed }) => {
                return !pressed
                  ? styles.pressable
                  : [styles.pressable, styles.pressablePressed];
              }}
              android_ripple={{
                color: '#50516659',
                //radius: 12,
                foreground: true,
              }}
              onPress={() => {
                navigation.navigate('ResultShowScreen', { resultID: item.id });
              }}
            >
              <ResultsDetail result={item} />
            </Pressable>
          );
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
  pressable: {
    marginHorizontal: 12,
    overflow: 'hidden',
    borderRadius: 4,
    paddingBottom: 2,
  },
  pressablePressed: {
    opacity: 0.7,
    backgroundColor: '#CACBD459',
  },
});
