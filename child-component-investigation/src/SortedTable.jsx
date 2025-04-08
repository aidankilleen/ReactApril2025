import React, { useState } from "react";

const SortedTable = ({children}) => {

    const [sortConfig, setSortConfig] = useState({columnIndex:0, direction:'asc'})

    const table = children;
    

    const tableChildren = React.Children.toArray(table.props.children);

    const thead = tableChildren.find(child => child.type === 'thead');
    const tbody = tableChildren.find(child => child.type === 'tbody');

    const headerRow = React.Children.toArray(thead.props.children)
                        .find(row => row.type === 'tr');

    const headers = React.Children.toArray(headerRow.props.children);

    const handleSort = (index) => {
        let direction = sortConfig.direction;

        if (sortConfig.columnIndex == index) {
            direction = sortConfig.direction == 'asc' ? 'desc' : 'asc';
        }
        setSortConfig(current=>({...current, columnIndex: index, direction}));
    }
    const modifiedHeaders = headers.map((th, index)=>{
        return(
            <th key={index}>
                {th.props.children}
                <button onClick={()=>handleSort(index)}>sort</button>
            </th>
        )
    });

    const rows = React.Children.toArray(tbody.props.children).filter(row => row.type === 'tr');
    console.log(rows);

    const sortedRows = [...rows].sort((a, b) => {
        const aCells = React.Children.toArray(a.props.children);
        const bCells = React.Children.toArray(b.props.children);
    
        const aText = aCells[sortConfig.columnIndex]?.props?.children ?? '';
        const bText = bCells[sortConfig.columnIndex]?.props?.children ?? '';
    
        if (aText < bText) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aText > bText) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });

    return (
        <>
        <table>
            <thead>
                <tr>{modifiedHeaders}</tr>
            </thead>
            <tbody>
                {sortedRows}
            </tbody>
        </table>
        <div>{JSON.stringify(sortConfig)}</div>
        </>
    )
}

export default SortedTable;