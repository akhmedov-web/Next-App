import Link from 'next/link'

export default function Navbar() {
  return (
    <div class="container-fluid header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-success">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="/">Top movies</a>
          <Link href="/about" className='navbar-brand text-light opacity-75'>About</Link>
        </div>
      </nav>
    </div>
  )
}
