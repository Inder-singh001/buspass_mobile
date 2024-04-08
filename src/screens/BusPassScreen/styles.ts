import {StyleSheet} from 'react-native';
import {theme} from '../../theme/colors';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    justifyContent: 'flex-start',
    width: '85%',
    height: '43%',
    top: 60,
    position: 'absolute',
  },
  receipt: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingLeft: 12,
    // position: 'absolute',
  },
  receiptText: {
    top: 8,
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  studentData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
    display: 'flex',
  },
  studentName: {
    paddingVertical: 12,
    fontSize: 32,
    width: '60%',
  },
  buspassImage: {
    width: '40%',
    alignItems: 'center',
    height: 'auto',
    borderRadius: 5,
    justifyContent: 'center',
  },
  places: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 12,

    display: 'flex',
  },
  distance: {
    fontSize: 20,
  },
  arrow: {
    bottom: 8,
  },
  service: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 24,
    bottom: 8,
  },
  serviceHead: {
    fontSize: 36,
    fontWeight: '700',
  },
  qrCodeImage: {
    width: '58%',
    height: '30%',
    position: 'absolute',
    alignItems: 'center',
    bottom: 48,
    paddingTop:6,
    backgroundColor: theme.colors.background
  },

  button: {
    marginTop: 18,
    width: 310,
    height: 240,
    backgroundColor: theme.colors.brightyellow,
  },
  img: {
    width: '100%',
    height: 240,
  },
});
