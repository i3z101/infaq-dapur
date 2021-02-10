import React, { Fragment } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, Platform } from 'react-native';
import Cards from '../../../reusable/Cards';
import { Button, Divider } from 'react-native-paper';
import IncreaseDecrease from '../../../reusable/IncreaseDecrease';
import { FontAwesome5 } from '@expo/vector-icons';
import Color from '../../../constants/Color';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCart, decreaseCart, removeCartItem } from '../../../store/action/cartAction';
import { addToReview } from '../../../store/action/donationReviewAction';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const completeDonation = () => {
    dispatch(addToReview(cartItems));
    dispatch(removeCartItem());
    props.navigation.navigate('donation review')
  }

  return cartItems.packagesItem.length > 0 ? <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.totalPriceStyle}>
      <Text style={styles.totalPriceText}>Total amount:</Text>
      <Text style={styles.totalPriceNumber}>{cartItems.totalAmount} RM</Text>
    </View>
    <FlatList
      data={cartItems.packagesItem}
      keyExtractor={(item) => item.packageId}
      renderItem={(itemData) => {
        return <Fragment><Cards style={styles.cartContainer}>
          <View style={styles.cartContent}>
            <Text style={styles.packageName}>{itemData.item.packageName}</Text>
            <IncreaseDecrease
              setQuantityContainer={styles.setQuantityContainer}
              colorPlus={Color.fifth}
              colorMinus={Color.sixth}
              quantityContainer={styles.quantityContainer}
              quantityStyle={styles.quantityStyle}
              quantity={itemData.item.quantity}
              btnStyle={styles.btn}
              addQuantity={() => dispatch(increaseCart(itemData.index))}
              decreaseQuantity={() => dispatch(decreaseCart(itemData.index))}
            />
          </View>
        </Cards>
          <Divider />
        </Fragment>
      }}
    />

    <Button style={styles.btnCompletStyle}
      mode={'contained'} color={Color.fifth}
      onPress={completeDonation}
    >
      {Platform.OS === 'ios' ?
        <View style={styles.btnChildrenStyle}>
          <Text style={styles.btnCompletTextStyle}>Complete donation</Text>
          <View style={{ position: 'absolute', left: '110%', top: '5%' }}>
            <FontAwesome5 name="hand-holding-heart" size={22} color={Color.secondary} />
          </View>
        </View> :
        <Text>Complete donation</Text>
      }
    </Button>
  </ScrollView> : <View style={styles.container}>
      <Text style={styles.noItem}>No item yet..</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noItem: {
    fontFamily: 'cairoBold',
    fontSize: 20
  },
  cartContainer: {
    width: '95%',
    maxWidth: '100%',
    alignSelf: 'center',
    padding: 20,
    marginVertical: 10,
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 3
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  packageName: {
    fontFamily: 'carter',
    fontSize: 17
  },
  setQuantityContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '25%',
    backgroundColor: Color.fourth,
    borderColor: Color.secondary,
    borderRadius: 5,
    padding:Platform.OS==='android'? 4: 2
  },
  quantityStyle: {
    fontFamily: 'cairoRegular',
    fontSize: 18,
    color: Color.secondary,
  },
  btn: {
    padding: 0,
    width: '0%'
  },
  totalPriceStyle: {
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  totalPriceText: {
    fontFamily: 'cairoBold',
    fontSize: 19,
  },
  totalPriceNumber: {
    fontFamily: 'cairoBold',
    fontSize: 22,
    fontStyle: 'italic',
    color: '#623bff',
  },
  btnCompleteContainer: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: '7%',
  },
  btnCompletStyle: {
    width: '85%',
    alignSelf: 'center',
    padding: 5,
    marginVertical: '5%'
  },
  btnCompletTextStyle: {
    fontFamily: 'cairoBold',
    fontSize: 17,
    color: Color.secondary
  },
  btnChildrenStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

module.exports = Cart;

