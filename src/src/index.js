export default {
  async fetch(request) {
    return new Response(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Convert & Cook</title>
        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #fff8f0;
            color: #222;
            text-align: center;
          }

          header {
            background: #d35400;
            color: white;
            padding: 25px 15px;
          }

          h1 {
            margin: 0;
            font-size: 36px;
          }

          .container {
            max-width: 700px;
            margin: 40px auto;
            padding: 20px;
          }

          .card {
            background: white;
            padding: 30px;
            border-radius: 18px;
            box-shadow: 0 5px 20px rgba(0,0,0,.12);
          }

          input {
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 10px;
            font-size: 18px;
          }

          button {
            width: 100%;
            padding: 15px;
            margin-top: 10px;
            border: none;
            border-radius: 10px;
            background: #d35400;
            color: white;
            font-size: 18px;
            cursor: pointer;
          }

          button:hover {
            background: #a94000;
          }

          #result {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
          }
        </style>
      </head>

      <body>
        <header>
          <h1>🍳 Convert & Cook</h1>
          <p>Your simple kitchen conversion tool</p>
        </header>

        <div class="container">
          <div class="card">
            <h2>Kitchen Converter</h2>

            <input id="amount" type="number" placeholder="Enter amount">

            <input id="conversion" type="text"
              placeholder="Example: cups to tablespoons">

            <button onclick="convert()">Convert</button>

            <div id="result"></div>
          </div>
        </div>

        <script>
          function convert() {
            const amount = Number(document.getElementById("amount").value);
            const conversion =
              document.getElementById("conversion").value.toLowerCase();

            let result = "";

            if (conversion.includes("cup") &&
                conversion.includes("tablespoon")) {
              result = amount + " cup(s) = " + (amount * 16) +
                " tablespoon(s)";
            } else if (conversion.includes("tablespoon") &&
                       conversion.includes("teaspoon")) {
              result = amount + " tablespoon(s) = " + (amount * 3) +
                " teaspoon(s)";
            } else if (conversion.includes("cup") &&
                       conversion.includes("ounce")) {
              result = amount + " cup(s) = " + (amount * 8) +
                " fluid ounce(s)";
            } else {
              result = "Try: cups to tablespoons, tablespoons to teaspoons, or cups to ounces.";
            }

            document.getElementById("result").textContent = result;
          }
        </script>
      </body>
      </html>
    `, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
