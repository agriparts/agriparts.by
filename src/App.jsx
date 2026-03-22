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

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12676d] text-base font-bold text-white">
              AP
            </div>
            <div>
              <div className="text-lg font-semibold">Agriparts.by</div>
              <div className="text-xs text-slate-500">Оптовые поставки запчастей</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a href="#brands" className="text-sm text-slate-600 hover:text-[#12676d]">Бренды</a>
            <a href="#advantages" className="text-sm text-slate-600 hover:text-[#12676d]">Преимущества</a>
            <a href="#how" className="text-sm text-slate-600 hover:text-[#12676d]">Как работаем</a>
            <a href="#request" className="rounded-xl bg-[#12676d] px-4 py-2.5 text-sm font-semibold text-white">Отправить запрос</a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-200 p-2 md:hidden"
            aria-label="Открыть меню"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 text-sm">
              <a href="#brands" className="py-2">Бренды</a>
              <a href="#advantages" className="py-2">Преимущества</a>
              <a href="#how" className="py-2">Как работаем</a>
              <a href="#request" className="mt-3 rounded-xl bg-[#12676d] px-4 py-3 text-center font-semibold text-white">Отправить запрос</a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,103,109,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(11,31,59,0.08),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#12676d]/15 bg-[#12676d]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#12676d]">
                B2B · Беларусь
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Оптовые поставки запчастей
                <span className="block text-[#12676d]">по списку артикулов</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base text-slate-600 md:text-lg">
                Отправьте бренд, список артикулов и количество. Можно вставить список в форму или прикрепить Excel-файл.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#request" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#12676d] px-6 py-3.5 text-sm font-semibold text-white">
                  Отправить запрос <ChevronRight className="h-4 w-4" />
                </a>
                <a href="tel:+375291576316" className="inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3.5 text-sm font-semibold">
                  <Phone className="h-4 w-4" /> +375 29 157 63 16
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="mb-4 text-sm text-slate-500">Пример запроса</div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">Бренд: John Deere</div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">AH140123 — 10 шт</div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">AXE456789 — 4 шт</div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">RE521420 — 2 шт</div>
                <a href="#request" className="flex w-full items-center justify-center rounded-2xl bg-[#0B1F3B] px-4 py-3 text-sm font-semibold text-white">
                  Перейти к форме
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="brands" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold">Бренды</h2>
            <div className="w-full md:w-[360px]">
              <input
                value={brandQuery}
                onChange={(e) => setBrandQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-[#12676d]"
                placeholder="Поиск по бренду"
              />
            </div>
          </div>

          <div className="mb-5 text-sm text-slate-500">{filteredBrands.length} брендов</div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filteredBrands.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSelectedBrand(item);
                  setBrand(item);
                  requestAnimationFrame(() => {
                    document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  });
                }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-left text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-[#12676d]/30 hover:shadow-md"
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section id="advantages" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <h2 className="mb-8 text-3xl font-semibold">Преимущества</h2>
            <div className="grid gap-5 lg:grid-cols-3">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                    <div className="mb-4 text-[#12676d]"><Icon className="h-6 w-6" /></div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="mb-8 text-3xl font-semibold">Как работаем</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-lg font-bold text-[#12676d]">{i + 1}</div>
                <div className="text-sm">{step}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#0B1F3B] p-8 text-white">
              <h2 className="text-3xl font-semibold">Свяжитесь с нами</h2>
              <div className="mt-6 space-y-3 text-sm text-white/85">
                <div>Телефон: +375 29 157 63 16</div>
                <div>E-mail: info@agriparts.by</div>
                <div>Формат запроса: бренд + артикул + количество</div>
              </div>
            </div>

            <div id="request" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">
                {selectedBrand ? `Запрос по бренду ${selectedBrand}` : "Отправить оптовый запрос"}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {selectedBrand
                  ? `Укажите список позиций по бренду ${selectedBrand} или прикрепите Excel-файл.`
                  : "Укажите бренд техники и вставьте список позиций, либо прикрепите Excel-файл."}
              </p>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-[#12676d]"
                  placeholder="Название компании"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-[#12676d]"
                  placeholder="E-mail для отправки предложения"
                />

                <input
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                    setSelectedBrand(e.target.value);
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-[#12676d]"
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
                  className="min-h-[180px] w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-[#12676d]"
                  placeholder={`Список позиций:\nAH140123 - 10 шт\nAXE456789 - 4 шт\nRE521420 - 2 шт`}
                />

                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="min-h-[120px] w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-[#12676d]"
                  placeholder="Особые пожелания: сроки, условия поставки, аналоги, оригинал / неоригинал, комментарии"
                />

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xls,.xlsx,.csv"
                  style={{ display: "none" }}
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />

                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <Upload className="h-5 w-5 text-[#12676d]" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Excel-файл со списком запчастей</div>
                      <div className="text-xs text-slate-500">.xls, .xlsx, .csv</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:border-[#12676d] hover:text-[#12676d]"
                    >
                      Выбрать файл
                    </button>
                  </div>
                </div>

                {fileName && (
                  <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                    Файл: {fileName}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#12676d] py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Отправить запрос
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © 2026 Agriparts.by
      </footer>
    </div>
  );
}
