import {StyleSheet} from 'react-native';
import {theme} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 14,
    width: '80%',
    height: '70%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  section: {
    borderWidth: 2,
    borderColor: theme.colors.onPrimary,
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    height: '40%',
    justifyContent: 'flex-end',
    padding: 12,
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pdf: {
    width: '70%',
  },
  button: {
    borderRadius: 6,
    marginTop: 8,
    width: '90%',
    backgroundColor: theme.colors.secondary,
  },
  buttonSubmit: {
    borderRadius: 6,
    padding: 2,
    width: '60%',

    backgroundColor: theme.colors.secondary,
  },
  importButton: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    marginBottom: 12,
  },
  text: {
    color: theme.colors.ontertiary,
  },
});
