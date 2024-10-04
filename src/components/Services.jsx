import Heading from "./Heading"
import Section from "./Section"
import {service1, service2, service3, check} from '../assets'

const Services = () => {
  return (
    <Section id="how-to-use">
        <div className="container">
            <Heading title="Generative AI made for Creators." text="Brianwave unlocks the potential of AI-Powered Applications"/>

            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div>
                        <img src={service1} />
                    </div>
                </div>
            </div>

        </div>
    </Section>
  )
}

export default Services