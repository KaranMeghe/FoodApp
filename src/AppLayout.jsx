
import { Outlet } from "react-router";
import { Footer, Header } from "./components";

function AppLayout() {
  return (
    <div className="font-lato">
      <Header />
      <main className="mx-5" >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
