import Card from "./Card";
import PropTypes from "prop-types"


function Slide({product, index, list}) {
    return (
      <>
        <div
          id={`slide${index}`}
          className="carousel-item relative w-full"
        >
          <Card product={product}></Card>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index == 0 ? list.length - 1 : index - 1}`}
              className="btn btn-sm btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index == list.length - 1 ? 0 : index + 1}`}
              className="btn btn-sm btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </>
    );
}

Slide.propTypes = {
    product: PropTypes.object,
    index: PropTypes.number,
    list: PropTypes.array
}
export default Slide;