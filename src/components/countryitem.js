import React from 'react';
const images = require.context('../assets/img/flags', true);
class CountryItemBlock extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: props.country
        }
    }

    render() {
        return (
            <a href="./home" title={this.state.data.Name} class="thumbnail span4">
                <img class="img-circle" alt={this.state.data.Name} width="140" height="140" src={images(`./${this.state.data.Code}.png`)} />
                <div class="caption">
                    <h3>
                        {this.state.data.Name}</h3>
                </div>
            </a>
        )
    }
}
export default CountryItemBlock;

