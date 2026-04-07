# CI Snow — Modernization & Refactor Plan

> **Mục tiêu:** Rebuild website dịch vụ dọn tuyết (ci_snow) theo hướng hiện đại, dựa trên tech stack và design system của ci_lawn. Kết quả là một website nhẹ, nhanh, đẹp, dễ maintain.

---

## Tổng Quan So Sánh

| Aspect | ci_snow (Hiện tại) | ci_snow_1 (Mới) |
|--------|-------------------|-----------------|
| **Build Tool** | Create React App | **Vite** |
| **UI Library** | Material-UI v6 + Emotion | **Bootstrap 5 + SCSS** |
| **Styling** | CSS-in-JS (Emotion) | **SCSS + CSS Custom Properties** |
| **State Mgmt** | Redux Toolkit | **Minimal hooks** (form only) |
| **Routing** | Single page (scroll) | **React Router v7** (multi-page) |
| **Language** | TypeScript | **JavaScript (JSX)** |
| **Font** | Lexend Deca + M PLUS | **Inter** (clean, modern) |
| **Animations** | Framer Motion | **CSS + Intersection Observer** |
| **Icons** | MUI Icons | **React Icons** |
| **Bundle size** | ~2.5MB | **~400KB** (est.) |

---

## Tech Stack Mới

```json
{
  "dependencies": {
    "react": "^19.x",
    "react-dom": "^19.x",
    "react-router-dom": "^7.x",
    "bootstrap": "^5.3.x",
    "sass": "^1.x",
    "axios": "^1.x",
    "react-icons": "^5.x",
    "react-intersection-observer": "^10.x"
  },
  "devDependencies": {
    "vite": "^8.x",
    "@vitejs/plugin-react": "^6.x",
    "eslint": "^9.x"
  }
}
```

---

## Design System (Snow Theme)

```css
:root {
  /* Primary - Blue/Ice tones (thay vi green cua ci_lawn) */
  --color-primary: #1565C0;         /* Xanh bang dam */
  --color-primary-dark: #0D47A1;    /* Xanh dam hon */
  --color-primary-light: #1E88E5;   /* Xanh nhat */
  --color-accent: #90CAF9;          /* Ice blue accent */

  /* Backgrounds */
  --color-white: #ffffff;
  --color-light-bg: #F0F4FF;        /* Nen xanh rat nhat */
  --color-snow-bg: #F8FAFF;         /* Snow white */

  /* Text */
  --color-dark-text: #0D1B2E;
  --color-gray-text: #5A6A7E;

  /* Highlights */
  --color-star: #FFB300;
  --color-cta: #E53935;             /* CTA button do noi bat */

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(21, 101, 192, 0.08);
  --shadow-md: 0 4px 20px rgba(21, 101, 192, 0.12);
  --shadow-lg: 0 8px 40px rgba(21, 101, 192, 0.18);

  --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  --section-py: 5rem;
}
```

---

## Cau Truc Du An Moi

```
ci_snow_1/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── ServiceArea.jsx
│   │   │   └── ContactForm.jsx
│   │   └── ui/
│   │       ├── ScrollReveal.jsx
│   │       └── SectionHeader.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/
│   │   ├── services.js
│   │   ├── pricing.js
│   │   ├── testimonials.js
│   │   └── serviceAreas.js
│   ├── hooks/
│   │   └── useScrollPosition.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── bootstrap-override.scss
│   │   ├── animations.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── services.css
│   │   └── sections.css
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
├── package.json
└── eslint.config.js
```

---

## Noi Dung Website (Sections)

### Pages
- **Home** — Trang chinh voi day du sections
- **Services** — Chi tiet tung dich vu don tuyet
- **About** — Ve cong ty, doi ngu, lich su
- **Contact** — Form lien he + ban do khu vuc phuc vu

### Sections (Home Page)
1. **Hero** — Full-width, background hinh tuyet, headline manh, 2 CTA buttons
2. **Services** — Grid 3 cot cac dich vu (don loi di, bai do xe, mai nha, v.v.)
3. **HowItWorks** — 3 buoc don gian: Request → Schedule → Done
4. **WhyChooseUs** — 4-6 diem noi bat (24/7, Licensed, Fast Response, v.v.)
5. **Pricing** — 3 tier gia (Residential, Commercial, Seasonal Contract)
6. **Testimonials** — Reviews tu khach hang
7. **ServiceArea** — Khu vuc phuc vu (thanh pho/vung)
8. **ContactForm** — Form dat dich vu

