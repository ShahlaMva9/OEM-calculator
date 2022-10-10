// const itemList = document.getElementById("item-list");
// const addBtn = document.getElementById("add-btn");
// import productObj from "./product.js";
// export function showProduct() {
//   products.forEach((product) => {
//     const html = `
//           <tr>
//                     <td>${product.id}</td>
//                     <td class="name-value">${product.name}</td>
//                     <td class="price-value">${product.price} $</td>
//                     <td class="text-right">
//                       <button
//                         type="submit"
//                         class="operation-btn btn btn-warning btn-sm"
//                       >
//                         <i class="far fa-edit"></i>
//                       </button>
//                     </td>
//                   </tr>
//           `;

//     itemList.insertAdjacentHTML("beforeend", html);
//     return itemList;
//   });
// }

// function createOperationBtns() {
//   addBtn.style.display = "none";
//   const html = `
//       <button type="submit" class="update-data btn btn-warning btn-sm">
//       <i class="far fa-edit"></i>
//       Save Changes
//     </button>
//     <button type="submit" class="btn btn-danger btn-sm">
//       <i class="fas fa-times"></i>
//       Delete
//     </button>
//     <button type="submit" class="btn btn-secondary btn-sm">
//       <i class="fas fa-arrow-circle-left"></i>
//       Cancel
//     </button>
//       `;
//   form.insertAdjacentHTML("beforeend", html);
// }

// export default {
//   showProduct,
//   createOperationBtns,
// };
