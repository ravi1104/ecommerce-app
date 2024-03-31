import Navbar1 from "./Conponents/Navbar1";
export default function Home() {
  return (
    <main >
      <Navbar1 />
      <h1 className="text-3xl font-bold mb-4">Welcome to My Project</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a brief description of my project.
      </p>
      <p className="text-lg text-gray-700">
        Feel free to explore and enjoy your time here!
      </p>
    </main>
  );
}
