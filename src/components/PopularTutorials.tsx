import { popularTutorials } from "../constants/db";

export const PopularTutorials = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h3>Most popular tutorials</h3>
        <div>
          {
            popularTutorials.length && popularTutorials?.map((tutorial : any) => {
              return (
                <div key={tutorial.id}>
                  <img src={tutorial.video} alt="" />
                  <h3>{tutorial.videoTitle}</h3>
                  <p>{tutorial.videoDescription}</p>
                  <div>
                    <img src="" alt="" />
                    <h5></h5>
                  </div>
                </div>                
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
