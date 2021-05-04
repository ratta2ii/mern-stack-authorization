export const getDate = function (dateToParse: any) {
  //const today = new Date();

  const options: any = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return dateToParse.toLocaleDateString("en-US", options);
};

export const getDay = function () {
  const today = new Date();

  const options: any = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

//! Other possible uses for different applications
// export const getDate = function () {

//     const today = new Date();

//     const options: any = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };

//     return today.toLocaleDateString("en-US", options);

// };

// export const getDay = function () {

//     const today = new Date();

//     const options: any = {
//         weekday: "long"
//     };

//     return today.toLocaleDateString("en-US", options);
// };
