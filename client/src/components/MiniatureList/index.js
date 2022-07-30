import React, { useState } from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';

const MiniatureList = ({ category }) => {
    const [isModalOpen, setIsModelOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: "Blue-Dragon",
            category:"Large",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Demon",
            category:"Large",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Skeleton",
            category:"Large",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Troll",
            category:"Large",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Dragon",
            category:"Medium",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Female-Warrior",
            category:"Medium",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Male-Warrior",
            category:"Medium",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Snake",
            category:"Medium",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Warrior",
            category:"Medium",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "Hand",
            category:"Small",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },

    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    }
    return (
        <main>
        <div>
        {isModalOpen && (
          <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
        )}
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
        <section id="#home" className="overflow-hidden text-gray-700 ">
            <div className="gap-8 columns-2">
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/blue-dragon-mini-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/demon-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/dragon-mini-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/female-warrior-ghost-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/large-skeleton-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/male-warrior-ghost-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/mini-hand-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/purple-troll-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/triple-snake-front.jpg" />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src="../../assets/warrior-front.jpg" />
                    </div>
                </div>
            </div>
        </section>
        </main>
    );
};

export default MiniatureList;