import React from 'react';
import CaseStudyPage from './CaseStudyPage';
import Avatar from './Avatar';
import ThoughtBubble from './ThoughtBubble';
import screenImage from './assets/screen/screen_1.png'
import laptopImage from './assets/screen/laptop_screen_1.png'
import aalekhImage from "./assets/aalekh/alekh_1.svg";
import aalekhWithMoney from "./assets/aalekh/aalekh_with_money.svg";
import aalekhSurprised from "./assets/aalekh/aalekh_surprised.svg";
import aalekhPointingUp from './assets/aalekh/aalekh_pointing_up.svg'
import aalekhThinking from './assets/aalekh/aalekh_thinking.svg'
import aalekhThinkingRight from './assets/aalekh/aalekh_thinking_right.svg'
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
        {/* Page 0 */}
        <CaseStudyPage>
          <ThoughtBubble key={1}>
            <h6 className='text-center text-black text-[26px]'>Have you ever wondered why <br></br> the eCommerce apps you use <br></br> are designed the way they <br></br> are?</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 1 */}
        <CaseStudyPage>
          <ThoughtBubble >
            <h6 className='text-center text-black text-[26px]'>Don't worry <br></br> because we have!</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 2 */}
        <CaseStudyPage>
          <DecodeTitle colorClass='bg-[#669E38]'>
            <h3 className='text-[50px] my-0'>Digiaccel Decodes <br></br> eCommerce <br></br> User Flows</h3>
          </DecodeTitle>
          <MobileScreen position='right' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhPointingUp} />
        </CaseStudyPage>
        {/* Page 3 */}
        <CaseStudyPage>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[26px] max-w-[40vw]'>
              So, it&apos;s the start of the month and you <br></br> have to order your Groceries
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 4 */}
        <CaseStudyPage>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[26px] max-w-[40vw]'>
              On your way to work, you pickup your shopping list and fire up your Big Basket app
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 5 */}
        <CaseStudyPage>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhThinking} />
        </CaseStudyPage>
        {/* Page 6 */}
        <CaseStudyPage>
          <ThoughtBubble >
            <h5 className='text-center text-black font-bold text-[28px]'>Lowest prices!</h5>
            <h6 className='text-[28px]'>
              I don’t need stuff immediately, so let me shop from here
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 7 */}
        <CaseStudyPage>
          <ThoughtBubble >
            <h5 className='text-center text-black font-bold text-[28px]'>4 hrs. Not bad prices!</h5>
            <h6 className='text-[28px]'>
              Products seem to be at a discount. That’s great
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 8 */}
        <CaseStudyPage>
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              And on food essentials…
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar addMoney imgSrc={aalekhSurprised} />
        </CaseStudyPage>
        {/* Page 9 */}
        <CaseStudyPage>
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              And laundry products …
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar addMoney imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 10 */}
        <CaseStudyPage>
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Wow, some products are even at a <span className='text-[#ED1B23]'>50%</span> discount…
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhWithMoney} />
        </CaseStudyPage>
        {/* Page 11 */}
        <CaseStudyPage>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Seems like every category is at a discount...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhThinkingRight} />
        </CaseStudyPage>
        {/* Page 12 */}
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
        {/* Page 13 */}
        <CaseStudyPage>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              But how do I find what I want….
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhThinking} />
        </CaseStudyPage>
        {/* Page 14 */}
        <CaseStudyPage>
          <LaptopScreen imgSrc={laptopImage} />
          <ThoughtBubble >
            <h6 className='text-center text-black text-[26px]'>Don't worry <br></br> because we have!</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
      </CaseStudy>
    </div>
  );
}

export default App;
