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

### Phase 3 — Data Layer ✅ DONE
**Muc tieu:** Xay dung data files cho toan bo website

**Tasks:**
- [x] 3.1 Tao `src/data/services.js` — 6 snow services: Residential Driveway, Commercial Parking Lot, Sidewalk & Pathway, Roof Snow Removal, Snow Hauling, De-icing/Salting. Moi service: `{ id, slug, title, icon, shortDesc, features[] }`
- [x] 3.2 Tao `src/data/pricing.js` — 3 tiers: Residential ($180/mo), Commercial ($450/mo, highlighted), Seasonal Contract ($950/season, originalPrice $1200)
- [x] 3.3 Tao `src/data/testimonials.js` — 6 reviews: David R. (St.Albert), Michelle T. (Sherwood Park), Greg & Linda K. (Edmonton South), Sandra O. (Beaumont), Tom W. (Spruce Grove), Priya N. (Fort Saskatchewan)
- [x] 3.4 Tao `src/data/serviceAreas.js` — 12 areas: Edmonton, St. Albert, Sherwood Park, Leduc, Spruce Grove, Beaumont, Stony Plain, Fort Saskatchewan, Nisku, Morinville, Devon, Gibbons

**Deliverable:** Data files san sang, co the import vao bat ky component nao

---

### Phase 4 — Layout: Navbar & Footer ✅ DONE
**Muc tieu:** Navbar responsive + Footer day du thong tin

**Tasks:**
- [x] 4.1 Tao `src/components/layout/Navbar.jsx` — FaSnowflake brand, 4 NavLinks, scroll shadow via useScrollPosition, class `navbar-cisnow`, top bar voi phone/email/Pay Online
- [x] 4.2 Tao `src/components/layout/Footer.jsx` — CTA band, SERVICES data-driven, contact info (snow@capitalirrigation.com), hours "Emergency 24/7", dark bg #0D1B2E

**Deliverable:** Navbar va Footer hoan chinh, responsive tren mobile/tablet/desktop

---

### Phase 5 — Hero Section ✅ DONE
**Muc tieu:** Landing section an tuong voi snow theme

**Tasks:**
- [x] 5.1 Tao `src/components/sections/Hero.jsx` — gradient fallback (rgba(7,28,65,0.78)→rgba(13,71,161,0.60)), headline voi accent highlight, 2 CTA buttons, 3 trust badges (Licensed/24hr/Same-Day), animate-fade-in-down animation

**Deliverable:** Hero section hoan chinh voi animation

---

### Phase 6 — Services Section ✅ DONE
**Muc tieu:** Grid hien thi cac dich vu

**Tasks:**
- [x] 6.1 Tao `src/components/sections/ServiceCard.jsx` — ICONS map (string→JSX), FaCheck features list, FaArrowRight link to /services#slug
- [x] 6.2 Tao `src/components/sections/Services.jsx` — 3-col grid, ScrollReveal stagger, "View All Services" link

**Deliverable:** Services section voi 6 service cards, animation on scroll

---

### Phase 7 — HowItWorks + WhyChooseUs Sections ✅ DONE
**Muc tieu:** Trust-building sections

**Tasks:**
- [x] 7.1 Tao `src/components/sections/HowItWorks.jsx` — 3 steps (FaClipboardList/FaCalendarCheck/FaSnowflake), connector line desktop-only, ScrollReveal stagger, CTA button
- [x] 7.2 Tao `src/components/sections/WhyChooseUs.jsx` — 6 benefit cards (24/7, Licensed, Fast Response, Commercial+Residential, Eco-Friendly, Satisfaction Guaranteed), 3-col grid, ScrollReveal stagger

**Deliverable:** 2 sections hoan chinh voi animations

---

### Phase 8 — Pricing Section ✅ DONE
**Muc tieu:** Bang gia ro rang, de so sanh

**Tasks:**
- [x] 8.1 Tao `src/components/sections/Pricing.jsx` — 3 cards data-driven (Residential $180/mo, Commercial $450/mo highlighted, Seasonal $950/season), desktop 3-col + mobile scroll-snap slider with dot indicators, "Most Popular" badge, strikethrough originalPrice

**Deliverable:** Pricing section responsive voi highlight card

---

### Phase 9 — Testimonials Section ✅ DONE
**Muc tieu:** Social proof tu khach hang

