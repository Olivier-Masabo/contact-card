
import './App.css'
import MainSection from './component/MainSection.jsx'

function App() {


  return (
    <div className='flex flex-wrap gap-10 w-[60%] mx-auto'>
    <MainSection
               img="/cat1.jpg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow" 
    />
    <MainSection
                  img="/cat2.jpg"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com" />
    <MainSection
              img="/cat3.jpg"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com" />
    <MainSection
                img="/cat4.jpg"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"/>
    </div>
  )
}

export default App
