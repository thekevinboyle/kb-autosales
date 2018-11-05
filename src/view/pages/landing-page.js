import CarCollections from '../components/car-collections';

// TODO: run all of these through Atom's formatter
export default function() {
  return {
    view() {
      // For simplicity's sake, using JSX here and not much dynamic other than the repeating car bits
      return (
        <main class="site-wrapper">

          {/* Site Nav */}
          <nav class="layer site-nav">
            <figure class="logo logo--header"><i class="logo-mark"></i>AutoSales.com</figure>
            <nav class="site-nav__mobile-only">
              FPO
            </nav>
            <ul class="site-nav__ol">
              <li class="nav-item"><a class="nav-link" href="#">Cars for Sale</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Sell My Car</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Cars for Sale</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
              <li class="nav-item"><a class="nav-link nav-link--search" href="#">Search</a></li>
            </ul>
          </nav>

          {/* Hero */}
          <header class="layer hero">
            <div class="mw8 center site-grid hero-inner">
              <div class="hero-verbiage">
                <h1 class="f1 lh-solid mb4 mt0 ">The Car of Your Dreams is Only a Click Away!</h1>
                <a href="#" class="btn btn--primary btn--green">Get Started Now</a>
              </div>
            </div>
          </header>

          {/* The 'drill down' which is just a couple of dummy selects */}
          <nav class="layer drill-down-nav">
            <div class="mw8 center site-grid drill-down-nav-inner">
              <select class="choose-make form-control dropdown">
                <option value="">Make</option>
                <option value="chevy">Chevy</option>
                <option value="honda">Honda</option>
              </select>
              <select class="choose-model form-control dropdown">
                <option value="">Model</option>
                <option value="chevy">Prius</option>
                <option value="honda">Corvette</option>
              </select>
              <select class="choose-price form-control dropdown">
                <option value="">Price</option>
                <option value="chevy">$5,000-$9,999</option>
                <option value="honda">$10,000-$14,999</option>
              </select>
              <a href="#" class="find-car-btn btn btn--primary btn--orange">Find My Dream Car</a>
            </div>
          </nav>

          {/* Car Collections is a loop of Car Collection Components, see src/view/components/car-collections and src/view/components/car-collection */}
          <CarCollections/>

          {/* Footer */}
          <footer class="layer site-footer">
            <figure class="logo logo--footer"><i class="logo-mark"></i>AutoSales.com</figure>
            <aside>
              <ul class="footer-meta">
                <li class="footer-meta-item">
                  Copyright &copy; 2016 AutoSales.com
                </li>
                <li class="footer-meta-item">
                  All rights reserved
                </li>
                <li class="footer-meta-item">
                  <a class="nav-link" href="#">Privacy Statement</a>
                </li>
              </ul>
            </aside>
          </footer>
        </main>

      );
    },
  };
}
