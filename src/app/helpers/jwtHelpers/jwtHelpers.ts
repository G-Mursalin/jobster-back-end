import jwt, { JwtPayload } from 'jsonwebtoken';

const createJWTToken = (
    jwtPayload: { id: string; email: string; name: string },
    secret: string,
    expiresIn: string,
) => {
    return jwt.sign(jwtPayload, secret, {
        expiresIn,
    });
};

const verifyJWTToken = (token: string, secret: string) => {
    return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = { createJWTToken, verifyJWTToken };
