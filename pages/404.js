import Layout from '../components/layout'
import utilStyels from '../styles/utils.module.css'

export default function Custom404() {
    return (
        <Layout>
            <div>
                <h1 className={utilStyels.headingXl}>Im so sorry but your page is not here!</h1>
                <p className={utilStyels.lightText}> 404 - Page Not Found</p>
            </div>
        </Layout>
    )
  }