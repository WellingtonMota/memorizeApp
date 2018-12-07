import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../Settings';

const styles = StyleSheet.create({
  c_content: {
    backgroundColor: Colors.colorOrangeLight
  },
  c_message: {
    color: Colors.colorRed,
    fontSize: Fonts.globalFontSize,
    marginLeft: 20
  },
  c_icon: {
    color: Colors.colorRed
  },
  c_iconCheck: {
    color: Colors.colorGreen
  },
  c_col_10: {
    width: '10%'
  },
  c_col_80: {
    width: '80%'
  },
  c_logoMailCol: {
    alignItems: 'center',
    marginVertical: 50,
    width: '100%'
  },
  c_logoMailIcon: {
    color: Colors.colorRed,
    fontSize: Fonts.bigFontSize
  }
});

export default styles;
