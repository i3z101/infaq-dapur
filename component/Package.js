import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Alert, Platform } from 'react-native';
import { Button, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Color from '../constants/Color';
import IncreaseDecrease from '../reusable/IncreaseDecrease'
import { addToCarts } from '../store/action/cartAction'

const Package = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [item, setItem] = useState({
    packageId: props.route.params.packageId,
    packageName: props.route.params.packageName,
    quantity: 0,
    packagePrice: props.route.params.price
  })


  const addQuantity = () => {
    setQuantity(prevState => prevState + 1);
  }

  const decreaseQuantity = () => {
    setQuantity(prevState => prevState - 1)
    if (quantity <= 0) {
      setQuantity(0);
    }
  }

  const addToCart = () => {
    item.quantity = item.quantity + quantity;
    let totalAmount = item.packagePrice * quantity;
    dispatch(addToCarts(item, totalAmount));
  }




  return <View style={{ flex: 1 }}>
    <Image source={{ uri: props.route.params.imageUrl }} style={styles.packageImage} />
    <View style={styles.divider}></View>
    <ScrollView
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.namePriceContainer}>
        <Text style={styles.packageName}>{props.route.params.packageName}</Text>
        <Text style={styles.price}>{props.route.params.price}RM</Text>
      </View>
      <Paragraph style={styles.paragraphStyle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries,
        but also the leap into electronic typesetting,
        remaining essentially unchanged.
              </Paragraph>

      <IncreaseDecrease
        setQuantityContainer={styles.setQuantityContainer}
        colorPlus={Color.fifth}
        colorMinus={Color.sixth}
        addQuantity={() => addQuantity()}
        decreaseQuantity={() => decreaseQuantity()}
        btnStyle={styles.btn}
        quantityContainer={styles.quantityContainer}
        quantityStyle={styles.quantity}
        quantity={quantity}
      />

    </ScrollView>

    <View style={styles.addToCartContainer}>
      <Button mode={'contained'} color={Color.fifth} style={styles.btnAddToCart}
        onPress={addToCart} disabled={quantity <= 0 ? true : false}>
        Add to cart
            </Button>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  packageImage: {
    height: Dimensions.get('screen').width / 1.4,
    marginBottom: 20
  },
  divider: {
    borderBottomWidth: 0.4
  },
  namePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  packageName: {
    fontFamily: 'carter',
    fontSize: 25,
    padding: 10,
    color: Color.fourth,
    marginBottom: 0
  },
  price: {
    padding: 10,
    fontFamily: 'coiny',
    fontSize: 23,
    color: Color.fourth
  },
  paragraphStyle: {
    padding: 10,
    marginTop: 0,
    fontFamily: 'cairoSemi',
    fontSize: 16,
  },
  setQuantityContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '10%'
  },
  btn: {
    padding: 5
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '20%',
    backgroundColor: Color.fourth,
    borderColor: Color.secondary,
    borderRadius: 10,
    padding:Platform.OS==='android'? 6: 4
  },
  quantity: {
    fontFamily: 'cairoRegular',
    fontSize: 22,
    color: Color.secondary
  },
  addToCartContainer: {
    marginTop: 0,
  },
  btnAddToCart: {
    padding: 10
  }
});

module.exports = Package;

