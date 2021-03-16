import React from 'react'

export default function DisplayData({ items }) {
    if( items.length <= 0  )
      return ''
    else
      return (
        <div className="DisplayData">
        <table id="customers">
        <tbody>
            <tr>
                <th>Company Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            { items.map(item => (
            <tr key={item.id}>
                <td>
                    {item.company.name} 
                </td>
                <td>
                    {item.name} 
                </td>
                <td>
                    {item.email}
                </td>
                <td>
                    {item.phone}
                </td>
            </tr>
        ))};
        </tbody>
        </table>
        </div>            
    )
}
