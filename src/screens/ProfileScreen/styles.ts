import {StyleSheet} from 'react-native';
import {theme} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 2,
    padding: 8,
  },
  input: {
    width: '90%',
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    color: theme.colors.placeholder ,
    fontSize: 12,
    backgroundColor: theme.colors.ontertiary,
  },
  option: {
    width: '65%',
    fontSize: 12,
    overflow: 'hidden',
    marginLeft: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    borderRadius: 5,
    padding: 2,
    width: '40%',
    backgroundColor: theme.colors.secondary,
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
