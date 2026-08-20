import { useState, useEffect } from 'react'
import './index.css'

const BASE = 'https://flexrockperformance.com'
const LOGO = `${BASE}/wp-content/uploads/2022/12/Black-Modern-Handwritten-Motivation-Quote-Social-Media-1-5.png`
const BEFORE = `${BASE}/wp-content/uploads/2026/08/RRR-10005-KIT-Before.png`
const AFTER = `${BASE}/wp-content/uploads/2026/08/RRR-10005-KIT-After.png`
const POLARIS = `${BASE}/wp-content/uploads/2025/05/polaris-RZR.png`
const CANAM = `${BASE}/wp-content/uploads/2025/05/CANAM-2.png`
const KAWASAKI = `${BASE}/wp-content/uploads/2025/05/krx-3.png`
const HONDA = `${BASE}/wp-content/uploads/2025/05/HONDA-TALON.png`
const JEEP = `${BASE}/wp-content/uploads/2026/02/krx.png`
const HAT1 = `${BASE}/wp-content/uploads/2026/04/SM-Flexfit-Red-Digi-Camo-silver-carbon-badge-300x300.png`
const HAT2 = `${BASE}/wp-content/uploads/2026/04/SM-Flexfit-Blue-Digi-Camo-Grey-badge-300x300.png`
const HAT3 = `${BASE}/wp-content/uploads/2026/04/LXL-Flexfit-Green-Digi-Camo-silver-carbon-badge-300x300.png`
const HAT4 = `${BASE}/wp-content/uploads/2026/04/SM-Flexfit-Grey-Digi-Camo-Grey-badge-300x300.png`
const HAT5 = `${BASE}/wp-content/uploads/2026/04/LXL-Flexfit-Neon-Yellow-Digi-Camo-Silver-Carbon-badge-1-300x300.png`
const SWAY = `${BASE}/wp-content/uploads/2025/05/sway-bar-bushing-kit.png`
const HARDWARE = `${BASE}/wp-content/uploads/2025/05/Mis-Alignment-Anti-Rotation.png`
const DISCONNECT = `${BASE}/wp-content/uploads/2025/05/Sway-Bar-quick-disconnect-Kits.png`
const ABOUT = `${BASE}/wp-content/uploads/2025/04/DJI_20250108144936_0108_D-1024x576.jpg`
const HERO_ROD = `${BASE}/wp-content/uploads/2026/07/RRR-Hero-Black-scaled.png`
const CAB_HERO = `${BASE}/wp-content/uploads/2026/07/CAB-hero-topography-scaled.png`
const WARRANTY = `${BASE}/wp-content/uploads/2025/05/Black-Modern-Handwritten-Motivation-Quote-Social-Media.png`
const FOOTER_BG = `${BASE}/wp-content/uploads/2022/12/DJI_20250318152614_0061_D-scaled.jpg`

const reviews = [
  { author: 'Jordan E.', text: 'Ordered some for my 18 xp1000, then I upgraded to a 2022 pro xp4. Took the bushings off one. Awesome quality and easy to grease! Would buy again.' },
  { author: 'Kim D.', text: "The best thing we've gotten for our RZR Pro. The squeak was so annoying. We haven't heard the squeak once since. Great customer service, great product." },
  { author: 'Chris F.', text: 'Nice quality products, very fast shipping, a good company to deal with! I will be doing business with them in the future!' },
  { author: 'Kyle C.', text: 'Awesome upgrade for my RZR Pro XP4! Much better grease point than stock and best of all no more squeak.' },
  { author: 'Jeremy E.', text: 'These things are awesome. Way better than factory and I am very impressed.' },
  { author: 'Brady E.', text: 'Great product I highly recommend there products! Top notch service and fast shipping!' },
  { author: 'Scott C.', text: 'Awesome product! Awesome customer service!' },
  { author: 'Jerry C.', text: 'They have some very high quality parts.' },
  { author: 'JD H.', text: 'Good quality sway bar mounts and bushings, highly recommend.' },
  { author: 'Rhonda H.', text: 'Great quality! Awesome customer service!' },
  { author: 'Dirk H.', text: 'Customer service was very professional and fast. Pricing was great. And great info on fb messenger after hours was above most. Thank you Flex Rock. Will be a continued customer' },
  { author: 'Kevin C.', text: 'Very professional and top tier parts. Very satisfied with my interactions and buying process. They have premium products, ship super fast and they are very knowledgeable. Highly recommend!' },
]

