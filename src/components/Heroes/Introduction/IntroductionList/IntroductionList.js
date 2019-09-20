import React from 'react'

const IntroductionList = (props) => {
    return (
        <div key={props.name}>
            <div>
                <h3> {props.name}</h3>
                <p>{props.primaryInfo}</p>
            </div>
            <table className="table table-dark">
                <thead style={{textAlign:'center'}}>
                    <tr>
                        <th scope="col">Hero</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                {props.attribute.map(heroes => {
                return (
                    <tbody>
                        <tr>
                            <th scope="row">
                                <td> <img src={require('../../../../assets/' + heroes.name + '.png')} alt=""/> </td>
                                <p style={{textAlign:'center'}}> {heroes.name} </p>
                            </th>
                            <th scope="row">
                                <td style={{fontSize: '15px'}}> {heroes.introduction} </td>
                            </th>
                        </tr>
                    </tbody>
                )})}
            </table>      
        </div>
    )
}

export default IntroductionList

