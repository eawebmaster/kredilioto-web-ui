import Header from '@/components/Header'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function HomeLayout(props: Props) {
    return (
        <main>
            <Header />
            {props.children}
        </main>
    )
}

export default HomeLayout
