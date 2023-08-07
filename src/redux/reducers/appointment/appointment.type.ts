export type AppointmentState = {
    _id: string
    name: string
    address: string
    phoneNumber: string
    timeOpen: string
    timeClose: string
    date: { [date: string]: string[] } // sử dụng kiểu { [key: string]: value } để đại diện cho một đối tượng với thuộc tính là chuỗi và giá trị là một mảng chuỗi
    description: string
    price: number
}
