import "./App.css";

function App() {
  return (
    <div className="fundo">
      <header className="header">Site laura advogada.</header>
      <section className="firstSection">
        <div className="left"></div>
        <div className="right">
          <img src={`${process.env.PUBLIC_URL}/img/laura_adv.png`} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
