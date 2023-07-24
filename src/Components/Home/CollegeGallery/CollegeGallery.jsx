
import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { photos } from "./Photos";
const CollegeGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }, []);

    return (
        <div className="mt-10">
            <div className=" mb-7">
                <h1 className="text-center font-bold md:text-4xl text-4xl text-orange-500 md:p-5">
                Graduation Pictures
                </h1>
            </div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen && (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((photo) => ({
                                ...photo,
                                srcset: photo.srcSet,
                                caption: photo.title,
                            }))}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    );
};

export default CollegeGallery;

