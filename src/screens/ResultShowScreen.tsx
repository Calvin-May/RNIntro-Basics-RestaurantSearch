import { View, Text, StyleSheet } from 'react-native';
import type { RootStackScreenProps } from '@/app/navigation';
const ResultShowScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'ResultShowScreen'>) => {
  const resultID = route.params.resultID;

  return (
    <View style={styles.container}>
      <Text>ResultShowScreen: {resultID}</Text>
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
