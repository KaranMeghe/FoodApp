
import { Outlet } from "react-router";
import { Footer, Header, NetworkMonitor } from "./components";
import useOnlineStatus from "./hooks/useOnlineStatus";


function AppLayout() {
  const isOnline = useOnlineStatus();

  return (
    <div className="font-lato">
      {isOnline ? <>
        <Header />
        <main className="mx-5" >
          <Outlet />
        </main>
        <Footer />
      </> : <NetworkMonitor />}
    </div>
  );
}

export default AppLayout;
