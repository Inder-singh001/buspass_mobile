import {StyleSheet} from 'react-native';
import {theme} from '../../theme/colors';
import { Badge } from 'react-native-paper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: theme.colors.background,
  },
  input: {
    paddingLeft: 8,
    color: theme.colors.onPrimary,
  },
  button: {
    marginTop: 18,
    width: 310,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.brightyellow,
  },
  content: {
    marginTop: 28,
    flexWrap: 'wrap',
    fontSize: 16,
    textAlign: 'center',
    height: 60,
    width: 260,
    padding: 10,
    fontWeight: '700',
    color: theme.colors.white,
  },
  card: {
    marginBottom: 8,
    paddingTop: 8,
    borderRadius: 5,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 12,
    right: 12,
    bottom: 12,
    backgroundColor: theme.colors.brightyellow,
  },
  badge: {
    position: 'absolute',
    margin: 8,
    right: 12,
    bottom: 60,
    zIndex:1,
    backgroundColor: theme.colors.red,
    color:theme.colors.ontertiary
  },
});
