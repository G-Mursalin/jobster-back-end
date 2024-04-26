/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    password: string;
    location: string;
}

export interface UserModel extends Model<IUser> {
    isPasswordMatched(
        passwordFromReq: string,
        passwordInDB: string,
    ): Promise<boolean>;
}
