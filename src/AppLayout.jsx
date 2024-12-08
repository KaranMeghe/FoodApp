
import { Outlet } from "react-router";
import { Footer, Header } from "./components";

function AppLayout() {
  return (
    <div className="font-lato">
      <Header />
      <main className='h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
