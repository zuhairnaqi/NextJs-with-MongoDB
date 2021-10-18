import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('Auth/Signin')

    }
  })
  return (
    <div>
      <p>Please wait...</p>
    </div>
  )
}
