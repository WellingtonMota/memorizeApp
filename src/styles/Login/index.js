import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../Settings';

const styles = StyleSheet.create({
  c_content: {
    backgroundColor: Colors.colorOrangeLight
  },
  c_col_10: {
    width: '10%'
  },
  c_col_20: {
    width: '20%'
  },
  c_col_80: {
    width: '80%'
  },
  c_col_100: {
    alignItems: 'center',
    marginVertical: 50,
    width: '100%'
  },
  c_logoMailCol: {
    color: Colors.colorRed,
    fontSize: Fonts.bigFontSize
  },
  c_iconForm: {
    color: Colors.colorRed
  },
  c_messageError: {
    color: Colors.colorRed,
    fontSize: Fonts.globalFontSize
  },
  c_colLegend: {
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },
  c_textLegend: {
    color: Colors.colorGray,
    fontSize: Fonts.globalFontSize
  },
  c_iconCircleGoogle: {
    alignSelf: 'center',
    color: Colors.colorRedGogle,
    fontSize: 50
  },
  c_iconCircleFacebook: {
    alignSelf: 'center',
    color: Colors.colorBlueFacebook,
    fontSize: 50
  },
  c_iconCircleMail: {
    alignSelf: 'center',
    color: Colors.colorGreen,
    fontSize: 50
  }
});

export default styles;
