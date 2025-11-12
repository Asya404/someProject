const { View, Text, StyleSheet } = ReactNativeWeb;

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});

function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ekran Home</Text>
        </View>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);