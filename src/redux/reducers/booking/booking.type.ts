export type BookingState = {
    _id: string
    appointmentId: string
    userBookingId: string
    date: string
    time: string
    status: string
    PrintCard: boolean
    address: string
    username: string
    email: string
    total: number
    phoneNumber: string
}

export type MyBookingState = {
    PrintCard: boolean
    address: string
    appointment: string
    date: string
    email: string
    phoneNumber: string
    status: string
    time: string
    total: string
    userBooking: string
    _id: string
}

export type CreateBookingPayload = {
    appointmentId: string
    userBookingId: string
    date: string
    time: string
    PrintCard: boolean
    address: string
    username: string
    email: string
    total: number
    phoneNumber: string
}
