import * as React from "react"
import Header from '../../common/Header'
import PageContainer from '../../layoutContainers/PageContainer'
import AsideContainer from '../../layoutContainers/AsideContainer'
import MainContainer from '../../layoutContainers/MainContainer'

class Offices extends React.Component {
    public render() {
        return (
            <div>
                <Header />
                <PageContainer>
                    <AsideContainer />
                    <MainContainer />
                </PageContainer>
            </div>
        )
    }
}

export default Offices
