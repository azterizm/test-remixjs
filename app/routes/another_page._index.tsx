import type { ReactElement } from 'react'

export default function AnotherPage(): ReactElement {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 className='text-3xl font-bold'>Another page</h1>
      <p className='text-slate-600 font-medium'>This is a test</p>
    </div>
  )
}
