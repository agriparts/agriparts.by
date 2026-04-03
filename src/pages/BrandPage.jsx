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
      `Запчасти ${data.name} в Беларуси. Оригинальные и аналоговые комплектующие для сельскохозяйственной техники. ` +
      `Отправьте список артикулов и получите предложение от Agriparts.by.`;

    document.title = `Запчасти ${data.name} в Беларуси | Agriparts.by`;

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

    setMetaProperty("og:title", `Запчасти ${data.name} в Беларуси | Agriparts.by`);
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

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-row">
          <a href="/" className="logo-wrap">
            <img src={logo} className="logo-img" alt="Agriparts.by" />
            <div>
              <div className="logo-title">Agriparts.by</div>
              <div className="logo-subtitle">Поставки запчастей</div>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="/#brands">Бренды</a>
            <a href="/#advantages">Преимущества</a>
            <a href="/#how">Как работаем</a>
            <a href="#brand-request" className="btn btn-primary btn-small">
              Отправить заявку
            </a>
          </nav>
        </div>
      </header>

      <main className="brand-page">
        <section className="brand-hero-v2">
          <div className="container brand-hero-v2-grid">
            <div className="brand-hero-v2-copy">
              <div className="brand-badge-v2">Беларусь · {data.name}</div>

              <h1 className="brand-title-v2">Запчасти {data.name} в Беларуси</h1>

              <p className="brand-lead-v2">
                Поставляем оригинальные и аналоговые запчасти {data.name} для
                сельскохозяйственной техники. Работаем с фермерскими
                хозяйствами, сервисами и компаниями.
              </p>

              <div className="brand-hero-v2-actions">
                <a href="#brand-request" className="btn btn-primary">
                  Отправить заявку
                </a>
              </div>
            </div>

            <div className="brand-hero-v2-card">
              <img
                src={data.logo}
                alt={`${data.name} запчасти`}
                className="brand-hero-v2-logo"
              />
            </div>
          </div>
        </section>

        <section className="brand-content-v2">
          <div className="container">
            <div className="brand-text-card-v2">
              <h2>Поставка запчастей {data.name}</h2>

              <p>
                Компания Agriparts.by поставляет запчасти {data.name} для
                сельскохозяйственной техники и другого оборудования бренда по
                всей Беларуси.
              </p>

              <p>
                Мы работаем с оригинальными и аналоговыми комплектующими,
                помогая подобрать оптимальное решение по цене, срокам и
                надежности поставки.
              </p>

              <p>
                Для получения предложения отправьте список артикулов и
                количество — мы подготовим предложение с ценами и сроками.
              </p>
            </div>

            <div className="brand-adv-grid-v2">
              <div className="brand-adv-item-v2">
                <CheckCircle2 size={18} />
                <span>Более 85 брендов</span>
              </div>
              <div className="brand-adv-item-v2">
                <Truck size={18} />
                <span>Прямые поставки</span>
              </div>
              <div className="brand-adv-item-v2">
                <Briefcase size={18} />
                <span>Работаем с фермерами и компаниями</span>
              </div>
              <div className="brand-adv-item-v2">
                <ShieldCheck size={18} />
                <span>Быстрая обработка заявок</span>
              </div>
            </div>

            <div className="brand-marquee-section">
              <div className="brand-marquee-head">
                <h3>Другие бренды в поставке</h3>
                <p>
                  Работаем с широким спектром брендов сельскохозяйственной техники
                  и комплектующих.
                </p>
              </div>

              <div className="brand-marquee">
                <div className="brand-marquee-track">
                  {[...brandList, ...brandList].map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="brand-marquee-item"
                    >
                      <img
                        src={item.logo}
                        alt={`${item.name} логотип`}
                        className="brand-marquee-logo"
                      />
                      <span className="brand-marquee-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="brand-request" className="brand-form-section-v2">
          <div className="container">
            <div className="brand-form-head-v2">
              <h2>Отправить заявку</h2>
              <p>
                Укажите бренд {data.name}, список артикулов и количество — мы
                подготовим предложение и свяжемся с вами.
              </p>
            </div>

            <form
              className="brand-request-form-v2"
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

              <div className="brand-form-two-v2">
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
                    onClick={() =>
                      fileInputRef.current && fileInputRef.current.click()
                    }
                  >
                    Обзор файла
                  </button>
                </div>
              </div>

              {fileName && <div className="file-name">Файл: {fileName}</div>}

              <button type="submit" className="btn btn-primary full-width">
                <Send size={16} /> Отправить заявку
              </button>
            </form>

            <div className="brand-bottom-points-v2">
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
