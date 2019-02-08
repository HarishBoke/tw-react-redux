import React from 'react'


export default class MovieItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const cardSize = {
            width: '18rem',
            float: 'left',
            marginBottom: '15px',
            marginLeft: '15px'
        };
        return(
                <div className="card" style={cardSize}>
                    <img className="card-img-top" src={this.props.avatar} alt="Card image cap" />
                    <div className="card-body">
                        <div className="card-text">
                            <h5> {this.props.title}</h5>
                            <h6 className="card-title">{this.props.year}</h6>
                        </div>
                        
                        <a href="#" className="btn btn-secondary btn-sm">{this.props.type}</a>
                    </div>
                </div>
        );
    }
}