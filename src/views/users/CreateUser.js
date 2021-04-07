import React from 'react'
import { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CInputRadio,
  CLabel,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import usersData from './UsersData'
import InputMask from 'react-input-mask'

const CreateUser = ({match}) => {
  const userSearchResult = usersData.find( user => user.id.toString() === match.params.id)
  const [showExpireDate, setExpireDateVisibility] = useState(false)
  const [user, setUser] = useState(userSearchResult)
  // to debug: remove
  // useEffect(() => {

  // })
  const handleExpireDateChange = (e) => {
    if(e.target.value === 'yes'){
      setExpireDateVisibility(true)
    } else {
      setExpireDateVisibility(false)
    }
  }
	return (
		<div>
			<CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              User Registry
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="username" >Username *</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="username" name="username"/>
                    <CFormText>Choose your username</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="firstname">Full Name *</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="firstname" name="firstname" placeholder="First Name"/>
                    <CFormText>Enter your first name</CFormText>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="lastname" name="lastname" placeholder="Last Name"/>
                    <CFormText>Now your last name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email">Email Address *</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput type="email" id="email" name="email" placeholder="Enter Email" autoComplete="email"/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="phone">Phone Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <InputMask mask="+99 (99) 99999-9999" className="form-control" placeholder="+00 (00) 00000-0000"/>
                      <CFormText>Enter your phone number</CFormText>
                  </CCol>
                  <CCol md="2">
                    <CLabel htmlFor="mobile">Mobile Number *</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <InputMask mask="+99 (99) 99999-9999" className="form-control" placeholder="+00 (00) 00000-0000"/>
                    <CFormText>Now your mobile number</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput type="password" id="password" name="password" placeholder="Password" autoComplete="new-password" />
                    <CFormText className="help-block">Please enter a complex password</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="confirm-password">Confirm  Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" autoComplete="new-password" />
                    <CFormText className="help-block">Please be sure that this is the same as above</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Expire</CLabel>
                  </CCol>
                  <CCol md="3" onChange={handleExpireDateChange}>
                    <CFormGroup variant="custom-radio" inline >
                      <CInputRadio custom id="expire-radio1" name="inline-radios" value="yes" />
                      <CLabel variant="custom-checkbox" htmlFor="expire-radio1">Yes</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="expire-radio2" name="inline-radios" value="no" />
                      <CLabel variant="custom-checkbox" htmlFor="expire-radio2">No</CLabel>
                    </CFormGroup>
                  </CCol>
                  <CFormGroup row  className={showExpireDate ? '' : 'd-none'}>
                    <CCol md="4">
                      <CLabel htmlFor="expire-date">Expire date</CLabel>
                    </CCol>
                    <CCol md="8">
                      <CInput type="date" id="expire-date" name="expire-date" />
                    </CCol>
                  </CFormGroup>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="status">Status</CLabel>
                  </CCol>
                  <CCol xs="12" md="2">
                    <CSelect custom name="status" id="status">
                      <option value="0">Active</option>
                      <option value="1">Inactive</option>
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

export default CreateUser