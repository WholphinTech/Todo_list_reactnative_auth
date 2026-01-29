import {StyleSheet} from 'react-native';

export const variantStyles = {
  primary: {
    backgroundColor: '#007bff',
    color: '#fff',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  secondary: {
    backgroundColor: '#fff',
    color: '#007bff',
    borderWidth: 1,
    borderColor: '#007bff',
  },
  danger: {
    backgroundColor: '#dc3545',
    color: '#fff',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  disabled: {
    backgroundColor: '#ccc',
    color: '#666',
    borderWidth: 0,
    borderColor: 'transparent',
  },
};
export const sizeStyles = {
  small: {paddingVertical: 4, paddingHorizontal: 8, fontSize: 12},
  medium: {paddingVertical: 8, paddingHorizontal: 16, fontSize: 14},
  large: {paddingVertical: 12, paddingHorizontal: 20, fontSize: 16},
};

export default StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginHorizontal: 4,
  },
});
