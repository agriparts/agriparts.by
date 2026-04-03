import logo from "./agriparts_logo_transparent.png";
import { useMemo, useRef, useState } from "react";
import {
  Phone,
  Send,
  ChevronRight,
  Menu,
  Upload,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import BrandPage from "./pages/BrandPage";
import { brandList, slugifyBrand } from "./data/brands";

export default function AgripartsLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandQuery, setBrandQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brand, setBrand] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [partsList, setPartsList] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const [phone, setPhone] = useState("");

  const [requestId] = useState(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    const rnd = Math.floor(Math.random() * 900 + 100);
    return `AP-${y}${m}${d}-${hh}${mm}${ss}-${rnd}`;
  });

  const brands = brandList;

  const filteredBrands = useMemo(() => {
    const q = brandQuery.trim().toLowerCase();
    if (!q) return brands;
    return brands.filter((b) => b.name.toLowerCase().includes(q));
  }, [brands, brandQuery]);

  const advantages = [
    {
      icon: Search,
      title: "Оптовые запросы",
      text: "Работаем со списками запчастей: артикул и количество.",
    },
    {
      icon: ShieldCheck,
      title: "Удобно для закупки",
      text: "Можно вставить список вручную или прикрепить Excel-файл.",
    },
    {
      icon: Truck,
      title: "Комплексная поставка",
      text: "Готовим предложение по полному списку позиций.",
    },
  ];

  const steps = [
    "Вы отправляете список артикулов и количество",
    "Мы проверяем наличие и применяемость",
    "Готовим цены и сроки поставки",
    "Согласовываем и отгружаем заказ",
  ];

  const handleBrandClick = (item) => {
    window.location.href = `/brands/${slugifyBrand(item)}`;
  };

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  if (currentPath.startsWith("/brands/")) {
    const brandSlug = currentPath.replace("/brands/", "").replace(/\/$/, "");
    return <BrandPage brandSlug={brandSlug} />;
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-row">
          <a href="#top" className="logo-wrap">
            <img src={logo} className="logo-img" alt="Agriparts.by" />
            <div>
              <div className="logo-title">Agriparts.by</div>
              <div className="logo-subtitle">Оптовые поставки запчастей</div>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#brands">Бренды</a>
            <a href="#advantages">Преимущества</a>
            <a href="#how">Как работаем</a>
            <a href="#request" className="btn btn-primary btn-small">
              Отправить запрос
            </a>
          </nav>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            <Menu size={20} />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="container mobile-menu-links">
              <a href="#brands" onClick={() => setMenuOpen(false)}>
                Бренды
              </a>
              <a href="#advantages" onClick={() => setMenuOpen(false)}>
                Преимущества
              </a>
              <a href="#how" onClick={() => setMenuOpen(false)}>
                Как работаем
              </a>
              <a
                href="#request"
                className="btn btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                Отправить запрос
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <div>
              <div className="badge">B2B · Беларусь</div>

              <h1 className="hero-title">
                Оптовые поставки запчастей
                <span>к импортной сельхозтехнике</span>
              </h1>

              <p className="hero-text">
                Отправьте бренд, список артикулов и количество. Можно вставить
                список в форму или прикрепить Excel-файл.
              </p>

              <div className="hero-actions">
                <a href="#request" className="btn btn-primary">
                  Отправить запрос <ChevronRight size={16} />
                </a>
                <a href="tel:+375291576316" className="btn btn-outline">
                  <Phone size={16} /> +375 29 638 18 48
                </a>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">85+</div>
                  <div className="stat-label">брендов техники</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">Excel</div>
                  <div className="stat-label">или список в форме</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">B2B</div>
                  <div className="stat-label">оптовые запросы</div>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-small-title">Пример запроса</div>
              <div className="example-list">
                <div className="example-item">Бренд: John Deere</div>
                <div className="example-item">AH140123 — 10 шт</div>
                <div className="example-item">AXE456789 — 4 шт</div>
                <div className="example-item">RE521420 — 2 шт</div>
                <a href="#request" className="btn btn-dark full-width">
                  Перейти к форме
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="brands" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Бренды</h2>
              <div className="search-box">
                <input
                  value={brandQuery}
                  onChange={(e) => setBrandQuery(e.target.value)}
                  placeholder="Поиск по бренду"
                />
              </div>
            </div>

            <div className="brands-count">{filteredBrands.length} брендов</div>

            <div className="brands-grid">
              {filteredBrands.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className="brand-card"
                  onClick={() => handleBrandClick(item.name)}
                >
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="brand-logo"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  <span className="brand-name">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="section section-light">
          <div className="container">
            <h2 className="section-title">Преимущества</h2>
            <div className="advantages-grid">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="info-card">
                    <div className="icon-wrap">
                      <Icon size={22} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <h2 className="section-title">Как работаем</h2>
            <div className="steps-grid">
              {steps.map((step, i) => (
                <div key={step} className="step-card">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-text">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-bottom">
          <div className="container request-grid">
            <div className="contact-card">
              <h2>Свяжитесь с нами</h2>
              <div className="contact-list">
                <div>
                  <strong>ООО ЭДВИСЕНС</strong>
                </div>
                <div>Проспект Машерова 25/3, офис 612</div>
                <div>220002 Минск</div>
                <div style={{ marginTop: "12px" }}>
                  Телефон:{" "}
                  <a href="tel:+375296381848" className="contact-link">
                    +375 29 638 18 48
                  </a>
                </div>
                <div>
                  E-mail:{" "}
                  <a href="mailto:info@agriparts.by" className="contact-link">
                    info@agriparts.by
                  </a>
                </div>
                <div>Формат запроса: бренд + артикул + количество</div>
              </div>
            </div>

            <div id="request" className="form-card">
              <h3>
                {selectedBrand
                  ? `Запрос по бренду ${selectedBrand}`
                  : "Отправить оптовый запрос"}
              </h3>

              <p className="form-intro">
                {selectedBrand
                  ? `Укажите список позиций по бренду ${selectedBrand} или прикрепите Excel-файл.`
                  : "Укажите бренд техники и вставьте список позиций, либо прикрепите Excel-файл."}
              </p>

              <form
                className="request-form"
                action="https://formspree.io/f/xqeyvgjg"
                method="POST"
                encType="multipart/form-data"
              >
                <input
                  name="company"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Название компании"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail для отправки предложения"
                  required
                />

                <input type="hidden" name="_replyto" value={email} />

                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                  inputMode="tel"
                  required
                />

                <input
                  name="brand"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                    setSelectedBrand(e.target.value);
                  }}
                  placeholder="Бренд техники"
                  list="brands-list"
                  required
                />

                <datalist id="brands-list">
                  {brands.map((b) => (
                    <option key={b.name} value={b.name} />
                  ))}
                </datalist>

                <textarea
                  name="parts_list"
                  value={partsList}
                  onChange={(e) => setPartsList(e.target.value)}
                  className="textarea-large"
                  placeholder={`Список позиций:\nAH140123 - 10 шт\nAXE456789 - 4 шт\nRE521420 - 2 шт`}
                  required
                />

                <textarea
                  name="comment"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="textarea-medium"
                  placeholder="Особые пожелания: сроки, условия поставки, аналоги, оригинал / неоригинал, комментарии"
                />

                <input type="hidden" name="request_id" value={requestId} />

                <input
                  type="hidden"
                  name="_subject"
                  value={`${requestId} | ${brand || "Без бренда"} | ${companyName || "Без компании"} | Agriparts.by`}
                />

                <input
                  ref={fileInputRef}
                  type="file"
                  name="attachment"
                  accept=".xls,.xlsx,.csv"
                  multiple={false}
                  style={{ display: "none" }}
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />

                <div className="upload-box">
                  <div className="upload-row">
                    <Upload className="upload-icon" size={20} />
                    <div className="upload-text">
                      <div className="upload-title">
                        Excel-файл со списком запчастей
                      </div>
                      <div className="upload-subtitle">.xls, .xlsx, .csv</div>
                    </div>
                    <button
                      type="button"
                      className="upload-btn"
                      onClick={() =>
                        fileInputRef.current && fileInputRef.current.click()
                      }
                    >
                      Выбрать файл
                    </button>
                  </div>
                </div>

                {fileName && <div className="file-name">Файл: {fileName}</div>}

                <button type="submit" className="btn btn-primary full-width">
                  <Send size={16} /> Отправить запрос
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">© 2026 Agriparts.by</footer>
    </div>
  );
}
