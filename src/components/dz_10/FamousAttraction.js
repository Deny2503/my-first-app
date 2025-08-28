export default function FamousAttraction({ name }) {
  return (
    <div className="card">
      <h2>Самая известная памятка</h2>
      <p>{name} — символ города, был установлен в 1981 году как часть мемориального комплекса «Национальный музей истории Великой Отечественной войны». Этот 102-метровый памятник изображает Родину с мечом и щитом и является одним из самых высоких в Европе.</p>
      <img src="https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/kyiv-motherland-statue.jpg" alt={name} />
    </div>
  );
}