import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ListItemData = {
  title: string;
  price: number;
  people: number;
};

type Props = {
  item?: ListItemData;
  empty?: boolean;
};

export default function ListItem({ item, empty }: Props) {
  if (empty) {
    return <Text style={styles.empty}>No items yet</Text>;
  }

  if (!item) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Text style={styles.people}>{item.people} {item.people === 1 ? 'person' : 'people'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc' 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 6 
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  price: { 
    fontSize: 16,
    color: '#2a9d8f',
    fontWeight: '500'
  },
  people: { 
    fontSize: 16,
    color: '#555' 
  },
  empty: { 
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 16, 
    color: '#888' 
  },
});
