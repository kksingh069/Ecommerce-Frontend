import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import BestProduct from "@/components/shopping-view/best-product";
import Footer from "@/components/shopping-view/footer";
import { getFeatureImages } from "@/store/common-slice";
// import { motion } from "framer-motion";
import homeveda from "@/assets/new-group-image.jpg";
// import sone from "@/assets/soap-1.jpg";
// import stwo from "@/assets/soap-2.jpg";
// import sthree from "@/assets/soap-3.jpg";
// import sfour from "@/assets/soap-4.jpg";

const categoriesWithIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  // console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen the-main-part">
      <div className="new-top-part">
        <div
          className="hero-container-all"
          id="communication-new"
          style={{
            backgroundImage: `url(${homeveda})`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        {/* <div className="allu">
          <div className="grid-container">
            <div className="grid-item">
              <img src={sone} alt="Grid 1" className="grid-image" />
              <div className="image-name">Ayurvedic Treatment</div>
            </div>
            <div className="grid-item">
              <img src={stwo} alt="Grid 2" className="grid-image" />
              <div className="image-name">Natural Healing</div>
            </div>
            <div className="grid-item">
              <img src={sthree} alt="Grid 3" className="grid-image" />
              <div className="image-name">Herbal Medicine</div>
            </div>
            <div className="grid-item">
              <img src={sfour} alt="Grid 4" className="grid-image" />
              <div className="image-name">Wellness Therapy</div>
            </div>
          </div>
        </div> */}
      </div>

      {}

      <section className="all-main-body">
        <div className="container-all   the-main">
          <h2 className="text-4xl font-bold  mb-14 fpp">
            Our Indulgent Product Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  // eslint-disable-next-line react/jsx-key
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <BestProduct />
      <Footer />
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
      <style>{`
        
.all-main-body {

   
    border-radius: 20px;
          
    padding: 20px 25px;
    // box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Darker and more pronounced shadow */
}


    .fpp{
    color:black;
      margin:0;
      padding:0;
      margin-bottom:1rem;
    }
    .the-main{
             background: #fff;
    padding: 20px 25px;
    border-radius:8px;
       
    }
    .the-main-part{
background-color: #f8f8f8;

    }
        /* Layout Styles */
.new-top-part {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  min-height: 600px;
}

.hero-container {
  flex: 1.5;
  position: relative;
  
  perspective: 1000px;
}



.allu {
  flex: 1;
  display: flex;
  align-items: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.grid-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.grid-image {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.image-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  font-weight: 500;
  transform: translateY(100%);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
}

/* Hero Animation */
@keyframes rotateHero {
  0% {
    transform: rotate3d(0, 1, 0, 2deg) scale(1.05);
  }
  33% {
    transform: rotate3d(1, 0, 0, 3deg) scale(1.07);
  }
  66% {
    transform: rotate3d(0, 1, 0, -3deg) scale(1.05);
  }
  100% {
    transform: rotate3d(0, 1, 0, 0deg) scale(1.05);
  }
}

/* Hover Effects */
.hero-image:hover {
  transform: scale(1.1) rotate3d(1, 1, 0, 15deg);
  filter: brightness(1.1) contrast(1.15);
}

.grid-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.grid-item:hover .grid-image {
  transform: scale(1.15);
}

.grid-item:hover .image-name {
  transform: translateY(0);
}

/* Individual Grid Item Animations */
.grid-item:nth-child(1) {
  animation: floatOne 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
}

.grid-item:nth-child(2) {
  animation: floatTwo 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.grid-item:nth-child(3) {
  animation: floatThree 7s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

.grid-item:nth-child(4) {
  animation: floatFour 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}

@keyframes floatOne {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes floatTwo {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(2deg); }
}

@keyframes floatThree {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes floatFour {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(-2deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .new-top-part {
    flex-direction: column;
  }
  
  .hero-container {
    height: 400px;
  }
  
  .grid-container {
    margin-top: 2rem;
    gap: 1rem;
  }
  
  .grid-image {
    aspect-ratio: 16/9;
  }
  
  .image-name {
    font-size: 14px;
    padding: 8px;
  }
}

.new-top-part {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.hero-container-all {
  width: 100%;
  height: 100vh; /* Set appropriate height */
  position: relative;
  background-color: #f5f5f5; /* Fallback color */
  border-radius: 8px; /* Optional for rounded corners */
  overflow: hidden;
}

.shimmer-effect::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 75%
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}


/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}
      `}</style>
    </div>
  );
}

export default ShoppingHome;
