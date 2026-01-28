import * as LocalAuthentication from 'expo-local-authentication';

/**
 * Checks if device supports biometric authentication
 */
export const isBiometricAvailable = async (): Promise<boolean> => {
  const compatible = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  return compatible && enrolled;
};

/**
 * Prompt biometric / device authentication
 */
export const authenticateUser = async (): Promise<boolean> => {
  try {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate to proceed',
      fallbackLabel: 'Use device passcode',
      cancelLabel: 'Cancel',
    });
    return result.success;
  } catch (error) {
    console.log('Auth error:', error);
    return false;
  }
};
