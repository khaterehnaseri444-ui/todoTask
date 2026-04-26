import Footer from "../components/footer/footer";
import Header from "../components/header/Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col gap-10">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