### Services Data
```js
// cac dich vu snow removal
- Residential Driveway Clearing
- Commercial Parking Lot
- Sidewalk & Pathway
- Roof Snow Removal
- Snow Hauling
- De-icing / Salting
```

---

## Ke Hoach Trien Khai Theo Phase

---

### Phase 1 — Project Setup & Foundation ✅ DONE
**Muc tieu:** Khoi tao project moi voi day du tooling

**Tasks:**
- [x] 1.1 Init Vite + React 19 project tai `/home/tuancnh/code/ci_snow_1` (`npm create vite@latest`)
- [x] 1.2 Cai dat dependencies: bootstrap, sass, react-router-dom, react-icons, react-intersection-observer, axios
- [x] 1.3 Tao `vite.config.js` voi alias `@` tro vao `src/`
- [x] 1.4 Tao `eslint.config.js`
- [x] 1.5 Setup `index.html` — title, meta SEO, OG tags, Twitter card, Google Fonts Inter
- [x] 1.6 Tao cau truc thu muc `src/`: components/layout, components/sections, components/ui, pages, data, hooks, styles, assets/images, api/
- [x] 1.7 Tao `src/main.jsx` entry point + `src/index.css` global reset
- [x] 1.8 Tao `src/App.jsx` voi HashRouter — ScrollToTop + React.lazy/Suspense cho inner pages + routes: `/`, `/services`, `/about`, `/contact`, `*` 404

**Deliverable:** `npm run build` thanh cong (✓ built in 3.18s, bundle chinh 74KB gzip)

---

### Phase 2 — Design System & Shared UI Components ✅ DONE
**Muc tieu:** Xay dung design tokens, shared CSS va reusable UI components

**Tasks:**
- [x] 2.1 Tao `src/styles/variables.css` — Snow/Blue theme: `--color-primary: #1565C0`, `--color-primary-dark: #0D47A1`, `--color-light-bg: #F0F4FF`, shadow blue-tinted
- [x] 2.2 Tao `src/styles/bootstrap-override.scss` — `$primary: #1565C0`, `$font-family-sans-serif: 'Inter'`, import bootstrap
- [x] 2.3 Tao `src/styles/animations.css` — reveal/reveal-left/reveal-right/reveal-scale + fadeInDown cho hero, stagger delays 1-5
- [x] 2.4 Tao `src/styles/navbar.css` (class `navbar-cisnow`, mobile collapse), `hero.css` (blue overlay, snow bg), `services.css` (service-features, service-link), `sections.css` (tat ca sections + footer voi blue theme)
- [x] 2.5 Tao `src/hooks/useScrollPosition.js` — passive scroll listener
- [x] 2.6 Tao `src/components/ui/ScrollReveal.jsx` — Intersection Observer wrapper (triggerOnce, threshold 0.12)
- [x] 2.7 Tao `src/components/ui/SectionHeader.jsx` — badge + title + subtitle, props: center/light

**Deliverable:** `npm run build` thanh cong (✓ built in 2.74s) — design system blue theme hoan chinh

---

### Phase 3 — Data Layer
**Muc tieu:** Xay dung data files cho toan bo website

**Tasks:**
- [ ] 3.1 Tao `src/data/services.js` — 6 snow services: Residential Driveway, Commercial Parking Lot, Sidewalk & Pathway, Roof Snow Removal, Snow Hauling, De-icing/Salting. Moi service: `{ id, slug, title, icon, shortDesc, features[] }`
- [ ] 3.2 Tao `src/data/pricing.js` — 3 tiers: Residential, Commercial (`highlighted: true`), Seasonal Contract. Moi tier: `{ id, name, price, period, features[], highlighted, ctaLabel }`
- [ ] 3.3 Tao `src/data/testimonials.js` — 5-6 reviews khach hang Edmonton. Moi entry: `{ id, name, initials, rating, text, date, location }`
- [ ] 3.4 Tao `src/data/serviceAreas.js` — Edmonton + St. Albert, Sherwood Park, Leduc, Spruce Grove, Beaumont, Stony Plain, Fort Saskatchewan

