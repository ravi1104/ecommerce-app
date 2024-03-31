export default function Layout({children}) {
  return (
    <div>
        <nav>
            simple nav
        </nav>
        <main>
            {children}
        </main>
    </div>
  );
}
