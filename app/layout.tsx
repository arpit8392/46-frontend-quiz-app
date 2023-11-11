import { ThemeProvider } from '@/components/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Frontend Quiz App',
	description:
		'Frontend Mentor Challenge | Solution by Arpit Namdev | Created using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<ClerkProvider>
				<html lang='en' suppressHydrationWarning>
					<body className={rubik.className}>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							enableSystem
							disableTransitionOnChange>
							{children}
						</ThemeProvider>
					</body>
				</html>
			</ClerkProvider>
		</>
	)
}
