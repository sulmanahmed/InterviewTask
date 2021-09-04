import React, { Component } from 'react';

class DataTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="bg-secondary text-white">
            <th>Job Title</th>
            <th>Career Level</th>
            <th>Edit</th>
            <th className="text-center">Delete</th>
          </thead>
          <tbody>
            {this.props.data &&
              this.props.data.map((row) => {
                return (
                  <tr>
                    <td>{row.lookingFor}</td>
                    <td>{row.experience}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => this.props.openPopup(row.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="text-center">
                      <i className="fa fa-trash" onClick={() => this.props.deleteRecord(row.id)}></i>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>

        <div className="clearfix"></div>
      </div>
    );
  }
}

export default DataTable;
