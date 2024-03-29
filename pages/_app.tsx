import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import { ProductsProvider } from "../components/providers/ProductsProvider";
import { AuthProvider } from "../components/providers/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ProductsProvider>
          <Component {...pageProps} />
        </ProductsProvider>
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
