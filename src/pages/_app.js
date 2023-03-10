import Layout from '../components/Layout/Layout';
import '../styles/globals.css'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App
