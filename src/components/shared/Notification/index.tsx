import addNotification from 'react-push-notification'

type NotificationType = {
    title: string
    message: string
    duration?: number
    icon?: string
    native?: boolean
}

const Notification = ({ title, message, duration, icon, native }: NotificationType) => {
    addNotification({
        title,
        message,
        duration,
        icon,
        native
    })
}

export default Notification
