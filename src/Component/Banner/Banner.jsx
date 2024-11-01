import bannerImg from '../../assets/assets/books.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-xl min-h-screen">
  <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-success text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;