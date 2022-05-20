import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  Suspense,
} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AppContext from '../../AppContext.js';
import ModalContext from './ModalContext.js';
import UserContext from './UserContext.js';
import { serverURL } from '../../config.js';

const ActionButton = React.lazy(() => import('./ActionButton.jsx'));
const AddToOutfit = React.lazy(() => import('./AddToOutfit.jsx'));
const Modal = React.lazy(() => import('./Modal.jsx'));
const ProductPreviewImages = React.lazy(() =>
  import('./ProductPreviewImages.jsx')
);
const ProductInfo = React.lazy(() => import('./ProductInfo.jsx'));

// CARD
export default function CarouselCard({ product, name, carouselName }) {
  // CONTEXT
  const { selectedProductContext } = useContext(AppContext);
  const { outfitContext } = useContext(UserContext);

  // STATE
  const [selectedProduct, setSelectedProduct] = selectedProductContext;
  const [userOutfit, setUserOutfit] = outfitContext;
  const [imageUrl, setimageUrl] = useState('');
  const [styles, setStyles] = useState([]);
  const [salePrice, setSalePrice] = useState(null);

  // REF
  const modal = useRef(null);

  // HOOKS
  useEffect(() => {
    // API HANDLER
    const getProductStyle = async id => {
      await axios
        .get(`${serverURL}/products/styles`, {
          params: {
            product_id: id,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(res => {
          setStyles(res.data);
          if (res?.data.results[0].salePrice) {
            setSalePrice(res.data.results[0].salePrice);
          }
          return res?.data.results[0].photos[0].thumbnail_url;
        })
        .then(url => setimageUrl(url))
        .catch(err => console.error(err));
    };

    if (product) {
      getProductStyle(product.id);
    }
  }, []);

  // EVENT HANDLERS
  const handleClick = newSelectedProduct => {
    setSelectedProduct(newSelectedProduct);
    document.body.style.cursor = 'wait';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.cursor = 'default';
  };

  const removeFromOutfit = () => {
    setUserOutfit(state => [...state].filter(item => item.id !== product.id));
  };

  // RENDER METHODS
  const renderCard = cardName => {
    if (cardName === 'add-button') {
      return (
        <Suspense fallback={<h3>Loading...</h3>}>
          <CardContainer>
            <ImageContainer>
              <AddToOutfit />
            </ImageContainer>
          </CardContainer>
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<h3>Loading...</h3>}>
          <CardContainer>
            <ActionStyle
              onClick={
                carouselName === 'related-items'
                  ? () => modal.current.open()
                  : () => removeFromOutfit()
              }
            >
              <ActionButton
                name={carouselName === 'related-items' ? 'open-modal' : 'close'}
              />
            </ActionStyle>
            <Modal key={`modal-${product.id}`} ref={modal} product={product} />
            <ImageContainer onClick={() => handleClick(product)}>
              <ProductPreviewImages
                imageUrl={imageUrl}
                productName={product.name}
              />
            </ImageContainer>
            <ProductInfo
              product={product}
              styles={styles}
              salePrice={salePrice}
            />
          </CardContainer>
        </Suspense>
      );
    }
  };

  return renderCard(name);
}

const CardContainer = styled.div`
  width: 13.125rem;
  height: 19.375rem;
  margin: 1rem;
  background-color: #fdf0d5;
  border: 0.25rem solid #38062b;
  position: relative;
  display: flex;
  flex-direction: row;
  &:hover {
    box-shadow: 5px 3px 3px #38062b;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 64%;
  position: absolute;
  top: 0;
  overflow: hidden;
  cursor: pointer;
`;

const ActionStyle = styled.a`
  z-index: 2;
  color: #b1a8ac;
`;
