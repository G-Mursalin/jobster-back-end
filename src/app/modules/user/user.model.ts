import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import validator from 'validator';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<IUser, UserModel>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            lowercase: true,
            validate: {
                validator: (value: string) => value.trim().length !== 0,
                message: 'Name must not be empty or whitespace only',
            },
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            validate: {
                validator: (value: string) => validator.isEmail(value),
                message: '{VALUE} is not a valid email',
            },
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            validate: {
                validator: (value: string) => value.length >= 5,
                message: 'Password must be at least 5 characters long',
            },
        },
        location: { type: String, default: '' },
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

// Hash password while saving to database
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(
        this.password,
        Number(config.bcrypt_salt),
    );
    next();
});

//  Check Password is correct
userSchema.statics.isPasswordMatched = async function (
    passwordFromReq: string,
    passwordInDB: string,
) {
    return await bcrypt.compare(passwordFromReq, passwordInDB);
};

// Create a Model
export const User = model<IUser, UserModel>('User', userSchema);
