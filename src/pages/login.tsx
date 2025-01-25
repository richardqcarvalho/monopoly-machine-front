import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router'

export function Login() {
	const [name, setName] = useState('')
	const navigate = useNavigate()

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const response = await fetch('http://localhost:4000/player', {
			method: 'POST',
			body: JSON.stringify({ name }),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const { id } = await response.json()

		localStorage.setItem('userId', id)

		navigate('/')
	}

	return (
		<div className='flex h-screen w-screen items-center justify-center gap-10 bg-blue-900'>
			<form
				onSubmit={onSubmit}
				className='flex flex-col gap-6'
			>
				<div className='relative'>
					<label
						htmlFor='name'
						className='absolute -top-2.5 left-3 bg-blue-900 p-1 text-xs text-white'
					>
						Name
					</label>
					<input
						id='name'
						className='w-64 rounded-md border border-white bg-blue-900 px-4 py-3 text-base text-white outline-none placeholder:text-white/50'
						placeholder='Type your name'
						onChange={e => setName(e.target.value)}
						value={name}
					/>
				</div>
				<button
					type='submit'
					className='cursor-pointer rounded-md border border-white bg-blue-900 px-4 py-3 text-base text-white outline-none'
				>
					Enter
				</button>
			</form>
		</div>
	)
}
