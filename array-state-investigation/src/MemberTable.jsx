const MemberTable = ({members, onDelete, onEdit}) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.active ? "Active" : "Inactive"}</td>
              <td>
                <button onClick={() => onDelete(member.id)}>Delete</button>
                <button onClick={() => onEdit(member)}>Edit</button>
              </td>
            </tr>))}
        </tbody>
      </table>
    )
}

export default MemberTable;