import { View, Text, StyleSheet } from 'react-native';
import { SearchScreenProps } from '@/app/navigation';

const SearchScreen = ({ route, navigation }: SearchScreenProps) => {
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
