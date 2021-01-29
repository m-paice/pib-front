export enum types {
    SHOW_NOTIFICATION = "@notification/SHOW_NOTIFICATION",
    SHOW_NOTIFICATION_SUCCESS = "@notification/SHOW_NOTIFICATION_SUCCESS",

    HIDE_NOTIFICATION = "@notification/HIDE_NOTIFICATION",
    HIDE_NOTIFICATION_SUCCESS = "@notification/HIDE_NOTIFICATION_SUCCESS",
}

export interface StateNotification {
    show: boolean;
}
