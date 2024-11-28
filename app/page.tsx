import Navbar from '../app/components/Navbar';
import MainContent from '../app/components/Maincontent';
import Footer from '../app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}