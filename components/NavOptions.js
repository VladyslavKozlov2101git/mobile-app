import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];
const NavOptions = () => {
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item?.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item?.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
