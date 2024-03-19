import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';
interface ButtonComponentProps {}

const ButtonComponent = (props: ButtonComponentProps) => {
  const width = useSharedValue(100);
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>ButtonComponent</Text>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {},
});
