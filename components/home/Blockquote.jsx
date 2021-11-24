import React from "react";

const Blockquote = () => {
  return (
    <section
      id="home-quote"
      className="p-10 mb-8"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <blockquote className="blockquote text-center text-white p-5 ">
        <p className="text-4xl">
          <em data-aos="zoom-in-right" data-aos-duration="3000">
            {`"`}Happiness is not on the road to somewhere. Happiness is the
            road itself.
            {`"`}
          </em>
        </p>
        <footer className="blockquote-footer text-white">-Bob Dylan</footer>
      </blockquote>
    </section>
  );
};

export default Blockquote;
