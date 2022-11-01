import { Box, HStack, Image, Stack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import FreelancerRating from "./FreelancerRating";



const ProductItem = ({product}) => {
  const handleMsgClick = (evt: React.MouseEvent) => {

  };


  return (
    <Stack className="py-5 px-3 shadow-xl" spacing={"3"}>
      <Box height={"200px"}>
          <Image src={product.image} alt="" height={"full"} width="full" objectFit={"cover"}/>
        </Box>
          <div>
            <p className="font-[500] text-[14px] md:text-[20px]">{product.name}</p>
            <p className="font-[400] text-sm text-[16px]">{product.price}</p>
          </div>
      <HStack justifyContent={"space-between"}>

      <div><FreelancerRating rating={product.rating} /></div>
      <div className="flex items-center space-x-3 justify-between">
        <div className="text-white bg-orange py-1 px-3 rounded-lg flex items-center space-x-3 hover:cursor-pointer hover:shadow-md" >
          <span><FaPaperPlane /> </span>
          <span>Buy</span>
        </div>
      </div>
      </HStack>
    </Stack>
  )
};

export default ProductItem;