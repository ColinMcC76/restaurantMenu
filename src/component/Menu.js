import React from 'react'
import axios from 'axios'


export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [],
        }
        // this.price = this.price.bind(this)
    }
    async componentDidMount() {
        if (localStorage.getItem(this.props.label) !== null) {
            let storageMenu = JSON.parse(window.localStorage.getItem(this.props.label))
            // console.log(storageMap)
            this.setState({
                menu: storageMenu,
            });
        } else {
            await axios
                .get('https://entree-f18.herokuapp.com/v1/menu/' + this.props.count)
                .then(res => this.setState({
                    menu: res.data,
                })
                )
                .catch(err => console.error(err));
            if (this.props.label !== 'Specials') {
                localStorage.setItem(this.props.label, JSON.stringify(this.state.menu))
                // localStorage.setItem(this.props.label + 'price', JSON.stringify(this.state.total))

            }
        }
    }
    // price() {
    //     const price = this.props.price
    //     let total = Math.floor(Math.random() * price) + price
    //     return <p>{total}</p>
    // }
    render() {
        // console.log(this.state.entree.menu_items)
        const { menu } = this.state;
        const { menu_items = [] } = menu
        const label = this.props.label
        const dataTarget = "#"+label
        // console.log(dataTarget)
        // console.log(this.props.label)
        // console.log(menu_items)
        // let entreeList = JSON.stringify(this.state.entree.menu_items)
        // console.log(entreeList)
        // console.log({$})
        return (
            <div className='py-5 col-sm-12'>
                <a
                    className='h2 pointer d-flex justify-content-center display-4'
                    data-toggle="collapse"
                    data-target={dataTarget}
                    aria-expanded="false"
                    aria-controls={this.props.label}
                >
                    {label}
                </a>
                <div className='collapse' id={this.props.label}>
                    <p className={`${label === 'Specials' ? 'h5 text-center' : 'd-none'}`}>Specials based upon kitchen inventory, and Chef's attitude.</p>
                    <ul className="list-unstyled text-center p-2">
                        {menu_items.map((item, index) => <li className='p-2 text-center' key={index}>{item.description} ${this.props.price.toFixed(2)}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

