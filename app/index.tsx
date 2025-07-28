import { useAppStore } from '@/store/appStore';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Index() {
  const { appIsReady } = useAppStore();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>PULSE</Text>
        <Text style={styles.subtitle}>React Native Starter</Text>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.label}>App State:</Text>
        <Text style={styles.value}>{appIsReady ? 'Ready' : 'Loading'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Lato',
    marginTop: 4,
    color: theme.colors.text,
  },
  statusContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: 'black',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    fontFamily: 'Lato',
    color: 'black',
  },
}));
