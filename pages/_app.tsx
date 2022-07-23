import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FirebaseProvider } from "../components/providers/FirebaseProvider";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <FirebaseProvider>
        <Component {...pageProps} />
      </FirebaseProvider>
    </Provider>
  );
}

export default MyApp;

//https://dribbble.com/shots/17383791/attachments/12507660?mode=media
