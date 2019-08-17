import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = ({ photos }) => {
	let listOfPhotos
	if (photos.loading) {
		listOfPhotos = <h2>Loading ...</h2>
	} else if (photos.set.length > 0) {
		listOfPhotos = photos.set.map(photo => <Photo photo={photo} key={photo.id} />);
	} else {
		listOfPhotos = <NotFound />
	}

	return (
		<div className="photo-container">
			<h2>Results</h2>
			<ul>{listOfPhotos}</ul>
		</div>
	);
};

export default PhotoContainer;