const videos = [
  { title: 'Stop The SQUEAK!!! RZR Turbo R Gets The Flex Rock Performance Rear Sway Bar Bushing Kit', id: 'Oq-3coRkh4c', time: '' },
  { title: 'Radious rod installation on a Krx', id: 'CQB2QHitAqo', time: '13:48' },
  { title: 'RZR Turbo R Gets BEEFY Ultra High Clearance Billett Radius Rods From Flex Rock Performance', id: 'kIQb5ruShFc', time: '18:44' },
  { title: 'Flex Rock Performance Milwaukee Packout Plate', id: 'tuPz95pIVzM', time: '2:37' },
  { title: 'Flex Rock Performance RZR Quick Release End links', id: 'g3fQ2BbpNfY', time: '2:38' },
]

const heroSlides = [
  {
    img: AFTER,
    label: 'Flex Rock',
    title: 'Flex Rock Radius Rods',
    copy: 'Engineered with strength and durability for the toughest terrains. Featured: Polaris RZR Turbo R',
  },
  {
    img: BEFORE,
    label: 'Stock',
    title: 'Stock Radius Rods',
    copy: 'Prone to bending and breaking under normal use. Shown: Polaris RZR Turbo R',
  },
  {
    img: HERO_ROD,
    label: 'Performance',
    title: 'Ultra High Clearance',
    copy: 'Precision engineered aftermarket parts for UTVs.',
  },
  {
    img: CAB_HERO,
    label: 'Control Arms',
    title: 'Built for the Trail',
    copy: 'Inspect every detail before it hits your machine.',
  },
]

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  )
}
function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5h2l2.2 9.5h9.8l2-7H7" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </svg>
  )
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c.6-4 3-6 7-6s6.4 2 7 6" />
    </svg>
  )
}

