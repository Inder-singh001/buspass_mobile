import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-paper';
import {theme} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 2,
    padding: 8,
    color: theme.colors.onPrimary,
  },
  input: {
    width: '90%',
    overflow: 'hidden',
    marginBottom: 10,
    color: theme.colors.onPrimary,
    fontSize: 12,
    backgroundColor: theme.colors.ontertiary,
  },
  placeholder: {
    color: theme.colors.placeholder,
  },
  option: {
    width: '65%',
    fontSize: 12,
    overflow: 'hidden',
    marginLeft: 8,
    backgroundColor: theme.colors.ontertiary,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
