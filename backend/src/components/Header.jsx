import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

import { Container } from './Container'
import Logo from '../images/logos/logo.jpg'
import { NavLinks } from './NavLinks'


import { useState } from "react";



import { SignInWithWalletButton } from '../components/SignInWithWallet'

import { useUserDataContext } from "../context/userDataContext"



function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {

  const { user, setUser, web3modal } = useUserDataContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };


  user.provider?.provider.on("chainChanged", (chainId) => {
    setUser((prevState) => ({ ...prevState, chainId: parseInt(chainId, 16) }));
  });

  function disconnect() {
    web3modal.clearCachedProvider();
    sessionStorage.removeItem("accessToken");
    setUser((prevState) => ({
      ...prevState,
      connected: false,
      chainId: 0,
      walletAddress: "",
    }));

  }

  user.provider?.provider.on("accountsChanged", (chainId) => {
    disconnect();
  });

  user.provider?.provider.on("disconnect", (code, reason) => {
    disconnect();
  });

  return (
    <header className='bg-gray-900'>
      <nav>
        <Container className="relative z-50 flex justify-between py-8 bg-gray-900">
          <div className="relative z-10 flex items-center gap-16">
            <a href="/">
              <Image
                src={Logo}
                alt="Picture of the author"
                width={500}
                height={500}
                className="mx-auto h-8 w-auto"
              /></a>
            <div className="hidden lg:flex lg:gap-10">
              {/* <NavLinks /> */}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink href="#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="#faqs">FAQs</MobileNavLink>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Link href='/mypositions' className="primaryButton text-white">
              My Positions
            </Link>
            <SignInWithWalletButton />
          </div>
        </Container>
      </nav>
    </header>
  )
}
