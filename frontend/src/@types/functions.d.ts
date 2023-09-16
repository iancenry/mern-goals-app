import { IUser, IUserLogin } from "./redux"

type Register = (userData: IUserRegistration) => Promise<IUser>
type Login = (userData: IUserLogin) => Promise<IUser>
