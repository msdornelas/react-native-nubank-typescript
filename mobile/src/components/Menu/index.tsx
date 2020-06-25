import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

MaterialIcons.loadFont();

interface Props {
  isAccountDetailsClosed: boolean;
}

const Menu: React.FC<Props> = ({isAccountDetailsClosed}) => {

  function handleSignOut() {
    Alert.alert('Aviso', 'Sua NuConta foi desconectada!');
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, !isAccountDetailsClosed && styles.containerClosed]}>
      
      <View style={styles.qrCode}>
        <QRCode value="https://www.nubank.com.br" size={60} backgroundColor="#fff" color="#8b10ae" />
      </View>

      <View style={styles.accountDetailsContainer}>

        <View style={styles.accountDetails}>
          <Text style={styles.accountDetailsKey}>Banco </Text>
          <Text style={styles.accountDetailsValue}>260 - Nu Pagamentos S.A.</Text>
        </View>

        <View style={styles.accountDetails}>
          <Text style={styles.accountDetailsKey}>Agência </Text>
          <Text style={styles.accountDetailsValue}>0001</Text>
        </View>

        <View style={styles.accountDetails}>
          <Text style={styles.accountDetailsKey}>Conta </Text>
          <Text style={styles.accountDetailsValue}>01234567-8</Text>
        </View>

      </View>

      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemGroup}>
            <MaterialIcons name="help-outline" size={20} color="#fff" />
            <Text style={styles.menuItemLabel}>Me ajuda</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemGroup}>
            <MaterialIcons name="person-outline" size={20} color="#fff" />
            <Text style={styles.menuItemLabel}>Perfil</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemGroup}>
            <MaterialIcons name="attach-money" size={20} color="#fff" />
            <Text style={styles.menuItemLabel}>Configurar conta</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemGroup}>
            <MaterialIcons name="credit-card" size={20} color="#fff" />
            <Text style={styles.menuItemLabel}>Configurar cartão</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemGroup}>
            <MaterialIcons name="store" size={20} color="#fff" />
            <Text style={styles.menuItemLabel}>Pedir conta PJ</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemGroup}>
            <MaterialIcons name="smartphone" size={20} color="#fff" />
            <Text style={styles.menuItemLabel}>Configurações do app</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.signOut} onPress={handleSignOut}>
        <Text style={styles.signOutLabel}>SAIR DA CONTA</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default Menu;
