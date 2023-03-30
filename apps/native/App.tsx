// @ts-expect-error mylib is okay
import mylib from 'mylib';
import {SafeAreaView, Text, View} from 'react-native';

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>{mylib}</Text>
      </View>
    </SafeAreaView>
  );
}
