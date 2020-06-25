import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

MaterialIcons.loadFont();
FontAwesome.loadFont();

interface Props {
  isAccountDetailsClosed: boolean;
}

const Tabs: React.FC<Props> = ({isAccountDetailsClosed}) => {
  return (
    <View style={[styles.container, !isAccountDetailsClosed && styles.containerClosed]}>
      <ScrollView contentContainerStyle={styles.tabContainer} horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <MaterialIcons name="person-add" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Indicar amigos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <MaterialIcons name="phone-iphone" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Recarga de celular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <FontAwesome name="money" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Cobrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <MaterialIcons name="arrow-downward" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Depositar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <MaterialIcons name="arrow-upward" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <MaterialIcons name="help-outline" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Me ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <FontAwesome name="barcode" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Pagar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <MaterialIcons name="lock-open" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Bloquear cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} activeOpacity={0.5}>
          <FontAwesome name="credit-card" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Cartão virtual</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.tabItemSortShortcuts]} activeOpacity={0.5}>
          <FontAwesome name="sort-amount-desc" size={24} color="#fff" />
          <Text style={styles.tabItemText}>Organizar atalhos</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Tabs;
