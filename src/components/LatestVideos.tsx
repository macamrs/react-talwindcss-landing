import { latestVideos } from "../constants/db"

export const LatestVideos = () => {
  return (
    <section>
    <div className="container mx-auto">
      <h3>Latest videos</h3>
      <div>
        {        
          latestVideos.length && latestVideos?.map((video: any) => {
            return (
              <div key={video.id}>
                <img src={video.video} alt="" />
                <h3>{video.videoTitle}</h3>
                <p>{video.videoDescription}</p>
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
