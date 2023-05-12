import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import useCachedResources from "./hooks/useCachedResources";
import { Page } from "./pages";
import { createStore } from "./redux/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const store = createStore();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Page />
        </Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
