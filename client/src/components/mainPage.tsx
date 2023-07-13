
import { motion } from 'framer-motion'
import MainCrad from './mainCrad';

import { Box, Card, Image, Heading, Text, Flex } from 'rebass';


function MainPage() {

  return (
    <>
      <motion.div
        animate={{ y: [-400, -200, 0] }}
        className="box"
        transition={{ type: "spring", stiffness: 30, damping: 10, velocity: 2 }}
      >
        <MainCrad
          image="/img/navy.jpg"
          title="🙋🏻 Who is Kwon Yejun?"
          description="안녕하세요
          어떤 것이든 하다 보면 처음과 달리 성장할 수 있다 라고 생각 하는 권예준 이라고 합니다.      
          파이팅 넘치는 분위기
          제가 팀 작업을 진행하면서 받았던 칭찬 한 마디는 오래도록 기억에 남아 있습니다.
          예준씨와 함께 작업을 할 때, 즐겁고 대화할 때 리액션이 좋고 파이팅 넘치는 분위기를 만들어내는 것을 칭찬받은 적이 있습니다.
          저는 대화를 나눌 때는 상대방의 의견을 존중하고 진지하게 들어주는 것을 중요하게 생각해요"
          color="#7677F5"
        />
      </motion.div>

      <motion.div
        animate={{ y: [-400, -200, 0] }}
        className="box"
        transition={{ type: "spring", stiffness: 30, damping: 10, velocity: 2 }}
      >
        <MainCrad
          image="/img/green.jpg"
          title="👩🏻‍🚀 Hobby"
          description="          지금 무슨 키보드 쓰세요?
          저는 키보드 타건을 하고 취미생활로 키보드 커스텀을 하는 것을 좋아 합니다.
          혹시 저와 같이 키보드를 좋아 하시는 분이 계신다면 kyjuni1059@gmail.com 으로 좋은 정보를 공유 해주시면 감사하겠습니다. 😊"
          color="#5BDE5D"
        />
      </motion.div>

    </>
  );
}

export default MainPage;
