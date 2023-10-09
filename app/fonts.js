import { Exo_2, Inconsolata} from 'next/font/google'

export const inconsolata = Inconsolata({
    subsets: ['latin'],
    variants: ['400', '700'],
    variable: '--font-inconsolata'
})

export const exo2 = Exo_2({
    subsets: ['latin'],
    variants: ['400', '700'],
    variable: '--font-exo2'
})