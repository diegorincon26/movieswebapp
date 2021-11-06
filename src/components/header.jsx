const Header = ({ title }) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">{title}</p>
          <p className="subtitle">Search your favorite movies!</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
