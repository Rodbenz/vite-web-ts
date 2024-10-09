import React from "react";

const person = {
  name: 'John',
  age: 21,
  isSingle: true,
}
// map type
type MyRecord = {
  [key: string]: number;
}
// Utility type Partial
type Task = {
  title: string;
  status: "Completed" | "Todo";
}
// Utility type required
type Person = {
  name: string;
  age?: number;
}
//  Utility type Pick
type Address = {
  province: string;
  country: string;
  postalCode: number;
}

//  Utility type NonNullable
type Province = string | undefined | null


export default function About() {

  function prinInfo<TObject>(object: TObject, key: keyof TObject) {
    console.log(`${String(key)} ${object[key]}`);
  }
  // map type
  const data: MyRecord = {
    id: 1,
    age: 21,
    //...other properties
  }
  // Utility type Partial
  const task: Partial<Task> = {
    title: 'Task Title'
    //...other properties
  }
  // Utility type Required
  const testPerson: Required<Person> = {
    name: 'Kerkrit',
    age: 21,
    //...other properties
  }
  //  Utility type Pick
  const address: Pick<Address, "province"> = {
    province: 'Bangkok'
  }
  //  Utility type Record
  const record: Record<string, number> = {
    age: 21,
    age2: 30,
  }
  //  Utility type NonNullable
  const province: NonNullable<Province> = 'Bangkok';
  province.toUpperCase()

  //  Utility type Parameters
  type processDataParameters = Parameters<typeof processData>;
  function processData(data: string, limit: number) {
    console.log(data, limit)
  }

  //  Utility type ReturnType
  type CalculateAreaReturnType = ReturnType<typeof calculateArea>;
  const calculateArea = (width: number, height: number) => {
    return width * height;
  }


  React.useEffect(() => {
    prinInfo(person, 'name');
    prinInfo(person, 'age');
    prinInfo(person, 'isSingle');
    prinInfo({ ...person, ...{ type: "card" } }, "type")
    // ...other properties
    processData("person", 10)
  }, []);

  return (
    <div className="py-32 px-20">
      <label htmlFor="" className="text-black">About</label>
      <Test />
    </div>
  )
}

interface Transaction {
  title: string;
  amount: number;
  type: "deposit" | "withdrawal";
}

const transactionList: Transaction[] = []

function Test() {
  const filterTransactionByType = (type: Transaction['type']) => {
    return transactionList.filter((transactions) => transactions.type === type)
  }

  const getTotalByType = (type: Transaction['type']) => {
    let total = 0;
    for(const transaction of filterTransactionByType(type)){
      total += transaction.amount;
    }
    return total;
  }

  const getTotalBalance = () =>{
    return  getTotalByType("deposit") - getTotalByType("withdrawal");
  }


  React.useEffect(() => {
    transactionList.push({ title: "แม่ให้", amount: 100, type: "deposit" })
    transactionList.push({ title: "เก็บได้", amount: 50, type: "withdrawal" })
    transactionList.push({ title: "ซื้อหนังสือ", amount: 20, type: "withdrawal" })
  }, [])

  React.useEffect(() => {
    console.log('Total fo deposit', getTotalByType("deposit"));
    console.log('Total fo withdrawal', getTotalByType("withdrawal"));
    console.log('TotalBalance', getTotalBalance());

  }, [transactionList])
  return (
    <></>
  )
}
