
import React, { useState, useEffect } from 'react'
import { JobData } from '../utilities/JobsData'
import AddNewJob from './JobCard/AddNewJob'
import DataTable from './JobCard/DataTable'

import Badge from '@material-ui/core/Badge';
import BellIcon from '@material-ui/icons/Notifications';

import notificationAction from '../actions/notificationAction'
import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux'

function JobTable(props) {
  const Notification = useSelector((state) => state.notification)
  const [showPopup, setshowPopup] = useState(false)
  const [obj, setObj] = useState({})
  const [id, setID] = useState(0)
  const [newJob, setNewJob] = useState([])
  const [dropdown, setDropdown] = useState(false);
  const [searchValue, setSearch] = useState("")


  const deleteRecord = (id) => {
    console.log(id);
    let NewList = newJob.filter((row) => {
      return row.id !== id
    })
    setNewJob(NewList)
  }
  useEffect(() => {
    props.notificationAction(newJob?.length)
  }, [newJob])
  const handleClose = () => {
    setshowPopup(false)
    setObj({})
    setID(0)
  }

  const handleSave = (obj) => {
    let len = newJob.length
    let NewList = [...newJob]
    var foundIndex = NewList.findIndex((x) => x.id === obj.id)
    if (foundIndex !== -1) {
      NewList[foundIndex] = obj
    } else {
      if (len == 0) {

        obj.id = 1
      } else {

        obj.id = newJob[len - 1].id + 1
      }

      NewList = NewList.concat(obj)
    }

    console.log('For Save and updated', NewList)
    setNewJob(NewList)
    handleClose()
  }
  const openPopup = (id) => {
    let NewList = newJob.filter((row) => {
      return row.id === id
    });
    setshowPopup(true)
    setObj(NewList[0])
    setID(id)
  }
  const search = (data) => {
    return data.filter((row) => row.lookingFor.toUpperCase().indexOf(searchValue) > -1 ||
      row.experience.toUpperCase().indexOf(searchValue) > -1
    )
  }
  return (
    <>
      <div className="container ">

        <div className="row">
          <div className="col-md-12 text-danger">
            <div className="row">
              <div className="col-lg-2 "> <h4>JOBS LIST</h4></div>
              <div className="col-lg-7 "> <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)} /></div>

              <div className="col-lg-3 ">
                <span className="p-3"><Badge badgeContent={Notification} color="primary"  >
                  <BellIcon />
                </Badge></span>

                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={() => openPopup(0)}
                >
                  Add New
                </button></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12"><DataTable openPopup={(id) => openPopup(id)} deleteRecord={(id) => deleteRecord(id)}
            data={search(newJob)} /></div>
        </div>


      </div>
      {
        showPopup && <AddNewJob
          obj={obj}
          onClose={handleClose}
          onSave={(obj) => handleSave(obj)}
          id={id}
        />
      }
    </>
  )
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      notificationAction: notificationAction,
    },
    dispatch,
  )
}
export default connect(null, matchDispatchToProps)(JobTable)










