'use client';

import { ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/16/solid';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { collapsedXVarients } from '../../../../lib/varients/navigation';

export default function Header() {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<>
			<div className='relative flex flex-row items-center justify-between p-6 px-10 w-screen select-none'>
				<span className='text-3xl font-ubuntu text-neutral-200 font-semibold tracking-wide'>Navin</span>
				<div className='absolute flex flex-row-reverse max-lg:flex-col items-center gap-6 top-6 right-10 w-fit max-lg:w-12'>
				<ChevronRightIcon
						className={`size-7 ${
							collapsed ? 'rotate-0' : 'max-lg:rotate-90 rotate-180'
						} lg:duration-700 duration-500 text-neutral-300 cursor-pointer `}
						onClick={() => setCollapsed(!collapsed)}
					/>
					
					<AnimatePresence>
						{!collapsed && (
							<motion.nav
								initial='hidden'
								animate='visible'
								exit='exit'
								variants={{collapsedXVarients}}
								transition={{ duration: 0.5, ease: 'easeInOut' }}
								className='flex flex-row max-lg:flex-col items-center gap-8 text-neutral-400 navS'
							>
								<Link href={'#'}>About</Link>
								<Link href={'#'}>Projects</Link>
								<Link href={'#'}>Skills</Link>
								<Link
									href={'#'}
									className='bg-red-500 text-white rounded-2xl duration-300 hover:scale-110 px-4 p-1'
								>
									Contact
								</Link>
							</motion.nav>
						)}
					</AnimatePresence>
					
				</div>
			</div>
		</>
	);
}
