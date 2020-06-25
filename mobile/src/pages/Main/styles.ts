import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#8b10ae',
  },
  safeAreaContainerDarkMode: {
    backgroundColor: '#000',
  },

  arrowContainer: {
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingBottom: 20,
  },

  container: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },
  containerClosed: {
    maxHeight: 500,
  },

  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginVertical: 0,
    marginHorizontal: 20,
    height: 400,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  cardContainerDarkMode: {
    backgroundColor: '#8b10ae',
  },

  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  cardHeaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderLabel: {
    fontSize: 16,
    color: '#999',
  },
  cardHeaderLabelDarkMode: {
    color: '#ddbae7',
  },

  cardContent: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 30,
  },
  cardContentTitle: {
    fontSize: 14,
    color: '#999',
  },
  cardContentTitleDarkMode: {
    color: '#ddbae7',
  },
  cardContentDescription: {
    fontSize: 32,
    marginTop: 3,
    color: '#333',
  },
  cardContentDescriptionDarkMode: {
    color: '#fff',
  },
  cardContentHiddenDescription: {
    marginTop: 3,
    backgroundColor: '#eee',
    width: '75%',
    height: 40,
  },
  cardContentHiddenDescriptionDarkMode: {
    backgroundColor: '#630b7c',
  },

  cardFooter: {
    padding: 30,
    backgroundColor: '#eee',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooterDarkMode: {
    backgroundColor: '#630b7c',
  },
  cardFooterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterLabel: {
    fontSize: 14,
    color: '#333',
    paddingLeft: 10,
  },
  cardFooterLabelDarkMode: {
    color: '#fff',
  },
});

export default styles;
