<?php
    // include the file we just wrote - connect
     // like a JS import statement

    $result = [];

    function getAllCars($conn)
    {
        $query = 'SELECT * FROM minis';

        $runQuery = $conn->query($query);

        while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo(json_encode($result));
    }

    function getSingleCar($conn, $target)
    {
        $query = 'SELECT * FROM minis WHERE id=' . $target . '';

        $runQuery = $conn->query($query);

        while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo(json_encode($result));
    }
