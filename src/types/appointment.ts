export type Appointment = {
    address: string
    createdAt: string
    date: {
        day: string
    }
    deletedAt: null
    description: string
    doctor: {
        address: string
        avatar: string
        email: string
        evaluate: number
        experience: number
        phoneNumber: string
        specialized: string
        username: string
    }
    name: string
    phoneNumber: string
    status: string
    timeClose: string
    timeOpen: string
    updatedAt: string
    price: number
    _id: string
}
