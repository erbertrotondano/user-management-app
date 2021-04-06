import React from 'react'
import UserItem from './UserItem'
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

import usersData from './UsersData'
import CIcon from '@coreui/icons-react'
const users = [
	{
		id: 1,
		name: 'Erbert',
		status: 'active'
	},{
		id: 2,
		name: 'Erick',
		status: 'active'
	},{
		id: 3,
		name: 'Viviane',
		status: 'active'
	}
]
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
	return (
		<div> 
			<CCard>
            <CCardHeader>
              Users
            </CCardHeader>

            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
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