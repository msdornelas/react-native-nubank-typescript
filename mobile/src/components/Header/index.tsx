import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <>
      <View style={styles.container}>

        <View style={styles.userContainer}>
          <Image source={require('../../assets/Nubank_Logo.png')} />
          <Text style={styles.user}>Marcelo</Text>
        </View>
        
      </View>
    </>
  );
};

export default Header;
