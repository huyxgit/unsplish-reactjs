import React from "react";
import './ImageCard.css'
import { MdThumbUp } from 'react-icons/md'
import moment from 'moment'

const ImageCard = (props) => {

  const trunc = (str) => {
    return str.length > 40 ? str.substring(0, 40) + "..." : str;
  }

  const { alt_description, description, urls, likes, updated_at, links } = props.image;
  const shortDesc = description ? description + '. ' : '' + alt_description || '';

  return (
    <div className="custom-image-card">
      <a href={links.html} target="_blank" rel="noreferrer">
        <img className="img-card" alt={description} src={urls.regular} />
      </a>
      {/* <p></p> */}
      <div className="img-likes-date">
        <p><MdThumbUp /> {likes}  </p>
        <p className="img-card-date">{moment(updated_at).format('yyyy-MM-DD')}</p>
      </div>

      <p className="img-card-desc">{trunc(shortDesc)} </p>

    </div>
  );

}

export default ImageCard;
