import { View, Text, StyleSheet } from 'react-native';
import type { RootStackScreenProps } from '@/app/navigation';
const ResultShowScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'ResultShowScreen'>) => {
  return (
    <View style={styles.container}>
      <Text>ResultShowScreen</Text>
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
