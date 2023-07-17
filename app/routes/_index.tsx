import type { V2_MetaFunction } from '@remix-run/node'
import { Link } from 'react-router-dom'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 className='text-3xl font-bold'>Welcome</h1>
      <p className='text-slate-600 font-medium'>This is a test2</p>
      <Link to='/another_page'>Go to another page</Link>
    </div>
  )
}
