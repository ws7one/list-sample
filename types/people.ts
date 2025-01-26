import { faker } from "@faker-js/faker";

export interface People {
  id: string;
  name: string;
  age: number;
  date_of_birth: string;
  employed: boolean;
  locality: string;
  number_of_guests: number;
  address: string;
}

export const mockPeople = (count: number = 10): People[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    age: Math.floor(faker.number.int({ min: 18, max: 80 })),
    date_of_birth: faker.date.past().toISOString().split("T")[0],
    employed: faker.datatype.boolean(),
    locality: faker.address.city(),
    number_of_guests: faker.number.int({ min: 1, max: 10 }),
    address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
  }));
};
