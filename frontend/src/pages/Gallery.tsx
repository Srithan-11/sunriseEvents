
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "/images/3d8ce9bd-09fc-4705-9a4b-bffbda926f7f.png",
    "/images/2a552d65-3b3f-43c3-af4a-d2e70a6ad35a.png",
    "/images/0d19332c-5fc8-48b1-8010-a3807462a92f.png",
    "/images/8ca4ee82-509d-45de-95d1-1f7323c88587.png",
    "/images/9871001c-f0f7-477e-9dac-daf4415f8f9d.png",
    "/images/bcec5f95-dea0-459f-9a5a-ae9e5f86f69f.png",
    "/images/6f1fa905-ed82-435c-9caf-2936a836672e.png",
    "/images/3207f81d-3c36-4ca2-a14c-bc0adbf5faa4.png",
    "/images/92c557a9-50cc-4eb5-9f5a-2e31d39ad464.png",
    "/images/f846d181-496e-449e-82c1-2ce155ea0531.png",
    "/images/41b7b32b-76fc-4b2a-9881-28cc9c4aa229.png",
    "/images/e6ba18c9-d0c1-4316-b7c6-8927b4e9b305.png",
    "/images/8e5a6e98-0649-4bf6-b928-30d29b472555.png",
    "/images/7f5237fe-be88-4553-b210-e800f5b93c6b.png",
    "/images/02703083-6cc7-481f-baf7-755a852a31eb.png",
    "/images/0a4b5631-2be7-44be-adcb-efecf9ca444c.png",
    "/images/0c373bd2-3da9-488c-a86e-24617fcf9785.png",
    
"/images/img2.png",
"/images/img3.png",
"/images/img4.png",
"/images/img5.png",
"/images/img6.png",
"/images/img7.png",
"/images/img8.png",
"/images/img9.png",
"/images/img10.png",
"/images/img11.png",
"/images/img12.png",
"/images/img13.png",
"/images/img14.png",
"/images/img15.png",
"/images/img16.png",
"/images/img17.png",
"/images/img18.png",
"/images/img19.png",
"/images/img20.png",
"/images/img21.png",
"/images/img22.png",
"/images/img23.png",
"/images/img24.png",
"/images/img25.png",
"/images/img26.png",
"/images/img27.png",
"/images/img28.png",
"/images/img29.png",
"/images/img30.png",
"/images/img31.png",
"/images/img32.png",
"/images/img33.png",
"/images/img34.png",
"/images/img35.png",
"/images/img36.png",
"/images/img37.png",
"/images/img38.png",
"/images/img39.png",
"/images/img40.png",
"/images/img41.png",
"/images/img42.png",
"/images/img43.png",
"/images/img44.png",
"/images/img45.png",
"/images/img46.png",
"/images/img47.png",
"/images/img48.png",
"/images/img49.png",
"/images/img50.png",
"/images/img51.png",
"/images/img52.png",
"/images/img53.png",
"/images/img54.png",
"/images/img55.png",
"/images/img56.png",
"/images/img57.png",
"/images/img58.png",
"/images/img59.png",
"/images/img60.png",
"/images/img61.png",
"/images/img62.png",
"/images/img63.png",
"/images/img64.png",
"/images/img65.png",
"/images/img66.png",
"/images/img67.png",
"/images/img68.png",
"/images/img69.png",
"/images/img70.png",
"/images/img71.png",
"/images/img72.png",
"/images/img73.png",
"/images/img74.png",
"/images/img75.png",
"/images/img76.png",
"/images/img77.png",
"/images/img78.png",
"/images/img79.png",
"/images/img80.png",
"/images/img81.png",
"/images/img82.png",
"/images/img83.png",
"/images/img84.png",
"/images/img85.png",
"/images/img86.png",
"/images/img87.png",
"/images/img88.png",
"/images/img89.png",
"/images/img90.png",
"/images/img91.png",
"/images/img92.png",
"/images/img93.png",
"/images/img94.png",
"/images/img95.png",
"/images/img96.png",
"/images/img97.png",
"/images/img98.png",
"/images/img99.png",
"/images/img100.png",
"/images/img101.png",
"/images/img102.png",
"/images/img103.png",
"/images/img104.png",
"/images/img105.png",
"/images/img106.png"


  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stunning birthday celebrations, themed events, and creative balloon decorations that showcase our dedication to creating magical moments.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={image}
                alt="Event decoration"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
