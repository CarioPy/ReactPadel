import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    state = { 
        players_datas : [
            {
                name: 'Thomas Allez',
                score: 1500,
                id: 'TA0303',
                rank: 1
                
            },

            {
                name: 'Aurelia Buggy',
                score: 1300,
                id: 'AB0303',
                rank: 2
                
            },

            {
                name: 'Luc Allez',
                score: 950,
                id: 'LA0303',
                rank: 3
                
            },

            {
                name: 'Carolina Halbwachs',
                score: 750,
                id: 'CH0303',
                rank: 4
            }
        ]
    } 

    renderRow() {
            return this.state.players_datas.map((players_data,index) => {
                const { id, name, score, rank} = players_data

            return(
                    <tr key ={id} className='table-usual-row'>
                        <td className='table-name-cell'> 
                            {name}
                        </td>
                        <td className='table-usual-cell'>
                            {score}
                        </td>
                        <td className="table-usual-cell">
                            {rank}
                        </td>
                    </tr>
            )
        })
    }

    render() { 
        return (
            <div className='table-container'>
                <table className='main-table'>
                    <thead className='table-header'>
                        <tr className='table-header'>
                            <td className='table-header-cell'>
                                Player
                            </td>
                            <td className='table-header-cell'>
                                Score
                            </td>
                            <td className='table-header-cell'>
                                Ranking
                            </td>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {this.renderRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Table;