function HeroSlider() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % heroSlides.length), 5500)
    return () => clearInterval(t)
  }, [])
  const go = (d: number) => setI((x) => (x + d + heroSlides.length) % heroSlides.length)

  return (
    <div className="hero-slider">
      {heroSlides.map((s, idx) => (
        <div key={idx} className={`hero-slide${idx === i ? ' active' : ''}`}>
          <img src={s.img} alt={s.title} />
          <div className="hero-slide-overlay">
            <div className="page-width">
              <div className="hero-slide-copy">
                <span>{s.label}</span>
                <h1>{s.title}</h1>
                <p>{s.copy}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="hero-arrows">
        <button type="button" onClick={() => go(-1)} aria-label="Previous">‹</button>
        <button type="button" onClick={() => go(1)} aria-label="Next">›</button>
      </div>
      <div className="hero-dots">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={idx === i ? 'active' : ''}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialsSlider() {
  const [index, setIndex] = useState(0)
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w <= 980) setPerPage(1)
      else if (w <= 1200) setPerPage(2)
      else setPerPage(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, reviews.length - perPage)

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 5000)
    return () => clearInterval(t)
  }, [maxIndex])

  const go = (dir: number) => {
    setIndex((i) => {
      const next = i + dir
      if (next < 0) return maxIndex
      if (next > maxIndex) return 0
      return next
    })
  }

  const gap = 18
  const cardBasis = `calc(${100 / perPage}% - ${(gap * (perPage - 1)) / perPage}px)`

  return (
    <div className="testimonials-wrap">
      <div
        className="testimonials-track"
        style={{
          transform: `translateX(calc(-${index} * (${100 / perPage}% + ${gap / perPage}px)))`,
        }}
      >
        {reviews.map((r, i) => (
          <article key={i} className="testimonial-card" style={{ flex: `0 0 ${cardBasis}` }}>
            <p>“{r.text}”</p>
            <strong>— {r.author}</strong>
          </article>
        ))}
      </div>
      <div className="testimonial-nav">
        <button type="button" onClick={() => go(-1)} aria-label="Previous">‹</button>
        <button type="button" onClick={() => go(1)} aria-label="Next">›</button>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  const navLinks = [
    { href: `${BASE}/`, label: 'Home', active: true },
    { href: `${BASE}/parts-search/`, label: 'Parts Search' },
    { href: `${BASE}/why-choose-us/`, label: 'Why Us' },
    { href: `${BASE}/shop/`, label: 'Shop' },
    { href: `${BASE}/blogs/`, label: 'Blogs' },
    { href: `${BASE}/utv-gallery/`, label: 'Search Gallery' },
    { href: `${BASE}/reviews/`, label: 'Reviews' },
    { href: `${BASE}/my-account/`, label: 'My Account' },
    { href: `${BASE}/contact-us/`, label: 'Contact Us' },
  ]

  return (
    <div className="site">
      <header className="masthead">
        {/* White logo panel + red angled swoosh into dark tools (Fuelab-style) */}
        <div className="masthead-top">
          <div className="logo-panel">
            <a href={`${BASE}/`}>
              <img src={LOGO} alt="Flex Rock UTV Performance" />
            </a>
          </div>
          <div className="masthead-right">
            <div className="promo-row">
              <a href="https://g.page/r/CcY0XDmyagI7EBM/review" target="_blank" rel="noreferrer">
                Happy with our parts? Leave us a review
              </a>
            </div>
            <div className="search-row">
              <div className="product-search">
                <input placeholder="Search for products..." aria-label="Search products" />
                <button type="button" aria-label="Search">
                  <SearchIcon />
                </button>
              </div>
              <a className="header-tool" href={`${BASE}/my-account/`}>
                <UserIcon />
                <span>My Account</span>
              </a>
              <a className="header-tool cart-tool" href={`${BASE}/cart/`}>
                <CartIcon />
                <i>0</i>
                <span>Cart</span>
              </a>
              <button
                type="button"
                className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>

        <nav id="primary-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`}>
          <div className="nav-inner page-width">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={l.active ? 'active' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
        {menuOpen && (
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </header>

      <main>
        {/* ABOVE THE FOLD: image slider */}
        <HeroSlider />

        <div className="finder-wrap">
          <div className="page-width">
            <div className="finder">
              <div className="finder-title">FIND PARTS FOR YOUR MACHINE</div>
              <label>
                <span>YEAR</span>
                <select defaultValue="">
                  <option value="" disabled>Select Year</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </label>
              <label>
                <span>MAKE</span>
                <select defaultValue="">
                  <option value="" disabled>Select Make</option>
                  <option>Polaris</option>
                  <option>Can-Am</option>
                  <option>Kawasaki</option>
                  <option>Honda</option>
                  <option>Jeep</option>
                </select>
              </label>
              <label>
                <span>MODEL</span>
                <select defaultValue="">
                  <option value="" disabled>Select Model</option>
                  <option>RZR Turbo R</option>
                  <option>RZR Pro XP</option>
                  <option>Maverick X3</option>
                  <option>KRX 1000</option>
                  <option>Talon</option>
                </select>
              </label>
              <button type="button" onClick={() => { window.location.href = `${BASE}/parts-search/` }}>
                <SearchIcon /> SEARCH
              </button>
            </div>
          </div>
        </div>

        {/* Shop by Machine */}
        <section className="section section-soft">
          <div className="page-width">
            <h2 className="section-title">Shop by Machine</h2>
            <div className="machine-grid">
              {[
                ['POLARIS', POLARIS, `${BASE}/parts-search/?pref_make=Polaris`],
                ['CAN-AM', CANAM, `${BASE}/parts-search/?pref_make=Can-Am`],
                ['KAWASAKI', KAWASAKI, `${BASE}/parts-search/?pref_make=Kawasaki`],
                ['HONDA', HONDA, `${BASE}/parts-search/?pref_make=Honda`],
                ['JEEP', JEEP, `${BASE}/parts-search/?pref_make=Jeep`],
              ].map(([name, img, href]) => (
                <a className="machine-card" href={href} key={name}>
                  <div className="machine-art">
                    <img src={img} alt={name} />
                  </div>
                  <h3>{name}</h3>
                  <span>Shop Now</span>
                </a>
              ))}
            </div>
            <p className="center-copy">
              At Flex Rock Performance, we specialize in crafting high-quality aftermarket parts for UTVs to enhance durability, stability, and performance on any terrain. Whether you’re conquering rocky trails, navigating mud pits, or tackling extreme off-road adventures, our precision engineered parts give you the edge you need.
            </p>
          </div>
        </section>

        {/* 3D */}
        <section className="section">
          <div className="page-width preview-layout">
            <div className="preview-copy">
              <h2>View Products in 3D</h2>
              <p>Inspect every detail before it hits your machine.</p>
              <p>Use your mouse or finger to explore the product.</p>
            </div>
            <div className="viewer">
              <div className="viewer-meta">
                <strong>3D View</strong>
                <span>Interactive model</span>
              </div>
              <img src={AFTER} alt="3D product preview" />
              <p>↔ Use your mouse or finger to explore the product.</p>
            </div>
          </div>
        </section>

        {/* Playlist */}
        <section className="section section-soft">
          <div className="page-width">
            <div className="title-row">
              <h2 className="section-title">Playlist</h2>
              <span>8 Videos</span>
            </div>
            <div className="video-layout">
              <a
                className="video-main"
                href={`https://www.youtube.com/watch?v=${videos[0].id}`}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <img src={`https://img.youtube.com/vi/${videos[0].id}/maxresdefault.jpg`} alt={videos[0].title} />
                  <span className="play">▶</span>
                </div>
                <h3>{videos[0].title}</h3>
              </a>
              <div className="video-list">
                {videos.slice(1).map((v) => (
                  <a key={v.title} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer">
                    <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} />
                    <div>
                      <strong>{v.title}</strong>
                      <span>{v.time}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mission">
          <div className="page-width mission-layout">
            <div className="mission-copy">
              <h2>Our Mission</h2>
              <p>
                At Flex Rock Performance, our mission is to empower every off-road enthusiast with the tools they need for a smoother, more thrilling ride.
              </p>
              <p>
                We’re committed to creating high-quality products that are designed to perform, ensuring that you get the most out of your off-road adventures.
              </p>
            </div>
            <img src={ABOUT} alt="Flex Rock UTV Performance" />
          </div>
        </section>

        {/* Testimonials slider */}
        <section className="section">
          <div className="page-width">
            <h2 className="section-title">Testimonials</h2>
            <TestimonialsSlider />
          </div>
        </section>

        {/* Hats */}
        <section className="section section-soft">
          <div className="page-width">
            <h2 className="section-title">Flex Rock Flexfit Hat Collection</h2>
            <div className="hat-grid">
              {[
                ['Flexfit Red Digi Camo Hat (silver carbon badge)', HAT1, `${BASE}/product/flexfit-red-digi-camo-silver-carbon-badge/`, `${BASE}/?add-to-cart=7533`],
                ['Flexfit Blue Digi Camo Hat (Grey badge)', HAT2, `${BASE}/product/flexfit-blue-digi-camo-grey-badge/`, `${BASE}/?add-to-cart=7536`],
                ['Flexfit Green Digi Camo Hat (silver carbon badge)', HAT3, `${BASE}/product/flexfit-green-digi-camo-silver-carbon-badge/`, `${BASE}/?add-to-cart=7539`],
                ['Flexfit Grey Digi Camo Hat (Grey badge)', HAT4, `${BASE}/product/flexfit-grey-digi-camo-grey-badge/`, `${BASE}/?add-to-cart=7542`],
                ['Flexfit Neon Yellow Digi Camo Hat (Silver Carbon badge)', HAT5, `${BASE}/product/flexfit-neon-yellow-digi-camo-silver-carbon-badge/`, `${BASE}/?add-to-cart=7544`],
              ].map(([name, img, href, cart]) => (
                <article className="hat-card" key={name}>
                  <a href={href}>
                    <img src={img} alt={name} />
                  </a>
                  <a className="hat-name" href={href}>{name}</a>
                  <p>
                    <s>$18.95</s> <strong>$14.95</strong>
                  </p>
                  <a className="add-button" href={cart}>Add to cart</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section">
          <div className="page-width why-layout">
            <div className="why-copy">
              <h2>Why Choose Flex Rock Performance?</h2>
              {[
                'Made in the USA',
                'Engineered for the extreme conditions',
                'Backed by expert customer support',
                'Fast Shipping & Hassle-free returns',
                'Lifetime Manufacture Warranty on all non-wear items',
              ].map((item) => (
                <div className="why-line" key={item}>
                  <span>✓</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <img src={AFTER} alt="Flex Rock parts" />
          </div>
        </section>

        {/* Ready to Upgrade */}
        <section className="ready">
          <div className="page-width ready-inner">
            <h2>Ready to Upgrade?</h2>
            <p>Explore our shop or contact us today to get started.</p>
            <p>Whether you’re a weekend warrior or a Hardcore racer, we’ve got the parts to help you ride</p>
            <strong>Harder, Faster, and Farther.</strong>
          </div>
        </section>

        {/* Special Product Line */}
        <section className="section">
          <div className="page-width">
            <h2 className="section-title">Our Special Product Line</h2>
            <div className="special-grid">
              {[
                ['UHMW Sway Bar Bushing Kits', 'Reinforced for added stability and longevity', SWAY],
                ['UTV Hardware Components', 'Ultimate Alignment for Radius Rods', HARDWARE],
                ['Sway Bar Quick Disconnect Kits', 'Effortless adaptability for different terrains', DISCONNECT],
              ].map(([title, copy, img]) => (
                <article className="special-card" key={title}>
                  <div className="special-image">
                    <img src={img} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Company about */}
        <section className="section section-soft">
          <div className="page-width about-layout">
            <img src={ABOUT} alt="Flex Rock" />
            <div>
              <p>
                <strong>FLEX ROCK</strong> manufactures high performance aftermarket UTV products. We have been developing our products since 2018, and our goal is to combine form and function to result in the highest performing, best-looking products available.
              </p>
              <p>
                Quality parts are essential components that ensure the functionality, durability, and efficiency of any SXS. Our high-quality parts are crafted with precision and are subject to rigorous testing to meet stringent standards. These parts are made from superior materials and are designed to withstand wear and tear above and beyond, reducing frequent failures and the need for frequent replacements.
              </p>
              <p>
                Investing in quality parts not only enhances the performance of your SXS but also contributes to reliability, and longevity of your machine.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits from live site */}
        <section className="section">
          <div className="page-width benefit-grid">
            <article>
              <div className="benefit-icon">01</div>
              <h3>Innovation in Off-Road Performance</h3>
              <p>
                We strive to push the boundaries of off-road engineering by continuously developing innovative parts that improve the performance, durability, and ride quality of UTVs.
              </p>
            </article>
            <article>
              <div className="benefit-icon">02</div>
              <h3>Quality You Can Trust</h3>
              <p>
                Our commitment to using premium materials and precision craftsmanship ensures every product is designed to withstand the toughest terrains, providing you with the most reliable and long-lasting parts.
              </p>
            </article>
            <article>
              <div className="benefit-icon">03</div>
              <h3>Enhancing Your Adventure</h3>
              <p>
                We are passionate about enhancing your off-road experience. Whether you're an amateur enthusiast or a seasoned rider, our products are built to elevate your ride to new heights.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer" style={{ backgroundImage: `linear-gradient(rgba(8,10,12,0.82), rgba(8,10,12,0.88)), url(${FOOTER_BG})` }}>
        <div className="page-width footer-main">
          <div className="footer-col footer-about">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="tel:317-427-0010">
                  <span className="footer-ico" aria-hidden="true">📞</span>
                  317-427-0010
                </a>
              </li>
              <li>
                <a href="mailto:orders@flexrockperformance.com">
                  <span className="footer-ico" aria-hidden="true">✉</span>
                  orders@flexrockperformance.com
                </a>
              </li>
              <li className="footer-address">
                <span className="footer-ico" aria-hidden="true">📍</span>
                <span>
                  Flex Rock UTV Performance<br />
                  6224 W. 800 N. Suite B<br />
                  Fountaintown, IN 46130
                </span>
              </li>
            </ul>
            <div className="footer-social">
              <a href="https://www.tiktok.com/@flexrockperformance" target="_blank" rel="noreferrer" aria-label="TikTok">♪</a>
              <a href="https://www.facebook.com/flexrockperformance" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/flexrockperformance" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
              <a href="https://www.youtube.com/@flexrockperformance" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-col footer-hours">
            <h4>Hours</h4>
            <p>Monday – Thursday, 7:00 AM – 4:30 PM (EST)</p>
          </div>

          <div className="footer-col footer-subscribe">
            <h4>Subscribe</h4>
            <form
              className="subscribe-form"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = `${BASE}/contact-us/`
              }}
            >
              <input type="email" name="email" placeholder="Email" required aria-label="Email" />
              <button type="submit">Send</button>
            </form>
            <img className="footer-warranty" src={WARRANTY} alt="Flex Rock UTV Performance Lifetime Warranty" />
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Flex Rock UTV Performance</span>
          <a href={`${BASE}/privacy-policy/`}>Privacy Policy</a>
        </div>
      </footer>
    </div>
  )
}

export default App