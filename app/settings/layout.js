import Navbar1 from "../Conponents/Navbar1";

export default function Layout({children}) {
  return (
    <div>
        <Navbar1/>
        <main>
            {children}
        </main>
    </div>
  );
}
