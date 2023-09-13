declare module 'react-star-ratings' {
    import React from 'react';
  
    interface StarRatingsProps {
      rating: number;
      starRatedColor?: string;
      starEmptyColor?: string;
      starHoverColor?: string;
      starDimension?: string;
      starSpacing?: string;
      numberOfStars?: number;
      name?: string;
      changeRating?: (newRating: number) => void;
      isSelectable?: boolean;
    }
  
    const StarRatings: React.FC<StarRatingsProps>;
    export default StarRatings;
  }
  