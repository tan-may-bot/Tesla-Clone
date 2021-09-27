import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
            title="Model S"
            description="Order online"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-s.jpg"
            />
            
            <Section
            title="Model Y"
            description="Order online"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-y.jpg"
            />

            <Section
            title="Model 3"
            description="Order online"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-3.jpg"
            />

            <Section
            title="Model X"
            description="Order online"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-x.jpg"
            />

            <Section
            title="Lower Cost Solar Panels in America"
            description="Money-back guarantee"
            leftBtnText="Order now"
            rightBtnText="learn more"
            backgroundImg="solar-panel.jpg"
            />

            <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            leftBtnText="Order now"
            rightBtnText="learn more"
            backgroundImg="solar-roof.jpg"
            />

<Section
            title="Accessories"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            leftBtnText="Shop now"
            rightBtnText=""
            backgroundImg="accessories.jpg"
            />




        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`
