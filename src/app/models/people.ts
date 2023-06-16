export interface People {
  name: string;
  age: number;
  phones: Phone[];
  email: string;
}

export interface Phone {
  type: string;
  number: string;
}
