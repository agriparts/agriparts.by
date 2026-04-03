import { useEffect, useMemo, useRef, useState } from "react";
import {
  Send,
  Upload,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import logo from "../agriparts_logo_transparent.png";
import { brandList, getBrandBySlug } from "../data/brands";

const featuredStrip = [
  "John Deere",
  "Amazone",
  "Horsch",
  "Kverneland",
  "Lemken",
  "Kuhn",
  "Claas",
  "New Holland",
];

export default function BrandPage({ brandSlug }) {
  const data = useMemo(() => getBrandBySlug(brandSlug), [brandSlug]);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [partsList, setPartsList] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

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

  useEffect(() => {
    if (!data) return;

    const description =
      `Запчасти ${data.name} оптом. Оригинальные и аналоговые комплектующие для сельскохозяйственной техники. ` +
      `Отправьте список артикулов и получите предложение от Agriparts.by.`;

    document.title = `Запчасти ${data.name} оптом | Agriparts.by`;

    let meta = document.querySelector("meta[name='description']");
    if (meta) meta.setAttribute("content", description);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://agriparts.by/brands/${brandSlug}`);

    const setMetaProperty = (property, value) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    setMetaProperty("og:title", `Запчасти ${data.name} оптом | Agriparts.by`);
    setMetaProperty("og:description", description);
    setMetaProperty("og:url", `https://agriparts.by/brands/${brandSlug}`);
    setMetaProperty("og:type", "website");
    setMetaProperty("og:image", "https://agriparts.by/og-image.jpg");
  }, [data, brandSlug]);

  if (!data) {
    return (
      <main className="brand-page">
        <div className="container brand-not-found">
          <h1>Бренд не найден</h1>
          <p>Вернитесь на главную страницу и выберите бренд из списка.</p>
          <a href="/" className="btn btn-primary">
            На главную
          </a>
        </div>
      </main>
    );
  }

  const stripBrands = brandList.filter((b) => featuredStrip.includes(b.name));

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-row">
          <a href="/" className="logo-wrap">
            <img src={logo} className="logo-img" alt="Agriparts.by" />
            <div>
              <div className="logo-title">Agriparts.by</div>
              <div className="logo-subtitle">Оптовые поставки запчастей</div>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="/#brands">Бренды</a>
            <a href="/#advantages">Преимущества</a>
            <a href="/#how">Как работаем</a>
            <a href="#brand-request" className="btn btn-primary btn-small">
              Отправить запрос
            </a>
          </nav>
        </div>
      </header>

      <main className="brand-page">
        <section className="brand-hero">
          <div className="container brand-hero-grid">
            <div className="brand-hero-copy">
              <div className="brand-badge">B2B · {data.name}</div>

              <h1 className="brand-title">Запчасти {data.name} оптом</h1>

              <p className="brand-lead">
                Поставляем оригинальные и аналоговые запчасти {data.name} для
                сельскохозяйственной техники. Работаем с оптовыми клиентами и
                запросами по списку артикулов.
              </p>

              <a href="#brand-request" className="btn btn-primary">
                Отправить запрос
              </a>
            </div>

            <div className="brand-hero-visual">
              <div className="brand-hero-logo-card">
                <img
                  src={data.logo}
                  alt={`${data.name} запчасти`}
                  className="brand-hero-logo"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="brand-section">
          <div className="container brand-copy-wrap">
            <h2>Поставка запчастей {data.name}</h2>

            <p>
              Компания Agriparts.by осуществляет оптовые поставки запчастей{" "}
              {data.name} для сельскохозяйственной техники и другого
              оборудования бренда.
            </p>

            <p>
              Мы работаем с оригинальными и аналоговыми комплектующими,
              обеспечивая оптимальное соотношение цены, сроков и надежности
              поставки.
            </p>

            <p>
              Для получения предложения отправьте список артикулов и количество
              — мы подготовим коммерческое предложение с ценами и сроками.
            </p>

            <div className="brand-advantages-row">
              <div className="brand-adv-card">
                <CheckCircle2 size={20} />
                <span>Более 85 брендов</span>
              </div>
              <div className="brand-adv-card">
                <Truck size={20} />
                <span>Прямые поставки</span>
              </div>
              <div className="brand-adv-card">
                <Briefcase size={20} />
                <span>Работа с B2B клиентами</span>
              </div>
              <div className="brand-adv-card">
                <ShieldCheck size={20} />
                <span>Быстрая обработка заявок</span>
              </div>
            </div>

            <div className="brand-strip">
              {stripBrands.map((item) => (
                <img
                  key={item.name}
                  src={item.logo}
                  alt={`${item.name} логотип`}
                  className="brand-strip-logo"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="brand-request" className="brand-form-section">
          <div className="container">
            <h2 className="brand-form-title">Отправить запрос</h2>
            <p className="brand-form-subtitle">
              Укажите бренд {data.name}, список артикулов и количество — мы
              свяжемся с вами.
            </p>

            <form
              className="brand-request-form"
              action="https://formspree.io/f/xqeyvgjg"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                name="company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Компания"
                required
              />

              <div className="brand-form-two">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                  inputMode="tel"
                  required
                />
              </div>

              <input type="hidden" name="_replyto" value={email} />
              <input type="hidden" name="brand" value={data.name} />

              <textarea
                name="parts_list"
                value={partsList}
                onChange={(e) => setPartsList(e.target.value)}
                className="textarea-large"
                placeholder={`Список запчастей ${data.name}:\n123456 - 2 шт\n654321 - 4 шт`}
                required
              />

              <textarea
                name="comment"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="textarea-medium"
                placeholder="Комментарий, сроки, аналоги, пожелания"
              />

              <input type="hidden" name="request_id" value={requestId} />
              <input
                type="hidden"
                name="_subject"
                value={`${requestId} | ${data.name} | ${companyName || "Без компании"} | Agriparts.by`}
              />

              <input
                ref={fileInputRef}
                type="file"
                name="attachment"
                accept=".xls,.xlsx,.csv"
                style={{ display: "none" }}
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              />

              <div className="upload-box">
                <div className="upload-row">
                  <Upload className="upload-icon" size={20} />
                  <div className="upload-text">
                    <div className="upload-title">Прикрепить Excel-файл</div>
                    <div className="upload-subtitle">.xls, .xlsx, .csv</div>
                  </div>
                  <button
                    type="button"
                    className="upload-btn"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  >
                    Обзор файла
                  </button>
                </div>
              </div>

              {fileName && <div className="file-name">Файл: {fileName}</div>}

              <button type="submit" className="btn btn-primary full-width">
                <Send size={16} /> Отправить запрос
              </button>
            </form>

            <div className="brand-bottom-points">
              <span>Оригинал и аналоги</span>
              <span>Быстрая поставка</span>
              <span>Выгодные условия</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">© 2026 Agriparts.by</footer>
    </div>
  );
}