**Tasks:**
- [x] 9.1 Tao `src/components/sections/Testimonials.jsx` — trust bar (4.9/5, 200+ clients, 98% recommend), 6 review cards with Stars helper, avatar initials, ScrollReveal stagger

**Deliverable:** Testimonials section voi 6 reviews

---

### Phase 10 — ServiceArea + ContactForm + Home Page ✅ DONE
**Muc tieu:** Thong tin phuc vu, form lien he va compose Home page

**Tasks:**
- [x] 10.1 Tao `src/components/sections/ServiceArea.jsx` — 12 area chips data-driven, FaMapMarkerAlt icon, hover effect, "Contact us to find out" link
- [x] 10.2 Tao `src/api/action_types/form.js`, `src/api/actions/index.js` (axios POST to `https://api.capitalirrigation.com/api/snow_submit_form/` voi `VITE_FORM_KEY` header), `src/api/hooks/index.js` (useReducer, useContactForm hook)
- [x] 10.3 Tao `src/components/sections/ContactForm.jsx` — 6 fields (name/email/phone/service dropdown/message), loading spinner, success state voi FaCheckCircle, error alert, blue gradient bg
- [x] 10.4 Tao `src/pages/Home.jsx` — compose 8 sections: Hero, Services, HowItWorks, WhyChooseUs, Pricing, Testimonials, ServiceArea, ContactForm

**Deliverable:** Home page day du 8 sections, ContactForm voi useReducer state

---

### Phase 11 — Inner Pages ✅ DONE
**Muc tieu:** Cac trang rieng: Services, About, Contact, 404

**Tasks:**
- [x] 11.1 Tao `src/pages/ServicesPage.jsx` — page-hero band, ServiceDetail cards cho 6 services (icon + badge + features list + CTA), reuse ContactForm cuoi trang
- [x] 11.2 Tao `src/pages/AboutPage.jsx` — page-hero, company story, 2x2 stats grid (7+ years / 200+ clients / 24/7 / 100%), VALUES 6-card grid, CTA band
- [x] 11.3 Tao `src/pages/ContactPage.jsx` — 4 contact info cards (Phone/Email/Hours/Area), reuse ContactForm
- [x] 11.4 Tao `src/pages/NotFound.jsx` — 404 page, link ve Home. Wire vao App.jsx route `*`

**Deliverable:** 4 trang phu hoan chinh, routing hoat dong voi HashRouter

---

### Phase 12 — Polish & Optimization ✅ DONE
**Muc tieu:** Hoan thien UX, performance, SEO

**Tasks:**
- [x] 12.1 Responsive audit: service-detail-card flexes to column on mobile (<576px), pricing scroll-snap on mobile
- [x] 12.2 Accessibility: aria-labels on icon-only buttons, label↔id linkage on all form fields (cf-name/email/phone/service/message), aria-label on BackToTop
- [x] 12.3 SEO: index.html co day du og:title, og:description, og:type, twitter:card, twitter:title, twitter:description, keywords meta
- [x] 12.4 Performance: React.lazy + Suspense cho inner pages (ServicesPage/AboutPage/ContactPage/NotFound), code splitting
- [x] 12.5 UX extras: BackToTop component (visible khi scroll > 400px, FaChevronUp), .env.example, grep kiem tra — khong co noi dung lawn/mow/grass

**Deliverable:** Website production-ready, khong con noi dung cu ci_lawn

---

### Phase 13 — Deployment ✅ DONE
**Muc tieu:** Deploy len GCS (Google Cloud Storage) voi CI/CD

**Tasks:**
- [x] 13.1 Tao `.env.example` — VITE_FORM_KEY
- [x] 13.2 Tao `deploy-gcs.sh` — `npm run build` + `gsutil -m rsync -r -d dist/ gs://$BUCKET` + Cache-Control: immutable cho /assets/**, no-cache cho index.html
- [x] 13.3 Tao `.github/workflows/deploy-gcs.yml` — trigger on push to main, Node 20, npm ci + build (VITE_FORM_KEY secret), google-github-actions/auth + setup-gcloud, gsutil rsync + setmeta cache headers
- [ ] 13.4 Config GCS bucket: static website hosting, public read (can lam khi deploy thuc te)
- [ ] 13.5 Test production build local: `npm run build && npm run preview` (can .env thuc te)
- [ ] 13.6 Deploy va verify live (can GCS bucket + domain thuc te)

**Deliverable:** deploy-gcs.sh + GitHub Actions workflow san sang. GCS bucket config va live deploy can thuc hien rieng khi co credentials.

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
