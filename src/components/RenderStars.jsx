 const RenderStars = ({ rating }) => {
   const stars = [];
   const fullStars = Math.floor(rating);
   const hasHalfStar = rating % 1 !== 0;

   for (let i = 0; i < fullStars; i++) {
     stars.push(
       <span key={i} className="text-yellow-400">
         &#9733;
       </span>
     );
   }

   if (hasHalfStar) {
     stars.push(
       <span key="half" className="text-yellow-400">
         &#9734;
       </span>
     );
   }

   return stars;
 };
export default RenderStars
