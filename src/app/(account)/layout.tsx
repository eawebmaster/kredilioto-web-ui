import UserHeader from '@/components/Header/UserHeader'
import UserSidebar from '@/components/Header/UserSidebar'
import React from 'react'
interface Props {
    children: React.ReactNode
}
function AccountLayout(props: Props) {
    return (
        <div>
            <UserHeader />
            <div className='container mx-auto'>
                <div className='flex gap-10 my-10 '>
                    <aside className='w-1/6'>
                        <UserSidebar />
                    </aside>
                    <main className='w-4/6 min-h-full'>{props.children}</main>

                </div>
            </div>
        </div>
    )
}

export default AccountLayout
