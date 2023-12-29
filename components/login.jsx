'use client'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='text-md from-12% via-33% bg-gradient-to-tr  from-indigo-500 via-sky-500 to-emerald-500 to-70% bg-clip-text text-transparent'
        >
          {isLogin ? 'Logout' : 'Login'}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Please Enter Your Email and Password To Login.
          </DialogDescription>
        </DialogHeader>

        {/* you can chage this area with the form  */}
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-1 items-center gap-4'>
            <Label htmlFor='email' className='text-right'>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              defaultValue='Pedro Duarte'
              className='col-span-3'
              required
            />
          </div>
          <div className='grid grid-cols-1 items-center gap-4'>
            <Label htmlFor='password' className='text-right'>
              Password
            </Label>
            <Input
              id='password'
              type='password'
              defaultValue='@peduarte'
              className='col-span-3'
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Login
