import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds , getPostData } from '../../lib/posts'
import utilStyels from '../../styles/utils.module.css'

export default function Post({postData}) {
  return ( 
    <Layout>
        <head>
            <title>{postData.title}</title>
        </head>

        <article>
            <h1 className={utilStyels.headingXl}>{postData.title}</h1>
            <div className={utilStyels.lightText}>
                <Date  dateString = {postData.date}/> 
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
  </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps ({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }