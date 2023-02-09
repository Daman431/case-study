import React from 'react';
import CaseStudy from './CaseStudy';
import Avatar from './Avatar';
import ThoughtBubble from './ThoughtBubble';
import screenImage from './assets/screen/screen_1.png'
import alekhImage from "./assets/alekh/alekh_1.svg";
import MobileScreen from './MobileScreen';
import ThoughtRectangle from './ThoughtRectangle';
import DecodeTitle from './DecodeTitle';
import Insight from './Insight';

function App() {
  return (
    <div>
      <CaseStudy>
        {/* Commenting The Uses of the component for later use */}
        {/* <Insight>
          <h6 className='w-[350px] text-[20px] mt-[30px]'>
            Price is a very important driver for the monthly grocery run.
          </h6>
          <h6 className='w-[350px] text-[20px] mt-[10px]' >
            Notice the “Har Din Sasta” mentions and discount %age across categories.
          </h6>
          <h6 className='w-[350px] text-[20px] mt-[10px]'>
            This helps reinforce that BB has great pricing for your everyday needs
          </h6>
        </Insight> */}
        {/* <DecodeTitle colorClass='bg-[#669E38]'>
          <h3 className='text-[50px] my-0'>Digiaccel Decodes <br></br> eCommerce <br></br> User Flows</h3>
        </DecodeTitle> */}
        {/* <ThoughtRectangle>
          <h6 className='text-start text-black text-[26px] w-[470px]'>
            On your way to work, you pickup your shopping list and fire up your Big Basket app
          </h6>
        </ThoughtRectangle> */}
        <ThoughtBubble >
          <h6 className='text-center text-black text-[26px]'>Have you ever wondered why <br></br> the eCommerce apps you use <br></br> are designed the way they <br></br> are?</h6>
        </ThoughtBubble>
        <Avatar imgSrc={alekhImage} />
        <MobileScreen position='right' imgSrc={screenImage} />
      </CaseStudy>
    </div>
  );
}

export default App;
