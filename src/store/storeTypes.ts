export interface AddNewOffice {
  showAdding: boolean
}

export interface Office {
  address: string
  id: number
  phone: string
  email: string
  isPrimary: boolean
}

export interface Form {
  country: string
  state: string
  code: string
  city: string
  address: string
  address2?: string
  phone?: string
  fax?: string
  email?: string
  officeType?: boolean
}

export interface Offices {
  officesList: Office[]
}

export default interface IStore {
  addNewOffice: AddNewOffice
  offices: Offices
  form: {
    country: string
    state: string
    code: string
    city: string
    address: string
    address2?: string
    phone?: string
    fax?: string
    email?: string
    officeType?: boolean
  }
}
