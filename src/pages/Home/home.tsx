import React from 'react'
import TopSection from './components/top-section'
import SecondSection from './components/second-section'
import ThridSection from './components/third-section'
import TypingEffectWithColor from './components/typing-animation'
import FourthSection from './components/fourth-section'
import SeventhSection from './components/seventh-section'
import FifthSection from './components/fifth-section'
import SixthSection from './components/sixth-section'



const Home = () => {


    const description = "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation"
    return (
        <>
            {/* <TypingEffectWithColor /> */}
            <TopSection />
            <SecondSection />
            <ThridSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
        </>
    )
}

export default Home