import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { comments } from "@/data/CommunityDesignersComment";
import CommunityCard from "../cards/CommunityCard";

const CommentCarousel = React.forwardRef<Slider>((props, ref) => {

  const settings = {
    dots: false,
    infinite: true,
    arrow: true,
    speed: 2000,
    centerMode: true,
    centerPadding: "2px",
    adaptiveHeight: false,
    slidesToShow: 3,
   
    touchThreshold: 1000,
    variableWidth: true,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <Slider className="h-[410px] md:h-[400px]" ref={ref}  {...settings}>
        {comments.map((comment) => (
          <CommunityCard comment={comment} key={comment.id} />
        ))}
      </Slider>
  );
});
CommentCarousel.displayName = "CommentCarousel";
export default CommentCarousel;