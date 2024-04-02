import {StyleSheet} from 'react-native';
import {theme} from '../../theme/colors';
import {Text} from 'react-native-paper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.colors.primary,
  },
  input: {
    width: '90%',
    overflow: 'hidden',
    marginBottom: 10,
    fontSize: 12,
    color: theme.colors.primary,
    backgroundColor: theme.colors.ontertiary,
  },
  text: {
    color: theme.colors.placeholder,
  },
  linktext: {
    color: theme.colors.secondary,
  },
  register: {
    padding: 8,
    color: theme.colors.primary,
  },
});
