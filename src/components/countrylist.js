import React from 'react';
import CountryItemBlock from './countryitem';
import ConfigSettings from '../config.json'
import countryLogo from '../assets/img/flags/at.png'

class CountryListBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(ConfigSettings.api.url+'/country/list')
            .then(response => {
                var resJSON = response.json();
                return resJSON;
            }).then(data => {
                //var compData = [];
                //for (var i = 0; i < data.length; i++) {
                //    var country = {
                //        CountryId: data[i].CountryId,
                //        Name: data[i].Name,
                //        Code: data[i].Code,
                //        FlagUrl: '../assets/img/flags/pt.png'
                //    };
                //    compData.push(country);
                //}
                this.setState({
                    data: data,
                });
            },
            (error) => {
                this.setState({
                    data: [],
                    error: error
                })
            });
    }

    render() {
        const countries = this.state.data;
        const countryItems = countries.map(country => {
            return <li class="thumbnails-item">
                <CountryItemBlock key={country.Id} country={country} />
            </li>
        });

        return (
            <section class="area container">
                <ul class="row-fluid">
                    {countryItems}
                </ul>
            </section>
        )
    }
}
export default CountryListBlock;



//constructor(props){
//    super(props);
//    this.state = {
//        data: 'Jordan Belfort'
//    }
//}

//getData(){
//    setTimeout(() => {
//        console.log('Our data is fetched');
//        this.setState({
//            data: 'Hello WallStreet'
//        })
//    }, 1000)
//}

//componentDidMount(){
//    this.getData();
//}

//render() {
//    return (
//        <div>
//            {this.state.data}
//        </div>
//    )
//}

