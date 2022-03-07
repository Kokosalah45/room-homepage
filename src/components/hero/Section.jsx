import {useState  , useEffect} from 'react'
import shortid from 'shortid';
import NavBar from '../navbar/NavBar';
import Button from '../button/Button';
import leftArrow from '../../images/icon-angle-left.svg'
import rightArrow from '../../images/icon-angle-right.svg'

const Section = ({sectionImages = null , bgColor = 'bg-white' , hasNavBar=false , height = "", sectionId , colSpan , rSpan , children }) => {
  const [backgroundState , setBackgroundState] = useState({
    backgroundImages : sectionImages,
    hasImageState : false
  });
  const [imageIndex , setImageIndex] = useState(0);

  const {backgroundImages,hasImageState} = backgroundState;

  useEffect(()=>{
  
    if (Array.isArray(backgroundImages) &&  backgroundImages.length !== 0){
      const temp = backgroundImages.map(img => Object.assign({},{image : img} , {imageId : shortid.generate()}));
      setBackgroundState({
        backgroundImages : temp,
        hasImageState : true

      });
     
    
    }
  },[])

  const decrementIndex = () =>{

   
    setImageIndex( (imageIndex - 1) ===  -1 ? backgroundImages.length - 1 : imageIndex - 1)
  }
  const incrementIndex = () =>{
    setImageIndex((imageIndex + 1) % backgroundImages.length )
  }
  return (
 
    <div id={sectionId} style={{
      backgroundImage : hasImageState  ? `url(${backgroundImages[imageIndex].image})` : null,
    }} className={` md:h-auto bg-center bg-cover relative ${height}  ${bgColor} ${colSpan.default}  ${colSpan.md}  ${rSpan.md}`}>
   
    {hasNavBar && <NavBar/>}
    {children}
    {hasImageState && backgroundImages.length > 1 && 
    <div class="flex absolute bottom-0 right-0 transition-all delay-75 md:translate-x-full z-10">
      <Button shiftIndex = {decrementIndex}>
        {leftArrow}
      </Button>
      <Button shiftIndex = {incrementIndex}>
        {rightArrow}
      </Button>
    </div>
    }

    </div>

  )
}

export default Section;