import { User } from "../types/User";

type Error = {
    [key: string]: string;
};

export const validate = (data: User) => {
const errors: Error = {};

if(!data.name) {
    errors['name'] = "O nome e obrigatorio"
}

return errors;
}