function Test() {
  const arr = [
    {
      name: "bujji",
      lastname: "gaadu",
      age: 69,
      dob: 8008,
    },
    {
      name: "chennai",
      lastname: "flash",
      age: 420,
      dob: 800813,
    },
    {
      name: "made",
      lastname: "in",
      age: 96,
      dob: 8008135,
    },
    {
      name: "made",
      lastname: "in",
      age: 96,
      dob: 8008335,
    },
  ];

  console.log(arr, "original");
  const indx = arr.findIndex((element) => element.name === "made");
  arr[indx].age = 40;
  console.log(arr, "updated");

  return <div>Test</div>;
}

export default Test;
