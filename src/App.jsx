
import ProfileCard from './component/ProfileCard'
import PixelBlast from './components/PixelBlast'
import logo from './assets/logo.png'
import { grain, shape } from './assets/textures'
import './App.css'

function App() {


  return (
    <div className="App">
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="#B19EEF"
        patternScale={2}
        patternDensity={1}
        pixelSizeJitter={0}
        enableRipples={true}
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.5}
        edgeFade={0.25}
        transparent={true}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />

      <div className="card-container-flex">

        <ProfileCard
          key="v2-star-pattern"
          name="MOHAMMED HASHIM"
          title="MANAGING DIRECTOR"
          avatarUrl={logo}
          grainUrl={grain}
          iconUrl={shape}
          enableTilt={true}
          enableMobileTilt={false}
          behindGlowEnabled={true}
          behindGlowColor="#8b5cf6"
          innerGradient="linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)"
        />


      </div>
    </div>
  )
}

export default App