**Deliverable:** Data files san sang, co the import vao bat ky component nao

---

### Phase 4 — Layout: Navbar & Footer
**Muc tieu:** Navbar responsive + Footer day du thong tin

**Tasks:**
- [ ] 4.1 Tao `src/components/layout/Navbar.jsx`:
  - Top bar: so dien thoai, email, link "Pay Online"
  - Main nav: Logo "Capital Snow Removal" + links (Home, Services, About, Contact) + CTA button "Request Quote"
  - Scroll effect: them shadow/background khi cuon xuong (dung `useScrollPosition`)
  - Mobile: Bootstrap hamburger menu collapse
  - Active link highlighting voi React Router `NavLink`
- [ ] 4.2 Tao `src/components/layout/Footer.jsx`:
  - Logo + tagline ngan
  - Quick links: Home, Services, About, Contact
  - Services list (6 snow services)
  - Contact info: phone, email, address, hours ("24/7 Emergency")
  - Copyright + privacy links
  - Mau nen dark blue `#0D1B2E`

**Deliverable:** Navbar va Footer hoan chinh, responsive tren mobile/tablet/desktop

---

### Phase 5 — Hero Section
**Muc tieu:** Landing section an tuong voi snow theme

**Tasks:**
- [ ] 5.1 Tao `src/components/sections/Hero.jsx`:
  - Full viewport height background: snow image hoac CSS gradient fallback (phong khi chua co anh)
  - Dark overlay de text de doc
  - Headline: "Edmonton's Trusted Snow Removal Service"
  - Subheadline: "Fast, reliable, 24/7 snow clearing for residential & commercial"
  - 2 CTA buttons: "Get Free Quote" (primary solid) + "Our Services" (outline white)
  - Trust badges: `Licensed & Insured` | `24/7 Available` | `Same-Day Service`
  - CSS animation: fadeIn tu tren xuong khi load
  - Responsive: stack vertical tren mobile

**Deliverable:** Hero section hoan chinh voi animation

---

### Phase 6 — Services Section
**Muc tieu:** Grid hien thi cac dich vu

**Tasks:**
- [ ] 6.1 Tao `src/components/sections/ServiceCard.jsx`:
  - Icon (React Icons), Title, shortDesc
  - Features list (3-4 bullet points voi checkmark icon)
  - "Learn More" link toi `/services#slug`
  - Hover effect: lift + shadow `--shadow-md`
- [ ] 6.2 Tao `src/components/sections/Services.jsx`:
  - SectionHeader: "Our Snow Removal Services"
  - Grid Bootstrap: 3 cot desktop / 2 cot tablet / 1 cot mobile
  - ScrollReveal stagger cho tung card
  - Data-driven import tu `services.js`
  - "View All Services" button toi `/services`

**Deliverable:** Services section voi 6 service cards, animation on scroll

---

### Phase 7 — HowItWorks + WhyChooseUs Sections
**Muc tieu:** Trust-building sections

