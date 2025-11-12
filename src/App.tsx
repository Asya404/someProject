function App() {
    const { View, Text, StyleSheet } = ReactNativeWeb;

    const styles = StyleSheet.create({
        container: { padding: 20, alignItems: 'center', justifyContent: 'center' },
        title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
        link: { color: 'blue', marginTop: 10, textDecorationLine: 'underline', cursor: 'pointer' }
    });

    function Home() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ekran Home</Text>
                <Text style={styles.link} onClick={() => (location.hash = '#/about')}>Idź do About</Text>
            </View>
        );
    }

    function About() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ekran About</Text>
                <Text style={styles.link} onClick={() => (location.hash = '#/')}>Wróć</Text>
            </View>
        );
    }

    function App() {
        const [route, setRoute] = React.useState(location.hash || '#/');

        React.useEffect(() => {
            const onHashChange = () => setRoute(location.hash || '#/');
            window.addEventListener('hashchange', onHashChange);
            return () => window.removeEventListener('hashchange', onHashChange);
        }, []);

        return route === '#/about' ? <About /> : <Home />;
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
}