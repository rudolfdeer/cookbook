import * as React from 'react';
import { Recipe } from '../../../redux/reducers/recipes-operations';

export default function RecipeRatedCard(props: any): JSX.Element {
  return (
    <div className="recipe-rated-card">
      <div className="top-container">
        <div className="views">{props.views}</div>
        <div className="tools"></div>
      </div>
      <img className="image" src={`${props.image}`}/>
      <div>
        <div className="title">{props.name}</div>
        {/* <div className="author">{props.author}</div> */}
      </div>
      <div className="bottom-container">
        <div className="likes">{props.likes}</div>
        {/* <div className="comments">{props.comments.toString()}</div> */}
      </div>
    </div>
  )
}