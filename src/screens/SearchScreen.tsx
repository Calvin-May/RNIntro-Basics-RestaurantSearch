import { View, Text, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '@/app/navigation';

const SearchScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'SearchScreen'>) => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
