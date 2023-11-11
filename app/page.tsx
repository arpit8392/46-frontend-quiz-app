import { ModeToggle } from '@/components/theme-toggle'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
	return (
		<div className='p-6 flex gap-4 items-center'>
			<ModeToggle />
			<UserButton afterSignOutUrl='/' />
		</div>
	)
}
