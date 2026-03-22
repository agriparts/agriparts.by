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

  const brands = useMemo(
    () =>
      [
        "AGCO",
        "AP Machinebouw",
        "APV",
        "Agrifac",
        "Agromasz",
        "Agro-Tom",
        "Amazone",
        "Amazone (опрыскиватели)",
        "Annaburger",
        "ArmaTrac",
        "Bailey Trailers",
        "Bargam",
        "Bednar",
        "Bergmann",
        "Bogballe",
        "Bredal",
        "CNH Industrial",
        "Case IH",
        "Caterpillar",
        "Cimbria",
        "Claas",
        "Dal-Bo",
        "Damas",
        "Dammann",
        "Deutz-Fahr",
        "Einböck",
        "Escorts",
        "Farmet",
        "Fendt",
        "Fliegl",
        "Great Plains",
        "Gregoire Besson",
        "Güstrower",
        "HE-VA",
        "Hardi",
        "Holmer",
        "Horsch",
        "Househam",
        "Iseki",
        "JCB",
        "John Deere",
        "John Deere (опрыскиватели)",
        "Joskin",
        "Kioti (Daedong)",
        "Kongskilde",
        "Krampe",
        "Kubota",
        "Kuhn",
        "Kuhn (опрыскиватели)",
        "Kverneland",
        "Köckerling",
        "LS Mtron",
        "Lemken",
        "Lovol",
        "Mahindra",
        "Maschio Gaspardo",
        "Massey Ferguson",
        "MaterMacc",
        "McHale",
        "Metaltech",
        "Mitsubishi Agricultural",
        "Monosem",
        "New Holland",
        "Ovlac",
        "Oxbo",
        "Petkus",
        "Pichon",
        "Pöttinger",
        "Pronar",
        "Rauch",
        "Richard Western",
        "Ropa",
        "SDF Group (Same, Lamborghini, Hürlimann)",
        "SIP",
        "SMS CZ",
        "Schmotzer",
        "Simon",
        "Sonalika",
        "Spearhead",
        "Strautmann",
        "Sulky",
        "Tebbe",
        "Tecnoma",
        "Treffler",
        "Tume",
        "Vaderstad",
        "Valtra",
        "Väderstad",
        "Westrup",
        "Wielton Agro",
        "Yanmar",
        "Zocon",
        "Zoomlion",
      ].sort((a, b) => a.localeCompare(b, "ru")),
    []
  );

  const filteredBrands = useMemo(() => {
    const q = brandQuery.trim().toLowerCase();
    if (!q) return brands;
    return brands.filter((b) => b.toLowerCase().includes(q));
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
    setSelectedBrand(item);
    setBrand(item);
    requestAnimationFrame(() => {
      document.getElementById("request")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Сейчас это демонстрационная версия. Следующим шагом мы подключим реальную отправку формы на e-mail."
    );
  };

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-row">
          <a href="#top" className="logo-wrap">
            <div className="logo-box">AP</div>
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
              <a href="#brands">Бренды</a>
              <a href="#advantages">Преимущества</a>
              <a href="#how">Как работаем</a>
              <a href="#request" className="btn btn-primary">
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
                <span>по списку артикулов</span>
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
                  <Phone size={16} /> +375 29 157 63 16
                </a>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">100+</div>
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
                  key={item}
                  type="button"
                  className="brand-card"
                  onClick={() => handleBrandClick(item)}
                >
                  {item}
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
                <div>Телефон: +375 29 157 63 16</div>
                <div>E-mail: info@agriparts.by</div>
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

              <form className="request-form" onSubmit={handleSubmit}>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Название компании"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail для отправки предложения"
                />

                <input
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                    setSelectedBrand(e.target.value);
                  }}
                  placeholder="Бренд техники"
                  list="brands-list"
                />

                <datalist id="brands-list">
                  {brands.map((b) => (
                    <option key={b} value={b} />
                  ))}
                </datalist>

                <textarea
                  value={partsList}
                  onChange={(e) => setPartsList(e.target.value)}
                  className="textarea-large"
                  placeholder={`Список позиций:\nAH140123 - 10 шт\nAXE456789 - 4 шт\nRE521420 - 2 шт`}
                />

                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="textarea-medium"
                  placeholder="Особые пожелания: сроки, условия поставки, аналоги, оригинал / неоригинал, комментарии"
                />

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xls,.xlsx,.csv"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name || "")
                  }
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

      <footer className="site-footer">
        © 2026 Agriparts.by
      </footer>
    </div>
  );
}
