import { TitleProps } from './types'

export default function Title({ titleMain }: TitleProps) {

  return (
    <h1 className='text-3xl lg:text-4xl font-semibold tracking-tight'>{titleMain}</h1>
  )
};
