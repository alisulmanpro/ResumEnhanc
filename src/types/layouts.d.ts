export { }

declare global {

    interface RootLayoutProps {
        children: React.ReactNode
    }

    interface PlaygroundLayoutProps extends RootLayoutProps {
        menu: React.ReactNode
    }

}
