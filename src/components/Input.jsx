import { cn } from '../utils'
import React from 'react'

export default function Input({label, name, className, type}) {
  return (
    <div className={cn('flex flex-col gap-3 w-full text-orange-950/60', className)}>
        <label className='uppercase font-black text-base text-orange-950/80' htmlFor={name}>{label}</label>
        {
            type === "textarea"
            ? <textarea id={name} name={name} className='h-[180px] text-2xl p-3 border border-orange-950/60 w-full bg-transparent'/>
         :   <input id={name} name={name} className='h-[60px] text-2xl px-3 border border-orange-950/60 w-full bg-transparent'/>
        }
    </div>
  )
}
