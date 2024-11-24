import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import "../css/product.css";
import { gsap } from "gsap";
function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      }}
      className=" image-card-part"
    >
      <Card className="product-card relative w-full max-w-sm mx-auto  overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 hover:shadow-2xl transition-all duration-300">
        <div
          className="cursor-pointer group all-part-card"
          onClick={() => handleGetProductDetails(product?._id)}
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="relative w-full h-[240px] product-image-container"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product?.image}
                alt={product?.title}
                className="w-full h-full object-cover"
              />
              <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {product?.totalStock === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-4"
              >
                <Badge className="stock-badge out-of-stock">Out Of Stock</Badge>
              </motion.div>
            ) : product?.totalStock < 10 ? (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-4"
              >
                <Badge className="stock-badge low-stock">
                  Only {product?.totalStock} left
                </Badge>
              </motion.div>
            ) : product?.salePrice > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-4"
              >
                <Badge className="stock-badge sale">Sale</Badge>
              </motion.div>
            ) : null}
          </div>

          <CardContent className=" all-second-part">
            <motion.h2
              className="product-title text-2xl "
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {product?.title}
            </motion.h2>

            <motion.div
              className=" text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="product-description line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {product?.description}
              </p>
            </motion.div>

            <motion.div
              className="flex justify-between items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col">
                <span
                  className={`price ${
                    product?.salePrice > 0 ? "original-price" : "current-price"
                  }`}
                >
                  ₹{product?.price}
                </span>
                {product?.salePrice > 0 && (
                  <motion.span
                    className="sale-price"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    ₹{product?.salePrice}
                  </motion.span>
                )}
              </div>
            </motion.div>
          </CardContent>
        </div>

        <CardFooter className=" pt-0">
          {product?.totalStock === 0 ? (
            <motion.button
              className="disabled-button"
              whileHover={{ scale: 1 }}
              disabled
            >
              Out Of Stock
            </motion.button>
          ) : (
            <motion.button
              onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
              className="animated-add-to-cart relative bg-black hover:bg-gray-800 text-white   shadow-md font-semibold transition-all duration-300"

              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Add to cart</span>
            </motion.button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ShoppingProductTile;
