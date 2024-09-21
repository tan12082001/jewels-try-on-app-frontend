import { useSelector } from 'react-redux';
import EachProductTile from './EachProductTile';

const FavouriteProducts = () => {
  const likedProducts = useSelector((state) => state.userProfile.likes);
  const mode = useSelector((state) => state.userAuth.mode);

  return (
    <div className="favourites-products-inner-div">
      {likedProducts.map((product) => {
        console.log(`Liked product id is: ${product.id}`);
        return (
          <EachProductTile
            mode={mode}
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default FavouriteProducts;
