import Layout from "@/components/layout/Layout"
import Popup from '@/components/layout/Popup'
import Section1 from '@/components/sections/home1/section1'
import Section2 from '@/components/sections/home1/section2'
import Section3 from '@/components/sections/home1/section3'
import Section4 from '@/components/sections/home1/section4'

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                
            </Layout>
            
            <Popup />
        </>
    )
}