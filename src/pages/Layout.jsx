import React, { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
const Layout = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (!Array.isArray(products) || products.length === 0) {
    return <div>Loading...</div>; // or some error message
  }
  
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const responsiveSettings = [
    {
      breakpoint: { max: 3000, min: 1024 },
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ];

  const slideImages = [
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-MainBannerDailyChanging-Z1-P7-TIG-Bullmer-Min70.jpg",
      caption: "slide1",
    },
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-MainBannerDailyChanging-Z1-P1-BBS-5090.gif",
      caption: "slide2",
    },
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-MainBannerDailyChanging-Z1-P4-Avaasa-DNMX-Flat70.jpg",
      caption: "slide3",
    },
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-MainBannerDailyChanging-Z1-P3-Adidas-Puma-Min50.jpg",
      caption: "slide4",
    },
  ];

  const productCategoryImages = [
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Westernwear-Johnplayers-Levis-Min40.jpg",
      caption: "jeans",
    },
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Westernwear-TIGC-Britishclub-Flat50.jpg",
      caption: "shirts",
    },
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Kids-Gap-Adidas-Min30.jpg",
      caption: " kids",
    },
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Footwear-Puma-Adidas-Min40.jpg",
      caption: "shoes",
    },
  ];

  return (
    <div className="relative ">
      <div>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          responsive={responsiveSettings}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  height: "400px",
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="mt-2 mb-2 bg-orange-300 rounded shadow-sm">
        <h2 className="p-2 mb-2 text-xl font-semibold text-center bg-orange-400 rounded shadow-sm">
          Shop by category
        </h2>
        <Slide slidesToScroll={1} slidesToShow={2} indicators={true}>
          {productCategoryImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className="w-[350px] h-[500px] items-center"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="mt-2 mb-2 bg-green-300 rounded shadow-sm ">
        <h2 className="p-2 mb-2 text-xl font-semibold text-center bg-green-400 rounded shadow-sm">
          product Available
        </h2>
        <Slide
          slidesToScroll={2}
          slidesToShow={2}
          indicators={true}
          responsive={responsiveSettings}
        >
          {products.map((element) => {
            return (
              <ProductCard key={element.id} {...element} showButtons={false} />
            );
          })}{" "}
        </Slide>
      </div>
    </div>
  );
};

export default Layout;
