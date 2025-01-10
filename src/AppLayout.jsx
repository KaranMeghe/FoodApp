
import { Outlet } from "react-router";
import { Footer, Header, NetworkMonitor } from "./components";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";


function AppLayout() {
  const isOnline = useOnlineStatus();

  return (
    <Provider store={appStore}>
      <div className="font-lato">
        {isOnline ? <>
          <Header />
          <main className="mx-5" >
            <Outlet />
          </main>
          <Footer />
        </> : <NetworkMonitor />}
      </div>
    </Provider>
  );
}

export default AppLayout;
