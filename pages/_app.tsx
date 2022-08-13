import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import { ProductsProvider } from "../components/providers/ProductsProvider";
import { AuthProvider } from "../components/providers/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ProductsProvider>
          <Component {...pageProps} />
        </ProductsProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;

//https://dribbble.com/shots/17383791/attachments/12507660?mode=media
