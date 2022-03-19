import React from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
  console.log(item);

  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--title">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average}점</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} season
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`} className="featured--watchbutton">
                ▶ 재생
              </a>
              <a href={`/list/add/${item.id}`} className="featured--listbutton">
                + 내가 찜한 콘텐츠
              </a>
            </div>
            <div className="featured--genres">
              <strong>장르 : </strong>
              {genres.join(",")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
