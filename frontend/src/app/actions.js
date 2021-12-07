import { createAction } from "@reduxjs/toolkit";

export const loginAction = createAction("LOGIN");
export const logoutAction = createAction("LOGOUT");
export const registerAction = createAction("REGISTER");
export const findRideAction = createAction("FIND_RIDES");
export const bookRideAction = createAction("BOOK_RIDE");
export const trackRideAction = createAction("TRACK_RIDE");
export const startRideAction = createAction("START_RIDE");
export const fetchOwnerCarsAction = createAction("FETCH_OWNER_CARS");
export const addUserCarAction = createAction("ADD_OWNER_CAR");
export const deleteUserCarAction = createAction("DELETE_OWNER_CAR");
export const getAllBookingsAction = createAction("GET_ALL_USER_BOOKINGS");
export const loadAllUsersAction = createAction("LOAD_ALL_USERS");
export const updateUserAction = createAction("UPDATE_USER");
export const deleteUserAction = createAction("DELETE_USER");
export const loadAllTripsAction = createAction("LOAD_ALL_TRIPS");
export const loadAllBillingsAction = createAction("LOAD_ALL_BILLINGS");
export const loadAllCarsAction = createAction("LOAD_ALL_CARS");
export const updateCarAction = createAction("UPDATE_CAR");
export const deleteCarAction = createAction("DELETE_CAR");
export const updateUserProfileAction = createAction("UPDATE_USER_PROFILE");
export const fetchUserProfileAction = createAction("FETCH_USER_PROFILE");
