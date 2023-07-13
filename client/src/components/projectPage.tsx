
import { motion } from 'framer-motion'
import CustomCard from './Crad';



function ProjectPage() {

  return (
    <>
      <motion.div
        animate={{ rotate: [-180, -120, -60, 0], x: [-400, -200, 0] }}
        className="box"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
      >
        <CustomCard
          image="/img/poke.png"
          title="Poke X Dige"
          description="포켓몬과 디지몬을 동시에 즐길 수 있는 
          멀티버스 커뮤니케이션 게임"
          color="#FFD13D"
       
        />
      </motion.div>
      <motion.div
        animate={{ rotate: [-180, -120, -60, 0], x: [-400, -200, 0], y: [-400, -200, 0], z: [-400, -200, 0] }}
        className="box"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
      >
        <CustomCard
          image="/img/stock.png"
          title="StockTogether"
          description="stock(주식) + together(함께) 라는 의미로
          주식 매매를 개인 단위가 아닌 팀 단위로 함께 할 수 있는 서비스"
          color="#71B8F5"
        />
      </motion.div>
      <motion.div
        animate={{ rotate: [180, 120, 60, 0], x: [400, 200, 0], y: [400, 200, 0], z: [400, 200, 0] }}
        className="box"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2, }}
      >
        <CustomCard
          image="/img/bts.png"
          title="BTS"
          description="(Bus Tracker Service)사용자가 궁금한 정류장의 대전 버스를 실시간으로 확인 하여 버스를 놓치는 경우의 수를 줄이자."
          color="#FA8737"
        />
      </motion.div>
      <motion.div
        animate={{ rotate: [180, 120, 60, 0], x: [400, 200, 0] }}
        className="box"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
      >
        <CustomCard
          image="/img/monkey.png"
          title="Card Title"
          description="여러가지 축이 어떤 소리를 내는지 간접적으로나마 알 수 있는 사이트를 만들어보면 어떨까 생각했다."
          color="#CE5BDE"
        />
      </motion.div>

    </>
  );
}

export default ProjectPage;
