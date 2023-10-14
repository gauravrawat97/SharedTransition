import React from 'react';
import {View, Button, Image, StyleSheet, SafeAreaView} from 'react-native';
import Animated from 'react-native-reanimated';
import {SIZE_IMAGE, transition, width} from './Home';

const DetailImage = ({
  route: {
    params: {url},
  },
}) => {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <Animated.View
          sharedTransitionTag={`container_${url}`}
          sharedTransitionStyle={transition}
          style={styles.mainHeader}>
          <Animated.Image
            sharedTransitionTag={`image_${url}`}
            sharedTransitionStyle={transition}
            resizeMode="cover"
            source={{uri: url}}
            style={StyleSheet.absoluteFillObject}
          />
        </Animated.View>
      </SafeAreaView>
    </>
  );
};
export default DetailImage;
const styles = StyleSheet.create({
  root: {flex: 1},
  mainHeader: {
    width: width,
    height: 200,
    overflow: 'hidden',
  },
});
