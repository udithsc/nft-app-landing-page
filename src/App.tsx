import { Download, Features, SectionWrapper, Navbar } from './components';
import assets from './assets';

const App = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <SectionWrapper
          title="You own store of Nifty NFTs. Start Selling & Growing"
          description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using UDT NFT Marketplace."
          showBtn
          mockupImg={assets.homeHero}
          banner="banner"
        />
      </section>

      <section id="features">
        <SectionWrapper
          title="Smart User Interface Marketplace"
          description="Experience a buttery UI of UDT NFT Marketplace. Smooth constant colors of a fluent UI design."
          mockupImg={assets.homeCards}
          reverse
        />
      </section>

      <section id="technologies">
        <Features />
      </section>

      <SectionWrapper
        title="Deployment"
        description="UDT NFT is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <section id="download">
        <Download />
      </section>

      <footer className="nft-footer">
        <div className="nft-footer__inner">
          <div className="nft-footer__brand">
            <div className="nft-footer__logo-icon">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="8" fill="url(#footerLogoGrad)" />
                <path d="M8 22L14 10L20 18L24 14L28 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14" cy="10" r="2" fill="white" />
              </svg>
            </div>
            <span className="nft-footer__logo-text">
              UDT <span className="nft-footer__logo-accent">NFT</span>
            </span>
          </div>
          <p className="nft-footer__tagline">The next-generation NFT marketplace, in your pocket.</p>
          <div className="nft-footer__links">
            <a href="#home" className="nft-footer__link">Home</a>
            <a href="#features" className="nft-footer__link">Features</a>
            <a href="#technologies" className="nft-footer__link">Technologies</a>
            <a href="#download" className="nft-footer__link">Download</a>
            <a href="https://github.com/udithsc/nft-marketplace-app" target="_blank" rel="noreferrer" className="nft-footer__link">GitHub</a>
          </div>
          <p className="nft-footer__copy">© {new Date().getFullYear()} UDT NFT. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
