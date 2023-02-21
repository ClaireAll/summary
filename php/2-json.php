<?php
    header("Content-Type:text/html;charset=utf-8");
    $jsonStr = '{"name": "itcast"; "age": "Claire"; "skill": "nothing"}';
    print_r(json_decode($jsonStr));

    echo "<br />";

    $arrayName = array('name' => 'littleFox', 'age' => 13);
    print_r(json_encode($arrayName));

    echo file_get_contents('../2-json.json');
?>