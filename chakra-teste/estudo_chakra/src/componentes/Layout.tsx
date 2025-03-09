import { Header } from "./Header"
import { Footer } from "./Footer"
import { Children } from "react"

export const Layout = ( { children }: any) => {
    return (
        <>
            <Header/>
            { children }
            <Footer />
        </>
    )
}