import { Splide, SplideSlide } from '@splidejs/react-splide';
import Splide from '@splidejs/splide';

new Splide('.splide').mount();
<Splide aria-label="My Favorite Images">
  <SplideSlide>
  <img src="Assets/1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
  <img src="Assets/2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
var splide = new Splide( '#main-carousel', {
    pagination: false,
  } );
  
  
  var thumbnails = document.getElementsByClassName( 'thumbnail' );
  var current;
  
  
  for ( var i = 0; i < thumbnails.length; i++ ) {
    initThumbnail( thumbnails[ i ], i );
  }
  
  
  function initThumbnail( thumbnail, index ) {
    thumbnail.addEventListener( 'click', function () {
      splide.go( index );
    } );
  }
  
  
  splide.on( 'mounted move', function () {
    var thumbnail = thumbnails[ splide.index ];
  
  
    if ( thumbnail ) {
      if ( current ) {
        current.classList.remove( 'is-active' );
      }
  
  
      thumbnail.classList.add( 'is-active' );
      current = thumbnail;
    }
  } );
  
  
  splide.mount();
