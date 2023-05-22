import { pros } from '../constants/db';

export const Hero = () => {
  return (
    <div className="bg-hero-section">
      <div className='container mx-auto'>
        <div>
          <h2>Get schooled</h2>
          <span>Smiles</span>
          <span>Grin</span>
          <span>Laugh</span>
        </div>

        <button>Register for free</button>

        <div>
          <h3>Learn from the pros</h3>
          <div>
            { pros.length && pros?.map((pro: any) => {
              return (
              <div key={pro.id}>
                <img src={pro.img} alt={`${pro.name} profile image`} />
                <h4>{pro.name}</h4>
                <p>{pro.award}</p>
                <span>{pro.year}</span>
              </div>                
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
};