import React from 'react';
import CaseStudyPage from './CaseStudyPage';
import Avatar from './Avatar';
import ThoughtBubble from './ThoughtBubble';
import screenImage from './assets/screen/screen_1.png'
import laptopImage from './assets/screen/laptop_screen_1.png'
import alekhImage from "./assets/alekh/alekh_1.svg";
import MobileScreen from './MobileScreen';
import ThoughtRectangle from './ThoughtRectangle';
import DecodeTitle from './DecodeTitle';
import Insight from './Insight';
import CaseStudy from './CaseStudy';
import LaptopScreen from './LaptopScreen';

function App() {
  return (
    <div>
      <CaseStudy >
        <CaseStudyPage>
          <ThoughtBubble key={1}>
            <h6 className='text-center text-black text-[26px]'>Have you ever wondered why <br></br> the eCommerce apps you use <br></br> are designed the way they <br></br> are?</h6>
          </ThoughtBubble>
          <Avatar imgSrc={alekhImage} />
        </CaseStudyPage>
        <CaseStudyPage>
          <ThoughtBubble >
            <h6 className='text-center text-black text-[26px]'>Don't worry <br></br> because we have!</h6>
          </ThoughtBubble>
          <Avatar imgSrc={alekhImage} />
        </CaseStudyPage>
        <CaseStudyPage>
          <DecodeTitle colorClass='bg-[#669E38]'>
            <h3 className='text-[50px] my-0'>Digiaccel Decodes <br></br> eCommerce <br></br> User Flows</h3>
          </DecodeTitle>
          <MobileScreen position='right' imgSrc={screenImage} />
          <Avatar imgSrc={alekhImage} />
        </CaseStudyPage>
        <CaseStudyPage>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[26px] max-w-[40vw]'>
              So, it&apos;s the start of the month and you <br></br> have to order your Groceries
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        <CaseStudyPage>
          <MobileScreen isLeft position='center' imgSrc={screenImage} />
          <Insight>
            <h6 className='text-[20px] mt-[30px]'>
            Price is a very important driver for the monthly grocery run.
          </h6>
            <h6 className='text-[20px] mt-[10px]' >
            Notice the “Har Din Sasta” mentions and discount %age across categories.
          </h6>
            <h6 className='text-[20px] mt-[10px]'>
            This helps reinforce that BB has great pricing for your everyday needs
          </h6>
          </Insight>
        </CaseStudyPage>
        <CaseStudyPage>
          <LaptopScreen imgSrc={laptopImage} />
          <ThoughtBubble >
            <h6 className='text-center text-black text-[26px]'>Don't worry <br></br> because we have!</h6>
          </ThoughtBubble>
          <Avatar imgSrc={alekhImage} />
        </CaseStudyPage>
      </CaseStudy>
    </div>
  );
}

export default App;
