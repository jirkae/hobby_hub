import React, { Component } from 'react';

export class UsersPage extends Component {
  render() {
    return (
      <div className="col-xs-6">
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th>Jméno</th>
            <th>Příjmení</th>
            <th>Heslo</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Břenda</td>
            <td>Vochcalpádlo</td>
            <td>heslo1234</td>
          </tr>
          <tr>
            <td>Drahomír</td>
            <td>Zakop</td>
            <td>passw</td>
          </tr>
          <tr>
            <td>Tekla</td>
            <td>Řídká</td>
            <td>Neptej se</td>
          </tr>
          </tbody>
        </table>
      </div>)
  }
}
