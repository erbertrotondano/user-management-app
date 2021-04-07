import React from 'react'
import UserItem from './UserItem'
import { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
  CDataTable,
  CBadge
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import { FaFilter } from 'react-icons/fa';
import usersData from './UsersData'
import CIcon from '@coreui/icons-react'

const fields = ['name', 'username', 'profile' ,'status', 'actions']
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}


const ListUsers = () => {

  const [filter, setFilter] = useState(
    {
      isActive: true,
      status: 'Active'
    }
  )
  // Turning usersData into state
  const [users, setUsers] = useState(usersData)

  // Turn on and off the filter
  const toggleFilter = (e) => {
    if(filter.isActive){
      console.log(e)
      setFilter({...filter, isActive: false})  
      setUsers(users.filter(user => user.status === filter.status))
    } else {
      setFilter({...filter, isActive: true})  
      setUsers(usersData)
    }
  }
  // Handle the filter change
  const changeFilter = (e) => {
    setFilter({...filter, status: e.target.value})
  }

	return (
		<div> 
			<CCard>
            <CCardHeader>
              <CRow style={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <CCol md="2">
                  <CButton block color="warning">+Add</CButton>
                </CCol>
                <CCol md="1" className="offset-1 text-right"> 
                  Status
                </CCol>
                <CCol md="2">
                  <CSelect custom name="status" id="status" onChange={changeFilter}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </CSelect>
                </CCol>
                <CCol md="1"> 
                  <FaFilter className={filter.isActive ? "" : "text-warning"} onClick={toggleFilter}/>
                </CCol>
                <CCol md="4">
                  <CInput id="search" name="search" placeholder="Search"/>
                </CCol>
              </CRow>
            </CCardHeader>

            <CCardBody>
            <CDataTable
              items={users}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              column-filter
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
                ,'actions':
                (item) => (
                  <td>
                    <CIcon name="cil-pencil" className="mx-1"/>
                    <CIcon name="cil-x" className="mx-1"/>
                  </td>
                )
              }}
            >

            </CDataTable>
            </CCardBody>
            <CCardFooter>
            </CCardFooter>
          </CCard>
		</div>
	)
}

export default ListUsers