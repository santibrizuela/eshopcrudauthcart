'use client'

import {CartProductType, SelectedImgType} from "@/app/product/[productId]/ProductDetails";

interface SetColorProps{
    images:SelectedImgType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: SelectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({
    images, cartProduct, handleColorSelect
}) => {
    return <div>
        <div className="flex gap-4 items-center">
            <span className="font-semibold">COLOR:</span>
            <div className="flex gap-1">
                {images.map((image) =>{
                    return (
                        <div
                            key={image.color}
                            onClick={() => handleColorSelect(image)} 
                            className={`
                                h-16 
                                w-16
                                border-teal-300 
                                flex 
                                items-center 
                                justify-center 
                                rounded-lg
                                ${
                                    cartProduct.selectedImg.color === image.color
                                        ? "border-[2px]"
                                        : "border-none"
                                }`}
                        >
                            
                            <div className="cursor-pointer text-center"><p>{image.color}</p></div>
                            
                        </div>
                        
                    );
                })}
            </div>
        </div>
    </div>;
};
 
export default SetColor;