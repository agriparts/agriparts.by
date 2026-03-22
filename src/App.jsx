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

export default function App() {
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
        "AGCO","AP Machinebouw","APV","Agrifac","Agromasz","Agro-Tom","Amazone",
        "Amazone (опрыскиватели)","Annaburger","ArmaTrac","Bailey Trailers",
        "Bargam","Bednar","Bergmann","Bogballe","Bredal","CNH Industrial",
        "Case IH","Caterpillar","Cimbria","Claas","Dal-Bo","Damas","Dammann",
        "Deutz-Fahr","Einböck","Escorts","Farmet","Fendt","Fliegl",
        "Great Plains","Gregoire Besson","Güstrower","HE-VA","Hardi",
        "Holmer","Horsch","Househam","Iseki","JCB","John Deere",
        "John Deere (опрыскиватели)","Joskin","Kioti (Daedong)","Kongskilde",
        "Krampe","Kubota","Kuhn","Kuhn (опрыскиватели)","Kverneland",
        "Köckerling","LS Mtron","Lemken","Lovol","Mahindra",
        "Maschio Gaspardo","Massey Ferguson","MaterMacc","McHale","Metaltech",
        "Mitsubishi Agricultural","Monosem","New Holland","Ovlac","Oxbo",
        "Petkus","Pichon","Pöttinger","Pronar","Rauch","Richard Western",
        "Ropa","SDF Group (Same, Lamborghini, Hürlimann)","SIP","SMS CZ",
        "Schmotzer","Simon","Sonalika","Spearhead","Strautmann","Sulky",
        "Tebbe","Tecnoma","Treffler","Tume","Vaderstad","Valtra",
        "Väderstad","Westrup","Wielton Agro","Yanmar","Zocon","Zoomlion",
      ].sort((a, b) => a.localeCompare(b, "ru")),
    []
  );

  const filteredBrands = useMemo(() => {
    const q = brandQuery.toLowerCase();
    return brands.filter((b) => b.toLowerCase().includes(q));
  }, [brands, brandQuery]);

  const handleBrandClick = (item) => {
    setSelectedBrand(item);
    setBrand(item);
    document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Следующий шаг — подключение отправки на e-mail.");
  };

  return (
    <>
      <style>{`
        body{margin:0;font-family:Inter,sans-serif}
        .container{max-width:1200px;margin:auto;padding:20px}
        h1{font-size:48px}
        .grid{display:grid;gap:20px}
        .brands{grid-template-columns:repeat(auto-fill,minmax(160px,1fr))}
        .card{border:1px solid #ddd;padding:16px;border-radius:12px}
        .btn{padding:12px 18px;background:#12676d;color:#fff;border:none;border-radius:10px;cursor:pointer}
        .btn:hover{opacity:.9}
      `}</style>

      <div className="container">
        <h1>Agriparts.by</h1>
        <p>Оптовые поставки запчастей по списку артикулов</p>

        <input
          placeholder="Поиск бренда"
          value={brandQuery}
          onChange={(e) => setBrandQuery(e.target.value)}
        />

        <div className="grid brands">
          {filteredBrands.map((b) => (
            <button key={b} className="card" onClick={() => handleBrandClick(b)}>
              {b}
            </button>
          ))}
        </div>

        <div id="request" style={{ marginTop: 40 }}>
          <h2>
            {selectedBrand
              ? `Запрос по бренду ${selectedBrand}`
              : "Отправить запрос"}
          </h2>

          <form onSubmit={handleSubmit} className="grid">
            <input
              placeholder="Название компании"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              placeholder="Список артикулов и количество"
              value={partsList}
              onChange={(e) => setPartsList(e.target.value)}
            />

            <textarea
              placeholder="Особые пожелания"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            />

            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) =>
                setFileName(e.target.files?.[0]?.name || "")
              }
            />

            {fileName && <div>Файл: {fileName}</div>}

            <button className="btn">Отправить</button>
          </form>
        </div>
      </div>
    </>
  );
}
