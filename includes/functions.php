<?php

    $result = [];

    function getAllCars($conn)
    {
        $query = 'SELECT * FROM minis';

        $runQuery = $conn->query($query);

        while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        echo(json_encode($result));
    }

    function getSingleCar($conn, $target)
    {
        $query = 'SELECT * FROM minis WHERE id=' . $target . '';

        $runQuery = $conn->query($query);

        while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        echo(json_encode($result));
    }
