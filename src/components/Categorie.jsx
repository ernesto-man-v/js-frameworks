import { Link } from "react-router-dom";

export const Categorie = (props) => {
    return <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-9f78b4b" data-id="9f78b4b" data-element_type="column" style={{margin: '10px 10px 10px 10px'}}>
    <div class="elementor-widget-wrap elementor-element-populated">
       <div class="elementor-element elementor-element-8c9e40c elementor-widget elementor-widget-image" data-id="8c9e40c" data-element_type="widget" data-widget_type="image.default">
          <div class="elementor-widget-container">
            <Link to={`/categories/${props.categoryId}`}>
                <img fetchpriority="high" decoding="async" src={'http://localhost:3333/' + props.imageSource} class="elementor-animation-grow attachment-medium size-medium wp-image-274" alt=""  width="200" height="200" />
             </Link>
          </div>
       </div>
       <div class="elementor-element elementor-element-ba73fd5 elementor-align-center elementor-widget elementor-widget-button" data-id="ba73fd5" data-element_type="widget" data-widget_type="button.default">
          <div class="elementor-widget-container">
             <div class="elementor-button-wrapper">
                <Link to={`/categories/${props.categoryId}`}>
                  <span class="elementor-button-content-wrapper">
                      <span class="elementor-button-icon elementor-align-icon-right">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z"></path>
                         </svg>
                      </span>
                      <span class="elementor-button-text">{props.title}</span>
                   </span>
                </Link>
             </div>
          </div>
       </div>
    </div>
 </div>
 
 }