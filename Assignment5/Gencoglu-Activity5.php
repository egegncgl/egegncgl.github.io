<!DOCTYPE html>
<html lang="en">
<!--
  Ege GENÇOĞLU 18050111028
-->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activity5</title>
    <link rel="stylesheet" type="text/css" href="Gencoglu-Activity5.css">
</head>

<body>

    <form action="Gencoglu-Activity5.php" method="post">

        <h1>Currency Converter</h1> <br>
        <div>
            <label>From:</label>
            <input type="text" step="0.01" name="amount" value="<?php
                                                                $rates = array(
                                                                    "USD/CAD" => 1.25,
                                                                    "CAD/USD" => 0.80,
                                                                    "USD/EUR" => 0.90,
                                                                    "EUR/USD" => 1.11,
                                                                    "EUR/CAD" => 1.50,
                                                                    "CAD/EUR" => 0.67,
                                                                    "USD/USD" => 1,
                                                                    "CAD/CAD" => 1,
                                                                    "EUR/EUR" => 1,
                                                                );
                                                                if (isset($_POST['convert'])) {
                                                                    $from_currency = $_POST['from_currency'];
                                                                    $to_currency = $_POST['to_currency'];
                                                                    $amount = $_POST['amount'];
                                                                    $rate = $rates["$from_currency/$to_currency"];
                                                                    $converted_amount = $rate * $amount;
                                                                    echo $amount;
                                                                }
                                                                ?>">
            <label>Currency:</label>
            <select id="from_currency" name="from_currency">
                <option value="">select currency</option>
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">Euro</option>
            </select>
        </div>
        <div>
            <label>To:</label>
            <input type="text" name="converted_amount" step="0.01" id="converted_amount" value="<?php
                                                                                                    $rates = array(
                                                                                                        "USD/CAD" => 1.36,
                                                                                                        "CAD/USD" => 0.74,
                                                                                                        "USD/EUR" => 0.91,
                                                                                                        "EUR/USD" => 1.10,
                                                                                                        "EUR/CAD" => 1.47,
                                                                                                        "CAD/EUR" => 0.67,
                                                                                                        "USD/USD" => 1,
                                                                                                        "CAD/CAD" => 1,
                                                                                                        "EUR/EUR" => 1
                                                                                                    );
                                                                                                    if (isset($_POST['convert'])) {
                                                                                                        $from_currency = $_POST['from_currency'];
                                                                                                        $to_currency = $_POST['to_currency'];
                                                                                                        $amount = $_POST['amount'];
                                                                                                        $rate = $rates["$from_currency/$to_currency"];
                                                                                                        $converted_amount = $rate * $amount;
                                                                                                        echo $converted_amount;
                                                                                                    }
                                                                                                    ?>">
            <label>Currency:</label>
            <select id="to_currency" name="to_currency">
                <option value="">select currency</option>
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">Euro</option>
            </select>
        </div>

        <div>
            <input type="submit" value="Convert" name="convert" class="button">
        </div>
    </form>
    <h3>Ege GENÇOĞLU 18050111028</h3>

</body>

</html>
