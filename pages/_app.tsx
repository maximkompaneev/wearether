import '/styles/globals.scss'
import App from 'next/app'
import Head from 'next/head'
import { Favicons, Seo } from '../components/meta'



const Component = ({ pageProps }) => {
    return (
        <>
            <Head>
                <Favicons />
            </Head>
            <Seo metadata={{title: 'our test app'}}/>

            <div>test app.tsx</div>    
        </>
    )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
Component.getInitialProps = async (appContext) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    return appProps
}

export default Component
