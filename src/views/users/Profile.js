import React from 'react'
import { useState, useEffect } from 'react';
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
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import usersData from './UsersData'

const Profile = ({match}) => {
	const userSearchResult = usersData.find( user => user.id.toString() === match.params.id)
  	const [user, setUser] = useState(userSearchResult)
	return (
		<div>
			<CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Profile	
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="username" >Username *</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="username" name="username" value={user ? user.username : ''}/>
                    <CFormText>Choose your username</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="firstname">Full Name *</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="firstname" name="firstname" value={user ? user.firstname : ''} placeholder="First Name"/>
                    <CFormText>Enter your first name</CFormText>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="lastname" name="lastname" value={user ? user.lastname : ''} placeholder="Last Name"/>
                    <CFormText>Now your last name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="status">Profile</CLabel>
                  </CCol>
                  <CCol xs="12" md="2">
                    <CSelect custom name="status" id="status">
                      <option value="guest">Guest</option>
                      <option value="member">Member</option>
                      <option value="staff">Staff</option>
                      <option value="admin">Admin</option>
                    </CSelect>
                  </CCol>
                  <CCol md="1 offset-1">
                    <CLabel htmlFor="company">Company</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CSelect custom name="status" id="status">
                      <option value="0">Company 1</option>
                      <option value="1">Company 2</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
	            <div className="float-right">
	              <CButton className="mx-2" type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Cancel</CButton>
	              <CButton className="mx-2" type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Save</CButton>
	            </div>
            </CCardFooter>
          </CCard>
        </CCol>
		</div>
	)
}

export default Profile