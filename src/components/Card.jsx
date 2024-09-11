import "../styles/Card.css";

const Card = () => {
  return (
    <>
      <div className='cardBackground'>
        <div className='card'>
          <div className='cardTop'/>
          <div className="profileCenter">
            <div className='profileImage'></div>
          </div>
          <h1 className='title'>Victor Crest <span>26</span></h1>
          <p className='titleDesc'>London</p>
          <div className='stats'>
            <div className='stat'>
              <p className='statValue'>80K</p>
              <p className='statDesc'>Followers</p>
            </div>
            <div className='stat'>
              <p  className='statValue'>803K</p>
              <p className='statDesc'>Likes</p>
            </div>
            <div className='stat'>
              <p className='statValue'>1.4K</p>
              <p className='statDesc'>Photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
