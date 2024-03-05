import {Text, View, StyleSheet, Image } from 'react-native';
import Colors from '@/constants/Colors';
import products from '@/assets/data/Products';

const product = products[1]

const ProductListItem = () => {
  return (
  <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>Pizza Pepperoni</Text>
      <Text style={styles.price}>&#x20A6; 60000</Text>
      
    </View>
  )
}

export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10
  },
  image: {
    width: "100%",
    aspectRatio: 1
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold"
  }
});
