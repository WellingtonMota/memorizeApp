import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../Settings';

const styles = StyleSheet.create({
  c_content: {
    backgroundColor: Colors.colorOrangeLight
  },
  c_col_20: {
    width: '20%'
  },
  c_col_60: {
    alignItems: 'center',
    marginVertical: 150,
    width: '60%'
  },
  c_col_thumbmail: {
    height: 140,
    width: 200
  },
  c_col_title: {
    color: Colors.colorWhite,
    fontSize: Fonts.titleFontSize,
    marginBottom: 40
  }
});

export default styles;