**Tasks:**
- [ ] 7.1 Tao `src/components/sections/HowItWorks.jsx`:
  - 3 buoc: (1) Request a Quote → (2) We Schedule → (3) Snow Gone!
  - Layout: horizontal steps voi numbered circles (desktop), vertical (mobile)
  - Icon React Icons cho moi buoc
  - Nen `--color-light-bg` (#F0F4FF)
  - ScrollReveal stagger: moi buoc delay 100ms
- [ ] 7.2 Tao `src/components/sections/WhyChooseUs.jsx`:
  - 6 feature cards: 24/7 Emergency Service, Licensed & Fully Insured, Fast Response Time, Commercial & Residential, Eco-Friendly De-icing, Satisfaction Guaranteed
  - Moi card: icon nen `--color-primary-light` + title + description
  - Grid Bootstrap: 3 cot desktop / 2 cot tablet / 1 cot mobile
  - ScrollReveal stagger animation

**Deliverable:** 2 sections hoan chinh voi animations

---

### Phase 8 — Pricing Section
**Muc tieu:** Bang gia ro rang, de so sanh

**Tasks:**
- [ ] 8.1 Tao `src/components/sections/Pricing.jsx`:
  - 3 pricing cards data-driven tu `pricing.js`
  - "Most Popular" badge tren card `highlighted: true`
  - Moi card: title, price, billing period, features list, CTA button "Get Started"
  - Highlighted card: mau `--color-primary`, shadow `--shadow-lg`, scale nhe hon
  - Mobile: CSS overflow-x scroll (slider nhu ci_lawn)
  - ScrollReveal animation
  - Disclaimer text: "* Prices vary based on property size and snow depth"

**Deliverable:** Pricing section responsive voi highlight card

---

### Phase 9 — Testimonials Section
**Muc tieu:** Social proof tu khach hang

**Tasks:**
- [ ] 9.1 Tao `src/components/sections/Testimonials.jsx`:
  - SectionHeader voi aggregate rating "4.9/5 from 200+ reviews"
  - Grid cards data-driven tu `testimonials.js`
  - Moi card: avatar circle (initials), ten, location, rating stars (`--color-star`), review text, date
  - Nen `--color-light-bg` de tao contrast
  - ScrollReveal stagger animation
  - Mobile: horizontal scroll (overflow-x: auto)

**Deliverable:** Testimonials section voi 5-6 reviews

---

### Phase 10 — ServiceArea + ContactForm + Home Page
**Muc tieu:** Thong tin phuc vu, form lien he va compose Home page

**Tasks:**
- [ ] 10.1 Tao `src/components/sections/ServiceArea.jsx`:
  - SectionHeader + headline
  - Grid tags/chips data-driven tu `serviceAreas.js`
  - CTA button: "Check if we serve your area"
- [ ] 10.2 Tao `src/api/action_types/form.js`, `src/api/actions/index.js` (axios POST doc `import.meta.env.VITE_API_URL`), `src/api/hooks/index.js`
- [ ] 10.3 Tao `src/components/sections/ContactForm.jsx`:
  - Form fields: Name (required), Phone (required), Email (required, format validation), Service Type (dropdown 6 options), Property Type (Residential/Commercial), Message (required)
  - Client-side validation truoc khi submit
  - Submit via axios tu `api/actions`
  - Loading spinner, success banner, error banner
  - Contact info panel ben canh: phone, email, hours
  - Responsive: 2 cot desktop / 1 cot mobile
- [ ] 10.4 Tao `src/pages/Home.jsx` — compose 8 sections theo thu tu: Hero, Services, HowItWorks, WhyChooseUs, Pricing, Testimonials, ServiceArea, ContactForm

**Deliverable:** Home page day du 8 sections, ContactForm voi validation

---

### Phase 11 — Inner Pages
**Muc tieu:** Cac trang rieng: Services, About, Contact, 404

**Tasks:**
- [ ] 11.1 Tao `src/pages/ServicesPage.jsx`:
  - Page hero: "Our Snow Removal Services"
  - Detailed section cho tung dich vu: anh, mo ta chi tiet, features list
  - FAQ section (5-7 cau hoi thuong gap)
  - CTA section cuoi trang
- [ ] 11.2 Tao `src/pages/AboutPage.jsx`:
  - Company story + mission statement
  - Stats: years in business, customers served, fleet size
  - Certifications & licenses section
  - CTA button
- [ ] 11.3 Tao `src/pages/ContactPage.jsx`:
  - Contact info cards: Phone, Email, Address, Hours
  - Embedded `<ContactForm />` component (reuse)
  - Service area list
- [ ] 11.4 Tao `src/pages/NotFound.jsx` — 404 page voi heading, message, link ve Home. Wire vao `App.jsx` route `*`

**Deliverable:** 4 trang phu hoan chinh, routing hoat dong

---

### Phase 12 — Polish & Optimization
**Muc tieu:** Hoan thien UX, performance, SEO

**Tasks:**
- [ ] 12.1 Responsive audit: test breakpoints 320px / 768px / 1440px, fix overflow/wrap issues trong tat ca sections
- [ ] 12.2 Accessibility pass: alt text cho tat ca img, aria-labels tren icon-only buttons, focus-visible outlines, semantic headings (h1 xuat hien dung 1 lan/page), lien ket label↔input trong form
- [ ] 12.3 SEO meta: og:title, og:description, og:image, Twitter card meta trong `index.html` + per-page title update qua `useEffect`
- [ ] 12.4 Performance: lazy load images (`loading="lazy"`), `React.lazy` + `Suspense` cho inner pages, compress assets
- [ ] 12.5 UX extras: smooth scroll CSS, back-to-top button component, loading spinner cho form, chay `grep -riE "lawn|mow|grass|fertiliz" src/` de dam bao khong con noi dung cu

**Deliverable:** Website production-ready, khong con loi console

---

### Phase 13 — Deployment
**Muc tieu:** Deploy len GCS (Google Cloud Storage) voi CI/CD

**Tasks:**
- [ ] 13.1 Tao `.env.example` — VITE_API_URL, VITE_GCS_BUCKET (khong commit `.env` thuc te)
- [ ] 13.2 Tao `deploy-gcs.sh` — `npm run build` + `gsutil -m rsync -r -d dist/ gs://$BUCKET` + cache headers: `Cache-Control: public, max-age=31536000` cho assets, `no-cache` cho `index.html`
- [ ] 13.3 Tao `.github/workflows/deploy-gcs.yml`:
  - Trigger: push to `main`
  - GCP auth qua Workload Identity Federation hoac service account secret
  - Step: `npm ci` → `npm run build` → `gsutil rsync`
- [ ] 13.4 Config GCS bucket: static website hosting, public read access, index/404 page mapping
- [ ] 13.5 Test production build local: `npm run build && npm run preview`, verify tat ca routes + form + images
- [ ] 13.6 Deploy len GCS va verify live: check routing, chay Lighthouse >= 90 tren tat ca 4 categories

**Deliverable:** Website live tren GCS voi CI/CD pipeline tu dong deploy khi push main

---

## Timeline Tham Khao

| Phase | Mo ta | So task | Do phuc tap |
|-------|-------|---------|-------------|
| Phase 1 | Project Setup & Foundation | 8 tasks | Thap |
| Phase 2 | Design System & Shared UI | 7 tasks | Thap |
| Phase 3 | Data Layer | 4 tasks | Thap |
| Phase 4 | Layout: Navbar & Footer | 2 tasks | Trung binh |
| Phase 5 | Hero Section | 1 task | Trung binh |
| Phase 6 | Services Section | 2 tasks | Trung binh |
| Phase 7 | HowItWorks + WhyChooseUs | 2 tasks | Thap |
| Phase 8 | Pricing Section | 1 task | Trung binh |
| Phase 9 | Testimonials Section | 1 task | Thap |
| Phase 10 | ServiceArea + ContactForm + Home | 4 tasks | Cao |
| Phase 11 | Inner Pages | 4 tasks | Trung binh |
| Phase 12 | Polish & Optimization | 5 tasks | Trung binh |
| Phase 13 | Deployment | 6 tasks | Trung binh |
| **Tong** | | **47 tasks** | |

---

## Luu Y Quan Trong

### Tai su dung tu ci_lawn
- Clone va adapt: `ScrollReveal.jsx`, `SectionHeader.jsx`, `useScrollPosition.js`
- Copy va customize: cau truc `bootstrap-override.scss`, `animations.css`, `variables.css`
- Tham khao: `Navbar.jsx`, `Footer.jsx`, `ContactForm.jsx` — chi thay noi dung/mau

### Khac biet ci_snow vs ci_lawn
- **Mau sac:** Blue/Ice thay vi Green (giu dung brand snow removal)
- **Noi dung:** Snow removal services thay vi lawn care
- **Hero image:** Hinh mua dong/tuyet
- **Services:** Driveway, Parking Lot, Roof, De-icing thay vi Mowing, Fertilization

### Khong lam
- KHONG dung Material-UI
- KHONG dung Emotion CSS-in-JS
- KHONG dung Redux (khong can thiet)
- KHONG dung TypeScript (giu nhat quan voi ci_lawn JSX)
- KHONG dung Framer Motion (CSS animations du roi)
- KHONG dung Create React App

---

*Plan tao ngay 2026-04-07 | Source reference: `/home/tuancnh/code/ci_lawn`*
