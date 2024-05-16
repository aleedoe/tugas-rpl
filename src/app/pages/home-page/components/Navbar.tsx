import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = async () => {

    return (
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link href='/' className='flex z-40 font-semibold'>
                        Purba<span className='text-green-600'>Putra</span>
                    </Link>

                    <div className='h-full flex items-center space-x-4'>
                        <Link
                            href='/api/auth/register'
                            className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>
                            Sign up
                        </Link>
                        <Link
                            href='/api/auth/login'
                            className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>
                            Login
                        </Link>

                        <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                        <Link
                            href='/configure/upload'
                            className={buttonVariants({
                                size: 'sm',
                                className: 'hidden sm:flex items-center gap-1',
                            })}>
                            Create case
                            <ArrowRight className='ml-1.5 h-5 w-5' />
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar