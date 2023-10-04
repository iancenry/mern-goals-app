import { IGoal, IUser, IUserLogin } from "./redux"

type Register = (userData: IUserRegistration) => Promise<IUser>
type Login = (userData: IUserLogin) => Promise<IUser>
type Goal = (userData: IGoal, token: string) => Promise<IGoal>
