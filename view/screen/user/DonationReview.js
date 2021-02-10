import React, { Fragment } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Button, Divider, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../../../constants/Color';
import Cards from '../../../reusable/Cards';
import { closeDonation } from '../../../store/action/donationReviewAction';

const DonateReview = (props) => {
  const allCartItem = useSelector(state => state.donationReview.allItems);
  const [snackBarVisible, setSnackbarVisible] = useState(false);
  const dispatch = useDispatch()
  const showSnackbar = () => {
    setSnackbarVisible(!snackBarVisible);
  }

  const closeDonationReview = () => {
    dispatch(closeDonation());
    props.navigation.navigate('home');
  }

  return allCartItem.packagesItem.length > 0 ? <View style={styles.container}>
    <Cards style={styles.billContainer}>
      <Text style={styles.billText}>Bill</Text>
      <View style={styles.billDashed} />
      <View style={{ ...styles.itemContainer, justifyContent: 'space-between', padding: 6 }}>
        <Text style={{ ...styles.itemText, marginLeft: 5, fontWeight: '400' }}>Package</Text>
        <Text style={{ ...styles.itemText, fontWeight: '400' }}>Price</Text>
        <Text style={{ ...styles.itemText, fontWeight: '400' }}>Qty</Text>
      </View>
      <FlatList
        data={allCartItem.packagesItem}
        keyExtractor={(item) => item.packageId}
        renderItem={(itemData) => {
          return <Fragment>
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{itemData.item.packageName}</Text>
              <Text style={styles.itemText}>{itemData.item.packagePrice}</Text>
              <Text style={styles.itemText}>X</Text>
              <Text style={styles.itemText}>{itemData.item.quantity}</Text>
            </View>
            <Divider />
          </Fragment>
        }}
      />
      <View style={styles.billDashed} />
      <View style={{ ...styles.itemContainer, marginBottom: '5%' }}>
        <Text style={styles.itemText}>Total amount</Text>
        <Text style={styles.itemText}>{allCartItem.totalAmount} RM</Text>
      </View>

    </Cards>
    <Button mode={'contained'} children={`${snackBarVisible ? 'close snack bar' : 'Donate now(:'}`} style={styles.donateBtn}
      onPress={() => `${snackBarVisible ? closeDonationReview() : showSnackbar()}`} color={Color.fifth} />
    <Snackbar
      visible={snackBarVisible}
      style={{
        backgroundColor: Color.fourth
      }}
      duration={360000}
    >
      <Text style={{ color: Color.secondary, fontSize: 16, textAlign: 'center' }}>Thank you for your support</Text>
    </Snackbar>
  </View> : <View style={styles.containerText}>
      <Text style={styles.noItemsText}>No items yet...</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  billContainer: {
    alignSelf: 'center',
    marginVertical: '25%',
    width: '58%',
    height: Dimensions.get('screen').width / 1.2,
    backgroundColor: Color.secondary,
    borderRadius: 7,
    shadowRadius: 7,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    elevation: 3
  },
  billDashed: {
    width: '100%',
    borderWidth: 0.6,
    borderStyle: 'dashed'
  },
  billText: {
    textAlign: 'center',
    fontSize: 21,
    fontFamily: 'cairoBold',
  },
  donateBtn: {
    padding: 10,
    width: '75%',
    alignSelf: 'center',
    marginTop: '-15%'
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noItemsText: {
    fontFamily: 'cairoBold',
    fontSize: 20
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '7%'
  },
  itemText: {
    fontSize: 19,
    fontWeight: '200',
    marginBottom: 5
  }
});

export default DonateReview

