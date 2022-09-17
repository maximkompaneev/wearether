import { FC } from 'react'

type Props = {
    code: string
}

const Component: FC<Props> = ({ code }) => {
    if (!code) return null

    return (
        // TODO: consider using next/script for later
        // https://nextjs.org/docs/messages/next-script-for-ga
        // eslint-disable-next-line @next/next/next-script-for-ga
        <script
            async
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${code}');`,
            }}
        />
    )
}

Component.displayName = 'meta/GtmAnalytics'

export default Component
