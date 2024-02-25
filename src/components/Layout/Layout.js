import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <span>All </span>
        <span> One</span>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
