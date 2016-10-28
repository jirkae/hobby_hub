import React, { Component } from 'react';

export class UsersPage extends Component {
  render() {
    return (
      <div>
        <table>
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
          </tbody>
        </table>
      </div>)
  }
}
