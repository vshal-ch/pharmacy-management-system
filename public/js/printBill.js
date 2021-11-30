const printBtn = document.querySelector(".print");

function startPrint() {
  let data = this.dataset.print;
  let objs = data.split(",");
  makeNewMarkup(objs);
}

function makeNewMarkup(arr) {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bill</title>
        <style>
            *{
                margin: 0;
                padding:0;
                box-sizing: border-box;
            }
    
            h1{
                font-weight: 600;
            }
            body{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2.5rem;
                gap: 2.5rem;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            }
    
            .details{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: 400px;
                list-style: none;
            }
    
            .detail{
                display: flex;
                justify-content: space-between;
            }
        </style>
      </head>
      <body>
        <h1 class="title">Pharmacy Management System</h1>
        <ul class="details">
            <li class="detail">
                <p class="name">Prescription No.</p>
                <p class="ans">${arr[0]}</p>
            </li>
            <li class="detail">
                <p class="name">Customer</p>
                <p class="ans">${arr[1]}</p>
            </li>
            <li class="detail">
                <p class="name">Invoice No.</p>
                <p class="ans">${arr[2]}</p>
            </li>
            <li class="detail">
                <p class="name">Drug</p>
                <p class="ans">${arr[3]}</p>
            </li>
            <li class="detail">
                <p class="name">Strength</p>
                <p class="ans">${arr[4]}</p>
            </li>
            <li class="detail">
                <p class="name">Dose</p>
                <p class="ans">${arr[5]}</p>
            </li>
            <li class="detail">
                <p class="name">Bill</p>
                <p class="ans">${arr[6]}</p>
            </li>
        </ul>
    
        <h5>Total cost 120Rs</h5>
      </body>
    </html>
    
    `;
  let a = window.open("", "", "height=500, width=600");

  a.document.write(html);
  a.document.close();
  a.print();
}

printBtn.addEventListener("click", startPrint);
