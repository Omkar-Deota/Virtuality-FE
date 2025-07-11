import DataSection from "./components/DataSection"
import Feature from "./components/Feature"
import Pricing from "./components/Pricing"
import Workflow from "./components/Workflow"

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <DataSection />
        <Feature />
        <Workflow />
        <Pricing />
      </div>
    </>
  )
}

export default Home