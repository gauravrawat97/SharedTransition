import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Animated, {
  Easing,
  SharedTransition,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
export const {width} = Dimensions.get('window');

export const SIZE_IMAGE = width / 3;

export const transition = SharedTransition.custom(values => {
  'worklet';
  return {
    width: withSpring(values.targetWidth, {
      easing: Easing.quad,
    }),
    height: withSpring(values.targetHeight, {
      easing: Easing.quad,
    }),
    originX: withSpring(values.targetOriginX, {
      easing: Easing.quad,
    }),
    originY: withSpring(values.targetOriginY, {
      easing: Easing.quad,
    }),
  };
});
const dataImages = [
  'https://fastly.picsum.photos/id/756/300/300.jpg?hmac=ihyfC35Qzh798wqV3x_k5A3jEaY9lRiC4w1azntXksM',
  'https://fastly.picsum.photos/id/71/300/300.jpg?hmac=lavbXU_aeHIi1agvKBKJYbgbtDFTCCdGDuzngtJVQjE',
  'https://fastly.picsum.photos/id/1012/300/300.jpg?hmac=FpdcKpoTxl0CZdLj7RjrTjISpiu8TtsesR9f4Fm2yOk',
  'https://fastly.picsum.photos/id/794/300/300.jpg?hmac=EOGWbvHbcjble_4y30-aBz6-AcjjWyNAfFlbfmS1r9U',
  'https://fastly.picsum.photos/id/634/300/300.jpg?hmac=Xydl14x40_5ZjRDqaIAqxyQcuSub_xDcabmUtuE-eD8',
  'https://fastly.picsum.photos/id/862/300/300.jpg?hmac=omllSASwYQXWPO584bLQUz6GetRL0GRe-2QctRXVnJA',
  'https://fastly.picsum.photos/id/3/300/300.jpg?hmac=RT2JK6MzdIgNIWoIj61uPcz8aOSOi3lu2vhnwOxs7lY',
  'https://fastly.picsum.photos/id/639/300/300.jpg?hmac=dQz9oW6E7gTcgpjQvsXItRygy6Z5kL2mc5sqN8bTeRw',
  'https://fastly.picsum.photos/id/840/300/300.jpg?hmac=jYWhgnilJlqSvqrNyakWLPa67a5HJcAVGKo5vbXfJWc',
  'https://fastly.picsum.photos/id/994/300/300.jpg?hmac=GDm1Mpq1ylmjwx5Dv9u-l1nNEAKFDBQyanBzp7Nl4yg',
  'https://fastly.picsum.photos/id/242/300/300.jpg?hmac=o4XyRlR53cSyXOhNnSoYw3pNc6AiUawAVed124gdQZs',
  'https://fastly.picsum.photos/id/857/300/300.jpg?hmac=_2o0QaHplHuWOr4ETeEP5_3Wo6lgNhoxZgeb0yjFckc',
  'https://fastly.picsum.photos/id/217/300/300.jpg?hmac=BsPwAcRl68EZm3jQkeJOcTySx7bzPELlYkwkkl-itpc',
  'https://fastly.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0',
  'https://fastly.picsum.photos/id/858/300/300.jpg?hmac=_ejZ2a4fSroS4BO_gXXIxq7hyd0RIHSP290jgbqMO2c',
];

const GalleryItem = ({url}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailScreen', {url});
      }}>
      <Animated.View
        sharedTransitionTag={`container_${url}`}
        sharedTransitionStyle={transition}
        style={styles.image}>
        <Animated.Image
          sharedTransitionTag={`image_${url}`}
          sharedTransitionStyle={transition}
          resizeMode="cover"
          source={{uri: url}}
          style={StyleSheet.absoluteFillObject}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const Home = () => {
  // func
  const renderImage = ({item}) => {
    return <GalleryItem url={item} />;
  };
  const keyExtractor = (item: string) => {
    return item;
  };

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        numColumns={3}
        renderItem={renderImage}
        keyExtractor={keyExtractor}
        data={dataImages}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZE_IMAGE,
    height: SIZE_IMAGE,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
  },
  root: {flex: 1},
});
export default Home;
