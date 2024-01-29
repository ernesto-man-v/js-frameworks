import { Link } from "react-router-dom";

export const Header = (props) => {
    return <header class="site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead" itemtype="https://schema.org/WPHeader" itemscope="itemscope" itemid="#masthead">
    <div id="ast-desktop-header" data-toggle-type="dropdown">
       <div class="ast-main-header-wrap main-header-bar-wrap ">
          <div class="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item" data-section="section-primary-header-builder">
             <div class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container" data-section="section-primary-header-builder">
                <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout">
                   <div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                      <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                         <div class="site-branding ast-site-identity" itemtype="https://schema.org/Organization" itemscope="itemscope"><span class="site-logo-img"><a href="/" class="custom-logo-link" rel="home"><img loading="lazy" src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-regular.png" class="custom-logo" alt="Be Bold" decoding="async" srcset="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-regular.png 1x, https://websitedemos.net/be-bold-beauty-store-02/wp-content/uploads/sites/1117/2022/08/logo-retina.png 2x" width="104" height="49" /></a></span></div>
                      </div>
                      <div class="site-header-primary-section-left-center site-header-section ast-flex ast-grid-left-center-section"></div>
                   </div>
                   <div class="site-header-primary-section-center site-header-section ast-flex ast-grid-section-center">
                      <div class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
                         <div class="ast-main-header-bar-alignment">
                            <div class="main-header-bar-navigation">
                               <nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="primary-site-navigation-desktop" aria-label="Site Navigation" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope">
                                  <div class="main-navigation ast-inline-flex">
                                     <ul id="ast-hf-menu-1" class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border ast-menu-hover-style-overline  stack-on-mobile">
                                        <li id="menu-item-42" class="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-42"><Link class="menu-link" to={`/`}>Main Page</Link></li>
                                        <li id="menu-item-44" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-44"><Link class="menu-link" to={`/categories`}>Categories</Link></li>
                                        <li id="menu-item-45" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat current-product-ancestor current-menu-parent current-product-parent menu-item-45"><Link class="menu-link" to={`/items`}>All Products</Link></li>
                                        <li id="menu-item-43" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat current-product-ancestor current-menu-parent current-product-parent menu-item-43"><Link class="menu-link" to={`/sales`}>All sales</Link></li>
                                     </ul>
                                  </div>
                               </nav>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                      <div class="site-header-primary-section-right-center site-header-section ast-flex ast-grid-right-center-section"></div>
                      <div class="ast-builder-layout-element site-header-focus-item ast-header-woo-cart" data-section="section-header-woo-cart">
                         <div id="ast-site-header-cart" class="ast-site-header-cart ast-menu-cart-with-border ast-desktop-cart-flyout ast-menu-cart-outline">
                            <div class="ast-site-header-cart-li ">
                                <Link class="cart-container ast-cart-desktop-position- ast-cart-mobile-position- ast-cart-tablet-position-" aria-label="View Shopping Cart, 1 items" to={`/basket`}>
                                  <div class="ast-addon-cart-wrap ast-desktop-cart-position- ast-cart-mobile-position- ast-cart-tablet-position- ">
                                     <span class="ast-woo-header-cart-info-wrap"><span class="ast-woo-header-cart-total"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>{props.basketPrice}</bdi></span></span></span>
                                     <i class="astra-icon ast-icon-shopping-bag " data-cart-total={props.basketItemsCount}>
                                        <span class="ast-icon icon-bag">
                                           <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="ast-bag-icon-svg" x="0px" y="0px" width="100" height="100" viewBox="826 826 140 140" enable-background="new 826 826 140 140" xmlSpace="preserve">
                                              <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z"></path>
                                           </svg>
                                        </span>
                                     </i>
                                  </div>
                               </Link>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div class="ast-desktop-header-content content-align-flex-start " style={{display: 'none'}}></div>
    </div>
    <div id="ast-mobile-header" class="ast-mobile-header-wrap " data-type="dropdown">
       <div class="ast-main-header-wrap main-header-bar-wrap">
          <div class="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-primary-header-builder">
             <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                   <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                      <div class="site-branding ast-site-identity" itemtype="https://schema.org/Organization" itemscope="itemscope"><span class="site-logo-img"><a href="https://websitedemos.net/be-bold-beauty-store-04/" class="custom-logo-link" rel="home"><img loading="lazy" src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-regular.png" class="custom-logo" alt="Be Bold" decoding="async" srcset="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-regular.png 1x, https://websitedemos.net/be-bold-beauty-store-02/wp-content/uploads/sites/1117/2022/08/logo-retina.png 2x" width="104" height="49" /></a></span></div>
                   </div>
                </div>
                <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                   <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="section-header-mobile-trigger">
                      <div class="ast-button-wrap">
                         <button type="button" class="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal" aria-expanded="false" data-index="0">
                            <span class="screen-reader-text">Main Menu</span>
                            <span class="mobile-menu-toggle-icon">
                               <span class="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                  <svg class="ast-mobile-svg ast-menu-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                     <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                                  </svg>
                               </span>
                               <span class="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                  <svg class="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                     <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                                  </svg>
                               </span>
                            </span>
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </header>
 
 
};