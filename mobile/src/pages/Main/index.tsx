import React, {useState} from 'react';
import {View, Text, Animated, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

MaterialIcons.loadFont();
FontAwesome.loadFont();

const Main = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [viewMoney, setViewMoney] = useState<boolean>(true);  
  const [isAccountDetailsClosed, setisAccountDetailsClosed] = useState<boolean>(true);
  const [cardPositionState] = useState(new Animated.Value(0));

  function HandleAccountDetailsOpenState() {
    if (isAccountDetailsClosed) {
      setisAccountDetailsClosed(false);
      Animated.timing(cardPositionState, {
        toValue: 530,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      setisAccountDetailsClosed(true);
      Animated.timing(cardPositionState, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }

  function handleViewMoneyState() {
    viewMoney ? setViewMoney(false) : setViewMoney(true)
  }

  function handleDarkMode() {
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={darkMode ? '#8b10ae' : '#000'} />

      <SafeAreaView style={[styles.safeAreaContainer, !darkMode && styles.safeAreaContainerDarkMode]}>
        
        <Header />

        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={HandleAccountDetailsOpenState}>
            <MaterialIcons name={isAccountDetailsClosed ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={[styles.container, !isAccountDetailsClosed && styles.containerClosed]}>

          <Menu isAccountDetailsClosed={isAccountDetailsClosed} />

          <Animated.View style={[styles.cardContainer, !darkMode && styles.cardContainerDarkMode, {transform: [{translateY: cardPositionState,}]},]}>

            <View style={styles.cardHeaderContainer}>
              <View style={styles.cardHeaderItem}>
                {
                  darkMode ?
                  (<MaterialIcons name="attach-money" size={24} color="#999" />)
                  :
                  (<MaterialIcons name="attach-money" size={24} color="#ddbae7" />)
                }
                <Text style={[styles.cardHeaderLabel, !darkMode && styles.cardHeaderLabelDarkMode]}>Conta</Text>
              </View>
              <View style={styles.cardHeaderItem}>
                <TouchableOpacity onPress={handleDarkMode}>
                  {
                    darkMode ? 
                    (<FontAwesome name="moon-o" size={24} color="#999" />)
                    :
                    (<FontAwesome name="sun-o" size={24} color="#ddbae7" />)
                  }
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewMoneyState}>
                  {
                    darkMode ?
                    (<MaterialIcons name={viewMoney ? 'visibility-off' : 'visibility'} size={28} color="#999" style={{paddingLeft: 15}} />)
                    :
                    (<MaterialIcons name={viewMoney ? 'visibility-off' : 'visibility'} size={28} color="#ddbae7" style={{paddingLeft: 15}} />)
                  }
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.cardContent}>
              <Text style={[styles.cardContentTitle, !darkMode && styles.cardContentTitleDarkMode]}>Saldo disponível</Text>
              {
                viewMoney ? 
                (<Text style={[styles.cardContentDescription, !darkMode && styles.cardContentDescriptionDarkMode]}>R$ 197.611,65</Text>)
                :
                (<View style={[styles.cardContentHiddenDescription, !darkMode && styles.cardContentHiddenDescriptionDarkMode]}></View>)
              }
            </View>

            <TouchableOpacity style={[styles.cardFooter, !darkMode && styles.cardFooterDarkMode]} activeOpacity={0.5}>
              <View style={styles.cardFooterItem}>
                {
                  darkMode ? 
                  (<FontAwesome name="barcode" size={24} color="#999" />)
                  :
                  (<FontAwesome name="barcode" size={24} color="#ddbae7" />)
                }
                <Text style={[styles.cardFooterLabel, !darkMode && styles.cardFooterLabelDarkMode]}>Boleto de R$ 34,99 pago ontem</Text>
              </View>
              {
                darkMode ? 
                (<MaterialIcons name="keyboard-arrow-right" size={20} color="#999" />)
                :
                (<MaterialIcons name="keyboard-arrow-right" size={20} color="#ddbae7" />)
              }
            </TouchableOpacity>

          </Animated.View>

        </View>

        <Tabs isAccountDetailsClosed={isAccountDetailsClosed} />

      </SafeAreaView>
    </>
  );
};

export default Main;
