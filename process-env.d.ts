declare namespace NodeJS {
    export type ProcessEnv = {
        NODE_ENV: string;
        PORT: number;
        DATABASE_URL: string;
        BCRYPT_SALT: number;
        JWT_ACCESS_TOKEN_SECRET: string;
        JWT_ACCESS_TOKEN_EXPIRES_IN: string;
    };
}
