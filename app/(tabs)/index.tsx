import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import AddButton from '../components/AddButton';
import ListItem from '../components/ListItem';

// Define the type for our list items
type Item = {
  title: string;
  price: number;
  people: number;
};

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([
    { title: 'Netflix', price: 19.99, people: 4 },
    { title: 'Spotify Family', price: 14.99, people: 6 }
  ]);

  const addItem = () => {
    const newItem = {
      title: `Subscription ${items.length + 1}`,
      price: 9.99,
      people: 2
    };
    setItems([...items, newItem]);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'My Shared Subscriptions' }} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({ item }) => <ListItem item={item} />}
          ListEmptyComponent={<ListItem empty />}
        />
        <View style={styles.buttonContainer}>
          <AddButton onPress={addItem} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  buttonContainer: { paddingVertical: 10 },
});
