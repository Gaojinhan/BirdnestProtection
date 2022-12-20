export interface Props{
    title:string
}

export type violationsInfo = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    createdDt: string,
    email: string
}

export type violationsInfoList = [
    {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        createdDt: string,
        email: string
    },
    {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        createdDt: string,
        email: string
    }
]