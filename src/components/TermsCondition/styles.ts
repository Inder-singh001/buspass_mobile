import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#2f3033',
    borderRadius: 8,
    padding: 14,
    width: '90%',
    height: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headText: {
    padding: 12,
    color: '#e1e3e4',

  },
  contentView: {
    backgroundColor: '#2f3033',
    padding: 4,
    color: '#e1e3e4',
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 6,
    padding: 2,
  },
  buttonText: {
    color: '#00adf1',
  },
  textNote: {
    width:'90%',
    paddingTop: 6,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
    marginBottom: -4,
    color: '#e1e3e4',
  },
});
