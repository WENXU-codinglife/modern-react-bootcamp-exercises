class Hello extends React.Component {
    //console.log(this.props)
    //the props would be displayed on console as objects with fields of 'from' and 'to'

    //Inside this app class, the props are immutable. That is, they are read-only.
    render() {
        return ( <
            h1 >
            Hello from { this.props.from }
            to { this.props.to } <
            /h1>
        );
    }
}