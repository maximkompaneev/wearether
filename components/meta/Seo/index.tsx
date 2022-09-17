import { FC } from 'react'
import { NextSeo } from 'next-seo'

type Metadata = {
    title?: string
}

type Props = {
    metadata: Metadata
}

const Seo: FC<Props> = ({ metadata }) => {
    // Prevent errors if no metadata was set
    if (!metadata) return null

    return (
        <NextSeo
            title='test title'
        />
    )
}

export default Seo
