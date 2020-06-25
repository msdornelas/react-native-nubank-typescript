import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    marginHorizontal: 30,
    height: 400,
    alignItems: 'center',
  },
  containerClosed: {
    height: 500,
  },

  qrCode: {
    backgroundColor: '#fff',
    padding: 10,
  },

  accountDetailsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  accountDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountDetailsKey: {
    color: '#fff',
    fontSize: 14,
  },
  accountDetailsValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  menuContainer: {
    marginTop: 30,
    alignSelf: 'stretch',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.8)',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
  },
  menuItemGroup: {
    flexDirection: 'row',
  },
  menuItemLabel: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 20,
  },

  signOut: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 12,
    marginTop: 15,
  },
  signOutLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default styles;
