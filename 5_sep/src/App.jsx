
// import './App.css'
// import ClassComp from './components/ClassComp'
// import Funccomp from './components/Funccomp'

import Cards from "./components/Cards"

function App() {
 

  return (
    <div style={{display:"flex",gap:"30px", justifyContent:"space-evenly"}}>
      {/* <Funccomp />
      <ClassComp /> */}
      <Cards 
      img="https://motionbgs.com/media/3947/luffy-animated.jpg"
      title="MOnkey D Luffy"
      // bounty="30000000"
      />
      <Cards 
      img="https://wallpapers.com/images/hd/one-piece-pictures-bjm9tdff9yzguoup.jpg"
      title="Straw hat pirates"
      // bounty="90000000000"
      />
      <Cards 
      img="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/04/split-images-of-luffy-zoro-and-nami.jpg"
      title="Zoro"
      />
    </div>
    
    
  )
}

export default App
