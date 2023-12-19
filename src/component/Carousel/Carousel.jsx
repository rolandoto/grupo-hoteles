import { Carousel } from "@material-tailwind/react";
 

export function CarouselDefault({imgById}) {
    return (
      <Carousel className="rounded-sm ">
        {imgById.map((itemImg) =>(
                <img
                src={itemImg.img}
                alt="image"
                className="h-full w-full object-cover foto-fija "
                />
        ))}
     
      </Carousel>
    );
  }