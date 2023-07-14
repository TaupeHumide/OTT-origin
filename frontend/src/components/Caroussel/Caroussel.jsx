import "./Caroussel.scss";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import PhotoCard from "./PhotoCard";

function Caroussel({ photoList }) {
  return (
    <div className="carousel-photocard-container">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {photoList.map((photo) => (
          <div key={photo.id} className="carousel-photocard-body">
            <PhotoCard
              imageSrc={photo.src}
              alt={photo.alt}
              /* title={photo.title} */
              description={photo.description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
Caroussel.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Caroussel;
