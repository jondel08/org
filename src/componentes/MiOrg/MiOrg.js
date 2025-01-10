import "./MiOrg.css";

const MiOrg = ({ mostrar, toggleMostrar }) => {
  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img
        src="/img/add.png"
        alt="add"
        onClick={() => {
          toggleMostrar();
        }}
      />
    </section>
  );
};

export default MiOrg;
