export { }

declare global {
    interface PlaygroundLayoutProps {
        children: React.ReactNode;
        sidebar: React.ReactNode
        preview: React.ReactNode
    }

    interface InputProps {
        field: Field
        value: string
        onChange: (name: string, value: string) => void
    }
    
}