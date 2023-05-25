export interface User {
    id: number;
    email: string;
    password: string;
    name?:string;
}

export interface CreateUserDto extends Omit<User, 'id'> {
    
}