import React from 'react';
import { Button } from 'react-native';

type Props = {
  onPress: () => void;
};

export default function AddButton({ onPress }: Props) {
  return <Button title="Add Item" onPress={onPress} />;
}
