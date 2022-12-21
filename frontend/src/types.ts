export interface Props{
    title:string
}

export interface violationsInfo {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    createdDt: string,
    email: string
}

export interface violationsInfoList {
    violations: violationsInfo[];
}