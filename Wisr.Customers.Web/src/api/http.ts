import { CustomerResponse } from "./customer";

export const getCustomer = () => {
  return httpFetch(null, () => customer);
};

export const updateCustomer = (updates: { firstName: string; lastName: string }) => {
  return httpFetch(updates, (u) => {
    customer.firstName = u.firstName;
    customer.lastName = u.lastName;

    return customer;
  });
};

function httpFetch<R, T>(request: R, response: (d: R) => T): Promise<T> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.9) {
        reject("500 Unexpected server error");
      }
      else {
        const result = response(request);
        resolve(result);
      }
    }, 300)
  );
}

var customer: CustomerResponse = { id: 5433, firstName: "Jay", lastName: "Doe", accounts: [
  { name: "Jay Doe", provider: "Visa", balance: 1000 },
  { name: "Jay Doe & Day Joe", provider: "Mastercard", balance: 2000 }
] };