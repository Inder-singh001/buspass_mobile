import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-paper';

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
  },
  input: {
    width: '90%',
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    color: '#00000080',
    fontSize: 12,
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
});
