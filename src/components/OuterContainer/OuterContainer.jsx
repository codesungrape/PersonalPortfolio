import Hero from '../Hero/Hero'
import SocialContainer from '../Social/Social'
import Footer from '../Footer/Footer'

export default function OuterContainer() {

    // houses all the other components
    return (
        <section>
            <Hero />
            <SocialContainer /> 
            <Footer />
        </section>
    )
}