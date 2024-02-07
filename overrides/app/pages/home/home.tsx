import React from 'react'

// Providers
import HomeProviders from './home.providers'

// Components
// import Content from './home.content'

const Home: React.FC & {
    getTemplateName: () => string
} = () => {
    return <HomeProviders>{/* <Content /> */}</HomeProviders>
}

export default Home

Home.getTemplateName = () => 'home'
