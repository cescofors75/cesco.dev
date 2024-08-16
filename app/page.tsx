import {Component} from '../components/component/component'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="w-full max-w-5xl">
        <Component />
      </div>
    </main>
  )
}